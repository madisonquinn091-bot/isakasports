import heroMedals from "@/assets/hero-medals.jpg.asset.json";
import heroCollage from "@/assets/hero-collage.jpg.asset.json";
import coachPortrait from "@/assets/coach-portrait.jpg.asset.json";
import neplTraining from "@/assets/nepl-training.jpg.asset.json";
import businessExpo from "@/assets/business-expo.jpg.asset.json";
import consultingEvents from "@/assets/consulting-events.jpg.asset.json";
import youthMatches from "@/assets/youth-matches.jpg.asset.json";
import awardsHonour from "@/assets/awards-honour.jpg.asset.json";
import intlSchoolsSoccer from "@/assets/intl-schools-soccer.jpg.asset.json";
import riversAngelsTravel from "@/assets/rivers-angels-travel.jpg.asset.json";
import riversAngelsTeam from "@/assets/rivers-angels-team.jpg.asset.json";
import grassrootsFootball from "@/assets/grassroots-football.jpg.asset.json";
import isakaLogo from "@/assets/isaka-logo.png.asset.json";
import certSportsManagement from "@/assets/cert-sports-management.jpg.asset.json";
import certManagingYouthSports from "@/assets/cert-managing-youth-sports.jpg.asset.json";
import certProfessionalFootballCoach from "@/assets/cert-professional-football-coach.jpg.asset.json";
import certGradeIvCoaching from "@/assets/cert-grade-iv-coaching.jpg.asset.json";
import certTestimonialGradeIv from "@/assets/cert-testimonial-grade-iv.jpg.asset.json";
import certAnalyzeFootball from "@/assets/cert-analyze-football.jpg.asset.json";
import certFootballManager from "@/assets/cert-football-manager.jpg.asset.json";

export const images = {
  heroMedals: heroMedals.url,
  heroCollage: heroCollage.url,
  coachPortrait: coachPortrait.url,
  neplTraining: neplTraining.url,
  businessExpo: businessExpo.url,
  consultingEvents: consultingEvents.url,
  youthMatches: youthMatches.url,
  awardsHonour: awardsHonour.url,
  intlSchoolsSoccer: intlSchoolsSoccer.url,
  riversAngelsTravel: riversAngelsTravel.url,
  riversAngelsTeam: riversAngelsTeam.url,
  grassrootsFootball: grassrootsFootball.url,
  logo: isakaLogo.url,
};

export const company = {
  name: "ISAKA Sports Global Ventures Ltd",
  fullName: "ISAKA Sports Global Ventures Limited",
  rc: "RC-7040519",
  status: "Active",
  incorporated: "04 Jul 2023",
  jurisdiction: "Nigeria",
  address:
    "Yola Street, NNPC Housing Estate, Kachia Road, Kaduna, Kaduna State",
  officers: [
    {
      name: "Iwu Roseline Chisa",
      role: "Person with significant control — 50%",
      detail: "Nationality: Nigeria · Occupation: Business · Appointed on 05 Jul 2023",
    },
    {
      name: "Iwu Benneth Robert",
      role: "Person with significant control — 50%",
      detail: "Nationality: Nigeria · Occupation: Business · Appointed on 05 Jul 2023",
    },
  ],
};

export const coach = {
  name: "Dr. Ben Iwu Robert",
  title: "Executive Sporting Consultant & Professional Football Coach",
  phone: "+234 803 341 8930",
  phoneHref: "tel:+2348033418930",
  email: "benmore67@gmail.com",
  location: "Mende Villa Estate, Maryland, Lagos, Nigeria",
  bio: "Results-driven football coach and innovator holding a Doctor of Football and Entrepreneurship Development Technology. Since 2018, I have served as Head Coach of the NEPL Football Team, consistently preparing and leading the squad to the Nigeria Oil and Gas Industry Games (NOGIG).",
};

export const experience = [
  {
    period: "2018 – till date",
    role: "Head Coach",
    org: "Nigeria Exploration and Production Limited (NEPL)",
    detail:
      "Coached the official NEPL football team, successfully preparing and leading them to the Nigeria Oil and Gas Industry Games (NOGIG) from 2018 to date.",
    image: images.neplTraining,
  },
  {
    period: "2010",
    role: "Football Coordinator",
    org: "Kaduna Refinery",
    detail: "Led team to NNPC Games Victory.",
    image: images.businessExpo,
  },
  {
    period: "Coaching role",
    role: "Football Coordinator",
    org: "Kaduna Refinery Company",
    detail: "Took NNPC to semi-final.",
    image: images.consultingEvents,
  },
  {
    period: "2003–2006",
    role: "Football Coordinator",
    org: "Eleme Petrochemical LTD",
    detail: "Led team to NNPC Games Final.",
    image: images.youthMatches,
  },
];

