"use client";

import styles from "./page.module.css";
import { useLang } from "@/context/LanguageContext";
import {
    Clock, TrendingDown, Lightbulb, AlertTriangle, CheckCircle,
    ArrowRight, BarChart3, Timer, Dog, BookOpen, Monitor, Users,
    Building2, Zap, Layers, Network, Cog, HeartPulse, Scale,
    GraduationCap, Landmark, Route, GitBranch, Target, CircleDot,
    ShieldAlert, MessageCircleWarning, MapPinned, ThumbsUp, ThumbsDown, Minus
} from "lucide-react";

/* ═══════════════════════════════════════════════════
   N-Model System Layers — socio-technical decomposition
   ═══════════════════════════════════════════════════ */
const systemLayers = [
    {
        id: "needs",
        icon: HeartPulse,
        color: "#e53e3e",
        labelDa: "Behov (Needs)",
        labelEn: "Needs",
        descDa: "De fundamentale behov for blinde og svagsynede borgere: mobilitet, information, uddannelse, beskæftigelse, social inklusion, selvstændighed.",
        descEn: "Fundamental needs of blind and visually impaired citizens: mobility, information, education, employment, social inclusion, independence.",
        elements: [
            { da: "Sikker navigering i fysiske rum", en: "Safe navigation in physical spaces" },
            { da: "Adgang til skriftlig information", en: "Access to written information" },
            { da: "Uddannelse på lige vilkår", en: "Equal access to education" },
            { da: "Meningsfuld beskæftigelse", en: "Meaningful employment" },
            { da: "Social deltagelse og fællesskab", en: "Social participation and community" },
            { da: "Selvstændig daglig livsførelse", en: "Independent daily living" },
        ]
    },
    {
        id: "artifacts",
        icon: Cog,
        color: "#2b6cb0",
        labelDa: "Artefakter (Artifacts)",
        labelEn: "Artifacts",
        descDa: "Fysiske og digitale hjælpemidler: førerhunde, hvid stok, skærmlæsere, punktskriftdisplays, forstørrende teknologi, tilgængelige apps.",
        descEn: "Physical and digital assistive devices: guide dogs, white cane, screen readers, braille displays, magnifying technology, accessible apps.",
        elements: [
            { da: "Førerhunde (20-25/år, ~190-230 aktive)", en: "Guide dogs (20-25/yr, ~190-230 active)" },
            { da: "Skærmlæsere (JAWS, NVDA, VoiceOver)", en: "Screen readers (JAWS, NVDA, VoiceOver)" },
            { da: "Punktskriftdisplays & -printere", en: "Braille displays & printers" },
            { da: "Nota: 50.000+ digitale bøger", en: "Nota: 50,000+ digital books" },
            { da: "GPS-navigationshjælpemidler", en: "GPS navigation aids" },
            { da: "Forstørrende videohjælpemidler", en: "Video magnification aids" },
        ]
    },
    {
        id: "processes",
        icon: Route,
        color: "#dd6b20",
        labelDa: "Processer (Processes)",
        labelEn: "Processes",
        descDa: "Arbejdsgange fra borgerens første kontakt til rehabilitering: kommunal sagsbehandling, specialistvurdering, hjælpemiddelbevilling, rehabiliteringsforløb.",
        descEn: "Workflows from citizen's first contact to rehabilitation: municipal case processing, specialist assessment, assistive device granting, rehabilitation programs.",
        elements: [
            { da: "Kommunal ansøgning via borger.dk", en: "Municipal application via borger.dk" },
            { da: "Sagsbehandling (~28 dage ventetid)", en: "Case processing (~28 days wait)" },
            { da: "Specialistvurdering ved IBOS/Kennedy", en: "Specialist assessment at IBOS/Kennedy" },
            { da: "Hjælpemiddelbevilling (14-60 dage)", en: "Device granting (14-60 days)" },
            { da: "Rehabiliteringsplan udarbejdes", en: "Rehabilitation plan creation" },
            { da: "Opfølgning og justering", en: "Follow-up and adjustment" },
        ]
    },
    {
        id: "organizations",
        icon: Building2,
        color: "#38a169",
        labelDa: "Organisationer (Organizations)",
        labelEn: "Organizations",
        descDa: "Institutioner og aktører: kommuner (98), IBOS, Dansk Blindesamfund, Nota, Kennedy Centret, DPOD, sygehusøjenklinikker, regionale kommunikationscentre.",
        descEn: "Institutions and actors: municipalities (98), IBOS, Danish Association of the Blind, Nota, Kennedy Center, DPOD, hospital eye clinics, regional communication centers.",
        elements: [
            { da: "98 kommuner (decentraliseret ansvar)", en: "98 municipalities (decentralized responsibility)" },
            { da: "IBOS: 130 medarbejdere, national", en: "IBOS: 130 employees, national scope" },
            { da: "Dansk Blindesamfund: 7.500+ medlemmer", en: "Danish Association of the Blind: 7,500+ members" },
            { da: "Nota: 289.714 medlemmer", en: "Nota: 289,714 members" },
            { da: "Kennedy Centret: børnesynsregister", en: "Kennedy Center: children's vision registry" },
            { da: "DPOD: 34 organisationer, 330.000+ medl.", en: "DPOD: 34 organizations, 330,000+ members" },
        ]
    },
    {
        id: "policy",
        icon: Scale,
        color: "#6b46c1",
        labelDa: "Politik & Lovgivning (Policy)",
        labelEn: "Policy & Legislation",
        descDa: "Lovramme og styringsmekanismer: Serviceloven, FN's Handicapkonvention, EU Accessibility Act (EAA, juni 2025), WCAG-krav, sektoransvarsprincippet.",
        descEn: "Legal framework and governance: Social Services Act, UN Convention on Disability, EU Accessibility Act (EAA, June 2025), WCAG requirements, sector responsibility principle.",
        elements: [
            { da: "Lov om social service (Serviceloven)", en: "Social Services Act" },
            { da: "FN's Handicapkonvention (ratificeret)", en: "UN Convention on Disability (ratified)" },
            { da: "EU Accessibility Act (EAA) – juni 2025", en: "EU Accessibility Act (EAA) – June 2025" },
            { da: "WCAG 2.1/2.2 tilgængelighedskrav", en: "WCAG 2.1/2.2 accessibility requirements" },
            { da: "Sektoransvarsprincippet", en: "Sector responsibility principle" },
            { da: "National handlingsplan for handicap (2024)", en: "National disability action plan (2024)" },
        ]
    },
    {
        id: "social",
        icon: Users,
        color: "#d53f8c",
        labelDa: "Social & Kulturel Kontekst",
        labelEn: "Social & Cultural Context",
        descDa: "Samfundsmæssige faktorer: stigma, opmærksomhed, digitalt udsatte (17-22%), uddannelseskløft (50%+ uden arbejdsmarkedsuddannelse), holdningsændring.",
        descEn: "Societal factors: stigma, awareness, digitally exposed (17-22%), education gap (50%+ without labor market skills), attitude change.",
        elements: [
            { da: "17-22% af voksne er 'digitalt udsatte'", en: "17-22% of adults are 'digitally exposed'" },
            { da: "50%+ uden arbejdsmarkedsuddannelse", en: "50%+ lack labor market-oriented education" },
            { da: "Intet centralt synsregister (32.000 est.)", en: "No central vision registry (32,000 est.)" },
            { da: "Stigma og manglende synlighed", en: "Stigma and lack of visibility" },
            { da: "Børnesynshandicap: 2,8/10.000 fødte", en: "Child visual impairment: 2.8/10,000 births" },
            { da: "Aldrende befolkning → stigende prævalens", en: "Aging population → increasing prevalence" },
        ]
    },
];

