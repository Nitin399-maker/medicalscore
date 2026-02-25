// ========== MEDICAL ANALYSIS PROMPT ==========
export const MEDICAL_ANALYSIS_PROMPT = `CRITICAL INSTRUCTIONS FOR COUNTS:
- Count ONLY the actual entries you create in the arrays
- surgeriesTotal MUST equal the exact number of items in the "surgeries" array
- concussionsTotal MUST equal the exact number of items in the "neuro.concussions" array
- majorInjuriesTotal MUST equal the count of injuries with severity="Major" in the "injuries" array
- moderateInjuriesTotal MUST equal the count of injuries with severity="Moderate" in the "injuries" array
- minorInjuriesTotal MUST equal the count of injuries with severity="Minor" in the "injuries" array
- missedGamesTotal should be the sum of all missedGames from the "availability.missedGamesBySeason" array
- DO NOT inflate counts - they must match the actual array lengths

Extract and return ONLY a valid JSON object with the following structure (no markdown, no code blocks, just raw JSON):
{
  "player": {
    "name": "string",
    "draftYear": 2022,
    "handedness": "L|R|Unknown"
  },
  "summaryCounts": {
    "surgeriesTotal": 0,
    "surgeriesMajorJoint": 0,
    "surgeriesNonMajorJoint": 0,
    "recurrenceTotal": 0,
    "missedGamesTotal": 0,
    "concussionsTotal": 0,
    "cervicalNeurologicEventsTotal": 0,
    "majorInjuriesTotal": 0,
    "moderateInjuriesTotal": 0,
    "minorInjuriesTotal": 0
  },
  "flags": {
    "cartilageDegeneration": false,
    "looseBodies": false,
    "effusionRecurrentOrModerate": false,
    "osteoarthritisOrArthrosis": false,
    "stressFractureHistory": false,
    "fractureNonunionOrDelayedUnion": false,
    "avascularNecrosisConcern": false,
    "hardwareFailureOrBrokenImplant": false,
    "recurrentInstability": false,
    "recurrentMuscleStrain": false
  },
  "availability": {
    "missedGamesBySeason": [
      { "season": 2022, "missedGames": 0, "reason": "string" }
    ],
    "missedPracticeWeeksTotal": 0,
    "limitedParticipationWeeksTotal": 0,
    "currentRestrictions": "None|Limited|NoCombine|ProDayOnly|Unknown",
    "availabilityNarrative": "string"
  },
  "injuries": [
    {
      "date": "YYYY-MM-DD",
      "season": 2024,
      "bodyRegion": "Head|CervicalSpine|Shoulder|Elbow|WristHand|HipGroin|ThighHamstring|Knee|AnkleFoot|LumbarSpine|Other",
      "structure": "string (e.g., MCL, labrum, meniscus)",
      "injuryName": "string",
      "type": "Sprain|Strain|Tear|Fracture|Dislocation|Subluxation|Tendinopathy|Contusion|Other",
      "typeReason": "Brief explanation of why this type was chosen (2-3 sentences)",
      "typeSourceDoc": "Document filename where type information was found",
      "typeSourceQuote": "Exact sentence or phrase from document supporting this type classification",
      "side": "Left|Right|Bilateral|NA",
      "severity": "Major|Moderate|Minor",
      "severityReason": "Brief explanation of why this severity level was assigned based on impact, time lost, structural damage, or career implications (2-3 sentences)",
      "severitySourceDoc": "Document filename where severity information was found",
      "severitySourceQuote": "Exact sentence or phrase from document supporting this severity classification",
      "mechanism": "Contact|NonContact|Overuse|Unknown",
      "recurrenceGroupId": "string-or-null",
      "treatment": {
        "surgery": false,
        "injection": "None|PRP|Cortisone|Other|Unknown",
        "braceOrTape": false,
        "rehabOnly": true
      },
      "timeLost": {
        "missedGames": 0,
        "missedPracticeWeeks": 0
      },
      "currentStatus": "Asymptomatic|Symptomatic|Recovered|Ongoing|Unknown",
      "statusReason": "Brief explanation of current status based on documented recovery, symptoms, or limitations (2-3 sentences)",
      "statusSourceDoc": "Document filename where status information was found",
      "statusSourceQuote": "Exact sentence or phrase from document supporting this status",
      "notes": "string"
    }
  ],
  "surgeries": [
    {
      "date": "YYYY-MM-DD",
      "bodyRegion": "Shoulder|Knee|AnkleFoot|WristHand|HipGroin|LumbarSpine|Other",
      "procedure": "string",
      "procedureCategory": "Repair|Reconstruction|Debridement|Meniscectomy|ORIF|Tenex|Other",
      "procedureCategoryReason": "Brief explanation of why this procedure category was chosen based on the surgical technique and intervention type (2-3 sentences)",
      "procedureCategorySourceDoc": "Document filename where procedure information was found",
      "procedureCategorySourceQuote": "Exact sentence or phrase from document describing the procedure",
      "side": "Left|Right|Bilateral|NA",
      "majorJoint": true,
      "revision": false,
      "reasonRelatedInjuryId": "optional reference",
      "outcome": {
        "returnedToPlay": true,
        "residualSymptoms": "None|Mild|Moderate|Severe|Unknown",
        "outcomeReason": "Brief explanation of the outcome assessment based on recovery progress, return to play status, and any documented limitations (2-3 sentences)",
        "outcomeSourceDoc": "Document filename where outcome information was found",
        "outcomeSourceQuote": "Exact sentence or phrase from document describing the outcome",
        "currentLimitation": "None|WeightRoomMods|Brace|SnapCount|Unknown"
      }
    }
  ],
  "imagingFindings": [
    {
      "date": "YYYY-MM-DD",
      "modality": "MRI|XR|CT|US|Other",
      "bodyRegion": "Shoulder|Knee|AnkleFoot|WristHand|HipGroin|LumbarSpine|CervicalSpine|Other",
      "side": "Left|Right|Bilateral|NA",
      "sourceDoc": "string",
      "structuredFindings": {
        "degenerativeChange": "None|Mild|Moderate|Severe|Unknown",
        "cartilageDamage": "None|Mild|Moderate|Severe|FullThickness|Unknown",
        "labrumMeniscusStatus": "Normal|PostOpNoRetear|PossibleRetear|ConfirmedRetear|Unknown",
        "tendonStatus": "Normal|Tendinosis|PartialTear|FullTear|Unknown",
        "ligamentStatus": "Normal|SprainLowGrade|SprainGrade2|Tear|ReconstructionIntact|Unknown",
        "effusion": "None|Trace|Moderate|Large|Unknown",
        "looseBodies": false,
        "nonunionOrDelayedUnion": false,
        "avascularNecrosisConcern": false,
        "hardwareComplication": "None|Lucency|Broken|Migration|Unknown",
        "postTraumaticArthritis": false,
        "stressReactionOrFracture": false
      },
      "imaging": {
        "finding": "finding description",
        "date": "YYYY-MM-DD",
        "doc": "source document name"
      }
    }
  ],
  "neuro": {
    "concussions": [
      {
        "date": "YYYY-MM-DD",
        "lossOfConsciousness": false,
        "timeLostDays": 0,
        "missedGames": 0,
        "prolongedSymptoms": false
      }
    ],
    "cervicalEvents": [
      {
        "date": "YYYY-MM-DD",
        "eventType": "Stinger|Radiculopathy|Neurapraxia|Other",
        "recurrent": false,
        "timeLostGames": 0,
        "currentSymptoms": false
      }
    ]
  },
  "timeline": [
    {"year": 2024, "event": "event description"}
  ],
  "scoringInputs": {
    "lastSignificantEventDate": "YYYY-MM-DD",
    "monthsSinceLastSignificantEvent": 0,
    "structuralRedFlagCount": 0,
    "degenerativeBurdenScore": 0,
    "instabilityBurdenScore": 0
  }
}

Important: 
- Combine and deduplicate information from all documents
- Return ONLY the JSON object, no additional text or formatting
- Ensure all arrays contain unique entries (no duplicates)
- Use the exact enum values specified (e.g., "Major" not "major")
- Fill in all required fields with best estimates from documents
- CRITICAL: Ensure summaryCounts values match the actual array lengths (e.g., surgeriesTotal = surgeries.length)
- Set flags to true ONLY when there is clear evidence in the imaging findings or medical history
- Must and must return the valid json`;