export const awards = [
  "Led the NEPL football team to the Nigeria Oil and Gas Industry Games (NOGIG) from 2018 to date.",
  "Led team to NNPC Games Victory — Kaduna Refinery, 2010.",
  "Took NNPC to semi-final — Kaduna Refinery Company.",
  "Led team to NNPC Games Final — Eleme Petrochemical LTD, 2003–2006.",
  "Coached the team to win the International Schools Soccer Tournament.",
];

export const certificates = [
  {
    title: "Sports Management Fundamental",
    issuer: "Udemy — Certificate of Completion",
    lines: [
      "Date: March 26, 2026",
      "Instructor: Eric Yeboah · Length: 1 total hour",
      "Awarded to Iwu Benneth Robert",
    ],
    image: certSportsManagement.url,
  },
  {
    title: "Managing Youth Sports",
    issuer: "Udemy — Certificate of Completion",
    lines: [
      "Date: March 26, 2026",
      "Instructor: Eric Yeboah · Length: 2 total hours",
      "Awarded to Iwu Benneth Robert",
    ],
    image: certManagingYouthSports.url,
  },
  {
    title: "Become a Professional Football (Soccer) Coach",
    issuer: "Udemy — Certificate of Completion",
    lines: [
      "Date: Dec. 1, 2024",
      "Instructor: Volodymyr Kartashov · Length: 4 total hours",
      "Awarded to Iwu Benneth Robert",
    ],
    image: certProfessionalFootballCoach.url,
  },
  {
    title: "Grade IV Coaching Certificate (Football)",
    issuer: "Sports Institute of Rivers State, Isaka, Port Harcourt",
    lines: [
      "Date: 22nd November, 1989",
      "Grade: Merit Lower",
      "Awarded to Iwu Benneth Robert",
    ],
    image: certGradeIvCoaching.url,
  },
  {
    title: "Testimonial — Grade IV Coaching Course in Football",
    issuer: "Sports Institute of Rivers State, Isaka, Port Harcourt",
    lines: [
      "Date: 22nd November, 1989",
      "Overall grade: Merit Lower",
      "Awarded to Iwu Bennett Robert",
    ],
    image: certTestimonialGradeIv.url,
  },
  {
    title: "How to Analyze Football (Soccer) – Basics",
    issuer: "Udemy — Certificate of Completion",
    lines: [
      "Date: Dec. 1, 2024",
      "Instructor: Hamza El Kadioui · Length: 2.5 total hours",
      "Awarded to Iwu Benneth Robert",
    ],
    image: certAnalyzeFootball.url,
  },
  {
    title: "Football Manager: become a Master Manager (up to FM24!)",
    issuer: "Udemy — Certificate of Completion",
    lines: [
      "Date: Dec. 1, 2024",
      "Instructor: Master Manager · Length: 4 total hours",
      "Awarded to Iwu Benneth Robert",
    ],
    image: certFootballManager.url,
  },
];

export const education = [
  {
    period: "1989–1990",
    school: "Sports Institute of River State, Isaka",
    detail: "Diploma in Psychology and Football Coaching",
  },
  {
    period: "1990–1991",
    school: "Petroleum Training Institute, P.T.I.",
    detail: "Certificate in Process Engineering",
  },
];

export const gallery = [
  { image: images.heroMedals, caption: "Medal presentation at the youth tournament" },
  { image: images.riversAngelsTravel, caption: "Rivers Angels Football Club — travel and matchday" },
  { image: images.riversAngelsTeam, caption: "Training field to competition stage" },
  { image: images.intlSchoolsSoccer, caption: "Coached the team to win the International Schools Soccer Tournament" },
  { image: images.youthMatches, caption: "Shaping disciplined, skilled young athletes" },
  { image: images.businessExpo, caption: "Professional events and business meetings" },
  { image: images.consultingEvents, caption: "Football teams and events" },
  { image: images.grassrootsFootball, caption: "Grassroots football development" },
  { image: images.awardsHonour, caption: "Awards & Honour" },
  { image: images.neplTraining, caption: "NEPL Football Team — training session" },
  { image: images.heroCollage, caption: "From the training field to the competition stage" },
  { image: images.coachPortrait, caption: "Dr. Ben Iwu Robert" },
];