/* ═══════════════════════════════════════════════════
   System Conflicts — cross-layer tensions
   ═══════════════════════════════════════════════════ */
const systemConflicts = [
    {
        layersDa: "Behov ↔ Processer",
        layersEn: "Needs ↔ Processes",
        conflictDa: "Borgerne har behov for hurtig hjælp efter pludseligt synstab, men den kommunale sagsbehandling tager ~28 dage. Forskning viser at forsinkelse >30 dage markant reducerer rehabilitering.",
        conflictEn: "Citizens need rapid aid after sudden vision loss, but municipal processing takes ~28 days. Research shows delays >30 days significantly reduce rehabilitation outcomes.",
        color: "#e53e3e",
    },
    {
        layersDa: "Artefakter ↔ Organisationer",
        layersEn: "Artifacts ↔ Organizations",
        conflictDa: "Kun 20-25 førerhunde uddannes årligt af Dansk Blindesamfund – langt under efterspørgslen. Organisatorisk kapacitet begrænser artefaktproduktionen kritisk.",
        conflictEn: "Only 20-25 guide dogs trained annually by Danish Association of the Blind — far below demand. Organizational capacity critically limits artifact production.",
        color: "#dd6b20",
    },
    {
        layersDa: "Politik ↔ Organisationer",
        layersEn: "Policy ↔ Organizations",
        conflictDa: "Sektoransvarsprincippet (kommunalt ansvar) skaber uensartethed – 98 kommuner med varierende specialviden og ressourcer. Ingen national hjælpemiddelliste.",
        conflictEn: "Sector responsibility principle (municipal responsibility) creates inconsistency — 98 municipalities with varying expertise and resources. No national assistive device list.",
        color: "#6b46c1",
    },
    {
        layersDa: "Social kontekst ↔ Politik",
        layersEn: "Social context ↔ Policy",
        conflictDa: "65% af offentlige websites opfylder ikke WCAG-kravene trods lovgivning. Den digitale kløft (17-22% digitalt udsatte) underminerer digitale tilgængelighedsinitiativer.",
        conflictEn: "65% of public websites fail WCAG requirements despite legislation. The digital divide (17-22% digitally exposed) undermines digital accessibility initiatives.",
        color: "#d53f8c",
    },
    {
        layersDa: "Behov ↔ Social kontekst",
        layersEn: "Needs ↔ Social context",
        conflictDa: "Behovet for uddannelse og beskæftigelse er stort, men over 50% af synshandicappede i alderen 16-64 mangler en arbejdsmarkedsrettet uddannelse – dobbelt så mange ift. normalbefolkningen.",
        conflictEn: "Education and employment needs are high, but over 50% of visually impaired aged 16-64 lack labor market-oriented education — twice the rate of the general population.",
        color: "#2b6cb0",
    },
];

/* ═══════════════════════════════════════════════════
   Timeline data (same as before)
   ═══════════════════════════════════════════════════ */
const timelineData = [
    { step: 1, da: "Henvendelse til kommune", en: "Contact municipality", daysEn: "1-3 days", daysDa: "1-3 dage", status: "fast" },
    { step: 2, da: "Sagsbehandling & visitation", en: "Case processing & assessment", daysEn: "~28 days (avg)", daysDa: "~28 dage (gns.)", status: "bottleneck" },
    { step: 3, da: "Henvisning til IBOS/specialist", en: "Referral to IBOS/specialist", daysEn: "14-30 days", daysDa: "14-30 dage", status: "slow" },
    { step: 4, da: "Vurdering & behovsafklaring", en: "Assessment & needs clarification", daysEn: "7-14 days", daysDa: "7-14 dage", status: "ok" },
    { step: 5, da: "Rehabiliteringsplan udarbejdes", en: "Rehabilitation plan created", daysEn: "14-21 days", daysDa: "14-21 dage", status: "slow" },
    { step: 6, da: "Hjælpemidler bevilges & leveres", en: "Assistive devices granted & delivered", daysEn: "14-60 days", daysDa: "14-60 dage", status: "bottleneck" },
    { step: 7, da: "Rehabilitering påbegyndes", en: "Rehabilitation begins", daysEn: "Ongoing", daysDa: "Løbende", status: "ongoing" },
];

/* ═══════════════════════════════════════════════════
   Design interventions (replacing old recommendations)
   ═══════════════════════════════════════════════════ */
