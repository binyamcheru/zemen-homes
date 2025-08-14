// ---------------------------------------------------------------------------
// Kings Palm Homes — central content file
//
// This file is the single source of truth for site copy and demo content.
// Per the project brief: no statistics, awards, history, or property
// listings are invented and presented as verified fact. Anything not
// supplied as confirmed business information is explicitly labelled DEMO.
// ---------------------------------------------------------------------------

export const business = {
  name: "Zemen Homes",
  logoLine1: "ZEMEN",
  logoLine2: "HOMES",
  tagline: "Premium Homes. Sound Investments. Ethiopian Living.",
  supportingStatement:
    "Discover exceptional homes and property opportunities in Addis Ababa and beyond.",
  phone: "+251 91 234 5678",
  phoneHref: "tel:+251912345678",
  whatsappHref: "https://wa.me/251912345678",
  addressLine1: "Bole Road, Bole Sub-City",
  addressLine2: "Addis Ababa, Ethiopia",
  fullAddress:
    "Kings Palm Homes, Bole Road, Bole Sub-City, Addis Ababa, Ethiopia",
  calendlyUrl: "https://calendly.com/kingspalmhomes",
  mapsQuery: "Bole Road, Bole Sub-City, Addis Ababa, Ethiopia",
  year: new Date().getFullYear(),
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Developments", href: "#developments" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const trustStrip = [
  "Property Development",
  "Property Sales",
  "Property Letting",
  "Property Management",
];

// Properties

export type PropertyStatus = "For Sale" | "For Rent" | "New Development";
export type PropertyType = "House" | "Apartment" | "Land" | "Commercial" | "Development";

export interface Property {
  id: string;
  title: string;
  location: string;
  status: PropertyStatus;
  type: PropertyType;
  price: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  amenities: string[];
  image: string;
  gallery: string[];
  isDemo: boolean;
}

export const properties: Property[] = [
  {
    id: "luxury-4bed-residence",
    title: "Luxury 4-Bedroom Residence",
    location: "Bole, Addis Ababa",
    status: "For Sale",
    type: "House",
    price: "ETB 18,500,000",
    bedrooms: 4,
    bathrooms: 5,
    description:
      "A contemporary residence set on a quiet street in Bole, designed with clean architectural lines, generous natural light and space built for entertaining as easily as everyday family life.",
    features: [
      "En-suite bedrooms",
      "Open-plan living & dining",
      "Fitted kitchen",
      "Domestic staff quarters",
      "Paved compound & parking for 4 cars",
    ],
    amenities: ["24-hour power backup", "Borehole water supply", "Perimeter fencing", "CCTV-ready wiring"],
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    isDemo: true,
  },
  {
    id: "modern-family-residence",
    title: "Modern Family Residence",
    location: "Kazanchis, Addis Ababa",
    status: "For Sale",
    type: "House",
    price: "ETB 9,500,000",
    bedrooms: 3,
    bathrooms: 4,
    description:
      "A well-proportioned family home in a settled residential neighbourhood, offering comfortable room sizes, a private garden and easy access to the city centre.",
    features: [
      "3 spacious bedrooms",
      "Private garden",
      "Guest toilet",
      "Covered parking",
    ],
    amenities: ["Gated estate", "Water treatment system", "Standby generator housing"],
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=80",
    ],
    isDemo: true,
  },
  {
    id: "premium-3bed-apartment",
    title: "Premium 3-Bedroom Apartment",
    location: "CMC, Addis Ababa",
    status: "For Rent",
    type: "Apartment",
    price: "ETB 45,000 / month",
    bedrooms: 3,
    bathrooms: 3,
    description:
      "A serviced apartment within a secure residential block, finished to a high standard and suited to professionals or small families seeking low-maintenance city living.",
    features: [
      "Fitted kitchen with cabinetry",
      "Built-in wardrobes",
      "Balcony",
      "Dedicated parking space",
    ],
    amenities: ["Estate security", "Shared generator", "Waste management"],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    ],
    isDemo: true,
  },
  {
    id: "palm-view-residences",
    title: "Palm View Residences",
    location: "Sarbet, Addis Ababa",
    status: "New Development",
    type: "Development",
    price: "From ETB 7,500,000",
    bedrooms: 3,
    bathrooms: 3,
    description:
      "A planned residential development concept centred on quality construction and thoughtful layout, designed for homeowners and investors looking to secure value early.",
    features: [
      "Multiple unit typologies",
      "Planned green spaces",
      "Wide access roads",
      "Dedicated visitor parking",
    ],
    amenities: ["Estate perimeter wall", "Central water scheme", "Recreation area (planned)"],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    ],
    isDemo: true,
  },
];