// ========== MEDICAL SCORE CALCULATION ==========
function clamp(x, min, max) {
    return Math.max(min, Math.min(max, x));
}

function monthsBetween(dateStrA, dateStrB) {
    if (!dateStrA || !dateStrB) return 0;
    const a = new Date(dateStrA);
    const b = new Date(dateStrB);
    if (isNaN(a.getTime()) || isNaN(b.getTime())) return 0;
    const months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
    return Math.max(0, months);
}

function decay(monthsAgo, halfLife) {
    if (halfLife <= 0) return 1;
    if (isNaN(monthsAgo) || monthsAgo < 0) return 1;
    const result = Math.pow(0.5, monthsAgo / halfLife);
    return isNaN(result) ? 1 : result;
}

function sevWeight(sev) {
    switch ((sev || "").toLowerCase()) {
        case "major": return 4.5;
        case "moderate": return 2.5;
        case "minor": return 1;
        default: return 1.5;
    }
}

function typeMultiplier(type) {
    const t = (type || "").toLowerCase();
    if (t === "fracture") return 1.3;
    if (t === "dislocation" || t === "subluxation") return 1.25;
    if (t === "tear") return 1.2;
    if (t === "sprain") return 1.05;
    if (t === "strain") return 1.0;
    if (t === "tendinopathy") return 0.95;
    if (t === "contusion") return 0.8;
    return 1.0;
}

