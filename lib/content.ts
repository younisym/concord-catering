// Central content store — copy sourced from the Concord for Catering company profile.

export const siteConfig = {
  name: "Concord for Catering",
  tagline: "Everywhere. Every Time.",
  founded: 2011,
  phones: ["+20 2 XXXX XXXX", "+20 1XX XXX XXXX"],
  email: "info@concordcatering.com",
  hours: {
    days: "Sunday – Thursday",
    time: "9:00 AM – 5:00 PM",
  },
  locations: [
    {
      name: "Obour City",
      role: "Head Office & Production Facility",
      established: 2013,
      blurb: "Strengthening the company's presence and supporting airline operations in Cairo.",
    },
    {
      name: "Borg El Arab",
      role: "Production Facility",
      established: 2012,
      blurb: "Serving Alexandria and Borg El Arab Airport.",
    },
    {
      name: "Hurghada",
      role: "Production Facility",
      established: 2022,
      blurb: "Extending airline catering services across the Red Sea region.",
    },
  ],
};

export const stats = [
  { value: 2011, suffix: "", label: "Established", isYear: true },
  { value: 3, suffix: "M+", label: "Meals Served Annually" },
  { value: 8500, suffix: "+", label: "Flights Served Annually" },
  { value: 25000, suffix: "", label: "Meals / Day Production Capacity" },
  { value: 3, suffix: "", label: "Strategic Locations" },
];

// Homepage "Company Statistics" — headline figures for the storytelling flow.
export const homeStats = [
  {
    value: new Date().getFullYear() - siteConfig.founded,
    suffix: "+",
    label: "Years of Experience",
  },
  { value: 6, suffix: "", label: "Airports Covered" },
  { value: 5, suffix: "+", label: "Airline Clients" },
  { value: 3, suffix: "M+", label: "Meals Produced Annually" },
  { value: 3, suffix: "", label: "Production Facilities" },
];

export const airports = [
  { code: "CAI", name: "Cairo International Airport", city: "Cairo" },
  { code: "HBE", name: "Borg El Arab Airport", city: "Alexandria" },
  { code: "HRG", name: "Hurghada International Airport", city: "Hurghada" },
  { code: "RMF", name: "Marsa Alam International Airport", city: "Marsa Alam" },
  { code: "DBB", name: "El Alamein International Airport", city: "El Alamein" },
  { code: "SPX", name: "Sphinx International Airport", city: "Giza" },
];

export const gallery = [
  {
    src: "/images/production-line.jpg",
    alt: "Rows of airline meal trays moving through Concord's production line",
    caption: "Large-Scale Production",
    tall: true,
  },
  {
    src: "/images/quality-control-scale.jpg",
    alt: "Quality control team weighing a prepared meal tray",
    caption: "Precision Quality Control",
  },
  {
    src: "/images/meal-tray-branded.jpg",
    alt: "Branded in-flight meal trays",
    caption: "Airline Catering",
  },
  {
    src: "/images/logistics-truck.jpg",
    alt: "Logistics team loading a refrigerated delivery vehicle",
    caption: "Cold Chain Logistics",
    tall: true,
  },
  {
    src: "/images/meal-consistency-meatballs.jpg",
    alt: "Three identical airline meal trays prepared for consistency",
    caption: "Consistency at Scale",
  },
  {
    src: "/images/event-gala-buffet.jpg",
    alt: "Corporate gala event catering buffet",
    caption: "Special Events Catering",
  },
  {
    src: "/images/production-bakery.jpg",
    alt: "Freshly baked pastries in Concord's bakery production line",
    caption: "Bakery Production",
  },
  {
    src: "/images/meal-tray-duo.jpg",
    alt: "Two plated in-flight meal trays",
    caption: "Inflight Meal Trays",
    tall: true,
  },
  {
    src: "/images/cuisine-couscous.jpg",
    alt: "International cuisine plated dish",
    caption: "International Cuisine",
  },
  {
    src: "/images/event-canapes-bulk.jpg",
    alt: "Bulk canape preparation for corporate events",
    caption: "Bulk Preparation",
  },
  {
    src: "/images/cuisine-beef-mash.jpg",
    alt: "Plated meal presentation with beef and mashed potato",
    caption: "Plated Presentation",
  },
  {
    src: "/images/hero-premium-tray.jpg",
    alt: "Premium business-class in-flight meal tray",
    caption: "Premium Amenity Service",
  },
];