const interventions = [
    {
        titleDa: "Digitaliseret kommunal triage med AI",
        titleEn: "Digitized municipal triage with AI",
        descDa: "Redesign af den kommunale ansøgningsproces (borger.dk) med AI-baseret triage der prioriterer akutte sager (pludseligt synstab). Kan reducere ventetid fra 28 til 5-10 dage.",
        descEn: "Redesign of the municipal application process (borger.dk) with AI-based triage prioritizing urgent cases (sudden vision loss). Could reduce wait from 28 to 5-10 days.",
        layersDa: "Processer + Politik",
        layersEn: "Processes + Policy",
        impactDa: "Meget høj",
        impactEn: "Very high",
        timelineDa: "6-12 mdr.",
        timelineEn: "6-12 months",
        icon: Zap,
    },
    {
        titleDa: "Centralt nationalt synsregister",
        titleEn: "Central national vision registry",
        descDa: "Etablering af et centralt register over alle borgere med synsnedsættelse — baseret på Kennedy Centrets model for børnesynsregisteret. Muliggør evidensbaseret ressourceallokering og proaktiv indsats.",
        descEn: "Establishment of a central registry of all citizens with visual impairment — modeled on Kennedy Center's children vision registry. Enables evidence-based resource allocation and proactive outreach.",
        layersDa: "Organisationer + Social kontekst",
        layersEn: "Organizations + Social context",
        impactDa: "Høj",
        impactEn: "High",
        timelineDa: "12-18 mdr.",
        timelineEn: "12-18 months",
        icon: BarChart3,
    },
    {
        titleDa: "Standardiseret municipal certificering",
        titleEn: "Standardized municipal certification",
        descDa: "Obligatorisk certificering af kommunale sagsbehandlere + oprettelse af national hjælpemiddelliste. Eliminerer regional uensartethed mellem 98 kommuner.",
        descEn: "Mandatory certification of municipal case workers + creation of national assistive device list. Eliminates regional inconsistency across 98 municipalities.",
        layersDa: "Organisationer + Politik",
        layersEn: "Organizations + Policy",
        impactDa: "Høj",
        impactEn: "High",
        timelineDa: "12-24 mdr.",
        timelineEn: "12-24 months",
        icon: CheckCircle,
    },
    {
        titleDa: "Skaleret førerhundeprogram via internationale partnerskaber",
        titleEn: "Scaled guide dog program via international partnerships",
        descDa: "Udvidelse fra 20-25 til 50+ hunde/år gennem partnerskaber med nordiske og europæiske træningscentre. Supplement med AI-baserede navigationsværktøjer.",
        descEn: "Expansion from 20-25 to 50+ dogs/year through partnerships with Nordic and European training centers. Supplemented by AI-based navigation tools.",
        layersDa: "Artefakter + Organisationer",
        layersEn: "Artifacts + Organizations",
        impactDa: "Middel",
        impactEn: "Medium",
        timelineDa: "24-36 mdr.",
        timelineEn: "24-36 months",
        icon: Dog,
    },
    {
        titleDa: "Integreret uddannelses- og beskæftigelsesvej",
        titleEn: "Integrated education and employment pathway",
        descDa: "Systemisk redesign der forbinder IBOS' rehabilitering direkte med arbejdsmarkeds-mentorordninger og virksomhedspartnerskaber. Adresserer de 50%+ uden arbejdsmarkedsuddannelse.",
        descEn: "Systemic redesign connecting IBOS rehabilitation directly to labor market mentorship and employer partnerships. Addresses 50%+ without labor market education.",
        layersDa: "Behov + Social kontekst + Processer",
        layersEn: "Needs + Social context + Processes",
        impactDa: "Meget høj",
        impactEn: "Very high",
        timelineDa: "18-36 mdr.",
        timelineEn: "18-36 months",
        icon: GraduationCap,
    },
];

/* ═══════════════════════════════════════════════════
   Reality Gap — official vs. reported timelines
   ═══════════════════════════════════════════════════ */
