import { useMemo, useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Field, RegistrationConfig } from "@/lib/registration-data";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
}) {
  const id = `f-${field.name}`;
  return (
    <div className={field.full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {field.label}
        {field.required && <span className="ml-1 text-destructive">*</span>}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={id}
          rows={4}
          required={field.required}
          maxLength={2000}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          required={field.required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        >
          <option value="">Select…</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={field.type ?? "text"}
          required={field.required}
          maxLength={200}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
    </div>
  );
}

export function RegistrationForm({ config }: { config: RegistrationConfig }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [rows, setRows] = useState<Record<string, Record<string, string>[]>>(() => {
    const init: Record<string, Record<string, string>[]> = {};
    for (const r of config.rosters ?? []) init[r.key] = Array.from({ length: r.count }, () => ({}));
    return init;
  });
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const allFields = useMemo(() => config.sections.flatMap((s) => s.fields), [config]);

  const set = (name: string, v: string) => setValues((p) => ({ ...p, [name]: v }));
  const setRow = (key: string, i: number, col: string, v: string) =>
    setRows((p) => {
      const next = p[key]!.slice();
      next[i] = { ...next[i], [col]: v };
      return { ...p, [key]: next };
    });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const filled: Record<string, Record<string, string>[]> = {};
    for (const roster of config.rosters ?? []) {
      const list = (rows[roster.key] ?? []).filter((r) =>
        Object.values(r).some((v) => v && v.trim() !== ""),
      );
      if (list.length < roster.minFilled) {
        setError(`Please add at least ${roster.minFilled} entry under "${roster.title}".`);
        return;
      }
      filled[roster.key] = list;
    }

    setStatus("saving");
    const details: Record<string, unknown> = {};
    for (const f of allFields) {
      if (["applicant_name", "email", "phone", "organisation"].includes(f.name)) continue;
      const v = values[f.name]?.trim();
      if (v) details[f.label] = v;
    }
    for (const [k, v] of Object.entries(filled)) details[k] = v;

    const { error: dbError } = await supabase.from("registrations").insert({
      category: config.category,
      event_name: config.title,
      applicant_name: values["applicant_name"]?.trim() ?? "",
      email: values["email"]?.trim() ?? "",
      phone: values["phone"]?.trim() ?? "",
      organisation: values["organisation"]?.trim() ?? null,
      details: details as never,
    });

    if (dbError) {
      setStatus("error");
      setError(
        /full/i.test(dbError.message)
          ? "Registration for this category is already full. Please contact us directly."
          : "We could not submit your registration. Please check your details and try again.",
      );
      return;
    }
    setStatus("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h2 className="mt-4 text-2xl font-bold text-primary">Registration received</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Thank you. Your {config.title.toLowerCase()} has been recorded and our team will
          contact you using the phone number and email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {config.sections.map((section) => (
        <fieldset
          key={section.title}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <legend className="px-2 text-base font-bold text-primary">{section.title}</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {section.fields.map((f) => (
              <FieldInput
                key={f.name}
                field={f}
                value={values[f.name] ?? ""}
                onChange={(v) => set(f.name, v)}
              />
            ))}
          </div>
        </fieldset>
      ))}

      {(config.rosters ?? []).map((roster) => (
        <fieldset
          key={roster.key}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <legend className="px-2 text-base font-bold text-primary">{roster.title}</legend>
          {roster.description && (
            <p className="mt-1 text-sm text-muted-foreground">{roster.description}</p>
          )}
          <div className="mt-5 space-y-4">
            {Array.from({ length: roster.count }).map((_, i) => (
              <div
                key={i}
                className="grid items-end gap-3 rounded-xl border border-border/70 bg-secondary/30 p-4 sm:grid-cols-[2.5rem_1fr_1fr_1fr]"
              >
                <span className="text-sm font-semibold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {roster.columns.map((c) => (
                  <div key={c.name}>
                    <label
                      htmlFor={`${roster.key}-${i}-${c.name}`}
                      className="text-xs font-medium text-muted-foreground"
                    >
                      {c.label}
                    </label>
                    <input
                      id={`${roster.key}-${i}-${c.name}`}
                      type={c.type ?? "text"}
                      maxLength={120}
                      value={rows[roster.key]?.[i]?.[c.name] ?? ""}
                      onChange={(e) => setRow(roster.key, i, c.name, e.target.value)}
                      className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </fieldset>
      ))}

      {error && (
        <p className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "saving"}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "saving" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Submit Registration
      </button>
    </form>
  );
}
