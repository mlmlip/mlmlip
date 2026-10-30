/**
 * Factory Hardcore Technical Specifications & Quality Assurance Database
 * Beautychain Limited — MLM Lip Manufacturing Base
 * 
 * Standards Reference:
 * - ISO 22716:2007 (Cosmetics GMPc)
 * - US FDA MoCRA 2024 (Modernization of Cosmetics Regulation Act)
 * - EU Regulation (EC) No 1223/2009 & EU 2023/2055 (Microplastic-Free)
 * - USP 51/61/62 Pharmacopeia Microbial & Preservative Standards
 */

export interface ViscosityParameter {
  name: string;
  category: string;
  testMethod: string;
  spindleAndSpeed: string;
  viscosityMin_cP: number;
  viscosityMax_cP: number;
  thixotropicIndex?: string;
  specificGravity_g_cm3: string;
  keySensoryTrait: string;
  additionalParameters?: Record<string, string>;
}

export interface StabilityTestProtocol {
  testCode: string;
  name: string;
  testCondition: string;
  duration: string;
  acceptanceCriteria: string;
  standardReference: string;
  failureAction: string;
}

export interface ColorToleranceStandard {
  instrumentation: string;
  standardIlluminant: string;
  observerAngle: string;
  colorSpace: string;
  maxDeltaE: number;
  metamerismIndexLimit: number;
  hegmanGrindGaugeFineness_um: number;
  qualityControlRule: string;
}

export interface PilotBatchSpecification {
  seriesPattern: string;
  moqUnits: number;
  samplingTurnaroundDays: number;
  samplingFeeCreditedBackOnBulk: boolean;
  cleanroomGrade: string;
  retentionProtocol: string;
  mandatoryReleaseDocuments: string[];
}

