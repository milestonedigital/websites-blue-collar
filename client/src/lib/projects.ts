export interface Project {
  id: number;
  name: string;
  category: string;
  url: string;
  description: string;
  screenshot: string;
}

const BASE = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028378508/";

export const projects: Project[] = [
  { id: 1,  name: "BugOut Pest Control",              category: "Pest Control",      url: "https://florida.bugoutservice.com/",                     description: "Full-service pest control company in Florida with lead capture and service booking.",                              screenshot: BASE + "wZNeURfuqeEZjgJz.png" },
  { id: 2,  name: "WM Painting & More",                category: "Painting",          url: "https://www.wmpaintingandmore.com/",                     description: "Professional painting contractor in Massachusetts with portfolio gallery and quote request.",                       screenshot: BASE + "UObVloDlRhBCIAWq.png" },
  { id: 3,  name: "Miami Mobile Car Detailers",        category: "Auto Detailing",    url: "https://www.miamimobilecardetailers.com/",               description: "Mobile auto detailing service in Miami with online booking and service packages.",                                  screenshot: BASE + "odjypnAZlWRIVutJ.png" },
  { id: 4,  name: "Augusta Lawn Care Services",        category: "Lawn Care",         url: "https://www.augustalawncareservices.com/largo",          description: "Lawn care and maintenance company with service area pages and online scheduling.",                                  screenshot: BASE + "JnzdaiIvpDUwUBEB.png" },
  { id: 5,  name: "Seattle Concrete Patio",            category: "Concrete",          url: "https://seattleconcretepatio.com/",                      description: "Concrete patio specialists in Seattle with project gallery and free estimates.",                                     screenshot: BASE + "IEsjCDAhnCzfgQhA.png" },
  { id: 6,  name: "Champion & Nash HVAC",              category: "HVAC",              url: "https://championandnash.com/",                           description: "HVAC installation and repair in Houston with emergency service and financing options.",                              screenshot: BASE + "CqvwdSNrItphhkLJ.png" },
  { id: 7,  name: "Mr. Appliance",                     category: "Appliance Repair",  url: "https://www.mrappliance.com/",                           description: "Appliance repair franchise with nationwide location finder and service scheduling.",                                screenshot: BASE + "zTPgJxrsvqWpsjTV.png" },
  { id: 8,  name: "FineLineWood",                      category: "Carpentry",         url: "https://finelinewood.com/",                              description: "Custom carpentry and woodworking with portfolio showcase and consultation booking.",                                  screenshot: BASE + "IgHZeMJYMCMSQtQI.png" },
  { id: 9,  name: "Xtreme Cleaning SD",                category: "Carpet Cleaning",   url: "https://xtremecleaningsd.com/",                          description: "Carpet and upholstery cleaning service in San Diego with online quotes.",                                            screenshot: BASE + "ZKqsMARHwvaHoNoM.png" },
  { id: 10, name: "FireSafe Chimney",                  category: "Chimney",           url: "https://www.firesafechimneysweepingandrepair.com/",      description: "Chimney sweeping and repair company with safety inspection and maintenance services.",                               screenshot: BASE + "CWzrGBnffAyUPgJf.png" },
  { id: 11, name: "Miller & Long Concrete",            category: "Concrete",          url: "https://www.millerandlong.com/",                         description: "Large commercial concrete construction company serving the Mid-Atlantic region.",                                    screenshot: BASE + "XycRyhxLRMoRDsEE.png" },
  { id: 12, name: "Bechtel",                           category: "Construction",      url: "https://www.bechtel.com/",                               description: "Global engineering, construction, and project management company.",                                                  screenshot: BASE + "yUIzAyBzsddUaGSx.png" },
  { id: 13, name: "Miami Deck Builders",               category: "Deck Building",     url: "https://miamideckbuilders.com/",                         description: "Custom deck design and construction in Miami with free consultations.",                                               screenshot: BASE + "giEGdwMLaerDOjbC.png" },
  { id: 14, name: "Daley's Drywall",                   category: "Drywall",           url: "https://daleysdrywall.com/",                             description: "Full-service drywall contracting with metal framing, plaster, and acoustical ceilings.",                             screenshot: BASE + "TRtKeEliJPZGbPBg.png" },
  { id: 15, name: "Roll-Off Dumpster Direct",          category: "Dumpster Rental",   url: "https://www.rolloffdumpsterdirect.com/",                 description: "Dumpster rental service for various waste types with instant online ordering.",                                       screenshot: BASE + "mXSdyZPiKvcJSOOK.png" },
  { id: 16, name: "Express Electrical Services",       category: "Electrical",        url: "https://expresselectricalservices.com/",                 description: "Licensed electricians in Los Angeles with 24/7 emergency service and upfront pricing.",                              screenshot: BASE + "qhUOAlgRMBJPnYfh.png" },
  { id: 17, name: "Plateau Excavation",                category: "Excavation",        url: "https://plateauexcavation.com/",                         description: "Excavation and infrastructure company with 40+ years of construction expertise.",                                    screenshot: BASE + "EzdNoUPoLbGbTxHo.png" },
  { id: 18, name: "Viking Fence",                      category: "Fencing",           url: "https://www.vikingfence.com/",                           description: "Fence installation company trusted in Texas since 1972 with all fence types.",                                        screenshot: BASE + "jVtEQwkdPhMOWItW.png" },
  { id: 19, name: "Karndean Flooring",                 category: "Flooring",          url: "https://www.karndean.com/en-us/floors/",                 description: "Premium luxury vinyl flooring for residential and commercial spaces with design visualizer.",                         screenshot: BASE + "nREaYVepsihHSYJk.png" },
  { id: 20, name: "A1 Garage Door Service",            category: "Garage Door",       url: "https://a1garage.com/",                                  description: "Expert garage door repair and installation with same-day service guarantee.",                                         screenshot: BASE + "mggarYfSzBkUtsvw.webp" },
  { id: 21, name: "JHL Constructors",                  category: "Construction",      url: "https://www.jhlconstructors.com/",                       description: "Construction company focused on building and infrastructure projects in Colorado.",                                   screenshot: BASE + "HQTfzNWeaQqmztky.png" },
  { id: 22, name: "Rain Flow Gutters",                 category: "Gutters",           url: "https://rainflowgutters.com/",                           description: "High-performance gutter systems protecting homes from water damage and enhancing curb appeal.",                       screenshot: BASE + "TOkYgsuHGenfIpqw.png" },
  { id: 23, name: "Handyman On Purpose",               category: "Handyman",          url: "https://handymanonpurpose.com/",                         description: "Comprehensive handyman services for home repair and improvement projects.",                                            screenshot: BASE + "bUWWkkKZnplSdDqI.png" },
  { id: 24, name: "Residential Inspector of America",  category: "Home Inspection",   url: "https://www.atlanta.residentialinspector.com/",          description: "Certified home inspection services in Atlanta for homes, condos, and townhomes.",                                    screenshot: BASE + "OEYOecLnClqwAAoe.png" },
  { id: 25, name: "GEE! Heating & Air",                category: "HVAC",              url: "https://geehvac.com/",                                   description: "Expert HVAC and plumbing services including repairs, installations, and maintenance.",                                screenshot: BASE + "cVAmBFOSzSLWgTmW.png" },
  { id: 26, name: "Anderson Insulation",               category: "Insulation",        url: "https://www.andersoninsul.com/",                         description: "Expert insulation services in New England with 75 years of industry experience.",                                    screenshot: BASE + "VYXTXihGzqqxatsu.png" },
  { id: 27, name: "EcoDump Junk Removal",              category: "Junk Removal",      url: "https://ecodumpjunkremoval.com/",                        description: "Full-service junk removal in Charleston, SC — we make junk disappear.",                                              screenshot: BASE + "DFoZIkWFIpDVtWOQ.png" },
  { id: 28, name: "Highlands Land",                    category: "Real Estate",       url: "https://www.highlandslandscaping.com/",                  description: "Residential land and property listings with a focus on homes and acreage.",                                           screenshot: BASE + "owwaSwFLnBtNkXIR.png" },
  { id: 29, name: "VIPROUS Moving",                    category: "Moving",            url: "https://vippromoving.com/",                              description: "Trusted moving company offering residential, commercial, long-distance, and storage services.",                       screenshot: BASE + "TVktLTMjjyQqSUOM.png" },
  { id: 30, name: "Peralta Painters",                  category: "Painting",          url: "https://www.peraltapainters.com/",                       description: "Exterior painting experts proudly serving the Chicagoland area with free estimates.",                                 screenshot: BASE + "flodoTvZIcpMYYXd.png" },
  { id: 31, name: "Orkin",                             category: "Pest Control",      url: "https://www.orkin.com/",                                 description: "National pest control leader with customized treatment plans and service guarantees.",                                screenshot: BASE + "yYFSboXczeNXtuOA.png" },
  { id: 32, name: "Mr. Rooter Plumbing",               category: "Plumbing",          url: "https://www.mrrooter.com/",                              description: "Expert residential and commercial plumbing with 24/7 emergency service.",                                             screenshot: BASE + "PfKmBOzOZLllXIMe.png" },
  { id: 33, name: "Premier Pools & Spas",              category: "Pool Building",     url: "https://premierpoolsandspas.com/",                       description: "Custom inground pool and spa design and construction for residential clients.",                                       screenshot: BASE + "YYKVOEkZaXJisQJN.png" },
  { id: 34, name: "Men In Kilts",                      category: "Pressure Washing",  url: "https://www.meninkilts.com/",                            description: "Residential and commercial exterior cleaning including window and gutter services.",                                  screenshot: BASE + "tTnPUtSeHCgdPjOX.png" },
  { id: 35, name: "Normandy Remodeling",               category: "Remodeling",        url: "https://normandyremodeling.com/",                        description: "Home additions and remodeling services with award-winning design team.",                                              screenshot: BASE + "YcGYnoIYFbGPHZoG.png" },
  { id: 36, name: "AJ Property Restoration",          category: "Restoration",       url: "https://ajrestores.com/",                                description: "24/7 fire and water damage restoration services in Southeast Wisconsin.",                                              screenshot: BASE + "aPOnFVhjptpyPTfx.png" },
  { id: 37, name: "O'Hara's Son Roofing",              category: "Roofing",           url: "https://www.oharasson.com/",                             description: "Commercial roofing services with nationwide coverage and expert craftsmanship.",                                      screenshot: BASE + "BYfflyRNzRcaRebr.png" },
  { id: 38, name: "Blue Raven Solar",                  category: "Solar",             url: "https://blueravensolar.com/",                            description: "Hassle-free solar panel installation with $0 down and guaranteed savings.",                                           screenshot: BASE + "ReInrjmbzWjqGybG.png" },
  { id: 39, name: "Cancos Tile & Stone",               category: "Tile",              url: "https://cancostileandstone.com/",                        description: "Premium tile and stone retailer with 12 showrooms for residential and commercial projects.",                         screenshot: BASE + "WDViDwbYDGCLOQyZ.webp" },
  { id: 40, name: "King Tree Services",                category: "Tree Service",      url: "https://kingtreeservicesllc.com/",                       description: "Professional tree care, trimming, and removal with gardening services.",                                              screenshot: BASE + "WeMgDjTjxZAGfKMj.png" },
  { id: 41, name: "Schneider National",                category: "Trucking",          url: "https://schneider.com/",                                 description: "National logistics and transportation solutions for shippers and carriers.",                                          screenshot: BASE + "PYwfWUWqkYDSmNTc.webp" },
  { id: 42, name: "Shine Window & Exterior Cleaning",  category: "Window Cleaning",   url: "https://shine-windowcleaning.com/",                      description: "Professional exterior home cleaning including windows, roofs, and gutters.",                                         screenshot: BASE + "aYZUZiYljIrKtZii.png" },
];