export const whyChoose = [
  {
    title: "Food Safety",
    description: "Rigorous food safety protocols enforced at every stage of production and delivery.",
  },
  {
    title: "HACCP Compliance",
    description: "Hazard analysis and critical control points integrated into every production process.",
  },
  {
    title: "Large-Scale Production",
    description: "Modern facilities engineered to produce thousands of meals daily without compromise.",
  },
  {
    title: "24/7 Operations",
    description: "Round-the-clock production and dispatch to match the demands of aviation schedules.",
  },
  {
    title: "On-Time Delivery",
    description: "Dedicated logistics teams ensuring every meal reaches the aircraft on schedule.",
  },
  {
    title: "Cold Chain Integrity",
    description: "Temperature-controlled handling maintained from production through final delivery.",
  },
  {
    title: "Customized Airline Menus",
    description: "Tailored menu development to meet each airline's brand, route, and passenger profile.",
  },
  {
    title: "Operational Excellence",
    description: "Standardized processes that deliver consistency across every facility and every meal.",
  },
  {
    title: "Experienced Catering Team",
    description: "Skilled culinary and logistics professionals trained to international aviation standards.",
  },
  {
    title: "Premium Ingredients",
    description: "Carefully sourced ingredients selected for quality, freshness, and consistency.",
  },
];

export const certifications = [
  { code: "ISO 22000:2005", name: "Food Safety Management" },
  { code: "Lloyd's Register", name: "Certified Quality Assurance" },
  { code: "Unicert", name: "International Certification Body" },
];

export const clients = [
  { name: "Nile Air", logo: "/clients/nile-air.png" },
  { name: "Air Cairo", logo: "/clients/air-cairo.svg" },
  { name: "El Masria Airlines", logo: null },
  { name: "Sudanese Airlines", logo: "/clients/sudan-airways.svg" },
  { name: "Nesma Airlines", logo: "/clients/nesma.svg" },
];