function procedureMultiplier(cat) {
    const c = (cat || "").toLowerCase();
    if (c === "reconstruction") return 1.2;
    if (c === "orif") return 1.25;
    if (c === "repair") return 1.1;
    if (c === "meniscectomy") return 1.0;
    if (c === "debridement") return 0.9;
    if (c === "tenex") return 0.85;
    return 1.0;
}

function residualPenalty(level) {
    switch ((level || "").toLowerCase()) {
        case "none": return 0;
        case "mild": return 1;
        case "moderate": return 2.5;
        case "severe": return 4;
        default: return 1;
    }
}

function limitationPenalty(lim) {
    switch ((lim || "").toLowerCase()) {
        case "none": return 0;
        case "weightroommods": return 1;
        case "brace": return 1.5;
        case "snapcount": return 2;
        default: return 0.5;
    }
}

function cartilagePenalty(level) {
    const v = (level || "").toLowerCase();
    if (v === "fullthickness") return 5;
    if (v === "severe") return 3.5;
    if (v === "moderate") return 2;
    if (v === "mild") return 1;
    return 0;
}

function degenerativePenalty(level) {
    const v = (level || "").toLowerCase();
    if (v === "severe") return 3.5;
    if (v === "moderate") return 2;
    if (v === "mild") return 1;
    return 0;
}

function labrumMeniscusPenalty(status) {
    const s = (status || "").toLowerCase();
    if (s === "confirmedretear") return 4;
    if (s === "possibleretear") return 2.5;
    return 0;
}

function tendonPenalty(status) {
    const s = (status || "").toLowerCase();
    if (s === "fulltear") return 4.5;
    if (s === "partialtear") return 3;
    if (s === "tendinosis") return 1;
    return 0;
}

function ligamentPenalty(status) {
    const s = (status || "").toLowerCase();
    if (s === "tear") return 4;
    if (s === "spraingrade2") return 2;
    if (s === "sprainlowgrade") return 1;
    return 0;
}

function effusionPenalty(level) {
    const e = (level || "").toLowerCase();
    if (e === "large") return 2;
    if (e === "moderate") return 1;
    if (e === "trace") return 0.5;
    return 0;
}

function buildChainIdForInjury(inj) {
    if (inj?.recurrenceGroupId) return `rg:${inj.recurrenceGroupId}`;
    const key = [
        inj?.bodyRegion || "Other",
        inj?.side || "NA",
        inj?.structure || "Unknown"
    ].join("|");
    return `inj:${key}`;
}

function buildChainIdForSurgery(surg) {
    if (surg?.reasonRelatedInjuryId) return `injId:${surg.reasonRelatedInjuryId}`;
    const key = [surg?.bodyRegion || "Other", surg?.side || "NA"].join("|");
    return `sx:${key}`;
}

function imagingChainKey(img) {
    return `img:${[img?.bodyRegion || "Other", img?.side || "NA"].join("|")}`;
}

