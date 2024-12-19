const chemicals = [
  {
    chemical_group: "metals and trace elements",
    layman_group: "Heavy Metals",
    highlight_colour: "#B8B8B8",
    chemical: {
      name: "arsenic",
      layman_name: "Arsenic",
      cas: "7440-38-2",
      icon: "fas fa-battery-full",
      common_uses:
        "Historically used in pesticides, wood preservatives, and as a poison. It is also naturally occurring in groundwater in certain areas, leading to contamination concerns. Arsenic is highly toxic and carcinogenic.",
    },
    biomarker: {
      name: "monomethylarsonic acid (MMA)",
      cas: "124-58-3",
    },
    info_link:
      "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/environmental-contaminants/human-biomonitoring-resources/arsenic-canadians.html",
    notes: "",
    samples: [
      {
        matrix: "urine",
        age_range: "3 to 79",
        group: "males",
        chms_cycle_years: "2 (2009–2011)",
        sample_data: {
          number_pools: null,
          pct_less_lod_pooled: null,
          minimum: null,
          maximum: null,
          mean: null,
          mean_cv: null,
          number_samples: 1271,
          pct_less_lod: 69.63,
          df: "34.7 (27.4–42.8)",
          gm: "NC",
          percentiles: {
            p10: "LOD",
            p50: "LOD",
            p90: "1.3 (0.92–1.6)",
            p95: "1.8 (1.3–2.4)",
          },
        },
        measurement: {
          lod: 0.8,
          units: "µg As/L",
        },
        metadata: {
          number: 2126,
          content_type: "individual_results",
          data_type: "bysex",
        },
        statistical_values: {
          gm: {
            value: null,
            low: null,
            high: null,
          },
          p50: {
            value: null,
            low: null,
            high: null,
          },
          p95: {
            value: 1.8,
            low: 1.3,
            high: 2.4,
          },
        },
      },
      {
        matrix: "urine",
        age_range: "3 to 79",
        group: "NA",
        chms_cycle_years: "6 (2018–2019)",
        sample_data: {
          number_pools: null,
          pct_less_lod_pooled: null,
          minimum: null,
          maximum: null,
          mean: null,
          mean_cv: null,
          number_samples: null,
          pct_less_lod: null,
          df: null,
          gm: null,
          percentiles: {
            p10: null,
            p50: null,
            p90: null,
            p95: null,
          },
        },
        measurement: {
          lod: null,
          units: null,
        },
        metadata: {
          number: 195,
          content_type: "content",
          data_type: "NA",
        },
        statistical_values: {
          gm: {
            value: null,
            low: null,
            high: null,
          },
          p50: {
            value: null,
            low: null,
            high: null,
          },
          p95: {
            value: null,
            low: null,
            high: null,
          },
        },
      },
    ],
  },
  {
    chemical_group: "metals and trace elements",
    layman_group: "Heavy Metals",
    highlight_colour: "#B8B8B8",
    chemical: {
      name: "cadmium",
      layman_name: "Cadmium",
      cas: "7440-43-9",
      icon: "fas fa-battery-quarter",
      common_uses:
        "Used in the production of batteries (especially rechargeable batteries), in coatings, and in electroplating. Cadmium is also found in some plastics and pigments. It is toxic and can cause kidney damage and cancer with prolonged exposure.",
    },
    biomarker: {
      name: "cadmium",
      cas: "7440-43-9",
    },
    info_link: "https://en.wikipedia.org/wiki/Cadmium",
    notes: "",
    samples: [
      {
        matrix: "blood",
        age_range: "6 to 79",
        group: "NA",
        chms_cycle_years: "1 (2007–2009)",
        sample_data: {
          number_pools: null,
          pct_less_lod_pooled: null,
          minimum: null,
          maximum: null,
          mean: null,
          mean_cv: null,
          number_samples: null,
          pct_less_lod: null,
          df: null,
          gm: null,
          percentiles: {
            p10: null,
            p50: null,
            p90: null,
            p95: null,
          },
        },
        measurement: {
          lod: null,
          units: null,
        },
        metadata: {
          number: 201,
          content_type: "content",
          data_type: "NA",
        },
        statistical_values: {
          gm: {
            value: null,
            low: null,
            high: null,
          },
          p50: {
            value: null,
            low: null,
            high: null,
          },
          p95: {
            value: null,
            low: null,
            high: null,
          },
        },
      },
    ],
  },
  // Keep all other chemicals as they are for now
  {
    chemical_group: "plasticizers: phthalates",
    layman_group: "Plastics",
    highlight_colour: "#3EB489",
    chemical: {
      name: "di-isononyl phthalate (DiNP)",
      layman_name: "DiNP",
      cas: "28553-12-0",
      icon: "fas fa-plug",
      common_uses:
        "Used as a plasticizer in flexible plastics, especially PVC. It is commonly found in products like flooring, food packaging, and children’s toys. It is considered a potential endocrine disruptor.",
    },
    biomarker: {
      name: "mono(carboxyisooctyl) phthalate (MCIOP)",
      cas: "898544-09-7",
    },
    info_link:
      "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/environmental-contaminants/sixth-report-human-biomonitoring/page-5.html#s14-1",
    notes: "",
    samples: [
      {
        matrix: "urine",
        age_range: "40 to 59",
        group: "total",
        chms_cycle_years: "6 (2018–2019)",
        sample_data: {
          number_pools: null,
          pct_less_lod_pooled: null,
          minimum: null,
          maximum: null,
          mean: null,
          mean_cv: null,
          number_samples: 343,
          pct_less_lod: 12.83,
          df: "87.9 (82.2–92.0)",
          gm: "0.82 (0.66–1.0)",
          percentiles: {
            p10: "LOD",
            p50: "0.76 (0.51–1.0)",
            p90: "3.2 (1.7–4.6)",
            p95: "6.3 (3.1–9.6)",
          },
        },
        measurement: {
          lod: 0.13,
          units: "µg/g creatinine",
        },
        metadata: {
          number: 7122,
          content_type: "individual_results",
          data_type: "byage",
        },
        statistical_values: {
          gm: {
            value: 0.82,
            low: 0.66,
            high: 1,
          },
          p50: {
            value: 0.76,
            low: 0.51,
            high: 1,
          },
          p95: {
            value: 6.3,
            low: 3.1,
            high: 9.6,
          },
        },
      },
    ],
  },
  {
    chemical_group: "polycyclic aromatic hydrocarbons (PAHs)",
    layman_group: "Combustion Byproducts",
    highlight_colour: "#D32F2F",
    chemical: {
      name: "naphthalene",
      layman_name: "Mothballs",
      cas: "91-20-3",
      icon: "fas fa-cogs",
      common_uses:
        "Used as a component of mothballs and in the production of nylon.",
    },
    biomarker: {
      name: "2-hydroxynaphthalene",
      cas: "135-19-3",
    },
    info_link:
      "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/environmental-contaminants/human-biomonitoring-resources/polycyclic-aromatic-hydrocarbons-in-people.html",
    notes: "",
    samples: [
      {
        matrix: "urine",
        age_range: "3 to 5",
        group: "total",
        chms_cycle_years: "2 (2009–2011)",
        sample_data: {
          number_pools: null,
          pct_less_lod_pooled: null,
          minimum: null,
          maximum: null,
          mean: null,
          mean_cv: null,
          number_samples: 499,
          pct_less_lod: 0,
          df: "NA",
          gm: "3.3 (2.8–3.8)",
          percentiles: {
            p10: "1.1 (0.91–1.2)",
            p50: "3.0 (2.4–3.6)",
            p90: "11 (5.8–15)",
            p95: "17 (8.9–24)",
          },
        },
        measurement: {
          lod: 0.05,
          units: "µg/L",
        },
        metadata: {
          number: 8621,
          content_type: "individual_results",
          data_type: "byage",
        },
        statistical_values: {
          gm: {
            value: 3.3,
            low: 2.8,
            high: 3.8,
          },
          p50: {
            value: 3.0,
            low: 2.4,
            high: 3.6,
          },
          p95: {
            value: 17,
            low: 8.9,
            high: 24,
          },
        },
      },
    ],
  },
  {
    chemical_group: "dioxins and furans",
    layman_group: "Pesticides",
    highlight_colour: "#FF8C00",
    chemical: {
      name: "1,2,3,4,7,8-hexachlorodibenzo-p-dioxin (HxCDD)",
      layman_name: "Dioxin",
      cas: "39227-28-6",
      icon: "fas fa-trash-alt",
      common_uses:
        "Primarily produced as a byproduct of industrial processes like waste incineration and pesticide manufacturing. It is a persistent environmental pollutant and a potent toxin.",
    },
    biomarker: {
      name: "1,2,3,4,7,8-hexachlorodibenzo-p-dioxin (HxCDD)",
      cas: "39227-28-6",
    },
    matrix: "pooled serum",
    age_range: "60 to 79",
    group: "total",
    chms_cycle_years: "5 (2016–2017)",
    sample_data: {
      number_pools: 12,
      pct_less_lod_pooled: 0,
      minimum: 2.1,
      maximum: 10,
      mean: 4.3,
      mean_cv: 15,
      number_samples: null,
      pct_less_lod: null,
      df: null,
      gm: null,
      percentiles: {
        p10: null,
        p50: null,
        p90: null,
        p95: null,
      },
    },
    measurement: {
      lod: 0.49,
      units: "pg/g lipid",
    },
    metadata: {
      number: 10069,
      content_type: "pooled_results",
      data_type: "byage",
    },
    statistical_values: {
      gm: {
        value: null,
        low: null,
        high: null,
      },
      p50: {
        value: null,
        low: null,
        high: null,
      },
      p95: {
        value: null,
        low: null,
        high: null,
      },
    },
    info_link:
      "https://pubchem.ncbi.nlm.nih.gov/compound/1_2_3_6_7_8-Hexachlorodibenzo-P-dioxin",
    notes: "",
  },
  {
    chemical_group: "polychlorinated biphenyls (PCBs)",
    layman_group: "Plastics",
    highlight_colour: "#3EB489",
    chemical: {
      name: "2,2',4,4',5-pentachlorobiphenyl (PCB 99)",
      layman_name: "Polychlorinated Biphenyl (PCB)",
      cas: "38380-01-7",
      icon: "fas fa-industry",
      common_uses:
        "Historically used as a dielectric fluid in transformers, capacitors, and other electrical equipment. PCBs were also used in paints, plastics, and pesticides before being banned due to their environmental toxicity and health risks.",
    },
    biomarker: {
      name: "2,2',4,4',5-pentachlorobiphenyl (PCB 99)",
      cas: "38380-01-7",
    },
    matrix: "pooled serum",
    age_range: "40 to 59",
    group: "total",
    chms_cycle_years: "4 (2014–2015)",
    sample_data: {
      number_pools: 12,
      pct_less_lod_pooled: 0,
      minimum: 0.012,
      maximum: 0.024,
      mean: 0.017,
      mean_cv: 7,
      number_samples: null,
      pct_less_lod: null,
      df: null,
      gm: null,
      percentiles: {
        p10: null,
        p50: null,
        p90: null,
        p95: null,
      },
    },
    measurement: {
      lod: null,
      units: "ng/g serum",
    },
    metadata: {
      number: 12772,
      content_type: "pooled_results",
      data_type: "byage",
    },
    statistical_values: {
      gm: {
        value: null,
        low: null,
        high: null,
      },
      p50: {
        value: null,
        low: null,
        high: null,
      },
      p95: {
        value: null,
        low: null,
        high: null,
      },
    },
    info_link:
      "https://pubchem.ncbi.nlm.nih.gov/compound/1_2_4-trichloro-5-_2_4-dichlorophenyl_benzene",
    notes: "",
  },
];
