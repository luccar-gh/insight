"use client";

import { useLang } from "@/context/LanguageContext";
import {
    ExternalLink, Calendar, Building2, AlertTriangle, TrendingDown, Newspaper, Users, Scale, Eye, Accessibility, Heart, BookOpen
} from "lucide-react";
import styles from "./page.module.css";

const articles = [
    {
        id: 1,
        titleDa: "Kun 38% af synshandicappede er i arbejde — mod 77% i normalbefolkningen",
        titleEn: "Only 38% of visually impaired employed — vs. 77% in general population",
        sourceName: "IBOS / Dansk Blindesamfund",
        sourceUrl: "https://ibos.dk",
        date: "Feb 2024",
        descDa: "En IBOS-undersøgelse afslører, at kun 38% af mennesker med synshandicap er i beskæftigelse — halvdelen af normalbefolkningens 77%. Rapporten fremhæver manglende specialiseret jobcenter-viden og kommunal berøringsangst som primære barrierer.",
        descEn: "An IBOS study reveals only 38% of people with visual impairment are employed — half of the general population's 77%. The report highlights lacking specialized job center knowledge and municipal reluctance as primary barriers.",
        icon: TrendingDown,
        accent: "#e53e3e",
        size: "large",
        tags: ["Beskæftigelse", "IBOS", "Landsplan"],
        tagsEn: ["Employment", "IBOS", "National"],
    },
    {
        id: 2,
        titleDa: "Synshandicappet venter op til ét år på basale hjælpemidler i Hillerød",
        titleEn: "Visually impaired person waits up to one year for basic assistive devices in Hillerød",
        sourceName: "Sjællandske Nyheder (sn.dk)",
        sourceUrl: "https://sn.dk",
        date: "2024",
        descDa: "En borger i Hillerød Kommune — som dækker Lyngby-Taarbæks region via Kommunikationscentret — ventede potentielt ét år på talende ur, notatskriver og hvid stok. Sagen illustrerer, hvordan grundlæggende hjælpemidler forsinkes af bureaukratiske processer.",
        descEn: "A citizen in Hillerød Municipality — which covers Lyngby-Taarbæk's region via Kommunikationscentret — potentially waited one year for a talking watch, notetaker and white cane. The case illustrates how basic assistive devices are delayed by bureaucratic processes.",
        icon: AlertTriangle,
        accent: "#dd6b20",
        size: "medium",
        tags: ["Hjælpemidler", "Ventetid", "Hillerød"],
        tagsEn: ["Assistive devices", "Wait times", "Hillerød"],
    },
    {
        id: 3,
        titleDa: "Skarp kritik af Lyngby Rådhus: Utilgængeligt for handicappede",
        titleEn: "Sharp criticism of Lyngby Town Hall: Inaccessible for disabled people",
        sourceName: "Sjællandske Nyheder / Navisen",
        sourceUrl: "https://sn.dk",
        date: "2024",
        descDa: "Det nyligt renoverede Lyngby Rådhus får skarp kritik fra Dansk Handicap Forbund og lokale politikere, inkl. borgmester og viceborgmester, for utilstrækkelig tilgængelighed. Handicaprådet blev ikke konsulteret, da kommunen godkendte dispensation fra tilgængelighedskrav.",
        descEn: "The newly renovated Lyngby Town Hall faces sharp criticism from the Danish Disability Federation and local politicians, incl. the mayor and deputy mayor, for insufficient accessibility. The Disability Council was not consulted when the municipality approved an exemption from accessibility requirements.",
        icon: Building2,
        accent: "#c53030",
        size: "medium",
        tags: ["Tilgængelighed", "Lyngby", "Politik"],
        tagsEn: ["Accessibility", "Lyngby", "Politics"],
    },
    {
        id: 4,
        titleDa: "Hver tredje handicappet er utilfreds med kommunal støtte",
        titleEn: "One in three disabled people dissatisfied with municipal support",
        sourceName: "Dansk Handicap Forbund",
        sourceUrl: "https://danskhandicapforbund.dk",
        date: "Jun 2025",
        descDa: "En rundspørge viser, at 33% af handicappede er utilfredse med den kommunale støtte. Mange oplever, at økonomiske hensyn prioriteres over reelle behov, hvilket fører til forværring af fysisk og psykisk helbred. Blindeområdet er særligt ramt.",
        descEn: "A survey shows 33% of disabled people are dissatisfied with municipal support. Many experience that economic considerations are prioritized over real needs, leading to deterioration of physical and mental health. The vision impairment sector is particularly affected.",
        icon: Users,
        accent: "#6b46c1",
        size: "small",
        tags: ["Undersøgelse", "Tilfredshed"],
        tagsEn: ["Survey", "Satisfaction"],
    },
    {
        id: 5,
        titleDa: "25.000+ fejl i kommunale handicapsager afsløret af Ankestyrelsen",
        titleEn: "25,000+ errors in municipal disability cases revealed by Appeals Board",
        sourceName: "Institut for Menneskerettigheder",
        sourceUrl: "https://menneskeret.dk",
        date: "Dec 2023",
        descDa: "En analyse viser, at Ankestyrelsen fandt væsentlige fejl i over 25.000 klagesager på handicapområdet mellem 2014 og 2022. Mange sager involverede hjælp, som ikke kan ydes med tilbagevirkende kraft — borgerne tabte permanent deres rettigheder.",
        descEn: "An analysis shows the Appeals Board found significant errors in over 25,000 complaint cases in the disability area between 2014 and 2022. Many cases involved aid that cannot be retroactively provided — citizens permanently lost their rights.",
        icon: Scale,
        accent: "#e53e3e",
        size: "large",
        tags: ["Retssikkerhed", "Ankestyrelsen"],
        tagsEn: ["Legal rights", "Appeals Board"],
    },
    {
        id: 6,
        titleDa: "Alvorlige fejl i børnehandicapsager i Lyngby-Taarbæk",
        titleEn: "Serious errors in child disability cases in Lyngby-Taarbæk",
        sourceName: "Sjællandske Nyheder / DKsocial",
        sourceUrl: "https://sn.dk",
        date: "2024",
        descDa: "En revision afslørede alvorlige og udbredte fejl i børnehandicapsager i Lyngby-Taarbæk Kommune. Fejl blev fundet i 5 af 7 gennemgåede sager. Kommunen igangsatte ekstern undersøgelse af lukkede socialsager.",
        descEn: "An audit revealed serious and widespread errors in child disability cases in Lyngby-Taarbæk Municipality. Errors were found in 5 of 7 reviewed cases. The municipality initiated an external investigation of closed social cases.",
        icon: AlertTriangle,
        accent: "#c53030",
        size: "medium",
        tags: ["Børn", "Sagsbehandling", "Lyngby"],
        tagsEn: ["Children", "Case processing", "Lyngby"],
    },
    {
        id: 7,
        titleDa: "Ledsageordning for ældre blinde truet af finanslov",
        titleEn: "Guide scheme for elderly blind threatened by finance bill",
        sourceName: "Dansk Blindesamfund",
        sourceUrl: "https://blind.dk",
        date: "Sep 2025",
        descDa: "Dansk Blindesamfund kritiserer, at ledsageordningen for blinde over 67 år er udeladt af finanslovsforslaget, trods at 92% af brugerne rapporterer forbedret livskvalitet. Ordningen er halveret fra 15 til 7 timer/måned.",
        descEn: "Dansk Blindesamfund criticizes the guide scheme for blind people over 67 being omitted from the finance bill proposal, despite 92% of users reporting improved quality of life. The scheme was halved from 15 to 7 hours/month.",
        icon: Heart,
        accent: "#d53f8c",
        size: "small",
        tags: ["Ledsagelse", "Finanslov", "Ældre"],
        tagsEn: ["Guide scheme", "Finance bill", "Elderly"],
    },
    {
        id: 8,
        titleDa: "Danmark eneste nordiske land uden national handlingsplan for synshandicappede",
        titleEn: "Denmark only Nordic country without national action plan for visually impaired",
        sourceName: "Sjællandske Nyheder",
        sourceUrl: "https://sn.dk",
        date: "2024",
        descDa: "Danmark udmærker sig negativt som det eneste nordiske land uden en national handlingsplan for blinde og svagsynedes deltagelse i samfundslivet. Dansk Blindesamfund kræver handling.",
        descEn: "Denmark stands out negatively as the only Nordic country without a national action plan for blind and visually impaired people's participation in society. Danish Association of the Blind demands action.",
        icon: Eye,
        accent: "#2b6cb0",
        size: "small",
        tags: ["Politik", "Norden", "Handlingsplan"],
        tagsEn: ["Policy", "Nordic", "Action plan"],
    },
    {
        id: 9,
        titleDa: "Handicapbil: 41 ugers ventetid — 28% stigning over 10 år",
        titleEn: "Disability car: 41-week wait — 28% increase over 10 years",
        sourceName: "Faglig Senior",
        sourceUrl: "https://fagligsenior.dk",
        date: "2024",
        descDa: "Ventetiden for afgørelse om handicapbil er steget 28% til gennemsnit 41 uger. I Skanderborg Kommune er ventetiden 86 uger. Borgere tvinges ofte til selv at købe hjælpemidler — men risikerer afslag på refusion.",
        descEn: "Waiting time for disability car decisions has risen 28% to an average of 41 weeks. In Skanderborg Municipality the wait is 86 weeks. Citizens are often forced to buy devices themselves — but risk reimbursement denial.",
        icon: TrendingDown,
        accent: "#dd6b20",
        size: "medium",
        tags: ["Hjælpemidler", "Ventetid", "National"],
        tagsEn: ["Assistive devices", "Wait times", "National"],
    },
    {
        id: 10,
        titleDa: "Lyngby-Taarbæk bunder i tilfredshed med hjemmeplejen",
        titleEn: "Lyngby-Taarbæk ranks last in home care satisfaction",
        sourceName: "Virum-Sorgenfri Avis",
        sourceUrl: "https://virumsorgenfriavis.dk",
        date: "2024",
        descDa: "Lyngby-Taarbæk scorer 3,7 mod landsgennemsnit på 4,0 i tilfredshedsundersøgelse for hjemmepleje. Kommunen anerkender udfordringer med rekruttering og højt sygefravær og har igangsat forbedringsindsats.",
        descEn: "Lyngby-Taarbæk scores 3.7 vs. national average of 4.0 in home care satisfaction survey. The municipality acknowledges challenges with recruitment and high sick leave and has initiated improvement efforts.",
        icon: TrendingDown,
        accent: "#dd6b20",
        size: "small",
        tags: ["Hjemmepleje", "Tilfredshed", "Lyngby"],
        tagsEn: ["Home care", "Satisfaction", "Lyngby"],
    },
    {
        id: 11,
        titleDa: "Kommuner mangler kompetence til specialiserede synsopgaver for børn",
        titleEn: "Municipalities lack competence for specialized vision tasks for children",
        sourceName: "Sjællandske Nyheder",
        sourceUrl: "https://sn.dk",
        date: "2024",
        descDa: "Eksperter advarer om, at kommuner mangler specialviden til at løfte opgaver for synshandicappede børn og unge. Konsekvensen: flere ender med behov for livslang støtte og risikerer førtidspension.",
        descEn: "Experts warn that municipalities lack specialist knowledge to handle tasks for visually impaired children and young people. The consequence: more end up needing lifelong support and risk early retirement pension.",
        icon: BookOpen,
        accent: "#d69e2e",
        size: "small",
        tags: ["Børn", "Kommuner", "Specialviden"],
        tagsEn: ["Children", "Municipalities", "Expertise"],
    },
    {
        id: 12,
        titleDa: "Politisk aftale om handicapområdet — Blindesamfund advarer mod konsekvenser",
        titleEn: "Political agreement on disability sector — Blind Society warns of consequences",
        sourceName: "Dansk Blindesamfund",
        sourceUrl: "https://blind.dk",
        date: "2024",
        descDa: "En politisk aftale på handicapområdet er indgået, men Dansk Blindesamfund advarer om, at trods gode intentioner kan aftalen få negative konsekvenser for mennesker med handicap. Fokus på økonomi fremfor mennesker.",
        descEn: "A political agreement on the disability sector has been reached, but Dansk Blindesamfund warns that despite good intentions, it may have negative consequences for people with disabilities. Focus on economics over people.",
        icon: Newspaper,
        accent: "#6b46c1",
        size: "small",
        tags: ["Politik", "Lovgivning"],
        tagsEn: ["Politics", "Legislation"],
    },
];