export const services = [
  {
    slug: "airline-catering",
    name: "Airline Catering",
    tagline: "Inflight catering engineered for aviation schedules.",
    short: "Premium inflight catering tailored to meet the operational and quality requirements of airlines.",
    long: "Comprehensive in-flight catering services designed to meet international airline standards. We deliver fresh, high-quality meals with a strong focus on food safety, consistency, and on-time performance.",
    image: "/images/meal-tray-branded.jpg",
    overview:
      "Concord's Airline Catering division is built around a single principle: an aircraft cannot wait. Every meal we produce for our airline partners is manufactured, quality-checked, and dispatched against a fixed departure clock — not a flexible one. That discipline shapes everything from our kitchen layout to our delivery scheduling.",
    description: [
      "We work directly with airline procurement and inflight service teams to design menu cycles that reflect each carrier's brand, route network, and passenger profile — from short-haul economy service to premium long-haul dining. Every specification, from portion weight to plating layout, is documented and repeated exactly across every production run.",
      "Our facilities in Obour City, Borg El Arab, and Hurghada operate on rotating production schedules aligned to flight banks, ensuring meals are prepared as close to departure as safely possible while meeting HACCP-controlled holding times. Dedicated cold-chain vehicles then move completed trolleys directly to the aircraft or handling agent under continuous temperature monitoring.",
    ],
    benefits: [
      "Menu cycles engineered around route length, cabin class, and passenger demographics",
      "Fixed-specification production ensures every tray matches the airline's exact standard",
      "Dedicated flight-bank production scheduling to minimize holding time",
      "Full traceability from ingredient intake to aircraft handover",
      "Scalable capacity to absorb schedule changes and charter demand",
      "Single point of contact for procurement, quality, and logistics coordination",
    ],
    workflow: [
      { title: "Menu Engineering", description: "Airline specifications translated into fixed, repeatable production recipes." },
      { title: "Scheduled Production", description: "Meals prepared in flight-bank-aligned batches under HACCP control." },
      { title: "Tray Assembly & QC", description: "Precision portioning and inspection against the airline's exact specification." },
      { title: "Cold Chain Transport", description: "Temperature-monitored delivery direct to aircraft or handling agent." },
      { title: "On-Time Handover", description: "Trolleys and meals delivered against the flight's fixed departure schedule." },
    ],
    industries: [
      "Commercial & Scheduled Airlines",
      "Low-Cost & Regional Carriers",
      "Charter & VIP Aviation",
      "Ground Handling Agents",
    ],
    foodSafety: [
      "Production controlled under ISO 22000:2005 food safety management systems.",
      "HACCP critical control points monitored at every stage of preparation and holding.",
      "Continuous cold-chain temperature monitoring from kitchen to aircraft.",
      "Independent quality assurance audits under Lloyd's Register and Unicert certification.",
    ],
    gallery: [
      "/images/meal-tray-branded.jpg",
      "/images/meal-tray-beef-rice.jpg",
      "/images/meal-tray-duo.jpg",
      "/images/quality-control-scale.jpg",
    ],
  },
  {
    slug: "meal-solutions",
    name: "Meal Solutions",
    tagline: "Consistent, high-quality meals at industrial scale.",
    short: "Fresh, high-quality meals prepared to satisfy the needs of airlines and their passengers.",
    long: "Customized meal solutions prepared to meet the unique requirements of airlines, corporate clients, and hospitality partners, combining quality, nutrition, and exceptional taste.",
    image: "/images/meal-consistency-meatballs.jpg",
    overview:
      "Meal Solutions is where Concord's culinary and industrial capabilities meet. We design and produce meal programs for airlines, corporate clients, and hospitality partners who need the same result thousands of times over — identical taste, identical presentation, identical safety, regardless of volume.",
    description: [
      "Every meal program begins with a nutritional and operational brief: passenger or client profile, dietary requirements, shelf-life targets, and reheating method. Our culinary team then develops recipes that are tested, standardized, and documented as fixed production specifications — eliminating the variability that comes from manual, ad-hoc cooking.",
      "Production runs at scale across our facilities, with every batch checked against the same specification sheet used on day one. This is what allows Concord to deliver thousands of meals per day that are indistinguishable from one another in quality, weight, and presentation.",
    ],
    benefits: [
      "Standardized recipes ensure identical quality across every batch and facility",
      "Nutritional and dietary customization, including special and restricted diets",
      "Production capacity built for thousands of meals per day",
      "Rigorous portion control for consistent cost and presentation",
      "Flexible packaging formats for airline, corporate, or institutional service",
      "Continuous menu development informed by passenger and client feedback",
    ],
    workflow: [
      { title: "Nutritional Briefing", description: "Client requirements translated into a fixed nutritional and operational brief." },
      { title: "Recipe Standardization", description: "Recipes tested, documented, and locked as repeatable production specifications." },
      { title: "Batch Production", description: "Meals produced at scale under continuous hygiene and process supervision." },
      { title: "Portion & Pack QC", description: "Every batch checked against the same specification sheet for consistency." },
      { title: "Distribution", description: "Meals packed and dispatched according to client delivery schedules." },
    ],
    industries: [
      "Commercial Airlines",
      "Corporate & Institutional Clients",
      "Hospitality Partners",
      "Industrial & Remote-Site Catering",
    ],
    foodSafety: [
      "Fixed production specifications reduce variability and safety risk.",
      "HACCP-controlled cooking, cooling, and holding processes.",
      "Routine internal audits benchmarked against ISO 22000:2005.",
      "Shelf-life and reheating protocols validated for each meal format.",
    ],
    gallery: [
      "/images/meal-consistency-meatballs.jpg",
      "/images/meal-plated-pasta.jpg",
      "/images/cuisine-beef-mash.jpg",
      "/images/production-line.jpg",
    ],
  },
  {
    slug: "special-events-catering",
    name: "Special Events Catering",
    tagline: "Corporate and institutional catering, delivered at scale.",
    short: "Professional catering for conferences, meetings, training sessions, and private occasions.",
    long: "Professional catering services for conferences, meetings, corporate events, and private occasions, delivering memorable dining experiences for every event.",
    image: "/images/event-gala-buffet.jpg",
    overview:
      "Beyond aviation, Concord extends its production discipline to conferences, corporate functions, training sessions, and private occasions — bringing the same standards of food safety and consistency to events of any scale.",
    description: [
      "Our events team works with corporate and institutional clients to plan menus, service formats, and logistics for gatherings ranging from board-level meetings to large-scale conferences. Because our production infrastructure is built for volume, we can scale from a fifty-person training session to a several-hundred-guest corporate gala without compromising on quality or timing.",
      "Every event is supported by the same quality assurance and cold-chain logistics that underpin our airline operations, with on-site coordination to ensure service runs precisely to the client's schedule.",
    ],
    benefits: [
      "Scalable service — from small meetings to large-scale corporate galas",
      "Menus tailored to the tone and format of each event",
      "On-site coordination and logistics management",
      "Consistent food safety standards regardless of event size",
      "Experience serving corporate, institutional, and private clients",
      "Flexible service styles, including buffet, plated, and canapé formats",
    ],
    workflow: [
      { title: "Event Briefing", description: "Menu, format, and logistics requirements defined with the client." },
      { title: "Menu & Service Design", description: "Recipes and service style tailored to the occasion and guest count." },
      { title: "Production", description: "Meals and canapés prepared under the same quality controls as our airline operations." },
      { title: "On-Site Coordination", description: "Delivery and service timed precisely to the client's event schedule." },
      { title: "Service & Breakdown", description: "Professional on-site service, with full breakdown and handover." },
    ],
    industries: [
      "Corporate Conferences & Meetings",
      "Training Sessions & Seminars",
      "Private & Institutional Events",
      "Hospitality Partners",
    ],
    foodSafety: [
      "Same HACCP-controlled kitchens used for airline production.",
      "Cold-chain transport maintained from facility to event venue.",
      "On-site handling protocols to maintain food safety through service.",
      "Certified under the same ISO 22000:2005 quality framework.",
    ],
    gallery: [
      "/images/event-gala-buffet.jpg",
      "/images/event-canapes-bulk.jpg",
      "/images/cuisine-arabic-cookies.jpg",
      "/images/production-bakery.jpg",
    ],
  },
  {
    slug: "international-cuisine",
    name: "International Cuisine & Special Meals",
    tagline: "Global menus, tailored to every passenger and client.",
    short: "A diverse selection of international cuisines designed to meet different tastes and preferences.",
    long: "A wide selection of international cuisines and customized special meals tailored to dietary, cultural, and customer-specific requirements.",
    image: "/images/cuisine-couscous.jpg",
    overview:
      "International airline networks carry passengers of every nationality, culture, and dietary requirement. Concord's International Cuisine & Special Meals program is designed to give airlines and clients the menu range needed to serve that diversity without adding operational complexity.",
    description: [
      "Our culinary team develops and maintains a rotating library of international menu options — from regional Middle Eastern and Mediterranean dishes to European, Asian, and continental formats — alongside dietary and religious special meal codes used across the aviation industry.",
      "Each menu is standardized into the same fixed-specification production model used across Concord's operations, so cultural and dietary variety never comes at the cost of consistency, food safety, or delivery reliability.",
    ],
    benefits: [
      "Broad menu library spanning regional and international cuisines",
      "Dietary and religious special meal codes supported",
      "Culturally-informed menu development for diverse passenger bases",
      "Same fixed-specification production discipline as our core menus",
      "Custom menu development for airline branding and route-specific needs",
      "Bakery and pastry production in-house for freshness and control",
    ],
    workflow: [
      { title: "Menu Curation", description: "Regional and dietary menu options developed and catalogued." },
      { title: "Recipe Standardization", description: "Each dish converted into a fixed, repeatable production specification." },
      { title: "Specialty Production", description: "Dishes and bakery items prepared in dedicated production lines." },
      { title: "Quality & Cultural Review", description: "Dishes checked for authenticity, quality, and dietary compliance." },
      { title: "Distribution", description: "Meals packed and dispatched alongside standard menu cycles." },
    ],
    industries: [
      "International & Long-Haul Airlines",
      "Multinational Corporate Clients",
      "Hospitality & Tourism Partners",
      "Special & Religious Dietary Programs",
    ],
    foodSafety: [
      "Every regional recipe standardized under the same HACCP controls.",
      "Dedicated handling procedures for religious and allergen-sensitive meals.",
      "Ingredient traceability maintained across all cuisine lines.",
      "Certified under ISO 22000:2005, Lloyd's Register, and Unicert.",
    ],
    gallery: [
      "/images/cuisine-couscous.jpg",
      "/images/cuisine-bread-rolls.jpg",
      "/images/cuisine-arabic-cookies.jpg",
      "/images/hero-premium-tray.jpg",
    ],
  },
];