// ---------------------------------------------------------------------------
// Developments
// ---------------------------------------------------------------------------

export interface Development {
  id: string;
  name: string;
  location: string;
  status: string;
  description: string;
  image: string;
  isDemo: boolean;
}

export const developments: Development[] = [
  {
    id: "kings-palm-residences",
    name: "Kings Palm Residences",
    location: "Bole, Addis Ababa",
    status: "Development Showcase",
    description:
      "A premium residential development concept designed for modern homeowners and investors, built around comfort, quality and long-term value.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    isDemo: true,
  },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface ServiceItem {
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    title: "Property Development",
    description:
      "Creating residential spaces designed around modern living and lasting value.",
  },
  {
    title: "Property Sales",
    description:
      "Helping clients discover and acquire properties that align with their goals.",
  },
  {
    title: "Property Letting",
    description:
      "Connecting clients with quality residential spaces for comfortable living.",
  },
  {
    title: "Property Management",
    description:
      "Professional management solutions designed to protect and maintain property value.",
  },
  {
    title: "Real Estate Consultancy",
    description:
      "Guidance for clients navigating property acquisition and investment decisions.",
  },
  {
    title: "Property Inspections",
    description:
      "Arrange convenient property visits and explore opportunities in person.",
  },
];

// ---------------------------------------------------------------------------
// Trust themes (not fabricated statistics)
// ---------------------------------------------------------------------------

export const trustThemes = [
  {
    title: "Professional Service",
    description: "A considered, professional approach at every stage of a property journey.",
  },
  {
    title: "Client-Focused",
    description: "Guidance shaped around each client's goals, not a one-size-fits-all process.",
  },
  {
    title: "Property Expertise",
    description: "Local market knowledge across sales, letting and development in Addis Ababa.",
  },
  {
    title: "Transparency",
    description: "Clear communication on pricing, process and property status throughout.",
  },
  {
    title: "Reliable Guidance",
    description: "Steady, dependable support from first enquiry through to decision.",
  },
  {
    title: "Quality Homes",
    description: "A standard of construction and finishing built for the long term.",
  },
];

// ---------------------------------------------------------------------------
// Client journey
// ---------------------------------------------------------------------------

export const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description: "Explore properties and investment opportunities.",
  },
  {
    number: "02",
    title: "Connect",
    description: "Speak with the Zemen Homes team.",
  },
  {
    number: "03",
    title: "Inspect",
    description: "Schedule a property inspection.",
  },
  {
    number: "04",
    title: "Decide",
    description: "Move forward with confidence.",
  },
];

// ---------------------------------------------------------------------------
// Testimonials — paraphrased themes only, not attributed to real or
// invented individuals, per the brief's instruction not to fabricate names.
// ---------------------------------------------------------------------------

export const testimonials = [
  {
    theme: "A smooth, well-guided property acquisition from first visit to handover.",
  },
  {
    theme: "Professional, responsive service throughout the letting process.",
  },
  {
    theme: "Reliable management that kept the property well maintained.",
  },
  {
    theme: "Homes that were finished to a genuinely high standard.",
  },
  {
    theme: "Clear, honest guidance at every step of the decision.",
  },
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  heading: "Built in Addis Ababa, for Ethiopia.",
  body:
    "Zemen Homes is a real estate development and property management company serving clients in Addis Ababa and beyond, with a focus on residential properties, property acquisition and quality living. The company operates from Bole Sub-City, Addis Ababa, Ethiopia.",
  image:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
};

export const interestOptions = [
  "Buying a Property",
  "Renting a Property",
  "Property Investment",
  "Property Management",
  "Property Development",
  "General Enquiry",
];

export const propertyTypeOptions: PropertyType[] = [
  "House",
  "Apartment",
  "Land",
  "Commercial",
  "Development",
];

export const statusOptions: PropertyStatus[] = ["For Sale", "For Rent", "New Development"];

export const priceRanges = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under ETB 5,000,000", min: 0, max: 5_000_000 },
  { label: "ETB 5,000,000 – ETB 10,000,000", min: 5_000_000, max: 10_000_000 },
  { label: "ETB 10,000,000 – ETB 20,000,000", min: 10_000_000, max: 20_000_000 },
  { label: "Above ETB 20,000,000", min: 20_000_000, max: Infinity },
];

export const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];

export const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85";
