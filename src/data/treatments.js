export const TREATMENTS = [
    {
        id: 'acne-scars',
        slug: 'acne-and-acne-scars',
        title: 'Acne & Acne Scars',
        shortDescription: 'Advanced and personalized solutions for clear, healthy skin.',
        fullDescription: 'Our dermatological acne protocols address both active inflammation and long-term textural scarring. Combining medical-grade topical formulations, gentle subcision, micro-needling, and targeted blue-light clarity therapies, we help restore a smooth, balanced, and resilient dermal barrier.',
        category: 'skin',
        categoryLabel: 'Skin Care',
        iconName: 'acne',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        concerns: [
            'Active cystic & hormonal breakouts',
            'Post-inflammatory erythema (red spots)',
            'Boxcar & rolling acne scars',
            'Enlarged pores and excess sebum production'
        ],
        procedureSteps: [
            {
                step: '01',
                title: 'Deep Skin Diagnostic',
                description: 'Multi-spectral skin analysis to map surface bacteria, pore congestion depth, and sebum imbalance.'
            },
            {
                step: '02',
                title: 'Targeted Clinical Protocol',
                description: 'Combination of custom chemical exfoliation, extractions, or scar resurfacing tailored to your skin type.'
            },
            {
                step: '03',
                title: 'Barrier Repair & Calming',
                description: 'Application of medical-grade soothing peptides, hyaluronic infusion, and anti-microbial phototherapy.'
            }
        ],
        duration: '45 - 60 mins',
        recoveryTime: 'Minimal (0 - 48 hours mild pinkness)',
        recommendedSessions: '4 - 6 sessions spaced 3 weeks apart',
        aftercareTips: [
            'Avoid direct UV exposure and apply broad-spectrum mineral SPF 50 daily.',
            'Refrain from aggressive exfoliants, AHAs, and retinoids for 5 days post-treatment.',
            'Maintain skin hydration with recommended non-comedogenic ceramide creams.',
            'Do not pick, scratch, or peel treated areas.'
        ],
        faqs: [
            {
                question: 'How soon will I see improvements in acne scars?',
                answer: 'Active lesions typically calm within 7–14 days. Textural collagen remodeling for deep scars develops progressively over 8 to 12 weeks as new elastin and collagen fibers form.'
            },
            {
                question: 'Are acne scar treatments painful?',
                answer: 'We apply a medical topical numbing cream 30 minutes prior to any micro-needling or resurfacing procedure, ensuring maximum patient comfort throughout.'
            }
        ]
    },
    {
        id: 'pigmentation-melasma',
        slug: 'pigmentation-and-melasma',
        title: 'Pigmentation & Melasma',
        shortDescription: 'Targeted treatments to reduce dark spots and even skin tone.',
        fullDescription: 'Hyperpigmentation, solar lentigines, and hormonal melasma require precision dermatological care to avoid rebound darkening. Our evidence-based protocol pairs gentle laser toning with pigment-inhibiting medical peels and botanical antioxidants to brighten and unify your complexion safely.',
        category: 'skin',
        categoryLabel: 'Skin Care',
        iconName: 'pigmentation',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
        concerns: [
            'Melasma and hormonal discoloration',
            'Sunspots, age spots, and freckles',
            'Post-inflammatory hyperpigmentation (PIH)',
            'Uneven skin tone and dullness'
        ],
        procedureSteps: [
            {
                step: '01',
                title: 'Melanin Depth Mapping',
                description: 'Wood lamp and digital polarized imaging to distinguish epidermal vs. deeper dermal pigment clusters.'
            },
            {
                step: '02',
                title: 'Controlled Pigment Shattering',
                description: 'Low-fluence Q-switched or pico-fractional laser energy breaks down targeted melanin without heating surrounding skin.'
            },
            {
                step: '03',
                title: 'Antioxidant Dermal Infusion',
                description: 'Sonophoresis infusion of tranexamic acid, vitamin C, and glutathione to prevent melanin pathway reactivation.'
            }
        ],
        duration: '40 - 50 mins',
        recoveryTime: 'No downtime; immediate glow',
        recommendedSessions: '3 - 5 sessions spaced 4 weeks apart',
        aftercareTips: [
            'Strict daily broad-spectrum sun protection with tint/iron oxides is mandatory.',
            'Avoid saunas, hot yoga, and excessive heat exposure for 48 hours.',
            'Use prescribed tyrosinase inhibitors consistently as guided by your dermatologist.'
        ],
        faqs: [
            {
                question: 'Can melasma be permanently cured?',
                answer: 'Melasma is a chronic hormonal pigment condition that can be dramatically lightened and kept in remission through professional in-clinic treatments and strict sun protection maintenance.'
            },
            {
                question: 'Is this treatment safe for darker skin tones?',
                answer: 'Yes. We utilize specialized wavelengths and low-fluence protocols calibrated specifically for Fitzpatrick skin types III through VI to eliminate post-inflammatory risks.'
            }
        ]
    },
    {
        id: 'hair-scalp-care',
        slug: 'hair-and-scalp-care',
        title: 'Hair & Scalp Care',
        shortDescription: 'Effective care for hair loss, dandruff and scalp health.',
        fullDescription: 'Healthy hair starts with a nourished, balanced follicular ecosystem. Our trichological protocols diagnose the underlying causes of thinning, telogen effluvium, androgenetic alopecia, and persistent dandruff, combining autologous growth factor therapy (PRP), scalp detox, and peptide stimulation.',
        category: 'hair',
        categoryLabel: 'Hair Care',
        iconName: 'hair',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        concerns: [
            'Pattern hair loss and thinning crowns',
            'Post-stress or seasonal shedding (Telogen Effluvium)',
            'Stubborn dandruff and seborrheic dermatitis',
            'Dry, irritated, or congested scalp follicles'
        ],
        procedureSteps: [
            {
                step: '01',
                title: 'Trichoscopic Scalp Analysis',
                description: 'High-magnification dermoscopy to evaluate follicular density, shaft diameter, and microvascular scalp health.'
            },
            {
                step: '02',
                title: 'Follicle Unclogging & Detox',
                description: 'Micro-bubble ultrasonic oxygen cleansing to remove sebum plugs and microbial build-up around hair roots.'
            },
            {
                step: '03',
                title: 'Bio-Stimulation & PRP Infusion',
                description: 'Enriched platelet concentrates or botanical peptide cocktails delivered directly to the dermal papilla.'
            }
        ],
        duration: '50 - 70 mins',
        recoveryTime: 'Zero downtime; resume regular activities immediately',
        recommendedSessions: '4 - 6 sessions spaced 1 month apart',
        aftercareTips: [
            'Do not wash hair or scalp for 24 hours following biological injections.',
            'Avoid heavy styling gels, chemical dyes, and heat tools for 48 hours.',
            'Use the prescribed sulfate-free, trichologist-formulated cleansing shampoo.'
        ],
        faqs: [
            {
                question: 'How do I know if my hair loss is reversible?',
                answer: 'During your initial consultation, our trichology team performs micro-imaging to confirm whether dormant follicles are still viable. Early intervention yields the highest rate of density restoration.'
            },
            {
                question: 'Does scalp PRP hurt?',
                answer: 'We utilize ultra-fine micro-needles and optional vibrational distraction techniques, making the treatment very tolerable with only minor pinch sensations.'
            }
        ]
    },
    {
        id: 'laser-dermatology',
        slug: 'laser-dermatology',
        title: 'Laser Dermatology',
        shortDescription: 'Advanced laser solutions for skin rejuvenation and scars.',
        fullDescription: 'Experience gold-standard medical optical technology for non-surgical skin remodeling. Our FDA-cleared fractional and vascular laser systems target damaged dermis, diffuse redness, vascular spider veins, and fine lines while triggering rapid, natural neocollagenesis.',
        category: 'laser',
        categoryLabel: 'Laser Treatments',
        iconName: 'laser',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
        concerns: [
            'Fine wrinkles, crow’s feet, and skin laxity',
            'Facial redness, rosacea, and broken capillaries',
            'Surgical scars and uneven skin surface',
            'Sun-induced photoaging and collagen depletion'
        ],
        procedureSteps: [
            {
                step: '01',
                title: 'Calibration & Eye Protection',
                description: 'Fitting certified medical-grade laser eyewear and selecting precise wavelength and pulse fluences.'
            },
            {
                step: '02',
                title: 'Fractional Micro-Thermal Delivery',
                description: 'Microscopic columns of laser energy gently penetrate the dermal layers, preserving healthy surrounding tissue for fast healing.'
            },
            {
                step: '03',
                title: 'Cryogenic Soothing & Barrier Seal',
                description: 'Post-laser chilled air therapy followed by epidermal growth factor calming sheet application.'
            }
        ],
        duration: '45 - 60 mins',
        recoveryTime: '1 - 3 days mild erythema (like a gentle sunburn)',
        recommendedSessions: '3 sessions spaced 4 to 6 weeks apart',
        aftercareTips: [
            'Keep the area gently hydrated with sterile soothing balm.',
            'Strictly avoid direct sunlight and apply physical mineral sunscreen.',
            'Sleep slightly elevated on the first night to minimize any temporary puffy sensation.'
        ],
        faqs: [
            {
                question: 'What is the recovery period for fractional laser?',
                answer: 'Most patients experience moderate redness similar to a mild sunburn for 24 to 48 hours, easily managed with soothing creams and mineral sunscreen.'
            },
            {
                question: 'Is laser safe for sensitive skin?',
                answer: 'Yes. With modern tunable wavelengths and contact cooling chillers, the doctor customizes energy delivery to keep your skin safe and comfortable.'
            }
        ]
    },
    {
        id: 'skin-rejuvenation',
        slug: 'skin-rejuvenation-and-anti-aging',
        title: 'Skin Rejuvenation & Anti-Aging',
        shortDescription: 'Non-invasive collagen remodeling for youthful firmness and radiance.',
        fullDescription: 'Comprehensive anti-aging therapy designed to restore lost dermal elasticity, smooth fine lines, and replenish deep dermal hydration without altering your natural facial architecture.',
        category: 'aesthetic',
        categoryLabel: 'Aesthetic Care',
        iconName: 'sparkles',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        concerns: [
            'Loss of skin firmness and elasticity',
            'Dull, fatigued complexion',
            'Fine lines around mouth and eyes',
            'Uneven skin texture and dehydration'
        ],
        procedureSteps: [
            {
                step: '01',
                title: 'Facial Architecture Assessment',
                description: 'Evaluating natural vectors of youth, dermal volume, and skin bounce.'
            },
            {
                step: '02',
                title: 'Multi-Polar Radiofrequency',
                description: 'Delivering comfortable thermal energy to stimulate deep collagen contracture.'
            },
            {
                step: '03',
                title: 'Micro-Droplet Hyaluronic Hydration',
                description: 'Infusing pure bio-compatible hyaluronic acid to plump and brighten the superficial dermis.'
            }
        ],
        duration: '60 mins',
        recoveryTime: 'Zero downtime; instant radiant glow',
        recommendedSessions: '3 - 4 sessions every 4 weeks',
        aftercareTips: [
            'Drink plenty of water to amplify hyaluronic plumping effects.',
            'Maintain your daily home peptide and SPF routine.',
            'Avoid strenuous workouts for 24 hours.'
        ],
        faqs: [
            {
                question: 'Does this change my natural expressions?',
                answer: 'No. Our philosophy focuses strictly on bio-stimulation and dermal skin quality, keeping all expressions soft, natural, and authentically yours.'
            }
        ]
    },
    {
        id: 'chemical-peels',
        slug: 'chemical-peels-and-glow-therapy',
        title: 'Chemical Peels & Glow Therapy',
        shortDescription: 'Dermatologist-formulated peeling agents for luminous clarity.',
        fullDescription: 'Precision clinical peels utilizing glycolic, salicylic, lactic, and mandelic acids to sweep away dull dead cells, unclog congested pores, and reveal fresh, baby-smooth skin.',
        category: 'skin',
        categoryLabel: 'Skin Care',
        iconName: 'shield',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        concerns: [
            'Surface roughness and flaky skin',
            'Enlarged congested pores',
            'Minor discoloration and uneven tone',
            'Pre-event glow preparation'
        ],
        procedureSteps: [
            {
                step: '01',
                title: 'Skin Degreasing & Prep',
                description: 'Gentle pH-balancing cleansing to optimize even acid absorption.'
            },
            {
                step: '02',
                title: 'Custom Acid Layering',
                description: 'Precise application of timed medical acid cocktail based on skin tolerance.'
            },
            {
                step: '03',
                title: 'Neutralization & Cold Mask',
                description: 'Instant acid neutralization followed by calming botanical biocellulose mask.'
            }
        ],
        duration: '35 - 45 mins',
        recoveryTime: '1 - 2 days mild peeling (easily covered with moisturizer)',
        recommendedSessions: 'Series of 3 - 5 peels spaced 3 weeks apart',
        aftercareTips: [
            'Do not pick or pull peeling skin flakes.',
            'Keep skin continuously moisturized with gentle barrier ointment.',
            'Strictly avoid direct sunlight and apply SPF 50+.'
        ],
        faqs: [
            {
                question: 'Will my face peel heavily in sheets?',
                answer: 'Modern clinical peels are designed for micro-exfoliation rather than harsh sheet peeling, allowing you to return to work with minimal disruption.'
            }
        ]
    }
];