export const categories = [
  "All",
  "HVAC",
  "Plumbing",
  "Roofing",
  "Landscaping",
  "Painting",
  "Electrical",
  "Concrete",
  "Pest Control",
  "Carpentry",
  "Flooring",
  "Construction",
  "Remodeling",
  "Solar",
  "Other",
];

export const categoryMap: Record<string, string[]> = {
  "All": [],
  "HVAC": ["HVAC"],
  "Plumbing": ["Plumbing"],
  "Roofing": ["Roofing"],
  "Landscaping": ["Landscaping", "Lawn Care"],
  "Painting": ["Painting"],
  "Electrical": ["Electrical"],
  "Concrete": ["Concrete"],
  "Pest Control": ["Pest Control"],
  "Carpentry": ["Carpentry", "Deck Building"],
  "Flooring": ["Flooring", "Tile", "Carpet Cleaning"],
  "Construction": ["Construction", "General Contractor", "Remodeling", "Drywall"],
  "Remodeling": ["Remodeling"],
  "Solar": ["Solar"],
  "Other": ["Auto Detailing", "Appliance Repair", "Chimney", "Dumpster Rental", "Excavation", "Fencing", "Garage Door", "Gutters", "Handyman", "Home Inspection", "Insulation", "Junk Removal", "Moving", "Pool Building", "Pressure Washing", "Restoration", "Tree Service", "Trucking", "Window Cleaning", "Real Estate"],
};