export function calculateMSI(facts, asOfDateStr) {
    // Validate input
    if (!facts || typeof facts !== 'object') {
        console.warn('Invalid facts object, returning default score');
        return {
            msi: 100,
            breakdown: {
                orthoPenalty: 0,
                redFlagPenalty: 0,
                availabilityPenalty: 0,
                neuroPenalty: 0,
                recentBoostMultiplier: 1.0,
                totalPenalty: 0
            }
        };
    }

    const asOf = asOfDateStr || new Date().toISOString().slice(0, 10);

    const injuries = Array.isArray(facts?.injuries) ? facts.injuries : [];
    const surgeries = Array.isArray(facts?.surgeries) ? facts.surgeries : [];
    const imgs = Array.isArray(facts?.imagingFindings) ? facts.imagingFindings : [];
    const flags = facts?.flags || {};
    const counts = facts?.summaryCounts || {};
    const scoringInputs = facts?.scoringInputs || {};

    const chains = new Map();
    function ensure(chainId) {
        if (!chains.has(chainId)) chains.set(chainId, { injuryMax: 0, surgeryMax: 0, imagingMax: 0, incremental: 0 });
        return chains.get(chainId);
    }

    for (const inj of injuries) {
        const chainId = buildChainIdForInjury(inj);
        const c = ensure(chainId);

        const monthsAgo = inj?.date ? monthsBetween(inj.date, asOf) : 24;
        const hl = (inj?.severity === "Major") ? 48 : (inj?.severity === "Moderate" ? 30 : 18);
        let p = sevWeight(inj?.severity) * typeMultiplier(inj?.type) * decay(monthsAgo, hl);

        if (inj?.treatment?.surgery) p *= 0.35;
        if (inj?.recurrenceGroupId) c.incremental += 1.5 * decay(monthsAgo, 36);

        c.injuryMax = Math.max(c.injuryMax, p);
    }

    for (const sx of surgeries) {
        const chainId = sx?.reasonRelatedInjuryId ? `injId:${sx.reasonRelatedInjuryId}` : buildChainIdForSurgery(sx);
        const c = ensure(chainId);

        const monthsAgo = sx?.date ? monthsBetween(sx.date, asOf) : 60;
        const hl = sx?.majorJoint ? 72 : 60;

        const base = sx?.majorJoint ? 6 : 4;
        const proc = procedureMultiplier(sx?.procedureCategory);

        const revision = sx?.revision ? 3 : 0;
        const residual = residualPenalty(sx?.outcome?.residualSymptoms);
        const limitation = limitationPenalty(sx?.outcome?.currentLimitation);

        const p = (base * proc + revision + residual + limitation) * decay(monthsAgo, hl);

        c.surgeryMax = Math.max(c.surgeryMax, p);
        c.incremental += (revision + residual + limitation) * 0.35 * decay(monthsAgo, 72);
    }

    for (const img of imgs) {
        const chainId = imagingChainKey(img);
        const c = ensure(chainId);

        const monthsAgo = img?.date ? monthsBetween(img.date, asOf) : 24;

        const sf = img?.structuredFindings || {};
        const structural =
            (sf.nonunionOrDelayedUnion ? 5 : 0) +
            (sf.avascularNecrosisConcern ? 5 : 0) +
            (sf.hardwareComplication && sf.hardwareComplication !== "None" ? 3 : 0) +
            (sf.looseBodies ? 2 : 0) +
            (sf.stressReactionOrFracture ? 3 : 0);

        const structuralPart = structural * decay(monthsAgo, 84);

        const degenerativePart =
            (degenerativePenalty(sf.degenerativeChange) +
             cartilagePenalty(sf.cartilageDamage) +
             (sf.postTraumaticArthritis ? 3 : 0)) * decay(monthsAgo, 120);

        const softTissuePart =
            (labrumMeniscusPenalty(sf.labrumMeniscusStatus) +
             tendonPenalty(sf.tendonStatus) +
             ligamentPenalty(sf.ligamentStatus) +
             effusionPenalty(sf.effusion)) * decay(monthsAgo, 48);

        const p = structuralPart + degenerativePart + softTissuePart;
        c.imagingMax = Math.max(c.imagingMax, p);
    }

    let orthoPenalty = 0;
    for (const c of chains.values()) {
        const chainCore = Math.max(c.injuryMax, c.surgeryMax, c.imagingMax);
        orthoPenalty += chainCore + c.incremental;
    }

    let redFlagPenalty = 0;

    if (flags.fractureNonunionOrDelayedUnion) redFlagPenalty += 6;
    if (flags.avascularNecrosisConcern) redFlagPenalty += 6;
    if (flags.hardwareFailureOrBrokenImplant) redFlagPenalty += 5;

    if (flags.osteoarthritisOrArthrosis) redFlagPenalty += 4;
    if (flags.cartilageDegeneration) redFlagPenalty += 4;
    if (flags.looseBodies) redFlagPenalty += 2.5;

    if (flags.stressFractureHistory) redFlagPenalty += 3;

    if (flags.recurrentInstability) redFlagPenalty += 3.5;
    if (flags.recurrentMuscleStrain) redFlagPenalty += 2;

    redFlagPenalty += 1.5 * (scoringInputs.structuralRedFlagCount || 0);
    redFlagPenalty += 0.75 * (scoringInputs.degenerativeBurdenScore || 0);
    redFlagPenalty += 1 * (scoringInputs.instabilityBurdenScore || 0);

    const avail = facts?.availability || {};
    const bySeason = avail?.missedGamesBySeason || [];

    let missedGamesWeighted = 0;
    if (bySeason.length > 0) {
        for (const s of bySeason) {
            const yearsAgo = Math.max(0, (new Date(asOf).getFullYear() - (s.season || new Date(asOf).getFullYear())));
            const w = Math.pow(0.5, yearsAgo / 2.5);
            missedGamesWeighted += (s.missedGames || 0) * w;
        }
    } else {
        missedGamesWeighted = counts.missedGamesTotal || 0;
    }

    const availabilityPenalty =
        1.5 * Math.min(missedGamesWeighted, 8) +
        0.6 * Math.max(missedGamesWeighted - 8, 0) +
        0.5 * (avail.missedPracticeWeeksTotal || 0) +
        0.25 * (avail.limitedParticipationWeeksTotal || 0);

    const restr = (avail.currentRestrictions || "Unknown").toLowerCase();
    let restrictionPenalty = 0;
    if (restr === "limited") restrictionPenalty = 2;
    if (restr === "nocombine") restrictionPenalty = 3.5;
    if (restr === "prodayonly") restrictionPenalty = 2.5;

    const neuro = facts?.neuro || {};
    const concs = neuro?.concussions || [];
    const cerv = neuro?.cervicalEvents || [];

    let neuroPenalty = 0;

    for (const c of concs) {
        const monthsAgo = c?.date ? monthsBetween(c.date, asOf) : 36;
        let p = 3 * decay(monthsAgo, 36);

        if (c.lossOfConsciousness) p += 1.5 * decay(monthsAgo, 60);
        if (c.prolongedSymptoms) p += 2 * decay(monthsAgo, 60);

        p += 0.75 * (c.missedGames || 0) * decay(monthsAgo, 48);

        neuroPenalty += p;
    }

    const concCount = counts.concussionsTotal || concs.length;
    if (concCount >= 2) neuroPenalty += 2.5;
    if (concCount >= 3) neuroPenalty += 3;

    for (const e of cerv) {
        const monthsAgo = e?.date ? monthsBetween(e.date, asOf) : 36;
        let p = 3 * decay(monthsAgo, 48);

        if (e.recurrent) p += 2 * decay(monthsAgo, 72);
        if (e.currentSymptoms) p += 3;
        p += 0.75 * (e.timeLostGames || 0) * decay(monthsAgo, 48);

        neuroPenalty += p;
    }

    const mLast = scoringInputs.monthsSinceLastSignificantEvent ?? null;
    const monthsSinceLast = (mLast != null) ? mLast : 18;

    const recentBoost = clamp((12 - monthsSinceLast) / 12, 0, 1) * 0.25;

    const totalPenaltyBase =
        orthoPenalty +
        redFlagPenalty +
        availabilityPenalty +
        restrictionPenalty +
        neuroPenalty;

    const totalPenalty = totalPenaltyBase * (1 + recentBoost);

    // Ensure all values are valid numbers
    const validOrthoPenalty = isNaN(orthoPenalty) ? 0 : orthoPenalty;
    const validRedFlagPenalty = isNaN(redFlagPenalty) ? 0 : redFlagPenalty;
    const validAvailabilityPenalty = isNaN(availabilityPenalty) ? 0 : availabilityPenalty;
    const validRestrictionPenalty = isNaN(restrictionPenalty) ? 0 : restrictionPenalty;
    const validNeuroPenalty = isNaN(neuroPenalty) ? 0 : neuroPenalty;
    const validRecentBoost = isNaN(recentBoost) ? 0 : recentBoost;
    
    const validTotalPenaltyBase = validOrthoPenalty + validRedFlagPenalty + validAvailabilityPenalty + validRestrictionPenalty + validNeuroPenalty;
    const validTotalPenalty = validTotalPenaltyBase * (1 + validRecentBoost);
    
    const msi = Math.round(clamp(100 - validTotalPenalty, 0, 100));

    return {
        msi,
        breakdown: {
            orthoPenalty: +validOrthoPenalty.toFixed(1),
            redFlagPenalty: +validRedFlagPenalty.toFixed(1),
            availabilityPenalty: +(validAvailabilityPenalty + validRestrictionPenalty).toFixed(1),
            neuroPenalty: +validNeuroPenalty.toFixed(1),
            recentBoostMultiplier: +(1 + validRecentBoost).toFixed(3),
            totalPenalty: +validTotalPenalty.toFixed(1)
        }
    };
}