export type Service = (typeof services)[number];

export const aviationServices = [
  {
    title: "Airline Catering",
    description:
      "Premium inflight catering services tailored to meet the operational and quality requirements of airlines.",
  },
  {
    title: "Logistics & On-Time Delivery",
    description:
      "Efficient transportation and logistics operations ensuring timely delivery for every flight.",
  },
  {
    title: "Food Safety & Quality",
    description:
      "Strict hygiene procedures and quality control systems applied throughout every stage of production and delivery.",
  },
  {
    title: "Modern Production Facilities",
    description:
      "Well-equipped production units designed to ensure consistency, efficiency, and operational excellence.",
  },
  {
    title: "Highly Trained Team",
    description:
      "Experienced and qualified professionals working under supervised management to deliver the highest standards of service.",
  },
];

export const foodSolutions = [
  {
    title: "Airline Meal Solutions",
    description: "Fresh, high-quality meals prepared to satisfy the needs of airlines and their passengers.",
  },
  {
    title: "International Cuisine",
    description: "A diverse selection of international cuisines designed to meet different tastes and preferences.",
  },
  {
    title: "Customized Meal Solutions",
    description:
      "Flexible menus developed to meet specific client and passenger requirements, including special requests.",
  },
  {
    title: "Special Events Catering",
    description:
      "Professional catering services for conferences, meetings, training sessions, and public or private occasions.",
  },
];