export const factoryTechnicalSpecs = {
  meta: {
    legalEntity: "Beautychain Limited",
    operatingPlant: "Huizhou Cleanroom Industrial Hub / Shenzhen R&D Innovation Base",
    brandDomain: "https://mlmlip.com",
    exportMarkets: ["US", "CA", "GB", "EU", "AU"],
    qualitySystem: "ISO 22716:2007 (GMPc) & US FDA MoCRA 2024",
    lastAuditedVersion: "2026.Q4"
  },

  rheologyAndViscosity: {
    lipGloss: {
      name: "High-Impact Non-Sticky Lip Gloss",
      category: "lip-gloss",
      testMethod: "Brookfield RVT / DV2T Rotational Viscometer @ 25°C ± 0.5°C",
      spindleAndSpeed: "Spindle #4 @ 20 RPM",
      viscosityMin_cP: 3800,
      viscosityMax_cP: 5200,
      thixotropicIndex: "2.4 – 2.8 (Shear-thinning matrix: slips easily during application, stays cushion-firm in rest)",
      specificGravity_g_cm3: "0.96 – 1.02",
      keySensoryTrait: "High glass-like refraction, zero tackiness, non-drip suspension of mica",
      additionalParameters: {
        "Tackiness Rating": "< 1.5 / 5.0 on calibrated probe tack tester",
        "Refractive Index (nD20)": "1.475 – 1.490"
      }
    },
    lipOil: {
      name: "Hybrid Peptide & Botanical Squalane Lip Oil",
      category: "lip-oil",
      testMethod: "Brookfield DV2T Rotational Viscometer @ 25°C ± 0.5°C",
      spindleAndSpeed: "Spindle #3 @ 30 RPM",
      viscosityMin_cP: 2400,
      viscosityMax_cP: 3600,
      thixotropicIndex: "1.8 – 2.2 (Instant self-leveling barrier coat)",
      specificGravity_g_cm3: "0.92 – 0.98",
      keySensoryTrait: "Nutritive oil glide, rapid absorption barrier, high wetting index",
      additionalParameters: {
        "Contact Angle on Keratin": "18.5° (superior lip surface adherence)",
        "Active Infusion Cap": "Supports up to 5% active botanical oils & oil-soluble peptides"
      }
    },
    lipMud: {
      name: "Velvet Cloud Aerated Lip Mud & Clay Tint",
      category: "lip-mud",
      testMethod: "Brookfield DV2T with Helipath Stand @ 25°C ± 0.5°C",
      spindleAndSpeed: "Spindle T-C @ 10 RPM",
      viscosityMin_cP: 28000,
      viscosityMax_cP: 35000,
      thixotropicIndex: "3.2 – 3.8 (High plastic yield value: holds texture without flowing)",
      specificGravity_g_cm3: "0.88 – 0.94",
      keySensoryTrait: "Airy mousse-marshmallow feel, blurred soft-focus line blurring, non-drying",
      additionalParameters: {
        "Yield Stress (Casson)": "420 – 580 dynes/cm²",
        "Elastomer Network": "Crosslinked silicone polymer micro-sponge cushion"
      }
    },
    bulletLipstick: {
      name: "Signature Satin & Velvet Matte Bullet Lipstick",
      category: "lipstick",
      testMethod: "ASTM D127 Drop Melting Point & ASTM D1321 Needle Penetration @ 25°C",
      spindleAndSpeed: "Solid wax-crystal dispersion penetrometer",
      viscosityMin_cP: 0, // Solid state
      viscosityMax_cP: 0,
      specificGravity_g_cm3: "0.94 – 0.99",
      keySensoryTrait: "Crisp bullet molding, silky glide, high-temperature structural stability",
      additionalParameters: {
        "Drop Melting Point": "68°C – 74°C",
        "Needle Penetration (100g / 5s)": "45 – 58 dmm",
        "Breaking Strength (Cantilever load)": "280 – 350 g (zero breakage in bullet socket)"
      }
    },
    lipLiner: {
      name: "Precision Glide Waterproof Lip Liner",
      category: "lip-liner",
      testMethod: "Shore D Hardness & Horizontal Draw Friction Coefficient",
      spindleAndSpeed: "Durometer Shore D @ 25°C",
      viscosityMin_cP: 0,
      viscosityMax_cP: 0,
      specificGravity_g_cm3: "0.98 – 1.05",
      keySensoryTrait: "High pigment transfer, skip-free contour line, smudge-proof barrier",
      additionalParameters: {
        "Shore D Hardness": "44 – 52",
        "Melting Point": "62°C – 66°C",
        "Dynamic Friction Coefficient": "0.14 – 0.18"
      }
    },
    lipMask: {
      name: "Barrier Repair Ceramide Overnight Lip Mask",
      category: "lip-mask",
      testMethod: "Brookfield DV2T @ 25°C ± 0.5°C",
      spindleAndSpeed: "Spindle #7 @ 5 RPM",
      viscosityMin_cP: 48000,
      viscosityMax_cP: 62000,
      thixotropicIndex: "3.5 – 4.2",
      specificGravity_g_cm3: "0.95 – 1.01",
      keySensoryTrait: "Thick occlusive salve that melts to liquid balm at physiological body temperature",
      additionalParameters: {
        "Skin Contact Liquefaction Point": "33.5°C – 35.0°C",
        "8-Hour TEWL (Moisture Loss) Suppression": "> 42% barrier protection"
      }
    }
  },

  stabilityStressTesting: [
    {
      testCode: "STAB-TH-45C",
      name: "48-Hour Forced Convection Thermal Oven Stress",
      testCondition: "45°C ± 1°C in constant-temperature forced convection oven chamber",
      duration: "48 Hours continuous exposure (equivalent to 6 months ambient storage)",
      acceptanceCriteria: "Zero phase separation, zero oil syneresis (sweating), viscosity variance < ±5%, zero color/odor drift",
      standardReference: "ISO/TR 18811:2018 Cosmetics Stability Testing & GMPC Protocol",
      failureAction: "Rebalance emulsifier / stabilizer ratio and restart 48h aging protocol"
    },
    {
      testCode: "STAB-FT-15C",
      name: "Thermal Shock Freeze-Thaw Cycling (-15°C to +25°C)",
      testCondition: "3 consecutive cycles: -15°C chamber (12h) immediately followed by +25°C ambient recovery (12h)",
      duration: "72 Hours total (3 full cycles)",
      acceptanceCriteria: "Zero crystal precipitation, zero wax bloom, zero gel syneresis, complete thixotropic viscosity recovery",
      standardReference: "Colipa Cosmetics Stability Guidelines",
      failureAction: "Optimize crystal modifier and ester polarity profile"
    },
    {
      testCode: "STAB-CENT-4000",
      name: "High-G Centrifugal Phase Separation Test",
      testCondition: "4,000 RPM (Relative Centrifugal Force RCF ~ 1,800 x g) @ 25°C",
      duration: "30 Minutes continuous centrifugal force",
      acceptanceCriteria: "Zero pigment sedimentation, zero solvent phase stratification, zero meniscus oil bleed",
      standardReference: "ASTM D3707 & ASTM D4007 Standard Test Methods",
      failureAction: "Increase rheology modifier concentration or pigment wetting dispersant"
    },
    {
      testCode: "STAB-UV-72H",
      name: "Accelerated Solar Xenon Arc Photostability Test",
      testCondition: "72 Hours under 550 W/m² simulated daylight (CIE D65 spectral distribution)",
      duration: "72 Hours",
      acceptanceCriteria: "Spectrophotometric Delta E*ab < 1.0, zero dye fading, zero container polymer embrittlement",
      standardReference: "ICH Q1B Photostability Guidelines adapted for prestige cosmetics",
      failureAction: "Incorporate photostable UV absorbers (e.g., Octocrylene or clean antioxidant tocopherol synergies)"
    },
    {
      testCode: "STAB-PKG-12W",
      name: "Primary Packaging Interaction & Evaporation Stress",
      testCondition: "40°C ± 1°C / 75% RH in final production primary packaging (acrylic, zamac, aluminum, PETG)",
      duration: "12 Weeks (Formal pre-market release gate)",
      acceptanceCriteria: "Total weight loss < 0.5%, zero stress-cracking on neck/threads, zero wiper wiper seal erosion",
      standardReference: "ISO 22716 Cleanroom Quality Control Protocol",
      failureAction: "Review resin compatibility or upgrade neck wiper seal gasket material"
    }
  ],

  colorimetricQualityControl: {
    instrumentation: "Konica Minolta CM-2600d / X-Rite Ci64 Sphere Spectrophotometer",
    standardIlluminant: "CIE Standard Illuminant D65 (Daylight 6500K) + Illuminant A (Tungsten 2856K) for Metamerism Check",
    observerAngle: "10° Standard CIE 1964 Observer",
    colorSpace: "CIE L*a*b* / CIE L*C*h°",
    maxDeltaE: 0.5,
    metamerismIndexLimit: 0.3,
    hegmanGrindGaugeFineness_um: 10,
    qualityControlRule: "All batches must score Delta E*ab ≤ 0.5 against approved master lab sample under D65 illuminant before bulk filling clearance is granted."
  },

  pilotBatchStandards: {
    seriesPattern: "BC-LIP-PILOT-500-[CATEGORY_CODE]-[YYYYMMDD]-[SEQ_NUM]",
    categoryCodes: {
      "LG": "High-Impact Lip Gloss",
      "LO": "Skinified Peptide Lip Oil",
      "LM": "Velvet Cloud Lip Mud",
      "LS": "Bullet Lipstick",
      "LL": "Precision Lip Liner",
      "MK": "Barrier Lip Mask"
    },
    exampleBatchCode: "BC-LIP-PILOT-500-LG-20261030-01",
    moqUnits: 500,
    samplingTurnaroundDays: 7,
    samplingFeeCreditedBackOnBulk: true,
    cleanroomGrade: "Class 100,000 (ISO 8) HEPA-filtered cleanroom with positive pressure (+15 Pa)",
    retentionProtocol: "5 units stored at 20°C ambient room temperature + 2 units stored in 40°C/75% RH stability chamber for 36 months",
    mandatoryReleaseDocuments: [
      "Batch-Specific Certificate of Analysis (CoA) with Spectrophotometric Delta E",
      "USP 51 Preservative Antimicrobial Efficacy Testing (PET) Verification",
      "USP 61/62 Microbial Limit Testing (TAMC < 100 CFU/g, TYMC < 10 CFU/g, zero E. coli, S. aureus, P. aeruginosa, C. albicans)",
      "ICP-MS Heavy Metal Impurity Audit (Pb < 2 ppm, As < 1 ppm, Hg < 0.1 ppm, Cd < 0.5 ppm)",
      "FDA MoCRA 2024 Product Listing Formulation Breakdown Draft",
      "EU CPNP Notification Regulatory Verification & INCI Checklist"
    ]
  },

  cleanroomAndFacilityAudit: {
    certifications: [
      {
        id: "ISO22716",
        name: "ISO 22716:2007 Cosmetics Good Manufacturing Practice (GMPc)",
        auditAuthority: "SGS / Bureau Veritas",
        scope: "Cosmetics formulation, automated filling, and secondary packaging"
      },
      {
        id: "US_FDAMoCRA",
        name: "US FDA MoCRA 2024 Cosmetic Facility Registration",
        status: "Active registered facility",
        scope: "Export of lip color and lip care products to North America"
      },
      {
        id: "EU_CPNP",
        name: "EU Regulation (EC) No 1223/2009 & CPNP Safety Assessment",
        status: "Full PIF (Product Information File) and CPSR toxicological dossier support",
        scope: "Compliant distribution across 27 EU member states + UK"
      }
    ],
    cleanroomClass: "Class 100,000 (ISO Class 8)",
    hvacHEPA: "Terminal H13 HEPA filters (99.97% retention @ 0.3 µm)",
    differentialPressure_Pa: 15,
    waterPurification: "Two-stage Reverse Osmosis (RO) + Continuous Electro-Deionization (EDI) producing USP Purified Water (< 1.3 µS/cm conductivity @ 25°C)",
    monthlyProductionCapacity_units: 500000
  }
};

export default factoryTechnicalSpecs;