const realityGap = [
    {
        id: "kc-wait",
        institutionDa: "Kommunikationscentret, Region Hovedstaden",
        institutionEn: "Kommunikationscentret, Capital Region",
        processDa: "Ventetid på synsfaglig vurdering og specialundervisning",
        processEn: "Wait time for vision assessment and specialized education",
        officialDa: "6-10 uger",
        officialEn: "6-10 weeks",
        officialSourceDa: "Officiel information fra Kommunikationscentret",
        officialSourceEn: "Official information from Kommunikationscentret",
        realityDa: "6-12 måneder",
        realityEn: "6-12 months",
        realitySourceDa: "Rapporteret af borgere i Lyngby-Taarbæk",
        realitySourceEn: "Reported by citizens in Lyngby-Taarbæk",
        factorDa: "4-5× længere end oplyst",
        factorEn: "4-5× longer than stated",
        notesDa: "Borgere oplever at det reelle forløb fra første kontakt til afsluttet specialundervisning tager markant længere end de officielle estimater. Årsagen tilskrives ventelister, kapacitetsmangel og manglende koordinering mellem kommune og center.",
        notesEn: "Citizens experience that the actual process from first contact to completed specialized education takes significantly longer than official estimates. Causes attributed to waiting lists, capacity shortages, and lack of coordination between municipality and center.",
        color: "#e53e3e",
        severity: "critical",
    },
    {
        id: "cso-sagsbehandling",
        institutionDa: "Center for Sundhed og Omsorg, Lyngby-Taarbæk",
        institutionEn: "Center for Health & Care, Lyngby-Taarbæk",
        processDa: "Sagsbehandlingstid for hjælpemiddelansøgning",
        processEn: "Processing time for assistive device applications",
        officialDa: "14-28 dage",
        officialEn: "14-28 days",
        officialSourceDa: "Servicelovens retningslinjer og kommunal målsætning",
        officialSourceEn: "Social Services Act guidelines and municipal targets",
        realityDa: "2-4 måneder",
        realityEn: "2-4 months",
        realitySourceDa: "Erfaringer fra borgere og pårørende",
        realitySourceEn: "Experiences from citizens and relatives",
        factorDa: "3-4× længere end oplyst",
        factorEn: "3-4× longer than stated",
        notesDa: "Særligt komplekse sager (elektroniske hjælpemidler, skærmlæsere, specialoptik) kræver ofte flere runder med dokumentation og specialistvurdering, der forlænger den reelle sagsbehandlingstid langt ud over den officielle målsætning.",
        notesEn: "Particularly complex cases (electronic aids, screen readers, specialized optics) often require multiple rounds of documentation and specialist assessment, extending actual processing time far beyond the official target.",
        color: "#dd6b20",
        severity: "high",
    },
    {
        id: "guide-dog",
        institutionDa: "Dansk Blindesamfund / kommunal bevilling",
        institutionEn: "Danish Association of the Blind / municipal grant",
        processDa: "Ventetid på førerhund efter godkendelse",
        processEn: "Wait time for guide dog after approval",
        officialDa: "6-12 måneder",
        officialEn: "6-12 months",
        officialSourceDa: "Dansk Blindesamfund",
        officialSourceEn: "Danish Association of the Blind",
        realityDa: "2-4 år",
        realityEn: "2-4 years",
        realitySourceDa: "Aktuelle ventelister og brugerrapporter",
        realitySourceEn: "Current waiting lists and user reports",
        factorDa: "3-4× længere end oplyst",
        factorEn: "3-4× longer than stated",
        notesDa: "Med kun 20-25 førerhunde uddannet årligt og en langt højere efterspørgsel, er den reelle ventetid for mange borgere flere år. Nogle borgere rapporterer at de aldrig modtager en førerhund og i stedet må finde alternative løsninger.",
        notesEn: "With only 20-25 guide dogs trained annually and far higher demand, the actual wait time for many citizens is several years. Some citizens report never receiving a guide dog and instead having to find alternative solutions.",
        color: "#6b46c1",
        severity: "high",
    },
    {
        id: "digital-access",
        institutionDa: "Lyngby-Taarbæk Kommune (ltk.dk)",
        institutionEn: "Lyngby-Taarbæk Municipality (ltk.dk)",
        processDa: "Tilgængelighed af kommunens digitale selvbetjening",
        processEn: "Accessibility of municipal digital self-service",
        officialDa: "Delvis tilgængelig (WCAG 2.1 AA)",
        officialEn: "Partially accessible (WCAG 2.1 AA)",
        officialSourceDa: "Kommunens tilgængelighedserklæring",
        officialSourceEn: "Municipality's accessibility statement",
        realityDa: "Væsentlige barrierer for skærmlæserbrugere",
        realityEn: "Significant barriers for screen reader users",
        realitySourceDa: "Test med borgere der bruger JAWS/NVDA",
        realitySourceEn: "Testing with citizens using JAWS/NVDA",
        factorDa: "Ikke-funktionelt for mange brugere",
        factorEn: "Non-functional for many users",
        notesDa: "Selvom kommunen officielt erklærer delvis tilgængelighed, viser tests med reelle skærmlæserbrugere at centrale selvbetjeningsfunktioner (hjælpemiddelansøgning, handicapkørsel-bestilling) har kritiske barrierer der kræver assistance fra seende.",
        notesEn: "Although the municipality officially declares partial accessibility, tests with actual screen reader users show that key self-service functions (assistive device applications, disability transport booking) have critical barriers requiring assistance from sighted persons.",
        color: "#2b6cb0",
        severity: "medium",
    },
    {
        id: "full-journey",
        institutionDa: "Hele systemet — samlet forløb",
        institutionEn: "Full system — complete journey",
        processDa: "Tid fra synstab-diagnose til fuld rehabilitering",
        processEn: "Time from vision loss diagnosis to full rehabilitation",
        officialDa: "3-6 måneder",
        officialEn: "3-6 months",
        officialSourceDa: "Akkumuleret fra officielle procesestimater",
        officialSourceEn: "Accumulated from official process estimates",
        realityDa: "1,5-3 år",
        realityEn: "1.5-3 years",
        realitySourceDa: "Brugerstudier og interviews i Lyngby-Taarbæk",
        realitySourceEn: "User studies and interviews in Lyngby-Taarbæk",
        factorDa: "5-6× længere end oplyst",
        factorEn: "5-6× longer than stated",
        notesDa: "Når man sammenlægger alle delsystemer — kommunal sagsbehandling, specialistvurdering, hjælpemiddelbevilling, rehabilitering, opfølgning — er den samlede brugerrejse dramatisk længere end de individuelle officielle estimater lægger op til. Forskellen skyldes ventetider mellem systemerne, manglende overlevering og kulturel accept af langsom proces.",
        notesEn: "When combining all subsystems — municipal case processing, specialist assessment, device granting, rehabilitation, follow-up — the total user journey is dramatically longer than individual official estimates suggest. The difference is due to wait times between systems, lack of handover coordination, and cultural acceptance of slow processes.",
        color: "#e53e3e",
        severity: "critical",
    },
];

const severityLabels = {
    critical: { da: "Kritisk afvigelse", en: "Critical gap", color: "#c53030", bg: "#fff5f5" },
    high: { da: "Stor afvigelse", en: "Major gap", color: "#dd6b20", bg: "#fffaf0" },
    medium: { da: "Moderat afvigelse", en: "Moderate gap", color: "#d69e2e", bg: "#fffff0" },
};

/* ═══════════════════════════════════════════════════
   Municipal Benchmarking — Lyngby vs København vs DK
   ═══════════════════════════════════════════════════ */
