export const userData = {
    profile: {
      name: "Kelin Zhong",
      role: "Statistical Consultant & Researcher",
      bio: "Statistical consultant and applied researcher with 2+ years of experience and expertise in causal inference, supported by top-tier peer-reviewed publications. Experienced in end-to-end research on large, noisy, and censored panel data, from model design through validation and cross-audience communication.",
      location: "Vernon, CT",
      email: ["kelin.zhong@uconn.edu", "kelinzhonguconn@gmail.com"],
      image: "./images/profile.jpg", 
      social: {
        github: "https://github.com/KelinZhong",
        linkedin: "https://www.linkedin.com/in/kelin-zhong/",
        researchgate: "https://www.researchgate.net/profile/Kelin-Zhong",
        website: ""
      }
    },

    education: [
      {
          degree: "Ph.D. Candidate in Statistics",
          school: "University of Connecticut",
          year: "2020 – Present",
          details: "Bayesian Inference, Longitudinal Data Analysis, Causal Inference, Survival Analysis"
      },
      {
          degree: "M.S in Statistics", 
          school: "University of Connecticut", 
          year: "2018 – 2020", 
          details: ""
      },
      {
          degree: "B.S. in Statistics", 
          school: "Sun Yat-sen University", 
          year: "2013 – 2018", 
          details: ""
      }
    ],

    skills: {
      "Statistical Methods": [
          "Regression", "Survival Models", "Longitudinal Models", "Meta-Analysis", "Propensity Score Matching (PSM)",
          "Target Trial Emulation", "Causal Inference", "Bayesian Modeling", "Generalized Linear Model (GLM)", "Markov Chain Monte Carlo (MCMC)"
      ],
      "Machine Learning": [
          "Random Forest", "XGBoost", "Regularization (Ridge/Lasso)", "Principal Component Analysis (PCA)"
      ],
      "Programming & Tools": [
          "R", "Python", "SQL", "Git/GitHub", "Version Control", "Stan", "LaTeX", "High Performance Computing (HPC)"
      ],
      "Data & Analytics": [
        "Data Wrangling", "ETL", "Statistical Consulting", "Reproducible Workflows", "Data Visualization", "Electronic Health Record (EHR)"
      ],
      "Soft Skills": [
          "Scientific Communications", "Team Collaboration", "Stakeholder Engagement", "Problem Solving"
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
        period: "Jan 2024 – Present",
        description: [
          "Led end-to-end data analysis and consulting for 40+ projects, partnering with cross-functional teams to translate ambiguous questions into data-driven decisions and contributing to 10+ peer-reviewed publications.",
          "Designed and executed analyses on multi-source, large-scale datasets (EHR, clinical, and prescription data), integrating heterogeneous records to build clean cohorts, features, and metrics for reliable inference.",
          "Applied inference-focused modeling to estimate effects, validate assumptions, and manage bias, helping teams avoid invalid conclusions and improve interpretability under real-world constraints.",
          "Built reproducible analytics workflows with Git/GitHub-based version control, standardizing analysis patterns and reporting to cut turnaround time by ~2× and improve collaboration with non-statistical stakeholders."
        ],
        image: "" 
      },
      {
        id: 2,
        role: "Research Assistant",
        company: "UConn Health",
        period: "Oct 2023 – Present",
        description: [
          "Led causal inference projects on large-scale observational data to evaluate intervention effects, generating evidence that improved a grant proposal’s evaluation from the top 50% to the top 25%.",
          "Designed and executed end-to-end analyses using UK Biobank, EHR, and genetic datasets (up to 500K records), defining cohorts, features, and time windows to reduce bias and improve decision reliability.",
          "Estimated and validated treatment effects through robustness and subgroup analyses, distinguishing meaningful signals from null results to inform prioritization and next-step decisions.",
          "Applied Mendelian randomization (genetics-based causal analysis) to translate experimental findings into human-scale evidence, manuscript in preparation."
        ],
        image: "" 
      },
      {
        id: 3,
        role: "Research Assistant",
        company: "University of Connecticut",
        period: "May 2021 – Present",
        description: [
          "Developed robust mixed-effects models for noisy and censored longitudinal data, addressing failure modes under outliers and complex correlation structures; first author on 3 peer-reviewed publications.",
          "Designed and validated Bayesian inference workflows that extended Gaussian mixed-effects models to non-Gaussian settings, improving robustness to heavy-tailed noise and irregular observations and yielding more stable and reliable inference on real-world data.",
          "Implemented and maintained production-quality R packages (ARpLMEC, SMNlmec) with Stan-based backends, translating methodological advances into reusable, well-documented tools for applied researchers."
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
          "Applied time-series volatility modeling to 13 constituent stocks of the Hang Seng Index, using financial indicators (PE, PB, ROE, EBITDA) to examine time-varying risk patterns."
        ],
        image: "./images/AXA.JPG"
      }
    ],

    openSourceTools: [
      {
        id: 2,
        title: "SMNlmec",
        tech: ["R", "Stan", "Bayesian Modeling", "Longitudinal Data Analysis", "Linear Mix-Effects Model"],
        description: "Bayesian censored linear mixed-effects models using scale mixtures of normal distributions. Incorporates damped exponential correlation for irregularly observed measures (Zhong et al., 2025) <doi:10.1002/sim.10295>.",
        link: "https://github.com/KelinZhong/SMNlmec"
      },
      {
        id: 1,
        title: "ARpLMEC",
        tech: ["R", "Longitudinal Data Analysis", "Linear Mix-Effects Model"],
        description: "Implements censored mixed-effects models with AR(p) or DEC errors. Supports Normal and t-Student distributions for estimation and prediction. (Olivari et al., 2021) <doi:10.1080/10543406.2020.1852246>.",
        link: "https://github.com/cran/ARpLMEC"
      },            
      {
        id: 3,
        title: "autoMR",
        tech: ["R", "Causal Inference"],
        description: "Pipeline for summary and visualization of Medelian Randomization results. Current support methods from MendelianRandomization, TwoSampleMR and mr.raps.",
        link: "https://github.com/KelinZhong/autoMR"
      }
    ],

    certifications: [
      {
        id: 1,
        title: "CFA Level I",
        issuer: "CFA Institute",
        date: "Mar 2026",
        link: "https://credentials.cfainstitute.org/f0c666d8-f4f7-404a-8399-8fef3c6b35fd#acc.cenvQmGb"
      },
      {
        id: 2,
        title: "SPRING 2026 DATA SCIENCE BOOT CAMP",
        issuer: "Erdős Institute",
        date: "Mar 2026",
        link: "https://www.erdosinstitute.org/certificates/spring-2026/data-science-boot-camp/kelin-zhong/91243ece-c3eb-40d8-a55e-a70e40094c5c"
      }
    ],

    selectedProjects: [
      {
        id: 3,
        title: "Exploring the Relationship Between Zinc Status and Frailty: Observational and Genetic Analyses",
        period: "2024 - 2025",
        link: "https://doi.org/10.1093/geroni/igaf122.3587",
        description: [
          "Investigated whether zinc deficiency contributes to frailty risk, integrating observational epidemiology and genetic causal inference.",
          "Processed and engineered individual-level UK Biobank biomarker, EHR, and genetic data to construct zinc exposure, frailty outcome, and confounder features.",
          "Applied regression-based observational models and Mendelian randomization (MR), resulting in a publication in Innovation in Aging and development of the autoMR R package for automated MR analysis."
        ]
      },
      {
        id: 1,
        title: "Bayesian Analysis of Censored Linear Mixed‐Effects Models for Heavy‐Tailed Irregularly Observed Repeated Measures",
        period: "2023 - 2024",
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
        period: "2023 - Present",
        link: "",
        description: [
          "Emulated a target clinical trial to estimate the effect of metformin intervention on aging-related disease outcomes using observational clinical EHR data with survival and competing risk models.",
          "Defined eligibility criteria, treatment assignment, and Time Zero to align exposure and follow-up, preventing immortal time bias in observational data."
        ]
      },
      {
        id: 4,
        title: "The Golden Handcuffs - A study on Lock-in Effect with New Listing Count in Nation Level and State Level",
        period: "2026-02 - 2026-03",
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
        title: "‘OrthoQA’ semantic search and question-answering tool for orthodontic education",
        authors: "SA Arqub, Q Zhao, P Akolkar, D Al-Moghrabi, CL Kuo, K Zhong, D Alomair, ...",
        publisher: "Journal of Dentistry",
        year: "2026",
        link: ""
      },
      {
        id: 2,
        title: "Tele-orthodontics in Real-World Practice: A Clinical Audit of Its Impact on Treatment Efficiency and Orthodontic Business Performance.",
        authors: "B Engert, H Chheda, B Layman, CL Kuo, K Zhong, C Dolce, X Yang, ...",
        publisher: "Seminars in Orthodontics",
        year: "2026",
        link: ""
      },
      {
        id: 3,
        title: "The nonlinear U-shaped association between vitamin D deficiency and biological aging acceleration is enhanced in individuals with higher inflammation levels",
        authors: "J Kositsawat, GA Kuchel, K Zhong, S Zhao, RH Fortinsky, CL Kuo",
        publisher: "The Journals of Gerontology, Series A: Biological Sciences and Medical Sciences",
        year: "2026",
        link: ""
      },
      {
        id: 4,
        title: "Effect of Location of Minilaparotomy for Morcellation at the time of Myomectomy and Hysterectomy on Postoperative Pain",
        authors: "L Kowalski, M Buchman, H Bian, K Zhong, CL Kuo, A Newmark, ...",
        publisher: "Journal of Minimally Invasive Gynecology",
        year: "2026",
        link: ""
      },
      {
        id: 5,
        title: "VA-ECMO in high-risk pulmonary embolism: outcomes and role as bridge to recovery",
        authors: "S Arvind, H Wagner, CL Kuo, K Zhong, J Gluck, J Ingrassia",
        publisher: "Resuscitation Plus",
        year: "2025",
        link: ""
      },
      {
        id: 6,
        title: "Exploring the Relationship Between Zinc Status and Frailty: Observational and Genetic Analyses",
        authors: "S Choi, K Zhong, CL Kuo",
        publisher: "Innovation in Aging",
        year: "2025",
        link: "https://doi.org/10.1093/geroni/igaf122.3587"
      },
      {
        id: 7,
        title: "Angiographic Characteristics and Associated Risk Factors of Premature Coronary Artery Disease among South Asians: A Systematic Review",
        authors: "S Passey, J Jha, M Iverson, K Zhong, CL Kuo, S Arora, A Qamar, ...",
        publisher: "The American Journal of Cardiology",
        year: "2025",
        link: ""
      },
      {
        id: 8,
        title: "Micro-computed tomography assessment of regional and overall accuracy of thermoformed retainers and intraoral scanners",
        authors: "ML Montes, MA Zakhary, SF Cobos, CL Kuo, KK Zhong, SA Arqub, ...",
        publisher: "American Journal of Orthodontics and Dentofacial Orthopedics",
        year: "2025",
        link: ""
      },
      {
        id: 9,
        title: "Healthcare disparities in Merkel cell carcinoma (MCC) in immune checkpoint inhibitor (ICI) era: A SEER study of survival disparities in older adults.",
        authors: "J Arunachalam, K Zhong, CL Kuo, KS Gunturu, BJ Byrne",
        publisher: "Journal of Clinical Oncology",
        year: "2025",
        link: ""
      },
      {
        id: 10,
        title: "Comparison of safety and efficacy of ultrasound-accelerated thrombolysis vs. standard catheter-directed thrombolysis for the management of acute pulmonary embolism-a systematic review",
        authors: "S Passey, H Jain, J Jha, K Zhong, CL Kuo, M Iverson, H Patail, S Joshi, ...",
        publisher: "Journal of Thrombosis and Thrombolysis",
        year: "2025",
        link: ""
      },
      {
        id: 11,
        title: "Autoregressive Bayesian modeling of censored HIV longitudinal data using the multivariate Student’s-t distribution",
        authors: "K Zhong, LM Castro, P Zhang, VH Lachos",
        publisher: "Japanese Journal of Statistics and Data Science",
        year: "2025",
        link: "https://doi.org/10.1007/s42081-024-00262-w"
      },
      {
        id: 12,
        title: "Software versus Cognitive Fusion for the Detection of Clinically Significant Prostate Cancer: Does ‘Lesion Density’ Matter?",
        authors: "V Dubovik, D Buller, B Rosenfeld, W Martin, A Sherman, W Faust, ...",
        publisher: "Journal of Urology",
        year: "2025",
        link: ""
      },
      {
        id: 13,
        title: "A five-year review of temporal bone fractures at a level one trauma center and examination of the impact of the COVID-19 pandemic",
        authors: "WM Jongbloed, D Campbell, CL Kuo, K Zhong, NJ Cavanagh",
        publisher: "Surgeries",
        year: "2025",
        link: ""
      },
      {
        id: 14,
        title: "The Influence of Sexual Orientation and Gender Identity on the Otolaryngology Residency Experience",
        authors: "WM Jongbloed, HA Newsome, L Kashat, K Parham, EA Faucett, CL Kuo, K Zhong, ...",
        publisher: "OTO open",
        year: "2025",
        link: ""
      },
      {
        id: 15,
        title: "A survey of general dentists on the involvement of endodontists in restorative procedures",
        authors: "GB Deese, MT Spoto, Q Zhu, RH Aseltine Jr, CL Kuo, K Zhong, O Dort, ...",
        publisher: "The Journal of the American Dental Association",
        year: "2025",
        link: ""
      },
      {
        id: 16,
        title: "Bayesian Analysis of Censored Linear Mixed‐Effects Models for Heavy‐Tailed Irregularly Observed Repeated Measures",
        authors: "K Zhong, FL Schumacher, LM Castro, VH Lachos",
        publisher: "Statistics in Medicine",
        year: "2025",
        link: "https://doi.org/10.1002/sim.10295"
      },
      {
        id: 17,
        title: "The Effect of a Pilot Medical Humanities Curriculum and Narrative Medicine on Empathy, Connectedness, and Self-reported General Well-being in an Otolaryngology Residency Program",
        authors: "W Jongbloed, KR Kavanagh, CL Kuo, K Zhong, H Newsome",
        publisher: "Authorea Preprints",
        year: "2024",
        link: ""
      },
      {
        id: 18,
        title: "Linear Mixed-effects Models for Censored Data with Serial Correlation Errors Using the multivariate Student’s t-distribution",
        authors: "K Zhong, RC Olivari, AM Garay, VH Lachos",
        publisher: "The New England Journal of Statistics in Data Science",
        year: "2024",
        link: ""
      }
    ],

    presentations: [
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
        image: "./images/aging.jpg"
      },
      {
        id: 3,
        title: "37th New England Statistics Symposium",
        role: "Invited Speaker",
        year: "2024",
        location: "Storrs, CT",
        image: "./images/ness2024.jpg"
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