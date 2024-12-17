const chemicals = [
  {
    chemical_group: "metals and trace elements",
    chemical: {
      name: "arsenic",
      cas: "7440-38-2",
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
    chemical: {
      name: "cadmium",
      cas: "7440-43-9",
    },
    biomarker: {
      name: "cadmium",
      cas: "7440-43-9",
    },
    info_link: "",
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
    chemical: {
      name: "di-isononyl phthalate (DiNP)",
      cas: "28553-12-0",
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
    chemical: {
      name: "naphthalene",
      cas: "91-20-3",
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
    chemical: {
      name: "1,2,3,4,7,8-hexachlorodibenzo-p-dioxin (HxCDD)",
      cas: "39227-28-6",
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
    info_link: "",
    notes: "",
  },
  {
    chemical_group: "polychlorinated biphenyls (PCBs)",
    chemical: {
      name: "2,2',4,4',5-pentachlorobiphenyl (PCB 99)",
      cas: "38380-01-7",
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
    info_link: "",
    notes: "",
  },
];