export const differentiators = [
  {
    title: "Airline Catering Expertise",
    description:
      "Over a decade of experience delivering professional catering services tailored to the aviation industry's highest standards.",
  },
  {
    title: "Commitment to Quality",
    description:
      "We maintain strict quality standards throughout every stage of production to ensure consistency, freshness, and customer satisfaction.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Our logistics and transportation teams work efficiently to ensure every meal reaches its destination on schedule.",
  },
  {
    title: "Highly Trained Team",
    description:
      "Our experienced professionals work under supervised management to deliver exceptional quality and reliable service.",
  },
  {
    title: "Reliable Catering Solutions",
    description:
      "We build long-term partnerships by providing dependable catering services with a strong focus on responsibility and consistency.",
  },
];

export const values = [
  {
    title: "Passion",
    description:
      "Driven by a genuine passion for excellence, we continuously strive to create exceptional catering experiences through quality, innovation, and attention to every detail.",
  },
  {
    title: "Responsibility",
    description:
      "We take ownership of every stage of our operation, ensuring the highest standards of food safety, reliability, and operational excellence.",
  },
  {
    title: "Respect",
    description:
      "We foster lasting relationships by treating our customers, partners, and employees with integrity, professionalism, and mutual respect.",
  },
];

export const journey = [
  {
    year: "2011",
    title: "Foundation",
    description:
      "Concord for Catering was established with a vision to deliver reliable airline catering services built on quality, efficiency, and operational excellence.",
  },
  {
    year: "2012",
    title: "Borg El Arab Facility",
    description:
      "Launch of the Borg El Arab Facility, expanding operations to serve Alexandria and Borg El Arab Airport.",
  },
  {
    year: "2013",
    title: "Obour City Facility",
    description:
      "Opening of the Obour City Facility, strengthening the company's presence and supporting airline operations in Cairo.",
  },
  {
    year: "2022",
    title: "Hurghada Facility",
    description:
      "Expansion continued with the launch of the Hurghada Facility, further strengthening Concord's operational network and extending its airline catering services across Egypt.",
  },
  {
    year: "Today",
    title: "Nationwide Operations",
    description:
      "Concord for Catering continues to provide premium airline catering and food solutions through its facilities in Obour City, Borg El Arab, and Hurghada, maintaining the highest standards of quality, food safety, and operational excellence.",
  },
];
