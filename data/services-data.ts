import {
  Plane,
  Ship,
  Truck,
  ShieldCheck,
  FileCheck,
  Building2,
  Package,
  Globe,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  tagColor: string;
  icon: any;
  description: string;
  overview: string[];
  featuresHeading: string;
  features: string[];
  featureGroups?: { title: string; items: string[] }[];
  process: { step: string; title: string; desc: string }[];
}

export const servicesList = [
  { label: "Global Air Shipment", slug: "air-freight" },
  { label: "Global Ocean Shipment", slug: "ocean-freight" },
  { label: "Multimodal Transport", slug: "multimodal-transport" },
  { label: "Customs Clearance & Compliance", slug: "customs-clearance" },
  { label: "Door-to-Door Logistics", slug: "door-to-door" },
  { label: "Warehousing & Distribution", slug: "warehousing-distribution" },
  { label: "DGFT, Icegate Services & Certifications", slug: "dgft-export" },
  { label: "Road Container Movement", slug: "road-container-movement" },
];

// Company-wide highlights from the BR Cargo company profile
export const whyChooseUs = [
  {
    title: "Wide Network & Expertise",
    desc: "A strong presence across key logistics hubs, with our Head Office in Kolkata and branches in Delhi, Ahmedabad, Mumbai, Chennai, and Bangalore — enabling us to efficiently manage domestic and international shipments.",
  },
  {
    title: "People Behind Our Service",
    desc: "Skilled and experienced logistics professionals who manage shipments across sea, air, and road with precision, care, and professionalism.",
  },
  {
    title: "Complete Logistics Under One Roof",
    desc: "Freight forwarding, customs clearance, DGFT services, import & export cargo handling, and air, sea & land transportation — better coordination, faster communication, and single-source accountability.",
  },
];

export const companyHighlights = [
  "End-to-End Logistics",
  "Real-Time Tracking",
  "Fleet Owner and Transport Contractor",
  "Dedicated Account Support",
  "Customs & DGFT Expertise",
  "Trade Compliance",
];