const benchmarkDimensions = [
    {
        id: "specialist",
        dimDa: "Specialistadgang (syn)",
        dimEn: "Specialist access (vision)",
        lyngbyDa: "Via Kommunikationscentret i Hillerød (CKU). Kræver kommunal henvisning eller øjenlæge. Centret dækker 11 kommuner — begrænset kapacitet.",
        lyngbyEn: "Via Kommunikationscentret in Hillerød (CKU). Requires municipal referral or eye doctor. Center covers 11 municipalities — limited capacity.",
        lyngbyScore: "poor",
        cphDa: "Dobbelt adgang: IBOS (18-65 år, 130 medarbejdere, direkte kontakt) + CSV (0-18 og 65+, åben konsultation torsdage 10-11:30). Akutservice: 5 hverdages responstid.",
        cphEn: "Dual access: IBOS (18-65 yrs, 130 employees, direct contact) + CSV (0-18 and 65+, open consultation Thursdays 10-11:30). Acute service: 5 workday response.",
        cphScore: "good",
        dkDa: "\"Postnummerlotteriet\" — kvaliteten afhænger af kommunen. Mange små kommuner mangler specialviden. Dansk Blindesamfund kræver nationale standarder.",
        dkEn: "\"Postcode lottery\" — quality depends on municipality. Many small municipalities lack specialist knowledge. Danish Association of the Blind demands national standards.",
        dkScore: "mixed",
    },
    {
        id: "processing",
        dimDa: "Sagsbehandlingstid (hjælpemidler)",
        dimEn: "Case processing time (assistive devices)",
        lyngbyDa: "Officielt 14-28 dage. Reelt 2-4 måneder for komplekse sager (skærmlæsere, specialoptik). Ingen offentliggjorte ventetider.",
        lyngbyEn: "Official 14-28 days. Actually 2-4 months for complex cases (screen readers, specialized optics). No published wait times.",
        lyngbyScore: "poor",
        cphDa: "20 hverdage standard, 40 hverdage med yderligere oplysninger. Differentierede frister: 5 hverdage for genansøgninger. Offentliggjorte frister på kk.dk med 80-90% overholdelsesmål.",
        cphEn: "20 workdays standard, 40 workdays with additional info. Differentiated deadlines: 5 workdays for re-applications. Published deadlines on kk.dk with 80-90% compliance target.",
        cphScore: "good",
        dkDa: "Varierer ekstremt: Kolding 2 måneder, Hjørring 6 uger, enkelte kommuner 3+ måneder. Ankestyrelsen identificerer systematisk fristoverskridelse som nationalt problem.",
        dkEn: "Varies extremely: Kolding 2 months, Hjørring 6 weeks, some municipalities 3+ months. Appeals Board identifies systematic deadline violations as a national problem.",
        dkScore: "poor",
    },
    {
        id: "acute",
        dimDa: "Akut respons ved pludseligt synstab",
        dimEn: "Acute response for sudden vision loss",
        lyngbyDa: "Ingen dedikeret akutservice for synstab. Standard sagsbehandling også for akutte tilfælde. Borgere må vente på almindelig sagsg ang.",
        lyngbyEn: "No dedicated acute service for vision loss. Standard processing also for acute cases. Citizens must wait through regular case flow.",
        lyngbyScore: "poor",
        cphDa: "IBOS tilbyder gratis akutservice inden for 5 hverdage for borgere med pludseligt synstab. Københavnere kan kontakte IBOS’ synskonsulenter direkte.",
        cphEn: "IBOS offers free acute service within 5 workdays for citizens with sudden vision loss. Copenhagen residents can contact IBOS vision consultants directly.",
        cphScore: "good",
        dkDa: "Ingen national standard for akut synstabs-respons. Afhænger af kommunens kapacitet og kendskab til IBOS/VISO-tilbud. Forskning viser forsinkelse >30 dage reducerer rehabiliteringsresultater markant.",
        dkEn: "No national standard for acute vision loss response. Depends on municipality capacity and awareness of IBOS/VISO services. Research shows delays >30 days significantly reduce rehabilitation outcomes.",
        dkScore: "poor",
    },
    {
        id: "wait-specialist",
        dimDa: "Ventetid på specialistvurdering",
        dimEn: "Wait time for specialist assessment",
        lyngbyDa: "Kommunikationscentret: officielt 6-10 uger, reelt 6-12 måneder. Ingen offentliggjorte ventetider. Borgere må selv følge op.",
        lyngbyEn: "Kommunikationscentret: officially 6-10 weeks, actually 6-12 months. No published wait times. Citizens must follow up themselves.",
        lyngbyScore: "poor",
        cphDa: "CSV offentliggør reelle ventetider: optisk vurdering 50 dage, visitationssamtale 132 dage, IT-synsundervisning 91 dage, hjælnepunkmåledstest 56 dage. Gennemsigtighed!",
        cphEn: "CSV publishes real wait times: optical assessment 50 days, visitation interview 132 days, IT vision teaching 91 days, device testing 56 days. Transparency!",
        cphScore: "mixed",
        dkDa: "Ingen national rapportering af ventetider på synsområdet. Borgere med synshandicap kan opleve op til 5 års ventetid på kommunal beskæftigelseshjælp ifølge Folketingets høringer.",
        dkEn: "No national reporting of wait times for vision services. Citizens with visual impairment can experience up to 5 years wait for municipal employment help according to Parliament hearings.",
        dkScore: "poor",
    },
    {
        id: "transport",
        dimDa: "Handicapkørsel for blinde",
        dimEn: "Disability transport for blind citizens",
        lyngbyDa: "104 enkeltture/år via Movia Flextrafik. Blinde med synsrest ≤10% (6/60). Standard lovkrav — ingen ekstra ture.",
        lyngbyEn: "104 single trips/year via Movia Flextrafik. Blind with visual acuity ≤10% (6/60). Standard legal minimum — no extra trips.",
        lyngbyScore: "mixed",
        cphDa: "104 ture + mulighed for ansøgning om 20 ekstra ture/år ved særligt behov. Abonnement 300 kr/år (2025). Både Socialforvaltning (<65) og Sundhed & Omsorg (65+) håndterer.",
        cphEn: "104 trips + option to apply for 20 extra trips/year for special needs. Subscription 300 DKK/year (2025). Both Social Services (<65) and Health & Care (65+) handle.",
        cphScore: "good",
        dkDa: "Lovgivningen kræver minimum 104 enkeltture. Kommuner kan tilbyde mere, men få gør det proaktivt. Ansøgningsproces og dokumentation varierer.",
        dkEn: "Legislation requires minimum 104 single trips. Municipalities can offer more, but few do proactively. Application process and documentation varies.",
        dkScore: "mixed",
    },
    {
        id: "digital",
        dimDa: "Digital tilgængelighed",
        dimEn: "Digital accessibility",
        lyngbyDa: "ltk.dk erklærer \"delvis tilgængelighed\" men reelle skærmlæsertests afslører kritiske barrierer i selvbetjening (hjælpemiddelansøgning, handicapkørsel).",
        lyngbyEn: "ltk.dk declares \"partial accessibility\" but real screen reader tests reveal critical barriers in self-service (device applications, disability transport).",
        lyngbyScore: "poor",
        cphDa: "kk.dk har dedikeret tilgængelighedsteam og offentliggjort tilgængelighedserklæring. CSV tilbyder IT-synsundervisning (91 dages ventetid) så borgere kan bruge digitale løsninger.",
        cphEn: "kk.dk has dedicated accessibility team and published accessibility statement. CSV offers IT vision teaching (91 day wait) so citizens can use digital solutions.",
        cphScore: "mixed",
        dkDa: "65% af offentlige websites opfylder ikke WCAG-krav trods lovgivning. EU Accessibility Act (EAA) træder i kraft juni 2025 — forventes at øge presset.",
        dkEn: "65% of public websites fail WCAG requirements despite legislation. EU Accessibility Act (EAA) takes effect June 2025 — expected to increase pressure.",
        dkScore: "poor",
    },
    {
        id: "employment",
        dimDa: "Beskæftigelsesindsats for synshandicappede",
        dimEn: "Employment support for visually impaired",
        lyngbyDa: "Ingen specialiseret beskæftigelsesindsats for synshandicappede. Standard jobcenter-planlægning uden synsfaglig ekspertise.",
        lyngbyEn: "No specialized employment support for visually impaired. Standard job center planning without vision expertise.",
        lyngbyScore: "poor",
        cphDa: "IBOS tilbyder integreret beskæftigelsesrehabilintering med IKT-undervisning, neurooptometrisk vurdering og karriererådgivning. Direkte samarbejde med arbejdsgivere.",
        cphEn: "IBOS offers integrated employment rehabilitation with ICT teaching, neuro-optometric assessment, and career counseling. Direct collaboration with employers.",
        cphScore: "good",
        dkDa: "50%+ af synshandicappede 16-64 år mangler arbejdsmarkedsuddannelse (dobbelt så mange som normalbefolkningen). Op til 5 års ventetid på kommunal beskæftigelseshjælp.",
        dkEn: "50%+ of visually impaired aged 16-64 lack labor market education (double the general population). Up to 5 year wait for municipal employment help.",
        dkScore: "poor",
    },
];

