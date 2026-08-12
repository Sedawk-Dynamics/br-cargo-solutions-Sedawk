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
  overview: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: string[];
}

export const servicesList = [
  { label: "Global Air Freight", slug: "air-freight" },
  { label: "Global Ocean Freight", slug: "ocean-freight" },
  { label: "Multimodal Transport", slug: "multimodal-transport" },
  { label: "Customs Clearance & Compliance", slug: "customs-clearance" },
  { label: "Door-to-Door Logistics", slug: "door-to-door" },
  { label: "Warehousing & Distribution", slug: "warehousing-distribution" },
  { label: "DGFT & Export Documentation", slug: "dgft-export" },
  { label: "Road Container Movement", slug: "road-container-movement" },
];

export const servicesData: Record<string, ServiceDetail> = {
  "air-freight": {
    slug: "air-freight",
    title: "Global Air Freight",
    subtitle: "Time-Critical & Express Air Cargo Solutions",
    image: "/air-freight.jpeg",
    tag: "Air Freight",
    tagColor: "bg-blue-100 text-blue-700",
    icon: Plane,
    description:
      "High-speed, time-definite air cargo services for urgent, high-value, or perishable goods connecting major hubs worldwide.",
    overview:
      "Our Global Air Freight service provides reliable, time-sensitive cargo transportation across major international trade lanes. Whether you need express airport-to-airport shipping or door-to-door delivery, we coordinate space allocation with top commercial and cargo airlines to ensure your freight arrives safely and on schedule.",
    features: [
      "Airport-to-Airport & Door-to-Door delivery options",
      "Consolidated (LCL) and Direct Express charter flights",
      "Temperature-controlled & hazardous cargo handling",
      "Integrated customs clearance and airport transfers",
      "Real-time shipment tracking & status updates",
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
        desc: "Secured flight booking with top-tier global airline carriers.",
      },
      {
        step: "04",
        title: "Import Clearance & Final Delivery",
        desc: "Destination customs clearance and express last-mile delivery.",
      },
    ],
    benefits: [
      "Fastest transit times for time-sensitive cargo",
      "High security standards for high-value goods",
      "Flexible departure schedules across global hubs",
    ],
  },
  "ocean-freight": {
    slug: "ocean-freight",
    title: "Global Ocean Freight",
    subtitle: "FCL & LCL Ocean Container Shipping",
    image: "/ocean-frieght.jpeg",
    tag: "Ocean Freight",
    tagColor: "bg-[#0F2C59]/10 text-[#0F2C59]",
    icon: Ship,
    description:
      "Full Container Load (FCL) and Less than Container Load (LCL) shipping options across all major global sea routes.",
    overview:
      "BR Cargo Solutions offers comprehensive ocean freight services connecting major international ports. We manage Full Container Load (FCL) for high-volume shipments as well as Less than Container Load (LCL) consolidation for smaller freight, providing cost-effective and dependable sea transport with global carrier contracts.",
    features: [
      "FCL (Full Container Load) & LCL (Less than Container Load)",
      "Breakbulk, Reefer, and Over-Dimensional Container shipping",
      "Port-to-Port & Door-to-Door ocean transport",
      "Customs documentation & port handling at origin & destination",
      "Flexible scheduling with leading ocean shipping lines",
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
    benefits: [
      "Most economical option for bulk and heavy cargo",
      "Extensive global port network and vessel options",
      "High capacity for standard and specialized container types",
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
    overview:
      "Our Multimodal Transport solutions integrate sea, air, rail, and road networks under a single transport document. By strategically combining transport modes, we optimize routing to achieve the perfect balance between speed and cost for international supply chains.",
    features: [
      "Single Bill of Lading for entire journey",
      "Integrated Sea-Air & Sea-Road transport combinations",
      "Customized route optimization for time & cost efficiency",
      "Seamless hub-to-hub transfers without cargo handling delays",
      "End-to-end cargo visibility and tracking",
    ],
    process: [
      {
        step: "01",
        title: "Route Planning",
        desc: "Selecting optimal mode combination based on speed & budget.",
      },
      {
        step: "02",
        title: "First-Leg Transport",
        desc: "Initial transit via ocean or land to intermediate hub.",
      },
      {
        step: "03",
        title: "Hub Transfer",
        desc: "Smooth intermodal transfer with single documentation.",
      },
      {
        step: "04",
        title: "Final-Leg Delivery",
        desc: "Express air or road delivery to final destination.",
      },
    ],
    benefits: [
      "Optimized freight costs compared to pure air transport",
      "Faster transit times compared to pure ocean freight",
      "Simplified management under a single contract",
    ],
  },
  "customs-clearance": {
    slug: "customs-clearance",
    title: "Customs Clearance & Compliance",
    subtitle: "Expert Tariff Classification & Regulatory Filing",
    image: "/custom-clearance.jpeg",
    tag: "Customs",
    tagColor: "bg-purple-100 text-purple-700",
    icon: ShieldCheck,
    description:
      "Complete management of complex international customs paperwork, duty structures, tariff classifications, and regulatory compliance.",
    overview:
      "Navigating international customs regulations requires technical expertise and precision. Our experienced customs brokers handle import and export customs entries, HSN classification, duty structure assessments, and regulatory approvals to ensure your goods pass smoothly through port controls without delay.",
    features: [
      "Import & Export Customs Documentation & Filing",
      "Harmonized System (HSN) Code Classification & Duty Valuation",
      "Port Customs Clearance at major sea ports, airports & ICDs",
      "Assistance with regulatory permits, FSSAI, BIS & Plant Quarantine",
      "Post-clearance compliance & duty refund advisory",
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
        desc: "Submitting Bill of Entry / Shipping Bill to Customs Portal.",
      },
      {
        step: "03",
        title: "Assessment & Inspection",
        desc: "Managing duty calculation and physical inspection if flagged.",
      },
      {
        step: "04",
        title: "Out of Charge (OOC)",
        desc: "Obtaining final clearance for port release and dispatch.",
      },
    ],
    benefits: [
      "Minimized risk of port demurrage and storage penalties",
      "Full compliance with national trade regulations",
      "Optimized duty structures and tariff benefits",
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
    overview:
      "Door-to-Door Logistics takes the hassle out of global shipping by handling every step of the supply chain under one roof. We collect cargo directly from the manufacturer’s facility, handle export customs, manage international freight, clear import customs, and deliver straight to the recipient’s door.",
    features: [
      "Factory pickup, packing, and origin loading",
      "International air or ocean freight management",
      "Complete export & import customs clearance",
      "Local inland transportation to destination doorstep",
      "Single invoice and dedicated single point of contact",
    ],
    process: [
      {
        step: "01",
        title: "Origin Pickup",
        desc: "Direct collection from supplier factory floor.",
      },
      {
        step: "02",
        title: "Export & Freight",
        desc: "Customs clearance and international freight transit.",
      },
      {
        step: "03",
        title: "Destination Clearance",
        desc: "Customs entry and duty settlement at port of entry.",
      },
      {
        step: "04",
        title: "Doorstep Delivery",
        desc: "Final truck transport and delivery to buyer address.",
      },
    ],
    benefits: [
      "Complete peace of mind with single-source accountability",
      "Eliminates coordination between multiple freight vendors",
      "Predictable pricing and transparent shipment timeline",
    ],
  },
  "warehousing-distribution": {
    slug: "warehousing-distribution",
    title: "Warehousing & Distribution",
    subtitle: "Secure Global Storage & Inventory Management",
    image: "/warehousing-distribution.jpeg",
    tag: "Warehouse",
    tagColor: "bg-green-100 text-green-700",
    icon: Building2,
    description:
      "Secure global storage and consolidation hubs equipped for inventory management and efficient cross-docking before final distribution.",
    overview:
      "Our housing & Distribution services provide flexible, secure storage solutions near major logistics hubs and ports. Equipped with modern inventory management tools and round-the-clock security, we support storage, cross-docking, consolidation, and last-mile distribution.",
    features: [
      "Bonded & Non-Bonded warehousing facilities",
      "Inventory management, pick-and-pack & kitting services",
      "Cross-docking and cargo consolidation",
      "24/7 CCTV surveillance & temperature-controlled zones",
      "Integrated transport network for nationwide distribution",
    ],
    process: [
      {
        step: "01",
        title: "Cargo Inwarding",
        desc: "Receiving, inspecting, and logging inventory into warehouse system.",
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
    benefits: [
      "Flexible storage capacity tailored to seasonal demands",
      "Reduced order lead times and efficient inventory turnover",
      "Safe and compliant handling of commercial inventory",
    ],
  },
  "dgft-export": {
    slug: "dgft-export",
    title: "DGFT & Export Documentation",
    subtitle: "Government Incentive Schemes & Trade Licensing",
    image: "/dgft-export.jfif",
    tag: "Documentation",
    tagColor: "bg-rose-100 text-rose-700",
    icon: FileCheck,
    description:
      "Expert handling of DGFT services, import/export licensing, duty drawback, and all regulatory export documentation requirements.",
    overview:
      "BR Cargo Solutions provides specialized consultancy and execution for DGFT (Directorate General of Foreign Trade) licenses and trade documentation. We assist exporters and importers in claiming government incentive schemes, securing licenses, and filing compliant trade documents.",
    features: [
      "Import Export Code (IEC) registration & modification",
      "Advance Authorization & EPCG scheme assistance",
      "Duty Drawback, RoDTEP & RoSCTL claim filing",
      "Certificate of Origin (COO) issuance (Preferential & Non-Preferential)",
      "DGFT license redemption & compliance auditing",
    ],
    process: [
      {
        step: "01",
        title: "Requirement Review",
        desc: "Analyzing export/import profile and applicable DGFT schemes.",
      },
      {
        step: "02",
        title: "Documentation Prep",
        desc: "Compiling required applications, invoices, and certificates.",
      },
      {
        step: "03",
        title: "Government Filing",
        desc: "Online submission to DGFT portal and liaison with authorities.",
      },
      {
        step: "04",
        title: "License Issuance & Benefit Realization",
        desc: "Securing approved license or incentive payout for client.",
      },
    ],
    benefits: [
      "Maximizes financial benefits from government export schemes",
      "Ensures 100% regulatory compliance with trade authorities",
      "Saves valuable administrative time for foreign trade firms",
    ],
  },
  "road-container-movement": {
    slug: "road-container-movement",
    title: "Road Container Movement",
    subtitle: "Reliable Fleet for Port Drayage & Inland Freight",
    image: "/road-container-movement.jfif",
    tag: "Road Freight",
    tagColor: "bg-amber-100 text-amber-700",
    icon: Truck,
    description:
      "Own fleet providing reliable inland container movement, last-mile delivery, and cross-border road freight between countries.",
    overview:
      "Our Road Container Movement service connects sea ports, inland container depots (ICDs), and customer facilities with a fleet of heavy-duty trailers and trucks. We specialize in port drayage, container haulage, and long-distance road transport with full GPS tracking.",
    features: [
      "20ft & 40ft High Cube Container Trailers",
      "Port Drayage and ICD to Factory transport",
      "GPS-enabled real-time vehicle & container tracking",
      "Experienced drivers trained in cargo safety and border transit",
      "Over-Dimensional Cargo (ODC) transport capability",
    ],
    process: [
      {
        step: "01",
        title: "Vehicle Allocation",
        desc: "Dispatching suitable trailer/truck to port or container yard.",
      },
      {
        step: "02",
        title: "Container Pickup",
        desc: "Container mounting and seal verification at port gate.",
      },
      {
        step: "03",
        title: "Inland Transit",
        desc: "GPS-monitored highway transport with live client updates.",
      },
      {
        step: "04",
        title: "Destination Offloading",
        desc: "Safe arrival, container offloading, and empty return.",
      },
    ],
    benefits: [
      "Reliable, scheduled ground transportation",
      "Full visibility of vehicle movement via GPS",
      "Direct connection between ports, ICDs, and warehouses",
    ],
  },
};