// ========== PRINT STYLES ==========
export function getPrintStyles(playerName, hasCompareData = false) {
    return `
        @media print {
            @page {
                size: letter landscape;
                margin: 0.25in 0.3in;
            }
            body {
                margin: 0 !important;
                padding: 0 !important;
            }
            body * {
                visibility: hidden;
            }
            .navbar, .nav-tabs, #uploadProgress, .nav, header, nav {
                display: none !important;
                height: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            #playerDashboard::before {
                content: "Medical Report: ${playerName}";
                visibility: visible;
                display: block;
                font-size: 18pt;
                font-weight: bold;
                text-align: center;
                padding: 15px 0;
                margin-bottom: 15px;
                border-bottom: 2px solid #333;
                color: #000;
            }
            #playerDashboard {
                visibility: visible;
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100%;
                max-width: 100%;
                margin: 0 !important;
            }
            #playerDashboard * {
                visibility: visible;
            }
            .container, .container-fluid {
                width: 100% !important;
                max-width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin: 0 !important;
            }
            ${hasCompareData ? `
            #compareSection {
                visibility: visible !important;
                position: relative;
                page-break-before: always;
                margin-top: 0;
                width: 100%;
                clear: both;
            }
            #compareSection * {
                visibility: visible !important;
            }
            #compareSection .card {
                margin-top: 0;
            }
            ` : `
            #compareSection {
                display: none !important;
                visibility: hidden !important;
            }
            `}
            .btn, button, .sortable i, .form-check, .bi-arrow-down-up {
                display: none !important;
            }
            .card {
                page-break-inside: avoid;
                box-shadow: none !important;
                border: 1px solid #ddd !important;
                margin-bottom: 15px;
            }
            .card-header {
                background-color: #f8f9fa !important;
                padding: 10px 15px !important;
            }
            .card-body {
                padding: 15px !important;
            }
            table {
                width: 100%;
                font-size: 9pt;
                border-collapse: collapse;
            }
            thead {
                display: table-header-group;
            }
            tbody {
                display: table-row-group;
            }
            /* Keep injury/surgery rows with their detail rows */
            tr[class*="-row-"] {
                page-break-after: avoid !important;
                page-break-inside: avoid !important;
            }
            tr[class*="-details-"] {
                page-break-before: avoid !important;
                page-break-inside: avoid !important;
            }
            /* General row handling */
            tr {
                page-break-inside: avoid;
            }
            td, th {
                padding: 6px !important;
                font-size: 9pt;
            }
            .accordion-collapse {
                display: block !important;
                height: auto !important;
            }
            .accordion-button {
                padding: 8px !important;
            }
            .accordion-button::after {
                display: none;
            }
            .badge {
                padding: 3px 6px;
                font-size: 8pt;
            }
            .timeline-item {
                page-break-inside: avoid;
                font-size: 9pt;
                margin-bottom: 8px;
            }
            h6 {
                font-size: 11pt;
                margin-top: 10px;
                margin-bottom: 8px;
            }
            h4 {
                font-size: 13pt;
                margin-bottom: 10px;
            }
            .score-circle {
                width: 100px;
                height: 100px;
                font-size: 2rem;
            }
            /* Comparison table specific styles */
            .comparison-table {
                width: 100%;
                margin-top: 10px;
            }
            .comparison-table td {
                vertical-align: middle;
            }
            .table-responsive {
                overflow: visible !important;
            }
        }
    `;
}