const benchmarkInsights = [
    {
        typeDa: "København gør bedre",
        typeEn: "Copenhagen does better",
        type: "better",
        items: [
            { da: "Direkte IBOS-adgang for borgere 18-65 — ingen kommunal henvisning nødvendig for rådgivning", en: "Direct IBOS access for citizens 18-65 — no municipal referral needed for counseling" },
            { da: "Akutservice: 5 hverdages respons ved pludseligt synstab (IBOS)", en: "Acute service: 5 workday response for sudden vision loss (IBOS)" },
            { da: "CSV offentliggør reelle ventetider på kk.dk — fuld gennemsigtighed for borgere", en: "CSV publishes real wait times on kk.dk — full transparency for citizens" },
            { da: "Åben konsultation hos synskonsulent uden aftale (torsdage 10-11:30)", en: "Open consultation with vision consultant without appointment (Thursdays 10-11:30)" },
            { da: "Differentierede sagsbehandlingsfrister: 5 hverdage for genansøgninger", en: "Differentiated processing deadlines: 5 workdays for re-applications" },
            { da: "Integreret beskæftigelsesrehabilitering via IBOS (IKT + karriererådgivning)", en: "Integrated employment rehabilitation via IBOS (ICT + career counseling)" },
        ],
    },
    {
        typeDa: "Lyngby-Taarbæk mangler",
        typeEn: "Lyngby-Taarbæk lacks",
        type: "worse",
        items: [
            { da: "Ingen akutservice for pludseligt synstab — standard sagsgang også i akutte tilfælde", en: "No acute service for sudden vision loss — standard processing even in acute cases" },
            { da: "Ingen offentliggjorte ventetider — borgere kan ikke planlægge eller følge op", en: "No published wait times — citizens cannot plan or follow up" },
            { da: "Afhængighed af Kommunikationscentret i Hillerød (11 kommuner, 1 center)", en: "Dependency on Kommunikationscentret in Hillerød (11 municipalities, 1 center)" },
            { da: "Ingen specialiseret beskæftigelsesindsats — standard jobcenter uden synsfaglig viden", en: "No specialized employment support — standard job center without vision expertise" },
            { da: "Kritiske tilgængelighedsbarrierer på ltk.dk for skærmlæserbrugere", en: "Critical accessibility barriers on ltk.dk for screen reader users" },
        ],
    },
    {
        typeDa: "Fælles nationale udfordringer",
        typeEn: "Shared national challenges",
        type: "shared",
        items: [
            { da: "Sektoransvarsprincippet skaber 98 forskellige systemer — \"postnummerlotteriet\"", en: "Sector responsibility principle creates 98 different systems — \"postcode lottery\"" },
            { da: "Ingen centralt synsregister — 32.000 estimerede borgere, reel data ukendt", en: "No central vision registry — 32,000 estimated citizens, real data unknown" },
            { da: "65% af offentlige websites opfylder ikke WCAG-krav", en: "65% of public websites fail WCAG requirements" },
            { da: "20-25 førerhunde/år på landsplan — kritisk underkapacitet", en: "20-25 guide dogs/year nationally — critical under-capacity" },
        ],
    },
];

const statusColors = {
    fast: { bg: "#f0fff4", color: "#276749" },
    ok: { bg: "#ebf4ff", color: "#2b6cb0" },
    slow: { bg: "#fffff0", color: "#975a16" },
    bottleneck: { bg: "#fff5f5", color: "#c53030" },
    ongoing: { bg: "#faf5ff", color: "#6b46c1" },
};