export const servicesData: Record<string, ServiceDetail> = {
  "air-freight": {
    slug: "air-freight",
    title: "Global Air Shipment",
    subtitle: "Time-Critical & Express Air Cargo Solutions",
    image: "/air-freight.jpeg",
    tag: "Air Shipment",
    tagColor: "bg-blue-100 text-blue-700",
    icon: Plane,
    description:
      "High-speed, time-definite air cargo services for urgent, high-value, or perishable goods connecting major hubs worldwide.",
    overview: [
      "B R Cargo Solutions Private Limited provides fast, secure, and cost-effective air shipment solutions for time-sensitive and high-value shipments. Our experienced team coordinates with reliable airline carriers to plan the best transportation solution based on cargo type, delivery timeline, and cost requirements.",
      "We manage the complete process, including documentation, airline coordination, customs clearance, cargo handling, shipment tracking, and final delivery, ensuring smooth and reliable movement of goods across domestic and international destinations.",
    ],
    featuresHeading: "Our Air Shipment Services Include",
    features: [
      "Import & Export Air Shipment Services",
      "Consolidated, Back-to-Back & Direct Shipments",
      "Reliable Carrier & Main Air Route Solutions",
      "Oversized & Special Cargo Handling",
      "Loose & Palletized Cargo Movement",
      "Import & Export Customs Clearance",
    ],
    process: [
      {
        step: "01",
        title: "Cargo Pickup & Consolidate",
        desc: "First-mile collection from supplier factory or warehouse.",
      },
      {
        step: "02",
        title: "Export Customs & Airport Transfer",
        desc: "Customs documentation filing and delivery to origin air terminal.",
      },
      {
        step: "03",
        title: "Flight Transit",
        desc: "Secured flight booking with reliable airline carriers.",
      },
      {
        step: "04",
        title: "Import Clearance & Final Delivery",
        desc: "Destination customs clearance and last-mile delivery.",
      },
    ],
  },
  "ocean-freight": {
    slug: "ocean-freight",
    title: "Global Ocean Shipment",
    subtitle: "FCL & LCL Ocean Container Shipping",
    image: "/ocean-frieght.jpeg",
    tag: "Ocean Shipment",
    tagColor: "bg-[#0F2C59]/10 text-[#0F2C59]",
    icon: Ship,
    description:
      "Full Container Load (FCL) and Less than Container Load (LCL) shipping options across all major global sea routes.",
    overview: [
      "B R Cargo Solutions provides reliable and global ocean shipment solutions for both import and export shipments, including Full-Container Load (FCL) and Less-than-Container Load (LCL) cargo to and from major global destinations.",
      "We offer customized solutions for different cargo requirements, including Flat-Rack and Open-Top containers, Bulk Cargo, Project Cargo, and Door-to-Door services. Our team evaluates each shipment to provide the most suitable and cost-effective transportation solution.",
    ],
    featuresHeading: "Our Global Ocean Shipment Services Include",
    features: [
      "FCL & LCL Import/Export Services",
      "Flat-Rack & Open-Top Container Solutions",
      "Bulk & Project Cargo Handling",
      "Feasibility & Shipment Planning",
      "Selection of Suitable Transport Solutions",
      "Dangerous Goods / Hazardous Shipment Handling",
    ],
    process: [
      {
        step: "01",
        title: "Container Booking & Loading",
        desc: "Securing container space and loading cargo at factory/depot.",
      },
      {
        step: "02",
        title: "Port Customs & Vessel Loading",
        desc: "Export clearance and loading onto container vessel.",
      },
      {
        step: "03",
        title: "Ocean Voyage",
        desc: "Monitored transit across sea shipping lanes.",
      },
      {
        step: "04",
        title: "Port Unloading & Final Delivery",
        desc: "Import customs clearance, port drayage, and door delivery.",
      },
    ],
  },
  "multimodal-transport": {
    slug: "multimodal-transport",
    title: "Multimodal Transport",
    subtitle: "Seamless Sea, Air & Land Combined Logistics",
    image: "/multimodal-transport.jpeg",
    tag: "Multimodal",
    tagColor: "bg-teal-100 text-teal-700",
    icon: Globe,
    description:
      "Combining sea, air, and land networks to create the most efficient, cost-effective routing from country to country.",
    overview: [
      "B R Cargo Solutions combines sea, air, and land transportation networks to create efficient, flexible, and cost-effective routes for domestic and international cargo movement. We select the most suitable transportation combination based on cargo type, destination, delivery timeline, and budget, ensuring smooth coordination from origin to final destination.",
      "Our integrated approach helps optimize transit times, reduce transportation costs, and simplify complex logistics requirements. With professional coordination at every stage, we ensure smooth cargo handling, reliable connectivity, and timely movement.",
    ],
    featuresHeading: "Our Multimodal Services Include",
    features: [
      "Shipment Coordination & Tracking",
      "Cost-Effective Transportation Options",
      "Sea, Air & Land Transportation Solutions",
      "End-to-End Logistics Management",
      "Door-to-Door Multimodal Delivery",
      "Customized Route Planning & Optimization",
    ],
    process: [
      {
        step: "01",
        title: "Route Planning",
        desc: "Selecting the optimal mode combination based on cargo, timeline & budget.",
      },
      {
        step: "02",
        title: "First-Leg Transport",
        desc: "Initial transit via ocean, air or land to the intermediate hub.",
      },
      {
        step: "03",
        title: "Hub Transfer",
        desc: "Smooth transfer between transport modes with full coordination.",
      },
      {
        step: "04",
        title: "Final-Leg Delivery",
        desc: "Air or road delivery to the final destination.",
      },
    ],
  },
  "customs-clearance": {
    slug: "customs-clearance",
    title: "Customs Clearance & Compliance",
    subtitle: "Import & Export Customs Documentation and Compliance",
    image: "/custom-clearance.jpeg",
    tag: "Customs",
    tagColor: "bg-purple-100 text-purple-700",
    icon: ShieldCheck,
    description: "Expert handling of customs, duties, tariffs, and compliance.",
    overview: [
      "B R Cargo Solutions provides comprehensive customs clearance services for both import and export shipments, ensuring accurate documentation, regulatory compliance, and smooth cargo movement. Our experienced team manages the complete customs process while maintaining close coordination with relevant authorities and stakeholders.",
      "With a dedicated and knowledgeable team supported by modern IT infrastructure and documentation systems.",
    ],
    featuresHeading: "Our Customs Clearance Services Include",
    features: [
      "Customs Documentation & Filing",
      "Import & Export Compliance Support",
      "Duty & Tariff Coordination",
      "Shipment Documentation Verification",
      "Coordination with Customs Authorities",
    ],
    process: [
      {
        step: "01",
        title: "Document Verification",
        desc: "Checking Commercial Invoice, Packing List, and Bill of Lading.",
      },
      {
        step: "02",
        title: "Customs Entry Filing",
        desc: "Submitting Bill of Entry / Shipping Bill to the Customs portal.",
      },
      {
        step: "03",
        title: "Assessment & Inspection",
        desc: "Managing duty calculation and physical inspection if required.",
      },
      {
        step: "04",
        title: "Out of Charge (OOC)",
        desc: "Obtaining final clearance for port release and dispatch.",
      },
    ],
  },
  "door-to-door": {
    slug: "door-to-door",
    title: "Door-to-Door Logistics",
    subtitle: "Single-Source Factory to Doorstep Solution",
    image: "/door-to-door-logistics.jpeg",
    tag: "Supply Chain",
    tagColor: "bg-orange-100 text-orange-700",
    icon: Package,
    description:
      "A fully managed single-source solution taking cargo directly from the factory floor in the origin country to the buyer's doorstep.",
    overview: [
      "B R Cargo Solutions provides complete door-to-door logistics solutions, managing the entire movement of cargo from the supplier’s location to the final destination. Our single-source approach ensures seamless coordination, clear communication, and efficient handling throughout the supply chain.",
      "From factory pickup and transportation to customs clearance, documentation, cargo handling, and final delivery, we coordinate every stage with precision. Our integrated approach helps reduce delays, simplify transportation processes, and provide reliable movement of cargo with greater visibility, efficiency, and control.",
    ],
    featuresHeading: "Our Door-to-Door Services Include",
    features: [
      "Factory Pickup & Cargo Collection",
      "Air, Sea & Land Shipment",
      "Cargo Handling & Warehousing",
      "Import & Export Transportation",
      "Customs Clearance & Documentation",
      "Shipment Tracking & Status Updates",
    ],
    process: [
      {
        step: "01",
        title: "Origin Pickup",
        desc: "Direct collection from the supplier's factory floor.",
      },
      {
        step: "02",
        title: "Export & Shipment",
        desc: "Customs clearance and international shipment transit.",
      },
      {
        step: "03",
        title: "Destination Clearance",
        desc: "Customs entry and duty settlement at port of entry.",
      },
      {
        step: "04",
        title: "Doorstep Delivery",
        desc: "Final transport and delivery to the buyer's address.",
      },
    ],
  },
  "warehousing-distribution": {
    slug: "warehousing-distribution",
    title: "Warehousing & Distribution",
    subtitle: "Secure Storage, Inventory Management & Distribution",
    image: "/warehousing-distribution.jpeg",
    tag: "Warehouse",
    tagColor: "bg-green-100 text-green-700",
    icon: Building2,
    description: "Secure global storage, consolidation, and cross-docking.",
    overview: [
      "B R Cargo Solutions provides secure, organized, and flexible warehousing and distribution solutions to support the complete supply chain. We offer customized inbound, outbound, and reverse logistics services, ensuring efficient inventory management and smooth movement of goods.",
      "Our solutions focus on safe storage, careful cargo handling, inventory control, and accurate order fulfillment, including specialized handling for fragile and sensitive products.",
    ],
    featuresHeading: "Our Warehousing & Distribution Services Include",
    features: [
      "Inventory & Stock Management",
      "Cargo Consolidation & Deconsolidation",
      "Inbound, Outbound & Reverse Logistics",
      "Import & Export Cargo Storage",
      "Bonded & Non-Bonded Warehousing Solutions",
      "Loading, Unloading & Packaging Support",
    ],
    process: [
      {
        step: "01",
        title: "Cargo Inwarding",
        desc: "Receiving, inspecting, and logging inventory into the warehouse system.",
      },
      {
        step: "02",
        title: "Storage & Control",
        desc: "Secured placement in designated rack or bin locations.",
      },
      {
        step: "03",
        title: "Order Fulfillment",
        desc: "Picking, packing, and labeling according to dispatch orders.",
      },
      {
        step: "04",
        title: "Dispatch & Delivery",
        desc: "Outward loading onto transport vehicles for final delivery.",
      },
    ],
  },
  "dgft-export": {
    slug: "dgft-export",
    title: "DGFT, Icegate Services & Certifications",
    subtitle: "Import-Export Registrations, Licenses, Incentives & Certifications",
    image: "/dgft-export.jpeg",
    tag: "Documentation",
    tagColor: "bg-rose-100 text-rose-700",
    icon: FileCheck,
    description:
      "Expert handling of DGFT, Icegate services, import/export licensing, duty drawback, and all regulatory export documentation.",
    overview: [
      "We provide comprehensive DGFT, ICEGATE, and certification services to simplify your import-export and regulatory requirements. From import-export certificates, AD code and ICEGATE registration to licenses, incentives, compliance, and essential certifications, we help businesses navigate the entire process smoothly and efficiently.",
      "With expert support and end-to-end solutions, we make documentation, compliance, and certification simpler—so you can focus on growing your business.",
    ],
    featuresHeading: "Our DGFT, Icegate & Certification Services",
    features: [],
    featureGroups: [
      {
        title: "DGFT Services",
        items: [
          "Import Export Certificate",
          "Legalization of documents from Any Embassy",
          "Advance/EPCG License",
          "License Redemption",
          "Registration cum Membership Certificate (RCMC)",
        ],
      },
      {
        title: "ICEGATE Services",
        items: [
          "AD Code Registration",
          "ICEGATE Registration",
          "Pending Drawback, Pending GST or any other pending Incentive",
          "RODTEP/ROSCTL",
        ],
      },
      {
        title: "Certifications",
        items: [
          "Digital Signature",
          "Chamber of Commerce (COC)",
          "LMPC/EAC Certificate",
          "EPR Certificate",
          "FSSAI License",
          "ISO Certificate",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirement Review",
        desc: "Understanding your import-export profile and applicable registrations or schemes.",
      },
      {
        step: "02",
        title: "Documentation Prep",
        desc: "Compiling the required applications, invoices, and certificates.",
      },
      {
        step: "03",
        title: "Government Filing",
        desc: "Online submission on DGFT / ICEGATE portals and liaison with authorities.",
      },
      {
        step: "04",
        title: "Approval & Issuance",
        desc: "Securing the approved registration, license, certificate or incentive.",
      },
    ],
  },
  "road-container-movement": {
    slug: "road-container-movement",
    title: "Road Container Movement",
    subtitle: "Fleet Owner & Transport Contractor — Domestic & Cross-Border Road Transport",
    image: "/road-container-movement.jpeg",
    tag: "Road Shipment",
    tagColor: "bg-amber-100 text-amber-700",
    icon: Truck,
    description:
      "Own fleet providing reliable inland container movement, last-mile delivery, and cross-border road shipment between countries.",
    overview: [
      "B R Cargo Solutions provides reliable and flexible Road Container Movement solutions for domestic and international cargo movement. Our services are designed to ensure smooth transportation from the point of origin directly to the required destination, including warehouses, factories, offices, stores, and customer locations.",
      "We offer customized transportation solutions based on cargo requirements, delivery timelines, and destination, ensuring efficient coordination and timely delivery.",
    ],
    featuresHeading: "Our Road Container Movement Services Include",
    features: [
      "Door-to-Door Road Transportation",
      "Factory-to-Warehouse & Warehouse-to-Customer Delivery",
      "Cross-Border Road Transportation",
      "Full Truck Load (FTL) Services",
      "Port-to-Destination Container Movement",
      "Customized Routing & Transportation Solutions",
    ],
    process: [
      {
        step: "01",
        title: "Vehicle Allocation",
        desc: "Dispatching a suitable trailer/truck to the port, factory or container yard.",
      },
      {
        step: "02",
        title: "Container Pickup",
        desc: "Container mounting and seal verification at pickup point.",
      },
      {
        step: "03",
        title: "Road Transit",
        desc: "Monitored highway transport with regular client updates.",
      },
      {
        step: "04",
        title: "Destination Offloading",
        desc: "Safe arrival, offloading, and delivery confirmation.",
      },
    ],
  },
};
