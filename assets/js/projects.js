/**
 * ==============================================================================
 * SHUKLAY WADHEKAR — PORTFOLIO PROJECT DATABASE
 * ==============================================================================
 * 
 * HOW TO ADD OR EDIT PROJECTS:
 * 1. To add a new project, copy any existing project object below and paste it 
 *    at the top of the `projects` array.
 * 2. Update the fields (title, category, year, role, client, cover, images, etc.).
 * 3. Place your photo files in the `assets/images/` folder or use direct image URLs.
 * 4. Save this file — your website will update automatically!
 * 
 * ==============================================================================
 */

const projects = [
  {
    id: "two-much-kajol-twinkle",
    title: "Two Much with Kajol & Twinkle",
    category: "Films & BTS",
    year: "2026",
    role: "Still Photographer",
    client: "Tweak India / Production",
    location: "Mumbai, India",
    featured: true,
    cover: "assets/images/All Works/Two Much with Kajol & Twinkle/00.png",
    synopsis: "Comprehensive on-set still photography capturing candid conversations, high-energy banters, and editorial portraits of Kajol and Twinkle Khanna during the production of 'Two Much'. Focused on natural expressions, authentic backstage chemistry, and cinematic lighting.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM • 70-200mm f/2.8 GM II",
    images: [
      "assets/images/All Works/Two Much with Kajol & Twinkle/00.png",
      "assets/images/All Works/Two Much with Kajol & Twinkle/1.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/2.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/3.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/4.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/5.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/6.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/7.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/8.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/9.jpg",
      "assets/images/All Works/Two Much with Kajol & Twinkle/10.png",
      "assets/images/All Works/Two Much with Kajol & Twinkle/11.jpg"
    ]
  },
  {
    id: "honey-singh-tour",
    title: "Honey Singh India Tour",
    category: "Music",
    year: "2025",
    role: "Photographer / Cinematographer",
    client: "Live Nation & Tour Management",
    location: "Arena Tour across India (Mumbai, Delhi, Bengaluru)",
    featured: true,
    cover: "assets/images/All Works/Honey Singh India Tour/00.jpg",
    synopsis: "Capturing electrifying stadium atmosphere, high-octane stage performances, pyrotechnics, and backstage camaraderie on the nationwide arena tour.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM • 70-200mm f/2.8 GM II",
    images: [
      "assets/images/All Works/Honey Singh India Tour/00.jpg",
      "assets/images/All Works/Honey Singh India Tour/1.jpg",
      "assets/images/All Works/Honey Singh India Tour/2.jpg",
      "assets/images/All Works/Honey Singh India Tour/3.jpg",
      "assets/images/All Works/Honey Singh India Tour/4.jpg",
      "assets/images/All Works/Honey Singh India Tour/5.jpg",
      "assets/images/All Works/Honey Singh India Tour/6.jpg",
      "assets/images/All Works/Honey Singh India Tour/7.jpg",
      "assets/images/All Works/Honey Singh India Tour/8.jpg",
      "assets/images/All Works/Honey Singh India Tour/9.jpg",
      "assets/images/All Works/Honey Singh India Tour/10.jpg"
    ]
  },
  {
    id: "sunidhi-chauhan-tour",
    title: "Sunidhi Chauhan India Tour",
    category: "Music",
    year: "2026",
    role: "Photographer / Cinematographer",
    client: "Live Nation & Tour Management",
    location: "Arena Tour across India (Mumbai, Delhi, Bengaluru)",
    featured: true,
    cover: "assets/images/All Works/Sunidhi Chauhan India Tour/00.jpg",
    synopsis: "Documenting powerhouse vocal performances, dramatic stage lighting, and the electric crowd connection of Sunidhi Chauhan's live stadium concerts.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM • 70-200mm f/2.8 GM II",
    images: [
      "assets/images/All Works/Sunidhi Chauhan India Tour/00.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/1.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/2.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/3.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/4.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/5.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/6.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/7.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/8.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/9.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/10.jpg",
      "assets/images/All Works/Sunidhi Chauhan India Tour/11.jpg"
    ]
  },
  {
    id: "potraits",
    title: "Portraits",
    category: "Portraits",
    year: "2024-26",
    role: "Portrait & Editorial Photographer",
    client: "Editorial & Private Commissions",
    location: "Mumbai, India",
    featured: true,
    cover: "assets/images/All Works/Potraits/00.JPG",
    synopsis: "Expressive, character-driven portraiture celebrating human nuance, subtle gestures, and rich ambient illumination.",
    gear: "Sony A7MIV • 85mm f/1.4 GM • 50mm f/1.2 GM",
    images: [
      "assets/images/All Works/Potraits/00.JPG",
      "assets/images/All Works/Potraits/1.jpg",
      "assets/images/All Works/Potraits/2.jpg",
      "assets/images/All Works/Potraits/4.JPG",
      "assets/images/All Works/Potraits/5.JPG",
      "assets/images/All Works/Potraits/6.JPG",
      "assets/images/All Works/Potraits/7.JPG"
    ]
  },
  {
    id: "candid",
    title: "Candid Expressions",
    category: "Candid",
    year: "2024-26",
    role: "Visual Observer & Photographer",
    client: "Editorial & Cultural Chronicle",
    location: "Mumbai, India",
    featured: false,
    cover: "assets/images/All Works/Candid/00.JPG",
    synopsis: "Unrehearsed human moments captured in real time with an unobtrusive documentary eye and natural light.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM",
    images: [
      "assets/images/All Works/Candid/00.JPG",
      "assets/images/All Works/Candid/1.JPG",
      "assets/images/All Works/Candid/2.JPG",
      "assets/images/All Works/Candid/3.JPG",
      "assets/images/All Works/Candid/4.JPG",
      "assets/images/All Works/Candid/5.JPG",
      "assets/images/All Works/Candid/6.JPG",
      "assets/images/All Works/Candid/7.JPG",
      "assets/images/All Works/Candid/8.JPG",
      "assets/images/All Works/Candid/9.JPG",
      "assets/images/All Works/Candid/10.JPG",
      "assets/images/All Works/Candid/11.JPG",
      "assets/images/All Works/Candid/12.JPG",
      "assets/images/All Works/Candid/13.jpg"
    ]
  },
  {
    id: "tata-marathon",
    title: "Tata Marathon",
    category: "Events",
    year: "2026",
    role: "Event Photographer / Cinematographer",
    client: "Procam International / Tata Group",
    location: "Mumbai, Bangalore, Kolkata",
    featured: true,
    cover: "assets/images/All Works/Tata Marathon/00.jpg",
    synopsis: "Covering 55,000+ runners crossing iconic routes at sunrise. Documented elite international athletes, amateur enthusiasts, inspiring differently-abled participants, and the roaring energy of the crowd.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 70-200mm f/2.8 GM II",
    images: [
      "assets/images/All Works/Tata Marathon/00.jpg",
      "assets/images/All Works/Tata Marathon/1.jpg",
      "assets/images/All Works/Tata Marathon/2.JPG",
      "assets/images/All Works/Tata Marathon/3.JPG",
      "assets/images/All Works/Tata Marathon/4.jpg",
      "assets/images/All Works/Tata Marathon/5.jpg",
      "assets/images/All Works/Tata Marathon/6.jpg"
    ]
  },
  {
    id: "live-music-show",
    title: "Live Music Experiences",
    category: "Music",
    year: "2025-26",
    role: "Concert Photographer / Cinematographer",
    client: "Live Nation & Tour Management",
    location: "Arena Tour across India (Mumbai, Delhi, Bengaluru)",
    featured: true,
    cover: "assets/images/All Works/Live Music Show/00.JPG",
    synopsis: "High-energy festival and concert photography with laser lighting, pyrotechnics, and vibrant performer dynamics.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 70-200mm f/2.8 GM II",
    images: [
      "assets/images/All Works/Live Music Show/00.JPG",
      "assets/images/All Works/Live Music Show/1.jpg",
      "assets/images/All Works/Live Music Show/2.jpg",
      "assets/images/All Works/Live Music Show/3.jpg",
      "assets/images/All Works/Live Music Show/4.JPG",
      "assets/images/All Works/Live Music Show/5.JPG",
      "assets/images/All Works/Live Music Show/6.JPG",
      "assets/images/All Works/Live Music Show/7.JPG",
      "assets/images/All Works/Live Music Show/8.JPG",
      "assets/images/All Works/Live Music Show/9.JPG",
      "assets/images/All Works/Live Music Show/10.jpg",
      "assets/images/All Works/Live Music Show/11.jpg",
      "assets/images/All Works/Live Music Show/12.jpg",
      "assets/images/All Works/Live Music Show/13.jpg",
      "assets/images/All Works/Live Music Show/14.jpg",
      "assets/images/All Works/Live Music Show/15.jpg",
      "assets/images/All Works/Live Music Show/16.jpg"
    ]
  },
  {
    id: "corporate-experience",
    title: "Corporate & Tech Keynotes",
    category: "Corporate",
    year: "2025-26",
    role: "Commercial & Executive Photographer",
    client: "AWS, Meta, OpenAI, WhatsApp, Snowflake",
    location: "Mumbai & Bengaluru, India",
    featured: false,
    cover: "assets/images/All Works/Corporate Experience/00.JPG",
    synopsis: "Capturing the scale, executive keynotes, and interactive innovation summits for global technology leaders.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 70-200mm f/2.8 GM II",
    images: [
      "assets/images/All Works/Corporate Experience/00.JPG",
      "assets/images/All Works/Corporate Experience/1.jpg",
      "assets/images/All Works/Corporate Experience/2.jpg",
      "assets/images/All Works/Corporate Experience/3.jpg",
      "assets/images/All Works/Corporate Experience/4.jpg",
      "assets/images/All Works/Corporate Experience/5.jpg",
      "assets/images/All Works/Corporate Experience/6.JPG",
      "assets/images/All Works/Corporate Experience/7.JPG",
      "assets/images/All Works/Corporate Experience/8.JPG",
      "assets/images/All Works/Corporate Experience/9.JPG"
    ]
  },
  {
    id: "automobile",
    title: "Automotive Precision",
    category: "Automobile",
    year: "2026",
    role: "Commercial Photographer",
    client: "Automotive Brands & Lifestyle",
    location: "Mumbai, India",
    featured: false,
    cover: "assets/images/All Works/Automobile/00.jpg",
    synopsis: "Dynamic tracking angles, sculpted automotive lines, and urban reflections highlighting automotive engineering.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM",
    images: [
      "assets/images/All Works/Automobile/00.jpg",
      "assets/images/All Works/Automobile/1.jpg",
      "assets/images/All Works/Automobile/2.jpg",
      "assets/images/All Works/Automobile/3.jpg",
      "assets/images/All Works/Automobile/4.jpg"
    ]
  },
  {
    id: "festivals",
    title: "Festivals & Celebrations",
    category: "Festivals",
    year: "2025-26",
    role: "Documentary & Event Photographer",
    client: "Cultural Chronicle",
    location: "Maharashtra, India",
    featured: false,
    cover: "assets/images/All Works/Festivals/00.jpg",
    synopsis: "Colors, devotion, and collective energy capturing the spirit of Indian festivals across the city.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM",
    images: [
      "assets/images/All Works/Festivals/00.jpg",
      "assets/images/All Works/Festivals/1.jpg",
      "assets/images/All Works/Festivals/2.jpg",
      "assets/images/All Works/Festivals/3.jpg",
      "assets/images/All Works/Festivals/4.jpg",
      "assets/images/All Works/Festivals/5.jpg",
      "assets/images/All Works/Festivals/6.jpg",
      "assets/images/All Works/Festivals/7.jpg",
      "assets/images/All Works/Festivals/8.jpg",
      "assets/images/All Works/Festivals/9.JPG",
      "assets/images/All Works/Festivals/10.jpg"
    ]
  },
  {
    id: "cosmatic",
    title: "Cosmetics & Beauty Editorial",
    category: "Cosmetics",
    year: "2026",
    role: "Commercial Stills Photographer",
    client: "Beauty & Lifestyle Brands",
    location: "Mumbai, India",
    featured: false,
    cover: "assets/images/All Works/Cosmatic/00.JPG",
    synopsis: "Clean macro lighting, textures, and luxury beauty editorial styling.",
    gear: "Sony A7MIV • 85mm f/1.4 GM • 90mm Macro",
    images: [
      "assets/images/All Works/Cosmatic/00.JPG",
      "assets/images/All Works/Cosmatic/1.JPG",
      "assets/images/All Works/Cosmatic/2.JPG",
      "assets/images/All Works/Cosmatic/3.JPG",
      "assets/images/All Works/Cosmatic/4.JPG",
      "assets/images/All Works/Cosmatic/5.JPG",
      "assets/images/All Works/Cosmatic/6.JPG",
      "assets/images/All Works/Cosmatic/7.JPG",
      "assets/images/All Works/Cosmatic/8.JPG",
      "assets/images/All Works/Cosmatic/9.JPG",
      "assets/images/All Works/Cosmatic/10.JPG",
      "assets/images/All Works/Cosmatic/11.JPG",
      "assets/images/All Works/Cosmatic/12.JPG"
    ]
  },
  {
    id: "kumbharwada-dharavi",
    title: "Kumbharwada — The Clay Hearth of Dharavi",
    category: "Documentary",
    year: "2026",
    role: "Documentary Filmmaker & Photographer",
    client: "Independent Documentary Archive",
    location: "Dharavi, Mumbai",
    featured: true,
    cover: "assets/images/Documenting Reality/Kumbharwada.jpg",
    synopsis: "An in-depth observational photo and video study of Mumbai's historic potter's colony. Exploring the heritage craft passed down through four generations amidst rising smoke, spinning wheels, and changing urban landscapes.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM",
    images: [
      "assets/images/Documenting Reality/Kumbharwada.jpg"
    ]
  },
  {
    id: "sassoon-dock-dawn",
    title: "Sassoon Dock — Dawn on the Arabian Sea",
    category: "Documentary",
    year: "2026",
    role: "Documentary Photographer",
    client: "Mumbai Heritage Visual Series",
    location: "Colaba, Mumbai",
    featured: true,
    cover: "assets/images/Documenting Reality/Sassoon Dock.png",
    synopsis: "Witnessing the 4:00 AM kinetic ritual at Mumbai's oldest wet dock. From incoming trawlers and fish auctions to the Koli fisherwomen commanding the morning trade under tungsten lamps and sea mist.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM",
    images: [
      "assets/images/Documenting Reality/Sassoon Dock.png"
    ]
  },
  {
    id: "juhu-beach-human-tide",
    title: "Juhu Beach — The Human Tide",
    category: "Documentary",
    year: "2026",
    role: "Visual Documentarian",
    client: "Mumbai Urban Chronicle",
    location: "Juhu Beach, Mumbai",
    featured: false,
    cover: "assets/images/Documenting Reality/Juhu Beach.jpg",
    synopsis: "From quiet morning runners and sea yoga to the million-person sea of Sunday families, balloon sellers, and twilight reflections on wet sand.",
    gear: "Sony A7MIV • 24-70mm f/2.8 GM II • 85mm f/1.4 GM",
    images: [
      "assets/images/Documenting Reality/Juhu Beach.jpg"
    ]
  }
];

