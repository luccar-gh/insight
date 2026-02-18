"use client";

import styles from "./page.module.css";
import { useLang } from "@/context/LanguageContext";
import {
    Clock, TrendingDown, Lightbulb, AlertTriangle, CheckCircle,
    ArrowRight, BarChart3, Timer, Dog, BookOpen, Monitor, Users,
    Building2, Zap, Layers, Network, Cog, HeartPulse, Scale,
    GraduationCap, Landmark, Route, GitBranch, Target, CircleDot
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
            { da: "Dansk Blindesamfund: 11.000+ medlemmer", en: "Danish Association of the Blind: 11,000+ members" },
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
