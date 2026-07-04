export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  mainStack: string[]; // the primary technologies to highlight on the detail page
  link: string; // live project URL
  github: string; // client repo URL, or "#" if not public
  accent: string;
  image: string;
  challenges: string[]; // TODO: replace with what you actually ran into
  improvements: string[]; // TODO: replace with your real next steps
};

export const projects: Project[] = [
  {
    slug: "parent-patt",
    title: "Parent Patt",
    category: "Full Stack",
    description:
      "A comprehensive web application designed for parents to manage and monitor their children's daily activities. Features include activity scheduling, progress tracking, notifications, and real-time updates, ensuring parents stay informed and organized.",
    tags: [
      "NextJs",
      "API Integration",
      "Tailwind CSS",
      "Shadcn/UI",
      "Express Js",
      "Mongodb",
    ],
    mainStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://cindychng-web-six.vercel.app",
    github: "#",
    accent: "#06B6D4",
    image: "/images/cindy.png",
    challenges: [
      "Keeping the calendar accurate across timezones — activity dates needed to stay fixed on the day they were scheduled regardless of the parent's device timezone.",
      "Reflecting rescheduled or cancelled sessions consistently across the calendar view and the activity detail modal without them briefly re-appearing after a status change.",
    ],
    improvements: [
      "Add push notifications for upcoming activities instead of relying only on in-app alerts.",
      "Support recurring activity templates so parents don't have to recreate the same weekly session manually.",
    ],
  },
  {
    slug: "cleanbubble",
    title: "Cleanbubble – Cleaning Service Management Platform",
    category: "Full Stack",
    description:
      "A full-stack service booking system enabling users to schedule residential, commercial, and industrial cleaning services with secure payment integration.",
    tags: [
      "Next.js",
      "Redux",
      "Typescript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    mainStack: ["Next.js", "Redux", "TypeScript", "Node.js", "Stripe"],
    link: "https://moemin-frontend-nextjs.vercel.app",
    github: "https://github.com/arafat717/refresh-frontend",
    accent: "#3B82F6",
    image: "/images/clean.png",
    challenges: [
      "Handling Stripe payment states reliably — making sure a booking is only confirmed once payment actually succeeds, not just when the checkout form is submitted.",
      "Modeling different service types (residential vs. commercial vs. industrial) with different pricing rules in one consistent booking flow.",
    ],
    improvements: [
      "Add saved payment methods so returning customers can book without re-entering card details.",
      "Build an admin dashboard view for tracking bookings by service type and status.",
    ],
  },
  {
    slug: "asseta-autos",
    title: "Asseta Autos – Car Dealing Application",
    category: "Full Stack",
    description:
      "A car dealership platform that allows users to browse, search, and explore vehicles with detailed listings, images, and specifications. Features include user authentication, contact forms for inquiries, and a responsive design to provide a seamless experience across devices.",
    tags: ["React.js", "Node Js", "Mongodb"],
    mainStack: ["React.js", "Node.js", "MongoDB"],
    link: "https://asetta-autos-645ad.web.app",
    github: "https://github.com/arafat717/Asetta-Autos-client",
    accent: "#10B981",
    image: "/images/asseta.png",
    challenges: [
      "Building search and filtering across vehicle listings that stayed fast as the number of listings and images grew.",
      "Getting image-heavy listing pages to load quickly on mobile without sacrificing image quality.",
    ],
    improvements: [
      "Add saved/favorited listings so users can compare vehicles later.",
      "Introduce pagination or infinite scroll for larger inventories.",
    ],
  },
  {
    slug: "the-caribbean-note",
    title: "The Caribbean Note",
    category: "Frontend",
    description:
      "A purpose-driven web application designed to support individuals with Autism, ADHD, Down Syndrome, Cerebral Palsy, and other developmental disabilities. Built with a strong emphasis on accessibility, clarity, and inclusive user experience.",
    tags: ["Next.js", "Redux", "Tailwind CSS", "Shadcn"],
    mainStack: ["Next.js", "Redux", "Tailwind CSS"],
    link: "https://frontend-imandiacosta.vercel.app",
    github: "#",
    accent: "#EC4899",
    image: "/images/iman1.png",
    challenges: [
      "Designing clear, low-friction UI patterns appropriate for an audience that specifically needed accessible, uncluttered layouts rather than typical dense dashboards.",
      "Balancing visual simplicity with the amount of information the platform still needed to communicate.",
    ],
    improvements: [
      "Run a proper accessibility audit (WCAG contrast, screen reader flow, keyboard navigation) rather than relying on visual judgment alone.",
      "Add adjustable text size / reduced-motion settings for users who need them.",
    ],
  },
  {
    slug: "online-appointment",
    title: "Online Appointment",
    category: "Frontend",
    description:
      "An online appointment booking platform frontend with SASS/Scss and Tailwind CSS for sleek UI.",
    tags: ["React.js", "SCSS"],
    mainStack: ["React.js", "SCSS"],
    link: "https://online-appoinment.vercel.app",
    github: "https://github.com/arafat717/online-appointment",
    accent: "#8B5CF6",
    image: "/images/madifax.png",
    challenges: [
      "Structuring SCSS in a way that stayed maintainable as the number of components and page states grew.",
      "Handling date/time slot selection UI so double-booked or past slots were clearly disabled rather than just visually greyed out.",
    ],
    improvements: [
      "Connect to a real backend for live availability instead of static/mock slot data.",
      "Add email or SMS confirmation after a booking is made.",
    ],
  },
  {
    slug: "fresh-grocery-bd",
    title: "Fresh-grocery-bd",
    category: "Frontend",
    description:
      "Led the fresh-grocery-bd project using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB to create a streamlined, efficient platform for fresh groceries with a responsive, user-centric interface.",
    tags: ["React", "Tailwind CSS"],
    mainStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://fresh-grocery-bd.vercel.app",
    github: "https://github.com/arafat717/desi-bazar",
    accent: "#F59E0B",
    image: "/images/grosery.png",
    challenges: [
      "Keeping the product catalog and cart state in sync across pages without over-fetching data on every navigation.",
      "Designing a responsive grocery grid that stayed usable on small screens with long product names and varying image sizes.",
    ],
    improvements: [
      "Add order history and repeat-order functionality for returning customers.",
      "Introduce category-based filtering and a proper search experience.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