export default function InsightsPage() {
    const { lang } = useLang();
    const isEn = lang === "en";

    return (
        <div className={styles.container}>
            {/* Header with DTU course context */}
            <header className={styles.header}>
                <div>
                    <div className={styles.courseBadge}>
                        <GraduationCap size={14} />
                        DTU 41639 · Holistic Design for Engineering Systems
                    </div>
                    <h1 className={styles.title}>
                        {isEn ? "N-Model System Analysis" : "N-Model Systemanalyse"}
                    </h1>
                    <p className={styles.subtitle}>
                        {isEn
                            ? "Socio-technical decomposition of Denmark's support system for blind and visually impaired citizens — mapping needs, artifacts, processes, organizations, policy, and social context using the N-Model framework."
                            : "Socioteknisk dekomposition af Danmarks støttesystem for blinde og svagtseende borgere — kortlægning af behov, artefakter, processer, organisationer, politik og social kontekst via N-Model-rammværket."}
                    </p>
                </div>
            </header>

            {/* ═══ SECTION 1: N-Model System Layers ═══ */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Layers size={20} />
                    {isEn ? "System Decomposition — N-Model Layers" : "Systemdekomposition — N-Model Lag"}
                </h2>
                <p className={styles.sectionDesc}>
                    {isEn
                        ? "The system is decomposed into six interdependent layers. Each layer contains the key elements that constitute the Danish vision impairment support ecosystem. This goes beyond individual artifacts to encompass the full socio-technical system."
                        : "Systemet er dekomponeret i seks indbyrdes afhængige lag. Hvert lag indeholder de nøgleelementer der udgør det danske synshandicap-støttesystem. Dette rækker ud over individuelle artefakter og omfatter hele det sociotekniske system."}
                </p>
                <div className={styles.layersGrid}>
                    {systemLayers.map((layer) => {
                        const Icon = layer.icon;
                        return (
                            <div key={layer.id} className={styles.layerCard}>
                                <div className={styles.layerHeader}>
                                    <div className={styles.layerIcon} style={{ backgroundColor: layer.color + "15", color: layer.color }}>
                                        <Icon size={22} />
                                    </div>
                                    <h3 className={styles.layerLabel} style={{ color: layer.color }}>
                                        {isEn ? layer.labelEn : layer.labelDa}
                                    </h3>
                                </div>
                                <p className={styles.layerDesc}>{isEn ? layer.descEn : layer.descDa}</p>
                                <ul className={styles.layerElements}>
                                    {layer.elements.map((el, i) => (
                                        <li key={i}>
                                            <CircleDot size={8} style={{ color: layer.color }} />
                                            {isEn ? el.en : el.da}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ═══ SECTION 2: Cross-Layer Conflicts ═══ */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <GitBranch size={20} />
                    {isEn ? "Cross-Layer Conflicts — Where the System Breaks" : "Konflikter på tværs af lag — Hvor systemet bryder sammen"}
                </h2>
                <p className={styles.sectionDesc}>
                    {isEn
                        ? "Holistic systems analysis reveals tensions between layers that cannot be understood by examining any single layer in isolation. These conflicts represent the primary design challenges."
                        : "Holistisk systemanalyse afdækker spændinger mellem lag som ikke kan forstås ved at undersøge et enkelt lag isoleret. Disse konflikter udgør de primære designudfordringer."}
                </p>
                <div className={styles.conflictsGrid}>
                    {systemConflicts.map((conflict, index) => (
                        <div key={index} className={styles.conflictCard} style={{ borderLeftColor: conflict.color }}>
                            <div className={styles.conflictLayers} style={{ color: conflict.color }}>
                                <Network size={16} />
                                {isEn ? conflict.layersEn : conflict.layersDa}
                            </div>
                            <p className={styles.conflictDesc}>{isEn ? conflict.conflictEn : conflict.conflictDa}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ SECTION 3: Process Timeline ═══ */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Timer size={20} />
                    {isEn ? "Process Layer Deep-Dive — Aid Timeline" : "Proceslagets dybdeanalyse — Hjælpeforløb"}
                </h2>
                <p className={styles.sectionDesc}>
                    {isEn
                        ? "Average time from citizen's first contact to rehabilitation start. Total: 78-158 days (2.5-5 months). Red indicates system bottlenecks requiring design intervention."
                        : "Gennemsnitlig tid fra borgerens første kontakt til rehabilitering. Samlet: 78-158 dage (2,5-5 mdr.). Rød markerer systemflaskehalse der kræver designintervention."}
                </p>
                <div className={styles.timeline}>
                    {timelineData.map((item) => {
                        const colors = statusColors[item.status];
                        return (
                            <div key={item.step} className={styles.timelineItem}>
                                <div className={styles.timelineStep} style={{ backgroundColor: colors.bg, color: colors.color }}>
                                    {item.step}
                                </div>
                                <div className={styles.timelineContent}>
                                    <h4 className={styles.timelineName}>{isEn ? item.en : item.da}</h4>
                                    <span className={styles.timelineDays} style={{ backgroundColor: colors.bg, color: colors.color }}>
                                        <Clock size={12} />
                                        {isEn ? item.daysEn : item.daysDa}
                                    </span>
                                </div>
                                {item.step < 7 && <ArrowRight size={16} className={styles.timelineArrow} />}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ═══ SECTION 3.5: Reality Gap ═══ */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <ShieldAlert size={20} />
                    {isEn ? "Reality Gap — Promise vs. Experience" : "Virkelighedskløften — Løfte vs. Oplevelse"}
                </h2>
                <p className={styles.sectionDesc}>
                    {isEn
                        ? "Critical comparison between officially stated timelines and real user-reported experiences in Lyngby-Taarbæk. Based on interviews and user reports. These discrepancies reveal a systemic pattern where institutional optimism masks structural delays."
                        : "Kritisk sammenligning af officielt oplyste tidsrammer og borgernes reelle oplevelser i Lyngby-Taarbæk. Baseret på interviews og brugerrapporter. Disse uoverensstemmelser afslører et systemisk mønster, hvor institutionel optimisme maskerer strukturelle forsinkelser."}
                </p>
                <div className={styles.gapGrid}>
                    {realityGap.map((item) => {
                        const sev = severityLabels[item.severity];
                        return (
                            <div key={item.id} className={styles.gapCard}>
                                <div className={styles.gapHeader}>
                                    <div className={styles.gapInstitution}>
                                        <Building2 size={14} />
                                        {isEn ? item.institutionEn : item.institutionDa}
                                    </div>
                                    <span className={styles.gapSeverity} style={{ color: sev.color, backgroundColor: sev.bg }}>
                                        {isEn ? sev.en : sev.da}
                                    </span>
                                </div>
                                <h3 className={styles.gapProcess}>
                                    {isEn ? item.processEn : item.processDa}
                                </h3>
                                <div className={styles.gapComparison}>
                                    {/* Official */}
                                    <div className={styles.gapOfficial}>
                                        <div className={styles.gapColLabel}>
                                            <CheckCircle size={13} />
                                            {isEn ? "Official" : "Officielt"}
                                        </div>
                                        <div className={styles.gapValue}>{isEn ? item.officialEn : item.officialDa}</div>
                                        <div className={styles.gapSource}>{isEn ? item.officialSourceEn : item.officialSourceDa}</div>
                                    </div>
                                    {/* Arrow */}
                                    <div className={styles.gapArrow}>
                                        <ArrowRight size={20} />
                                    </div>
                                    {/* Reality */}
                                    <div className={styles.gapReality}>
                                        <div className={styles.gapColLabel}>
                                            <MessageCircleWarning size={13} />
                                            {isEn ? "Reported" : "Rapporteret"}
                                        </div>
                                        <div className={styles.gapValue} style={{ color: item.color }}>{isEn ? item.realityEn : item.realityDa}</div>
                                        <div className={styles.gapSource}>{isEn ? item.realitySourceEn : item.realitySourceDa}</div>
                                    </div>
                                </div>
                                <div className={styles.gapFactor} style={{ backgroundColor: item.color + "10", color: item.color }}>
                                    <AlertTriangle size={14} />
                                    {isEn ? item.factorEn : item.factorDa}
                                </div>
                                <p className={styles.gapNotes}>{isEn ? item.notesEn : item.notesDa}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ═══ SECTION 3.75: Municipal Benchmarking ═══ */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <MapPinned size={20} />
                    {isEn ? "Municipal Benchmarking — Lyngby-Taarbæk vs. Copenhagen vs. Denmark" : "Kommunal Benchmarking — Lyngby-Taarbæk vs. København vs. Danmark"}
                </h2>
                <p className={styles.sectionDesc}>
                    {isEn
                        ? "Side-by-side comparison based on real published data from kk.dk, ltk.dk, IBOS, CSV, Dansk Blindesamfund, and parliamentary hearings. Reveals what Copenhagen does better and what structural gaps exist in Lyngby-Taarbæk."
                        : "Sammenligning side-om-side baseret på reelle offentliggjorte data fra kk.dk, ltk.dk, IBOS, CSV, Dansk Blindesamfund og Folketingets høringer. Afslører hvad København gør bedre og hvilke strukturelle huller der eksisterer i Lyngby-Taarbæk."}
                </p>

                {/* Comparison Table */}
                <div className={styles.benchTable}>
                    <div className={styles.benchHeaderRow}>
                        <div className={styles.benchDimCol}>{isEn ? "Dimension" : "Dimension"}</div>
                        <div className={styles.benchCol}>
                            <MapPinned size={13} />
                            Lyngby-Taarbæk
                        </div>
                        <div className={styles.benchCol}>
                            <Landmark size={13} />
                            København
                        </div>
                        <div className={styles.benchCol}>
                            <Scale size={13} />
                            {isEn ? "Denmark (national)" : "Danmark (nationalt)"}
                        </div>
                    </div>
                    {benchmarkDimensions.map((dim) => {
                        const scoreIcon = (score) => {
                            if (score === "good") return <ThumbsUp size={13} style={{ color: "#38a169" }} />;
                            if (score === "poor") return <ThumbsDown size={13} style={{ color: "#e53e3e" }} />;
                            return <Minus size={13} style={{ color: "#d69e2e" }} />;
                        };
                        const scoreBg = (score) => {
                            if (score === "good") return "#f0fff4";
                            if (score === "poor") return "#fff5f5";
                            return "#fffff0";
                        };
                        return (
                            <div key={dim.id} className={styles.benchRow}>
                                <div className={styles.benchDimLabel}>
                                    {isEn ? dim.dimEn : dim.dimDa}
                                </div>
                                <div className={styles.benchCell} style={{ backgroundColor: scoreBg(dim.lyngbyScore) }}>
                                    <span className={styles.benchCellIcon}>{scoreIcon(dim.lyngbyScore)}</span>
                                    <span>{isEn ? dim.lyngbyEn : dim.lyngbyDa}</span>
                                </div>
                                <div className={styles.benchCell} style={{ backgroundColor: scoreBg(dim.cphScore) }}>
                                    <span className={styles.benchCellIcon}>{scoreIcon(dim.cphScore)}</span>
                                    <span>{isEn ? dim.cphEn : dim.cphDa}</span>
                                </div>
                                <div className={styles.benchCell} style={{ backgroundColor: scoreBg(dim.dkScore) }}>
                                    <span className={styles.benchCellIcon}>{scoreIcon(dim.dkScore)}</span>
                                    <span>{isEn ? dim.dkEn : dim.dkDa}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Key Insights */}
                <div className={styles.insightsGrid}>
                    {benchmarkInsights.map((group, gi) => {
                        const isGood = group.type === "better";
                        const isBad = group.type === "worse";
                        const accent = isGood ? "#38a169" : isBad ? "#e53e3e" : "#d69e2e";
                        const bg = isGood ? "#f0fff4" : isBad ? "#fff5f5" : "#fffff0";
                        const IconComp = isGood ? ThumbsUp : isBad ? ThumbsDown : AlertTriangle;
                        return (
                            <div key={gi} className={styles.insightBlock} style={{ borderLeftColor: accent }}>
                                <h3 className={styles.insightBlockTitle} style={{ color: accent }}>
                                    <IconComp size={16} />
                                    {isEn ? group.typeEn : group.typeDa}
                                </h3>
                                <ul className={styles.insightList}>
                                    {group.items.map((item, i) => (
                                        <li key={i} style={{ backgroundColor: bg }}>
                                            {isEn ? item.en : item.da}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ═══ SECTION 4: Design Interventions ═══ */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Target size={20} />
                    {isEn ? "Proposed Design Interventions — Cross-Layer Solutions" : "Foreslåede designinterventioner — Løsninger på tværs af lag"}
                </h2>
                <p className={styles.sectionDesc}>
                    {isEn
                        ? "Each intervention targets multiple system layers, reflecting the holistic design principle that effective solutions must address interconnected subsystems rather than isolated components."
                        : "Hver intervention retter sig mod flere systemlag, hvilket afspejler det holistiske designprincip om at effektive løsninger skal adressere sammenkoblede delsystemer frem for isolerede komponenter."}
                </p>
                <div className={styles.recsGrid}>
                    {interventions.map((rec, index) => {
                        const Icon = rec.icon;
                        return (
                            <div key={index} className={styles.recCard}>
                                <div className={styles.recIcon}>
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles.recTitle}>{isEn ? rec.titleEn : rec.titleDa}</h3>
                                <p className={styles.recDesc}>{isEn ? rec.descEn : rec.descDa}</p>
                                <div className={styles.recMeta}>
                                    <span className={styles.recLayers}>
                                        <Layers size={12} />
                                        {isEn ? rec.layersEn : rec.layersDa}
                                    </span>
                                </div>
                                <div className={styles.recMetaBottom}>
                                    <span className={styles.recImpact}>
                                        {isEn ? "Impact" : "Effekt"}: <strong>{isEn ? rec.impactEn : rec.impactDa}</strong>
                                    </span>
                                    <span className={styles.recTimeline}>
                                        <Clock size={12} />
                                        {isEn ? rec.timelineEn : rec.timelineDa}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Data sources footer */}
            <footer className={styles.sourcesFooter}>
                <h3>{isEn ? "Data Sources & References" : "Datakilder & Referencer"}</h3>
                <div className={styles.sourcesList}>
                    <span>Københavns Kommune (kk.dk)</span>
                    <span>Dansk Blindesamfund (blind.dk)</span>
                    <span>IBOS (ibos.dk)</span>
                    <span>Nota (nota.dk)</span>
                    <span>Kennedy Centret</span>
                    <span>DPOD (handicap.dk)</span>
                    <span>eGovernment Benchmark 2024</span>
                    <span>NIH / Acta Ophthalmologica 2024</span>
                    <span>SDU Rehabiliteringsforskning</span>
                    <span>Hjælpemiddelbasen (hmi-basen.dk)</span>
                    <span>retsinformation.dk</span>
                    <span>EU Accessibility Act (EAA)</span>
                </div>
                <p className={styles.courseNote}>
                    {isEn
                        ? "Material prepared for DTU course 41639 — Holistic Design for Engineering Systems (MSc Design & Innovation)"
                        : "Materiale udarbejdet til DTU kursus 41639 — Holistic Design for Engineering Systems (MSc Design & Innovation)"}
                </p>
            </footer>
        </div>
    );
}
