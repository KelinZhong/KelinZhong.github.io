export const userData = {
    profile: {
      name: "Kelin Zhong",
      role: "Applied Data Scientist & Quantitative Modeler",
      bio: "Applied data scientist and quantitative modeler with 2+ years of experience building predictive models, causal inference workflows, and statistical modeling solutions for large-scale real-world data. Skilled in feature engineering, model validation, uncertainty quantification, and translating complex analyses into decision-ready insights for cross-functional stakeholders. Hands-on experience with Python, R, PyTorch, SQL, Stan, Git, Linux, and reproducible analytics.",
      location: "Vernon, CT",
      email: ["kelinzhonguconn@gmail.com"],
      image: "/images/profile.jpg", 
      social: {
        github: "https://github.com/kelinzhong",
        linkedin: "https://www.linkedin.com/in/kelin-zhong/",
        researchgate: "https://www.researchgate.net/profile/Kelin-Zhong",
        website: "https://kelinzhong.github.io/index.html"
      }
    },

    education: [
      {
          degree: "PhD in Statistics",
          school: "University of Connecticut",
          year: "Aug 2020 – Jun 2026",
          details: "Bayesian Inference, Longitudinal Data Analysis, Causal Inference, Survival Analysis"
      },
      {
          degree: "Master of Science in Statistics", 
          school: "University of Connecticut", 
          year: "Aug 2018 – May 2020", 
          details: ""
      },
      {
          degree: "Bachelor of Science in Statistics", 
          school: "Sun Yat-sen University", 
          year: "Aug 2013 – Jun 2018", 
          details: ""
      }
    ],

    skills: {
      "Statistical Methods": [
          "Regression", "Survival Models", "Longitudinal Models", "Meta-Analysis", "Causal Inference", "Target Trial Emulation",
          "Propensity Score Matching (PSM)", "Bayesian Modeling", "Markov Chain Monte Carlo (MCMC)"
      ],
      "Machine Learning & Deep Learning Methods": [
          "Random Forest", "Extreme Gradient Boosting (XGBoost)", "LightGBM", "Regularization (Ridge/Lasso)",
          "Principal Component Analysis (PCA)", "FT-Transformer (Tabular Deep Learning)", "Neural Additive Models (NAM)",
          "Ensemble Methods / Model Stacking"
      ],
      "Programming & Tools": [
          "R", "Python", "PyTorch", "CUDA", "Git", "SQL", "Stan", "LaTeX", "Linux", "HPC", "Version Control"
      ],
      "Data & Analytics": [
        "Data Wrangling", "ETL", "Statistical Consulting", "Reproducible Analytics", "Data Visualization", "Electronic Health Record (EHR)",
        "Feature Selection", "Model Interpretability", "Class Imbalance Handling"
      ],
      "Soft Skills": [
          "Scientific Communication", "Cross-functional Collaboration", "Stakeholder Engagement", "Problem Solving"
      ],
      "Languages": [
          "English (Fluent)", "Mandarin (Native)", "Cantonese (Native)"
      ]
    },

    experience: [
      {
        id: 1,
        role: "Statistical Consultant",
        company: "UConn Health",
        period: "Jan 2024 – Jun 2026",
        description: [
          "Led quantitative analytics and modeling support for 60+ cross-functional projects, translating stakeholder questions into data-driven recommendations and contributing to 10+ peer-reviewed publications.",
          "Built analysis-ready datasets from EHR, clinical, and prescription data by defining cohorts, engineering features, validating labels, and integrating multi-source records.",
          "Applied statistical modeling, causal inference, model validation, and sensitivity analyses to identify reliable signals and improve interpretability under real-world data constraints.",
          "Developed reproducible analytics pipelines and reusable model templates with Git/GitHub, reducing project turnaround time by ~2× and improving collaboration with non-technical stakeholders."
        ],
        image: "" 
      },
      {
        id: 2,
        role: "Research Assistant",
        company: "UConn Health",
        period: "Oct 2023 – Jun 2026",
        description: [
          "Led causal inference and quantitative modeling projects on large-scale EHR, UK Biobank, panel, and genetic datasets, improving a grant proposal's evaluation from the top 50% to the top 25%.",
          "Designed end-to-end modeling workflows on datasets with up to 500K records, including cohort construction, feature definition, time-window design, and confounder adjustment.",
          "Estimated treatment effects and risk associations using regression models, target trial emulation, out-of-sample validation, uncertainty quantification, and robustness checks.",
          "Applied Mendelian randomization (genetics-based causal analysis) to translate experimental findings into human-scale evidence."
        ],
        image: "" 
      },
      {
        id: 3,
        role: "Research Assistant",
        company: "University of Connecticut",
        period: "May 2021 – Jun 2026",
        description: [
          "Developed robust quantitative models for noisy, censored, and irregular longitudinal data; first author on 3 peer-reviewed publications.",
          "Built Bayesian inference workflows for non-Normal mixed-effects models, improving robustness and uncertainty estimation for real-world longitudinal datasets.",
          "Designed and maintained scalable R packages, including ARpLMEC and SMNlmec, with Stan-based backends for reusable statistical modeling and analytics."
        ],
        image: ""
      },
      {
        id: 4,
        role: "Instructor",
        company: "University of Connecticut",
        period: "Feb 2023 – Dec 2023",
        description: [
          "Independently designed and delivered an undergraduate statistics course, creating structured slides, assignments, and exams to teach statistical reasoning and applied problem-solving to non-expert audiences."
        ],
        image: ""
      }
    ],

    internships: [
      {
        id: 1,
        role: "Manager Assistant",
        company: "Guangzhou Rural Commercial Bank",
        period: "Jun 2019 – Jul 2019",
        description: [
          "Redesigned a department-wide Excel reporting template to incorporate policy changes during a system upgrade, standardizing data entry and audit reporting."
        ],
        image: ""
      },
      {
        id: 2,
        role: "Customer Manager Assistant",
        company: "Ping An Bank",
        period: "Jul 2016 – Aug 2016",
        description: [
          "Prepared and validated financial data for equity pledge evaluations, including on-site operational checks to assess the plausibility of reported financial information."
        ],
        image: ""
      },
      {
        id: 3,
        role: "Intern & Trainee",
        company: "Axa China Region Insurance Company Limited",
        period: "Aug 2015 – Aug 2015",
        description: [
          "Applied time series volatility modeling to 13 constituent stocks of the Hang Seng Index, using financial indicators (PE, PB, ROE, EBITDA) to study time-varying risk and identify changing risk regimes."
        ],
        image: "/images/AXA.JPG"
      }
    ],

    openSourceTools: [
      {
        id: 2,
        title: "SMNlmec",
        tech: ["R", "Stan", "Bayesian Modeling", "Longitudinal Data Analysis", "Linear Mixed-Effects Model"],
        description: "Bayesian censored linear mixed-effects models using scale mixtures of normal distributions. Incorporates damped exponential correlation for irregularly observed measures (Zhong et al., 2025) <doi:10.1002/sim.10295>.",
        link: "https://github.com/KelinZhong/SMNlmec"
      },
      {
        id: 1,
        title: "ARpLMEC",
        tech: ["R", "Longitudinal Data Analysis", "Linear Mixed-Effects Model"],
        description: "Implements censored mixed-effects models with AR(p) or DEC errors. Supports Normal and Student-t distributions for estimation and prediction. (Olivari et al., 2021) <doi:10.1080/10543406.2020.1852246>.",
        link: "https://github.com/cran/ARpLMEC"
      },            
      {
        id: 3,
        title: "autoMR",
        tech: ["R", "Causal Inference", "Mendelian Randomization"],
        description: "Pipeline for automated summary and visualization of Mendelian randomization results. Supports methods from MendelianRandomization, TwoSampleMR, and mr.raps.",
        link: "https://github.com/KelinZhong/autoMR"
      }
    ],

    certificationsAndAwards: [
      {
        id: 1,
        type: "award",
        title: "NESS 2026 Statathon 1st Place",
        issuer: "New England Statistics Symposium",
        date: "2026",
        link: "https://www.kaggle.com/competitions/2026-ness-statathon/leaderboard"
      },
      {
        id: 2,
        type: "certification",
        title: "Chartered Financial Analyst (CFA) Program Level I Pass",
        issuer: "CFA Institute",
        date: "2026",
        credentialId: "177421930",
        link: "https://credentials.cfainstitute.org/f0c666d8-f4f7-404a-8399-8fef3c6b35fd#acc.cenvQmGb"
      },
      {
        id: 3,
        type: "certification",
        title: "Spring 2026 Data Science Boot Camp",
        issuer: "The Erdős Institute",
        date: "2026",
        link: "https://www.erdosinstitute.org/certificates/spring-2026/data-science-boot-camp/kelin-zhong/91243ece-c3eb-40d8-a55e-a70e40094c5c"
      }
    ],

    selectedProjects: [
      {
        id: 5,
        title: "2026 NESS Statathon: Policy Retention Model",
        period: "2026",
        link: "",
        description: [
          "Built a multiclass policy cancellation prediction pipeline on 1M+ insurance records using FT-Transformer, ranking 1st on the private leaderboard and 1st overall in the NESS 2026 Statathon including presentation evaluation.",
          "Designed a class-conditional feature selection method without fitting any model in advance and diagnosed a data ceiling through confidence reversal analysis, showing low Will Cancel recall stems from indistinguishable feature profiles rather than model weakness.",
          "Converted SHAP values into probability shifts for business-interpretable explanations and translated findings into targeted retention recommendations, including deferred payment programs, post-claim outreach, and a product pricing review."
        ]
      },
      {
        id: 3,
        title: "Exploring the Relationship Between Zinc Status and Frailty: Observational and Genetic Analyses",
        period: "2024 – 2025",
        link: "https://doi.org/10.1093/geroni/igaf122.3587",
        description: [
          "Investigated whether zinc deficiency contributes to frailty risk, integrating observational epidemiology and genetic causal inference.",
          "Processed and engineered individual-level UK Biobank biomarker, EHR, and genetic data to construct zinc exposure, frailty outcome, and confounder features.",
          "Applied regression-based observational models and Mendelian randomization (MR), resulting in a publication in Innovation in Aging and development of the autoMR R package for automated MR analysis."
        ]
      },
      {
        id: 1,
        title: "Bayesian Analysis of Censored Linear Mixed-Effects Models for Heavy-Tailed Irregularly Observed Repeated Measures",
        period: "2023 – 2024",
        link: "https://doi.org/10.1002/sim.10295",
        description: [
          "Addressed bias in viral load longitudinal analysis caused by detection limits, heavy-tailed noise, and irregular sampling in clinical trial repeated-measure data.",
          "Built a Bayesian modeling framework using Scale Mixture Normal (SMN) distributions for censored linear mixed-effects models and implemented efficient MCMC sampling in Stan for large-scale longitudinal datasets.",
          "Improved computational efficiency for high-dimensional Bayesian inference; results published in Statistics in Medicine and released SMNlmec, an R package for SMN-based linear mixed-effects modeling."
        ]
      },
      {
        id: 2,
        title: "Target Trial Emulation (TTE) for the Targeting Aging with Metformin (TAME) Trial",
        period: "2023 – Present",
        link: "",
        description: [
          "Emulated a target clinical trial to estimate the effect of metformin intervention on aging-related disease outcomes using observational clinical EHR data with survival and competing risk models.",
          "Defined eligibility criteria, treatment assignment, and Time Zero to align exposure and follow-up, preventing immortal time bias in observational data."
        ]
      },
      {
        id: 4,
        title: "The Golden Handcuffs - A Study on Lock-in Effect with New Listing Count in Nation Level and State Level",
        period: "2026-02 – 2026-03",
        link: "https://github.com/TheErdosInstitute/data-science",
        description: [
          "Led the development of a research plan to guide data collection, exploratory data analysis (EDA), and evaluation of industry structure across all 50 U.S. states; delivered structured datasets for downstream predictive modeling.",                
          "Identified and evaluated key predictors of new listing counts at both national and state levels using Principal Component Analysis (PCA) and literature-informed feature selection.",
          "Developed and implemented time series forecasting models for new listing counts at national and state levels using SARIMAX and XGBoost, enabling comparative model evaluation."
        ]
      }
    ],

    publications: [
      {
        id: 1,
        type: "journal",
        title: "Ethics of Rising Trends in Dermatology Publications Using Large-Scale Databases",
        authors: "M Tessier-Kay, AE Zhou, K Zhong, CL Kuo, B Sloan, H Feng",
        publisher: "Clinics in Dermatology",
        year: "2026",
        link: "https://doi.org/10.1016/j.clindermatol.2026.05.001"
      },
      {
        id: 2,
        type: "journal",
        title: "'OrthoQA' Semantic Search and Question-Answering Tool for Orthodontic Education",
        authors: "SA Arqub, Q Zhao, P Akolkar, D Al-Moghrabi, CL Kuo, K Zhong, D Alomair, M Adel, Y Zhang",
        publisher: "Journal of Dentistry",
        year: "2026",
        link: "https://doi.org/10.1016/j.jdent.2026.106590"
      },
      {
        id: 3,
        type: "journal",
        title: "Tele-orthodontics in Real-World Practice: A Clinical Audit of Its Impact on Treatment Efficiency and Orthodontic Business Performance",
        authors: "B Engert, H Chheda, B Layman, CL Kuo, K Zhong, C Dolce, X Yang, SA Arqub",
        publisher: "Seminars in Orthodontics",
        year: "2026",
        link: "https://doi.org/10.1053/j.sodo.2026.02.002"
      },
      {
        id: 4,
        type: "journal",
        title: "Effect of Location of Minilaparotomy for Morcellation at the Time of Myomectomy and Hysterectomy on Postoperative Pain",
        authors: "L Kowalski, M Buchman, H Bian, K Zhong, CL Kuo, A Newmark, D Luciano, A Ulrich",
        publisher: "Journal of Minimally Invasive Gynecology",
        year: "2026",
        link: "https://doi.org/10.1016/j.jmig.2026.01.053"
      },
      {
        id: 5,
        type: "conference",
        title: "Impact of the MyChart Sleep Care Plan on Continuous Positive Airway Pressure Adherence",
        authors: "K Nakamura, CL Kuo, K Zhong, J Langstengel, E Bernstein, A Salmon",
        publisher: "Sleep",
        year: "2026",
        link: "https://doi.org/10.1093/sleep/zsag091.0592"
      },
      {
        id: 6,
        type: "journal",
        title: "Safety and Efficacy of Modern Large Bore Mechanical Thrombectomy for Intermediate and High-Risk Pulmonary Embolism",
        authors: "S Passey, K Zhong, CL Kuo, J Ingrassia",
        publisher: "Journal of the Society for Cardiovascular Angiography & Interventions",
        year: "2026",
        link: "https://www.jscai.org/article/S2772-9303(26)00206-1/fulltext"
      },
      {
        id: 7,
        type: "journal",
        title: "The Nonlinear U-Shaped Association Between Vitamin D Deficiency and Biological Aging Acceleration Is Enhanced in Individuals with Higher Inflammation Levels",
        authors: "J Kositsawat, GA Kuchel, K Zhong, S Zhao, RH Fortinsky, CL Kuo",
        publisher: "The Journals of Gerontology: Series A",
        year: "2025",
        link: "https://doi.org/10.1093/gerona/glaf272"
      },
      {
        id: 8,
        type: "journal",
        title: "VA-ECMO in High-Risk Pulmonary Embolism: Outcomes and Role as Bridge to Recovery",
        authors: "S Arvind, H Wagner, CL Kuo, K Zhong, J Gluck, J Ingrassia",
        publisher: "Resuscitation Plus",
        year: "2025",
        link: "https://doi.org/10.1016/j.resplu.2025.101196"
      },
      {
        id: 9,
        type: "conference",
        title: "Exploring the Relationship Between Zinc Status and Frailty: Observational and Genetic Analyses",
        authors: "S Choi, K Zhong, CL Kuo",
        publisher: "Innovation in Aging",
        year: "2025",
        link: "https://doi.org/10.1093/geroni/igaf122.3587"
      },
      {
        id: 10,
        type: "journal",
        title: "Angiographic Characteristics and Associated Risk Factors of Premature Coronary Artery Disease Among South Asians: A Systematic Review",
        authors: "S Passey, J Jha, M Iverson, K Zhong, CL Kuo, S Arora, A Qamar, N Beohar",
        publisher: "The American Journal of Cardiology",
        year: "2025",
        link: "https://doi.org/10.1016/j.amjcard.2025.09.015"
      },
      {
        id: 11,
        type: "journal",
        title: "Micro-computed Tomography Assessment of Regional and Overall Accuracy of Thermoformed Retainers and Intraoral Scanners",
        authors: "ML Montes, MA Zakhary, SF Cobos, CL Kuo, KK Zhong, SA Arqub, F Uribe",
        publisher: "American Journal of Orthodontics and Dentofacial Orthopedics",
        year: "2025",
        link: "https://doi.org/10.1016/j.ajodo.2025.07.014"
      },
      {
        id: 12,
        type: "conference",
        title: "Healthcare Disparities in Merkel Cell Carcinoma in the Immune Checkpoint Inhibitor Era: A SEER Study of Survival Disparities in Older Adults",
        authors: "J Arunachalam, K Zhong, CL Kuo, KS Gunturu, BJ Byrne",
        publisher: "Journal of Clinical Oncology",
        year: "2025",
        link: "https://doi.org/10.1200/JCO.2025.43.16_suppl.e21602"
      },
      {
        id: 13,
        type: "conference",
        title: "Software Versus Cognitive Fusion for the Detection of Clinically Significant Prostate Cancer: Does 'Lesion Density' Matter?",
        authors: "V Dubovik, D Buller, B Rosenfeld, W Martin, A Sherman, W Faust, K Zhong, CL Kuo, B Ristau",
        publisher: "Journal of Urology",
        year: "2025",
        link: "https://doi.org/10.1097/01.JU.0001110100.38838.c8.16"
      },
      {
        id: 14,
        type: "journal",
        title: "Comparison of Safety and Efficacy of Ultrasound-Accelerated Thrombolysis vs. Standard Catheter-Directed Thrombolysis for the Management of Acute Pulmonary Embolism: A Systematic Review and Meta-Analysis",
        authors: "S Passey, H Jain, J Jha, K Zhong, CL Kuo, M Iverson, H Patail, S Joshi, J Ingrassia",
        publisher: "Journal of Thrombosis and Thrombolysis",
        year: "2025",
        link: "https://doi.org/10.1007/s11239-025-03100-7"
      },
      {
        id: 15,
        type: "journal",
        title: "A Five-Year Review of Temporal Bone Fractures at a Level One Trauma Center and Examination of the Impact of the COVID-19 Pandemic",
        authors: "WM Jongbloed, D Campbell, CL Kuo, K Zhong, NJ Cavanagh",
        publisher: "Surgeries",
        year: "2025",
        link: "https://doi.org/10.3390/surgeries6020033"
      },
      {
        id: 16,
        type: "journal",
        title: "The Influence of Sexual Orientation and Gender Identity on the Otolaryngology Residency Experience",
        authors: "WM Jongbloed, HA Newsome, L Kashat, K Parham, EA Faucett, CL Kuo, K Zhong, KR Kavanagh",
        publisher: "OTO Open",
        year: "2025",
        link: "https://doi.org/10.1002/oto2.70095"
      },
      {
        id: 17,
        type: "journal",
        title: "A Survey of General Dentists on the Involvement of Endodontists in Restorative Procedures",
        authors: "GB Deese, MT Spoto, Q Zhu, RH Aseltine Jr, CL Kuo, K Zhong, O Dort, B Kaufman",
        publisher: "The Journal of the American Dental Association",
        year: "2025",
        link: "https://doi.org/10.1016/j.adaj.2025.01.007"
      },
      {
        id: 18,
        type: "journal",
        title: "Autoregressive Bayesian Modeling of Censored HIV Longitudinal Data Using the Multivariate Student's-t Distribution",
        authors: "K Zhong, LM Castro, P Zhang, VH Lachos",
        publisher: "Japanese Journal of Statistics and Data Science",
        year: "2025",
        link: "https://doi.org/10.1007/s42081-025-00299-w"
      },
      {
        id: 19,
        type: "journal",
        title: "Bayesian Analysis of Censored Linear Mixed-Effects Models for Heavy-Tailed Irregularly Observed Repeated Measures",
        authors: "K Zhong, FL Schumacher, LM Castro, VH Lachos",
        publisher: "Statistics in Medicine",
        year: "2025",
        link: "https://doi.org/10.1002/sim.10295"
      },
      {
        id: 20,
        type: "preprint",
        title: "The Effect of a Pilot Medical Humanities Curriculum and Narrative Medicine on Empathy, Connectedness, and Self-Reported General Well-Being in an Otolaryngology Residency Program",
        authors: "W Jongbloed, KR Kavanagh, CL Kuo, K Zhong, H Newsome",
        publisher: "Authorea Preprints",
        year: "2024",
        link: "https://wiley.authorea.com/users/830014/articles/1223926-the-effect-of-a-pilot-medical-humanities-curriculum-and-narrative-medicine-on-empathy-connectedness-and-self-reported-general-well-being-in-an-otolaryngology-residency-program"
      },
      {
        id: 21,
        type: "journal",
        title: "Linear Mixed-Effects Models for Censored Data with Serial Correlation Errors Using the Multivariate Student's t-Distribution",
        authors: "K Zhong, RC Olivari, AM Garay, VH Lachos",
        publisher: "The New England Journal of Statistics in Data Science",
        year: "2025",
        link: "https://doi.org/10.51387/24-NEJSDS68"
      }
    ],

    presentations: [
      {
        id: 5,
        title: "39th New England Statistics Symposium Statathon",
        role: "Finalist",
        year: "2026",
        location: ""
      },
      {
        id: 1,
        title: "ICSA Applied Statistics Symposium",
        role: "Invited Speaker",
        year: "2025",
        location: "Storrs, CT"
      },
      {
        id: 2,
        title: "2024 Annual Aging Research Day",
        role: "Poster Presenter",
        year: "2024",
        location: "Hartford, CT",
        image: "/images/aging.jpg"
      },
      {
        id: 3,
        title: "37th New England Statistics Symposium",
        role: "Invited Speaker",
        year: "2024",
        location: "Storrs, CT",
        image: "/images/ness2024.jpg"
      },
      {
        id: 4,
        title: "ICSA Applied Statistics Symposium",
        role: "Invited Speaker",
        year: "2022",
        location: "Gainesville, FL"
      }
    ]
  };