export default function PressPage() {
    const { t, lang } = useLang();
    const isEn = lang === "en";

    const lyngbyArticles = articles.filter(
        a => (isEn ? a.tagsEn : a.tags).some(tag =>
            ["Lyngby", "Hillerød"].includes(tag)
        )
    );
    const nationalArticles = articles.filter(
        a => !(isEn ? a.tagsEn : a.tags).some(tag =>
            ["Lyngby", "Hillerød"].includes(tag)
        )
    );

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>
                        <Newspaper size={26} />
                        {isEn
                            ? "Press & Media Coverage"
                            : "Presse & Mediedækning"}
                    </h1>
                    <p className={styles.subtitle}>
                        {isEn
                            ? "Real news articles and reports documenting the challenges faced by blind and visually impaired citizens in Denmark — with focus on Lyngby-Taarbæk."
                            : "Reelle nyhedsartikler og rapporter der dokumenterer udfordringerne for blinde og svagsynede borgere i Danmark — med fokus på Lyngby-Taarbæk."}
                    </p>
                </div>
                <div className={styles.countBadge}>
                    {articles.length} {isEn ? "articles" : "artikler"}
                </div>
            </header>

            {/* Lyngby-Taarbæk specific */}
            <section>
                <h2 className={styles.sectionTitle}>
                    <Building2 size={16} />
                    {isEn ? "Lyngby-Taarbæk & Region" : "Lyngby-Taarbæk & Region"}
                </h2>
                <div className={styles.bentoGrid}>
                    {lyngbyArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} isEn={isEn} />
                    ))}
                </div>
            </section>

            {/* National */}
            <section>
                <h2 className={styles.sectionTitle}>
                    <Scale size={16} />
                    {isEn ? "National Coverage" : "National dækning"}
                </h2>
                <div className={styles.bentoGrid}>
                    {nationalArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} isEn={isEn} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function ArticleCard({ article, isEn }) {
    const Icon = article.icon;
    const tags = isEn ? article.tagsEn : article.tags;

    return (
        <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${article.size === "large" ? styles.cardLarge :
                article.size === "medium" ? styles.cardMedium :
                    styles.cardSmall
                }`}
            style={{ "--card-accent": article.accent }}
        >
            <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ color: article.accent, background: `${article.accent}15` }}>
                    <Icon size={18} />
                </div>
                <div className={styles.cardMeta}>
                    <span className={styles.cardSource}>{article.sourceName}</span>
                    <span className={styles.cardDate}>
                        <Calendar size={11} />
                        {article.date}
                    </span>
                </div>
                <ExternalLink size={14} className={styles.cardExternal} />
            </div>
            <h3 className={styles.cardTitle}>
                {isEn ? article.titleEn : article.titleDa}
            </h3>
            <p className={styles.cardDesc}>
                {isEn ? article.descEn : article.descDa}
            </p>
            <div className={styles.cardTags}>
                {tags.map((tag, i) => (
                    <span key={i} className={styles.tag} style={{ borderColor: article.accent, color: article.accent }}>
                        {tag}
                    </span>
                ))}
            </div>
        </a>
    );
}
