/**
 * THIRU.MARKETING - PORTFOLIO CONFIGURATION
 * 
 * Central configuration file for Thiruselvan M's digital marketing & creative services.
 * Contains all contact information, social links, service offerings, and workflow details.
 */

export const portfolioData = {
  // Brand & Identity Information
  brand: {
    name: "THIRU.MARKETING",
    shortName: "THIRU",
    ownerName: "Thiruselvan M",
    role: "Digital Marketer & Creative Professional",
    tagline: "Make Your Brand Impossible to Ignore.",
    location: "Tamil Nadu, India",
    availableForWork: true,
    statusBadge: "Available for New Projects",
    profileImage: "/images/thiruselvan-profile.jpg",
  },

  // Contact Information
  contact: {
    phone: "+91 6379769744",
    phoneRaw: "6379769744",
    whatsappNumber: "916379769744",
    whatsappDisplay: "+91 6379769744",
    whatsappDefaultMessage: "Hi Thiru! I'm interested in your digital marketing services. Let's discuss my requirements.",
    email: "thiruselvan248@gmail.com",
    instagram: "https://www.instagram.com/thiru.fit/",
    instagramHandle: "@thiru.fit",
    location: "Tamil Nadu, India (Available On-site & Remote)",
  },

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Workflow", href: "#workflow" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    topLabel: "INDEPENDENT DIGITAL MARKETING & CREATIVE",
    headlinePart1: "Make Your Brand",
    headlineHighlight: "Impossible to Ignore.",
    subheadline: "Digital marketing, scroll-stopping content, and modern websites for businesses ready to build a stronger online presence.",
    ctaPrimary: {
      text: "Explore Services",
      href: "#services",
    },
    ctaSecondary: {
      text: "Let's Talk",
      href: "#contact",
    },
    servicePills: [
      "Social Media Marketing",
      "Meta Ads",
      "Video Shooting",
      "Reels Editing",
      "Creative Design",
      "Web Development",
    ],
  },

  // 7 Core Services Offered
  services: [
    {
      id: "social-media-marketing",
      number: "01",
      title: "Social Media Marketing",
      shortDesc: "Social media strategy, content planning, and online brand presence.",
      detailedDesc: "Strategic platform roadmaps tailored to your audience. We build organic engagement and distinct voice so your brand stays top-of-mind.",
      icon: "Share2",
      points: [
        "Strategic channel selection tailored to your audience",
        "Content theme planning and consistent brand messaging",
        "Audience engagement frameworks to build community loyalty",
        "Organic reach enhancement and local brand awareness",
      ],
      tag: "Strategy",
      layoutType: "standard",
    },
    {
      id: "meta-ads",
      number: "02",
      title: "Meta Ads & Paid Advertising",
      shortDesc: "Facebook and Instagram ad campaign setup, audience targeting, location targeting, and campaign monitoring.",
      detailedDesc: "High-precision Facebook & Instagram advertising. We construct targeted campaigns by location, demographic, and interest to connect with ready buyers.",
      icon: "Target",
      points: [
        "End-to-end Facebook & Instagram campaign architecture",
        "Hyper-local geo-fencing, demographic & interest targeting",
        "Ad placement optimization (Instagram Reels, Feed & Stories)",
        "Daily budget pacing and performance monitoring",
      ],
      tag: "Featured Service",
      layoutType: "hero-bento", // Prominent split showcase
    },
    {
      id: "social-media-management",
      number: "03",
      title: "Social Media Management",
      shortDesc: "Content scheduling, profile management, and consistent social media publishing.",
      detailedDesc: "Reliable publishing calendars and account organization that keep your social channels active, modern, and visually unified.",
      icon: "CalendarCheck",
      points: [
        "Structured weekly and monthly publishing calendars",
        "Profile bio, story highlight covers & aesthetic audit",
        "Consistent posting schedule for maximum algorithm reach",
        "Asset delivery and content workflow coordination",
      ],
      tag: "Management",
      layoutType: "standard",
    },
    {
      id: "video-shooting",
      number: "04",
      title: "Professional Video Shooting",
      shortDesc: "Promotional videos, business videos, product videos, and social media content shoots.",
      detailedDesc: "On-location vertical and horizontal filming for shops, studios, cafes, and brands. High-clarity lighting, clean composition, and crisp capture.",
      icon: "Camera",
      points: [
        "On-location filming for local shops, cafes & commercial studios",
        "Product feature shoots with balanced lighting & angles",
        "Short-form social media footage & founder story videos",
        "Dynamic 9:16 vertical video captured natively for mobile",
      ],
      tag: "On-Location",
      layoutType: "camera-hud", // Viewfinder camera visual treatment
    },
    {
      id: "video-editing",
      number: "05",
      title: "Video Editing & Reels",
      shortDesc: "Reels editing, transitions, captions, promotional videos, and short-form content.",
      detailedDesc: "Fast-paced vertical edits that prevent users from swiping away. Kinetic subtitles, audio syncing, sound effects, and retention-focused cuts.",
      icon: "Film",
      points: [
        "High-retention vertical 9:16 Reels & Shorts editing",
        "Kinetic typography captions for 80%+ muted mobile viewers",
        "Seamless jump-cuts, motion pacing & sound effects",
        "Audio synchronization and hook retention framing",
      ],
      tag: "Creative Video",
      layoutType: "reels-preview", // Smartphone reel frame visual treatment
    },
    {
      id: "creative-design",
      number: "06",
      title: "Creative Design & Ad Creatives",
      shortDesc: "Promotional posters, social media designs, offer creatives, and advertising visuals.",
      detailedDesc: "Scroll-stopping promotional posters, offer banners, and campaign creatives designed with striking contrast and clean visual hierarchy.",
      icon: "Palette",
      points: [
        "High-contrast promotional banners & seasonal discount posters",
        "Cohesive Instagram carousel & feed graphics",
        "Instant visual anchors designed for 0.5-second mobile feeds",
        "Brand styleguide compliance and clean typography layout",
      ],
      tag: "Visual Design",
      layoutType: "poster-art", // Poster graphic visual treatment
    },
    {
      id: "website-development",
      number: "07",
      title: "Website Development",
      shortDesc: "Modern, responsive websites for local businesses, shops, and brands.",
      detailedDesc: "Ultra-fast, beautifully designed responsive websites that convert visitors into calls and WhatsApp chats. Built mobile-first with modern code.",
      icon: "Code",
      points: [
        "Modern single-page & multi-section showcase websites",
        "Mobile-first responsive architecture that loads in <1s",
        "Direct WhatsApp chat & click-to-call integrations",
        "SEO-ready semantic structure for local search discovery",
      ],
      tag: "Development",
      layoutType: "terminal-showcase", // Full-width interactive browser treatment
    },
  ],

  // About Section
  about: {
    heading: "Creative Ideas. Digital Execution.",
    lead: "I'm Thiruselvan, an aspiring digital marketer focused on social media, Meta Ads, creative content, and modern website experiences.",
    description: "I enjoy combining creative thinking with practical execution to help businesses improve their online presence. Rather than relying on generic templates, I take a hands-on approach: filming vertical video on-location, editing dynamic reels, running structured Meta campaigns, and designing modern digital assets that help local businesses stand out.",
    toolsHeading: "Tools & Workflow Stack",
    toolsSubtext: "Platforms I actively use or am continuously learning through practical project work",
    // Selected 8 tools specified in prompt:
    tools: [
      { name: "Meta Ads Manager", category: "Paid Campaigns", level: "Active Use", icon: "Target" },
      { name: "Meta Business Suite", category: "Social Assets", level: "Active Use", icon: "LayoutGrid" },
      { name: "ChatGPT", category: "Copy & Strategy", level: "Active Use", icon: "Sparkles" },
      { name: "Claude", category: "Deep Analysis", level: "Active Use", icon: "Brain" },
      { name: "Google Gemini", category: "Content Ideation", level: "Active Use", icon: "Cpu" },
      { name: "CapCut", category: "Reels & Video", level: "Active Use", icon: "Scissors" },
      { name: "Premiere Pro", category: "Post-Production", level: "Learning & Practice", icon: "Film" },
      { name: "Picsart", category: "Graphic Design", level: "Active Use", icon: "Palette" },
    ],
  },

  // Workflow Section: 4 Steps
  workflow: [
    {
      step: "01",
      title: "Understand",
      subtitle: "Discovery & Alignment",
      description: "Understand the business, audience, offer, and goals. We analyze your market and clarify exact deliverables before starting.",
      icon: "Search",
      actionText: "Business & audience discovery",
    },
    {
      step: "02",
      title: "Plan",
      subtitle: "Strategy & Creative Direction",
      description: "Choose the strategy, creative direction, and campaign approach. We map out content themes, shoot schedules, and targeting parameters.",
      icon: "FileText",
      actionText: "Roadmaps & concept boards",
    },
    {
      step: "03",
      title: "Create & Launch",
      subtitle: "Production & Execution",
      description: "Prepare the content or website and execute the agreed work. We film on-location, edit reels, design creatives, and deploy approved campaigns.",
      icon: "Rocket",
      actionText: "Shooting, editing & live launch",
    },
    {
      step: "04",
      title: "Review & Improve",
      subtitle: "Analysis & Iteration",
      description: "Review actual performance and improve based on evidence. We monitor audience response, observe drop-offs, and refine future iterations.",
      icon: "CheckCircle2",
      actionText: "Evidence-based optimization",
    },
  ],

  // Contact Section
  contactSection: {
    heading: "Let's Create Something That Stands Out.",
    subheading: "Have a business, brand, or creative project in mind? Let's talk.",
    serviceOptions: [
      "Social Media Marketing",
      "Meta Ads & Paid Advertising",
      "Social Media Management",
      "Professional Video Shooting",
      "Video Editing & Reels",
      "Creative Design & Ad Creatives",
      "Website Development",
      "Complete Brand Package",
    ],
  },

  // Footer
  footer: {
    brandText: "THIRU.MARKETING",
    ownerText: "Thiruselvan M",
    tagline: "Digital marketing, scroll-stopping content, and modern websites for businesses ready to build a stronger online presence.",
  }
};