// Documentary Specific Spotlight Items (for the horizontal reel)
const documentarySpotlights = [
  {
    title: "Kumbharwada",
    subtitle: "The Potters of Dharavi",
    location: "Dharavi, Mumbai",
    description: "Centuries-old clay pottery heritage passed through four generations amidst the bustling urban fabric of Mumbai.",
    image: "assets/images/Documenting Reality/Kumbharwada.jpg",
    year: "2026"
  },
  {
    title: "Sassoon Dock",
    subtitle: "Dawn at the Arabian Sea",
    location: "Colaba, Mumbai",
    description: "4:00 AM kinetic ritual of Mumbai's historic wet dock. Trawlers, auction shouts, and generations of Koli fisherwomen.",
    image: "assets/images/Documenting Reality/Sassoon Dock.png",
    year: "2026"
  },
  {
    title: "Juhu Beach",
    subtitle: "The Tide of Human Lives",
    location: "Juhu, Mumbai",
    description: "From tranquil dawn solitude to the vibrant pulse of sunset crowds, capturing the living rhythm of Mumbai's coastline.",
    image: "assets/images/Documenting Reality/Juhu Beach.jpg",
    year: "2026"
  }
];

// Film & BTS Specific Archives
const filmArchives = [
  {
    title: "The Mehta Boys",
    role: "BTS Videographer & Unit Stills",
    production: "Feature Film",
    year: "2025",
    image: "assets/images/FILMS & BTS/The Mehta Boys.jpg",
    note: "Documenting director-actor dialogue, multi-cam setups, and intimate production moments."
  },
  {
    title: "Two Much with Kajol & Twinkle",
    role: "Still Photographer",
    production: "Talk Show",
    year: "2026",
    image: "assets/images/FILMS & BTS/Two Much with Kajol & Twinkle.png",
    note: "Exclusive backstage stills, editorial lighting, and spontaneous celebrity rapport."
  },
  {
    title: "Amazon Prime BTS Archive",
    role: "BTS Cinematographer",
    production: "Original Series",
    year: "2024",
    image: "assets/images/FILMS & BTS/Amazon Prime BTS Archive.JPG",
    note: "Camera rigging, soundstages, night shoots, and technical cinematography."
  }
];

// Commercial & Brand Collaboration List
const brandClients = [
  { name: "Microsoft", category: "Technology & AI", scope: "Keynotes & Executive Stills" },
  { name: "Meta", category: "Social & Digital", scope: "Creator Summit & Live Production" },
  { name: "WhatsApp", category: "Global Tech", scope: "Brand Experiences & Cinematography" },
  { name: "Snowflake", category: "Enterprise Data", scope: "World Tour Production Film" },
  { name: "AWS", category: "Cloud Computing", scope: "Innovation Series & Stills" },
  { name: "Amazon Prime", category: "Entertainment", scope: "BTS Filmmaking & Unit Stills" },
  { name: "Audi", category: "Automotive", scope: "Cinematography & Performance Stills" },
  { name: "OpenAI", category: "AI & Innovation", scope: "Innovation Keynotes & Stills" },
  { name: "Tata Group", category: "Enterprise & Sports", scope: "Mumbai Marathon & Global Events" }
];
