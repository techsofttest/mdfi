import { NavigationItem } from "@/components/global/Navbar";
import { WhatWeDoCardItem } from "@/components/home/WhatWeDoSection";
import { FaqItem } from "@/components/home/FaqSection";
import { GalleryItem } from "@/components/home/GallerySection";

export const navigationData: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#why" },
  { label: "Products and Services", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Group of Company", href: "#companies" },
  { label: "Contact Us", href: "#footer-speak-to-team" },
];

export interface PurposeCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const purposeCardsData: PurposeCardItem[] = [
  {
    id: "p1",
    title: "Dignity in Every Choice",
    description: "Recognising people's knowledge and ability to shape their own futures.",
    image: "/about-home/dignity in every choice.png",
  },
  {
    id: "p2",
    title: "Empowered Local Leadership",
    description: "Women coming together to solve local village challenges and make their voices count.",
    image: "/about-home/EMPOWERED LOCAL LEADERSHIP.png",
  },
  {
    id: "p3",
    title: "Strength in Collectives",
    description: "Change grows best when it grows together across peer self-help groups.",
    image: "/about-home/STRENGTH IN COLLECTIVES.png",
  },
  {
    id: "p4",
    title: "Progress that Lasts",
    description: "Sustainable, multi-generational impact across health, nutrition and livelihoods.",
    image: "/about-home/PROGRESS THAT LASTS.png",
  },
];

export const whatWeDoCardsData: WhatWeDoCardItem[] = [
  // {
  //   title: "01 / WELLBEING ✳",
  //   headline: "Health, held in community",
  //   desc: "Knowledge, care and connections that help women and families make informed choices.",
  //   image: "/service/Health, held in community.png",
  //   href: "#connect",
  // },
  {
    title: "02 / LIVELIHOODS ↗",
    headline: "Skills that earn. Dreams that grow.",
    desc: "Learning, tools and peer networks for women to build livelihoods on their own terms.",
    image: "/service/Skills that earn. Dreams that grow.png",
    href: "#connect",
  },
  {
    title: "03 / LEADERSHIP ✳",
    headline: "Her voice. Her village.",
    desc: "Women coming together to solve local challenges and make their voices count.",
    image: "/service/Her voice. Her village.png",
    href: "#connect",
  },
  {
    title: "04 / FINANCIAL AGENCY ₹",
    headline: "Money skills. More choices.",
    desc: "Practical financial knowledge that supports confident, independent decisions.",
    image: "/service/Money skills. More choices.png",
    href: "#connect",
  },
  {
    title: "05 / FOOD & NUTRITION ✿",
    headline: "Wholesome food. Healthier tomorrows.",
    desc: "Shared learning and local resources for stronger nutrition and everyday wellbeing.",
    image: "/service/Wholesome food. Healthier tomorrows.png",
    href: "#connect",
  },
  {
    title: "DIGITAL ACCESS",
    headline: "Connected & confident",
    desc: "Support to use digital tools safely, from communication to everyday finance.",
    image: "/service/Connected & confident.png",
    href: "#connect",
  },
  {
    title: "MDFI AGRO & MARKETING",
    headline: "Land & enterprise",
    desc: "An agricultural and marketing-focused cooperative society creating local opportunities.",
    image: "/service/Land & enterprise.png",
    href: "#companies",
  },
  {
    title: "MDFI FINANCE",
    headline: "Financial inclusion",
    desc: "Making sustainable financial and credit opportunities accessible across families.",
    image: "/service/Financial inclusion.png",
    href: "#companies",
  },
  {
    title: "MDFI GOLD LOAN",
    headline: "Trusted financial support",
    desc: "A dedicated gold loan service within the MDFI ecosystem designed for community trust.",
    image: "/service/Trusted financial support.png",
    href: "#companies",
  },
];

export const faqsData: FaqItem[] = [
  {
    question: "WHY WOMEN’S EMPOWERMENT FOR COMMUNITY DEVELOPMENT?",
    answer:
      "When women have the knowledge, resources and freedom to shape their lives, families and communities grow stronger too. Women’s empowerment means more than access to services. It means having a say in decisions, the confidence to make choices and a fair opportunity to participate in community life and the economy.",
  },
  {
    question: "WHAT ARE THE CORE INTERVENTION PILLARS OF MDFI?",
    answer:
      "Our programme brings together five core pillars: Wellbeing (Health, held in community), Livelihoods (Skills that earn, dreams that grow), Leadership (Her voice, her village), Financial Agency (Money skills, more choices), and Food & Nutrition (Wholesome food, healthier tomorrows).",
  },
  {
    question: "HOW DOES MDFI EMBODY 'LISTEN FIRST. BUILD TOGETHER'?",
    answer:
      "There is no one-size-fits-all path. We begin with people and communities, making progress together one practical step at a time: 01 Listen (make space for communities to identify priorities), 02 Learn (build on local knowledge), 03 Try (turn ideas into practical community actions), and 04 Keep growing (share what works).",
  },
  {
    question: "HOW CAN INDIVIDUALS AND PARTNERS GET INVOLVED?",
    answer:
      "Whether you represent a community collective, self-help group, institutional partner, or wish to support women’s initiatives in Kannur and beyond, reach out via our mobile 92923 23916, landline 0497-2727916, toll-free 1800-233-4335, email info@mdfigroup.in, or visit our registered office at Vijaya Square, 2nd Floor, Thezhukkilpeedika, Edapally-Panvel Highway, Chova PO, Dist. Kannur-670006, Kerala.",
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Community Collective & Village Assembly",
    image: "/images/community-meeting.jpg",
  },
  {
    id: "g2",
    title: "Tailoring & Handloom Livelihood Workshop",
    image: "/images/tailoring-workshop.jpg",
  },
  {
    id: "g3",
    title: "Community Nutrition Garden & Organic Farming",
    image: "/images/community-garden-group.jpg",
  },
  {
    id: "g4",
    title: "SHG Financial Literacy & Savings Circle",
    image: "/images/women-savings-meeting.jpg",
  },
  {
    id: "g5",
    title: "Artisans Craft & Basket Weaving Initiative",
    image: "/images/artisan-sewing.jpg",
  },
  {
    id: "g6",
    title: "Grassroots Field Work & Agricultural Surveys",
    image: "/images/field-work.jpg",
  },
  {
    id: "g7",
    title: "Maternal & Child Healthcare Village Conference",
    image: "/images/village-health-conference.jpg",
  },
  {
    id: "g8",
    title: "Digital Financial Tools & Women Leadership Session",
    image: "/images/women-digital-learning.jpg",
  },
];

