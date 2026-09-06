export type FieldType = "text" | "email" | "tel" | "number" | "date" | "textarea" | "select";

export type Field = {
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  full?: boolean;
};

export type RosterGroup = {
  key: string;
  title: string;
  description?: string;
  count: number;
  minFilled: number;
  columns: { name: string; label: string; type?: FieldType; options?: string[] }[];
};

export type RegistrationConfig = {
  slug: string;
  title: string;
  short: string;
  description: string;
  intro: string;
  category: string;
  capacity?: string;
  sections: { title: string; fields: Field[] }[];
  rosters?: RosterGroup[];
};

const contactSection = (label: string, orgField: Field): { title: string; fields: Field[] } => ({
  title: "Contact details",
  fields: [
    orgField,
    { name: "applicant_name", label, required: true },
    { name: "role", label: "Position / role", required: true },
    { name: "phone", label: "Phone number", type: "tel", required: true },
    { name: "email", label: "Email address", type: "email", required: true },
    { name: "address", label: "Address", full: true },
  ],
});

export const registrations: RegistrationConfig[] = [
  {
    slug: "club",
    title: "Club / Team Registration",
    short: "Club Registration",
    description: "Register a football or multi-sport club with its full playing squad, management staff and board.",
    intro:
      "Complete the club details first, then fill the player, management and board lists. You may leave unused slots empty — only the first player row is compulsory.",
    category: "club",
    sections: [
      {
        title: "Club information",
        fields: [
          { name: "organisation", label: "Club / team name", required: true },
          { name: "sport", label: "Sport", type: "select", required: true, options: ["Football", "Basketball", "Handball", "Volleyball", "Athletics", "Multi-sport"] },
          { name: "year_founded", label: "Year founded" },
          { name: "state", label: "State", required: true },
          { name: "lga", label: "Local Government Area" },
          { name: "home_ground", label: "Home ground / training venue", full: true },
          { name: "affiliation", label: "League / association affiliation", full: true },
        ],
      },
      contactSection("Club representative (full name)", {
        name: "rep_title",
        label: "Representative title (e.g. Secretary, Manager)",
      }),
      {
        title: "Additional information",
        fields: [
          { name: "notes", label: "Anything else we should know", type: "textarea", full: true },
        ],
      },
    ],
    rosters: [
      {
        key: "players",
        title: "Players (30 slots)",
        description: "Add up to 30 players. At least one player is required.",
        count: 30,
        minFilled: 1,
        columns: [
          { name: "name", label: "Player full name" },
          { name: "dob", label: "Date of birth", type: "date" },
          { name: "position", label: "Position" },
        ],
      },
      {
        key: "management",
        title: "Management staff (5 slots)",
        count: 5,
        minFilled: 0,
        columns: [
          { name: "name", label: "Full name" },
          { name: "role", label: "Role" },
          { name: "phone", label: "Phone", type: "tel" },
        ],
      },
      {
        key: "board",
        title: "Board members (5 slots)",
        count: 5,
        minFilled: 0,
        columns: [
          { name: "name", label: "Full name" },
          { name: "role", label: "Board position" },
          { name: "phone", label: "Phone", type: "tel" },
        ],
      },
    ],
  },
  {
    slug: "basketball",
    title: "Basketball Club Registration",
    short: "Basketball Clubs",
    description: "Registration for basketball clubs taking part in the competition.",
    intro: "Registration is limited to 6 basketball clubs. Slots are allocated in the order registrations are received.",
    category: "basketball",
    capacity: "6 clubs",
    sections: [
      {
        title: "Club information",
        fields: [
          { name: "organisation", label: "Basketball club name", required: true },
          { name: "category", label: "Category", type: "select", required: true, options: ["Male", "Female", "Mixed", "Youth"] },
          { name: "state", label: "State", required: true },
          { name: "home_court", label: "Home court", full: true },
          { name: "squad_size", label: "Number of players in squad", type: "number" },
        ],
      },
      contactSection("Club representative (full name)", { name: "coach_name", label: "Head coach" }),
      {
        title: "Additional information",
        fields: [{ name: "notes", label: "Additional notes", type: "textarea", full: true }],
      },
    ],
    rosters: [
      {
        key: "players",
        title: "Squad list (15 slots)",
        count: 15,
        minFilled: 1,
        columns: [
          { name: "name", label: "Player full name" },
          { name: "position", label: "Position" },
          { name: "dob", label: "Date of birth", type: "date" },
        ],
      },
    ],
  },
  {
    slug: "athlete",
    title: "Athlete Registration",
    short: "Athlete Registration",
    description: "Individual athlete registration for development programmes and competitions.",
    intro: "Registration is open to 100 athletes.",
    category: "athlete",
    capacity: "100 athletes",
    sections: [
      {
        title: "Athlete details",
        fields: [
          { name: "applicant_name", label: "Full name", required: true },
          { name: "dob", label: "Date of birth", type: "date", required: true },
          { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"], required: true },
          { name: "sport", label: "Sport / discipline", required: true },
          { name: "organisation", label: "Club, school or team" },
          { name: "state", label: "State", required: true },
          { name: "phone", label: "Phone number", type: "tel", required: true },
          { name: "email", label: "Email address", type: "email", required: true },
          { name: "guardian", label: "Parent / guardian name (if under 18)", full: true },
          { name: "guardian_phone", label: "Parent / guardian phone", type: "tel" },
          { name: "experience", label: "Sporting experience and achievements", type: "textarea", full: true },
        ],
      },
    ],
  },
  {
    slug: "marathon",
    title: "Marathon Registration",
    short: "Marathon",
    description: "Road race registration for runners of all categories.",
    intro: "Registration is open to 200 participants.",
    category: "marathon",
    capacity: "200 participants",
    sections: [
      {
        title: "Participant details",
        fields: [
          { name: "applicant_name", label: "Full name", required: true },
          { name: "dob", label: "Date of birth", type: "date", required: true },
          { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"], required: true },
          { name: "race_category", label: "Race category", type: "select", required: true, options: ["5km", "10km", "21km (Half marathon)", "42km (Full marathon)"] },
          { name: "shirt_size", label: "Shirt size", type: "select", options: ["S", "M", "L", "XL", "XXL"] },
          { name: "organisation", label: "Club / team (optional)" },
          { name: "state", label: "State", required: true },
          { name: "phone", label: "Phone number", type: "tel", required: true },
          { name: "email", label: "Email address", type: "email", required: true },
          { name: "emergency_contact", label: "Emergency contact name", required: true },
          { name: "emergency_phone", label: "Emergency contact phone", type: "tel", required: true },
          { name: "medical", label: "Medical conditions we should know about", type: "textarea", full: true },
        ],
      },
    ],
  },
  {
    slug: "cycling",
    title: "Cycling Registration",
    short: "Cycling",
    description: "Registration for cycling events and road races.",
    intro: "Registration is open to 100 cyclists.",
    category: "cycling",
    capacity: "100 participants",
    sections: [
      {
        title: "Cyclist details",
        fields: [
          { name: "applicant_name", label: "Full name", required: true },
          { name: "dob", label: "Date of birth", type: "date", required: true },
          { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"], required: true },
          { name: "race_category", label: "Category", type: "select", required: true, options: ["Junior", "Senior", "Masters", "Amateur"] },
          { name: "bike_type", label: "Bicycle type", type: "select", options: ["Road", "Mountain", "Hybrid", "Other"] },
          { name: "organisation", label: "Club / team (optional)" },
          { name: "state", label: "State", required: true },
          { name: "phone", label: "Phone number", type: "tel", required: true },
          { name: "email", label: "Email address", type: "email", required: true },
          { name: "emergency_contact", label: "Emergency contact name", required: true },
          { name: "emergency_phone", label: "Emergency contact phone", type: "tel", required: true },
          { name: "medical", label: "Medical conditions we should know about", type: "textarea", full: true },
        ],
      },
    ],
  },
  {
    slug: "individual-sport",
    title: "Individual Sports Registration",
    short: "Individual Sports",
    description: "Table tennis, boxing, badminton, athletics and other individual disciplines.",
    intro: "Choose your sport and complete your details. More sports can be added as programmes expand.",
    category: "individual-sport",
    sections: [
      {
        title: "Participant details",
        fields: [
          {
            name: "sport",
            label: "Sport",
            type: "select",
            required: true,
            options: ["Table Tennis", "Boxing", "Badminton", "Athletics", "Taekwondo", "Chess", "Swimming", "Wrestling", "Weightlifting", "Other"],
          },
          { name: "other_sport", label: "If other, name the sport" },
          { name: "applicant_name", label: "Full name", required: true },
          { name: "dob", label: "Date of birth", type: "date", required: true },
          { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"], required: true },
          { name: "organisation", label: "Club, school or team" },
          { name: "state", label: "State", required: true },
          { name: "phone", label: "Phone number", type: "tel", required: true },
          { name: "email", label: "Email address", type: "email", required: true },
          { name: "experience", label: "Experience level and achievements", type: "textarea", full: true },
        ],
      },
    ],
  },
  {
    slug: "school-sports",
    title: "School Sports Registration",
    short: "School Sports",
    description: "For primary and secondary schools entering pupils into school sports programmes.",
    intro:
      "Register your school and the sports it wishes to enter. Add participating pupils in the list below — leave unused rows empty.",
    category: "school-sports",
    sections: [
      {
        title: "School information",
        fields: [
          { name: "organisation", label: "School name", required: true },
          { name: "school_type", label: "School type", type: "select", required: true, options: ["Primary", "Junior Secondary", "Senior Secondary", "Combined"] },
          { name: "state", label: "State", required: true },
          { name: "lga", label: "Local Government Area" },
          { name: "sports", label: "Sports the school is entering (e.g. football, athletics, table tennis)", type: "textarea", full: true, required: true },
          { name: "team_count", label: "Number of teams entering", type: "number" },
        ],
      },
      contactSection("Contact person (full name)", { name: "principal", label: "Principal / Head teacher" }),
      {
        title: "Additional information",
        fields: [{ name: "notes", label: "Additional notes", type: "textarea", full: true }],
      },
    ],
    rosters: [
      {
        key: "pupils",
        title: "Participating pupils (20 slots)",
        count: 20,
        minFilled: 0,
        columns: [
          { name: "name", label: "Pupil full name" },
          { name: "class", label: "Class" },
          { name: "sport", label: "Sport / event" },
        ],
      },
    ],
  },
];

export function getRegistration(slug: string) {
  return registrations.find((r) => r.slug === slug);
}

export const services = {
  statement:
    "At ISAKA SPORTS GLOBAL VENTURES LIMITED, we develop and organise sports programmes for States, Local Governments and schools.",
  areas: [
    { title: "Sports programme development", detail: "Designing structured sports programmes from concept to delivery." },
    { title: "Sports event organisation", detail: "Planning and running competitions, tournaments and sporting events." },
    { title: "School sports programmes", detail: "Sports programmes built around primary and secondary school calendars." },
    { title: "Club and athlete development", detail: "Technical development pathways for clubs, teams and individual athletes." },
    { title: "State & Local Government programmes", detail: "Sports development programmes delivered for States and Local Governments." },
    { title: "Football development and coaching", detail: "Grassroots to competitive football coaching and player development." },
    { title: "Multi-sport competitions and events", detail: "Coordination of multi-discipline games and sporting festivals." },
    { title: "Athlete registration and sports administration", detail: "Registration systems, records and day-to-day sports administration." },
  ],
};
