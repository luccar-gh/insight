"use client";

import { useState, useMemo } from "react";
import styles from "./page.module.css";
import {
    Search, Building2, Globe, Users, MapPin, Phone, Clock,
    ArrowRight, CheckCircle, Stethoscope, Landmark, Wrench,
    Eye, BookOpen, Truck, FileText, ArrowUpRight, GraduationCap,
    HandHeart, ArrowDown, ArrowUp
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const stakeholders = [
    {
        id: "cso",
        name: "Center for Sundhed og Omsorg",
        fullNameDa: "Center for Sundhed og Omsorg, Lyngby-Taarbæk",
        fullNameEn: "Center for Health and Care, Lyngby-Taarbæk",
        roleDa: "Kommunalt sundhedscenter — behandler ansøgninger om personlige hjælpemidler og koordinerer rehabilitering for borgere med nedsat funktionsevne.",
        roleEn: "Municipal health center — processes applications for personal assistive devices and coordinates rehabilitation for citizens with reduced functional capacity.",
        descDa: "Center for Sundhed og Omsorg er Lyngby-Taarbæk Kommunes primære kontaktpunkt for borgere med synsnedsættelse, der har brug for hjælpemidler. Centret vurderer behov, bevilliger personlige hjælpemidler (optik, elektroniske lupper, skærmlæsere mv.) og udarbejder individuelle rehabiliteringsplaner. Ca. 130 ansatte dækker hele spektret fra ergoterapi til specialrådgivning. Centret fungerer som den kommunale myndighed, der træffer afgørelser efter Servicelovens §112-113 om hjælpemidler og forbrugsgoder.",
        descEn: "Center for Sundhed og Omsorg is Lyngby-Taarbæk Municipality's primary contact point for visually impaired citizens needing assistive devices. The center assesses needs, grants personal assistive devices (optics, electronic magnifiers, screen readers, etc.) and develops individual rehabilitation plans. Approximately 130 employees cover the full spectrum from occupational therapy to specialist counseling. The center acts as the municipal authority making decisions under the Social Services Act §112-113 on assistive devices and consumer goods.",
        servicesDa: [
            "Vurdering og bevilling af personlige hjælpemidler til synshandicappede",
            "Udarbejdelse af individuelle rehabiliteringsplaner",
            "Koordinering med Kommunikationscentret for specialiseret synsindsats",
            "Rådgivning om daglig livsførelse (ADL) med synsnedsættelse",
            "Kvikservice for standardhjælpemidler (rollatorer, toiletforhøjere osv.)",
            "Opfølgning og justering af bevilligede hjælpemidler",
        ],
        servicesEn: [
            "Assessment and granting of personal assistive devices for visually impaired",
            "Development of individual rehabilitation plans",
            "Coordination with Kommunikationscentret for specialized vision services",
            "Counseling on daily living activities (ADL) with visual impairment",
            "Quick service for standard assistive devices (rollators, toilet raisers, etc.)",
            "Follow-up and adjustment of granted assistive devices",
        ],
        relevanceDa: "Primær gatekeeper — alle borgere i Lyngby-Taarbæk med synstab skal gennem dette center for at få bevilliget hjælpemidler. Sagsbehandlingstid typisk 14-28 dage. Digital ansøgning via borger.dk med MitID.",
        relevanceEn: "Primary gatekeeper — all citizens in Lyngby-Taarbæk with vision loss must go through this center to receive assistive device grants. Processing time typically 14-28 days. Digital application via borger.dk with MitID.",
        address: "Bauneporten 26, 2800 Kgs. Lyngby",
        phoneDa: "45 97 34 91 (personlige hjælpemidler)\n45 97 34 93 (udlånshjælpemidler)",
        phoneEn: "45 97 34 91 (personal assistive devices)\n45 97 34 93 (loaned assistive devices)",
        hoursDa: "Telefontid: Ma, On, Fr 9:00-12:00\nKvikservice: Ti 9:00-12:00 (Bauneporten 20)",
        hoursEn: "Phone hours: Mon, Wed, Fri 9:00-12:00\nQuick service: Tue 9:00-12:00 (Bauneporten 20)",
        url: "ltk.dk/sundhed-og-omsorg",
        color: "#2b6cb0",
        icon: Stethoscope,
    },
    {
        id: "ltk",
        name: "Lyngby-Taarbæk Kommune",
        fullNameDa: "Lyngby-Taarbæk Kommune — kommunal forvaltning",
        fullNameEn: "Lyngby-Taarbæk Municipality — municipal administration",
        roleDa: "Kommune med overordnet ansvar for handicappolitik, tilgængelighed, handicapkørsel og borgerserviceydelser for synshandicappede borgere.",
        roleEn: "Municipality with overall responsibility for disability policy, accessibility, disability transport, and citizen services for visually impaired residents.",
        descDa: "Lyngby-Taarbæk Kommune har ca. 56.000 indbyggere og administrerer den lovgivningsmæssige ramme for støtte til borgere med synshandicap. Kommunen har vedtaget en handicappolitik der sigter mod lige muligheder og livskvalitet for alle borgere med handicap. Kommunen tilbyder handicapkørsel (op til 104 enkeltture årligt) for borgere der er blinde eller stærkt svagtseende med synsrest på 10% (6/60) eller derunder. Borgerservice på Lyngby Torv 17 hjælper med digitale ansøgninger, og kommunen arbejder på at gøre sin hjemmeside (ltk.dk) fuldt tilgængelig.",
        descEn: "Lyngby-Taarbæk Municipality has approximately 56,000 residents and manages the legislative framework for supporting visually impaired citizens. The municipality has adopted a disability policy aimed at equal opportunities and quality of life for all citizens with disabilities. It offers disability transport (up to 104 single trips annually) for citizens who are blind or severely visually impaired with visual acuity of 10% (6/60) or below. Borgerservice at Lyngby Torv 17 assists with digital applications, and the municipality is working to make its website (ltk.dk) fully accessible.",
        servicesDa: [
            "Handicapkørsel: op til 104 enkeltture/år for blinde (synsrest ≤10%)",
            "Borgerservice: hjælp til digitale ansøgninger om hjælpemidler via borger.dk",
            "Handicappolitik og tilgængelighedsstrategi for offentlige bygninger",
            "Koordinering mellem kommunale centre og regionale specialtilbud",
            "Tilskud til boligindretning for synshandicappede (Servicelovens §116)",
            "Ledsagerordning for borgere med betydelig synsnedsættelse",
        ],
        servicesEn: [
            "Disability transport: up to 104 single trips/year for blind citizens (visual acuity ≤10%)",
            "Borgerservice: assistance with digital applications for assistive devices via borger.dk",
            "Disability policy and accessibility strategy for public buildings",
            "Coordination between municipal centers and regional specialist services",
            "Housing modification grants for visually impaired (Social Services Act §116)",
            "Companion scheme for citizens with significant visual impairment",
        ],
        relevanceDa: "Overordnet myndighed — sætter den politiske ramme for alle ydelser til synshandicappede borgere i kommunen. Sektoransvarsprincippet gør kommunen til det primære kontaktpunkt for al handicaprelateret støtte.",
        relevanceEn: "Overall authority — sets the policy framework for all services to visually impaired citizens in the municipality. The sector responsibility principle makes the municipality the primary point of contact for all disability-related support.",
        address: "Lyngby Torv 17, 2800 Kgs. Lyngby",
        phoneDa: "45 97 30 00 (hovednummer)",
        phoneEn: "45 97 30 00 (main number)",
        hoursDa: "Borgerservice: Ma-On 10:00-15:00, To 10:00-17:00, Fr 10:00-13:00",
        hoursEn: "Borgerservice: Mon-Wed 10:00-15:00, Thu 10:00-17:00, Fri 10:00-13:00",
        url: "ltk.dk",
        color: "#dd6b20",
        icon: Landmark,
    },
    {
        id: "kc",
        name: "Kommunikationscentret",
        fullNameDa: "Kommunikationscentret, Region Hovedstaden (CKU Hillerød)",
        fullNameEn: "Communication Center, Capital Region (CKU Hillerød)",
        roleDa: "Regionalt specialiseret rehabiliteringscenter — tilbyder synsfaglig specialundervisning, rådgivning og afprøvning af hjælpemidler for borgere med synsnedsættelse.",
        roleEn: "Regional specialized rehabilitation center — provides vision specialist education, counseling, and assistive device testing for citizens with visual impairment.",
        descDa: "Kommunikationscentret under Region Hovedstaden (nu del af CKU Hillerød) er det specialiserede center der betjener Lyngby-Taarbæk Kommune inden for synsområdet. Centret har synsfaglige specialister, der underviser borgere med nedsat syn i kompenserende strategier og brug af hjælpemidler. Borgere kan henvises via øjenlæge eller optiker, men kan også selv kontakte centret for en indledende samtale. Centret dækker 11 kommuner i Region Hovedstaden, herunder Lyngby-Taarbæk, Rudersdal og Hørsholm. Ydelserne omfatter specialundervisning i ADL (Almindelig Daglig Levevis), afprøvning af svagsynsoptik, og vejledning i digitale hjælpemidler som skærmlæsere og forstørringssoftware.",
        descEn: "Kommunikationscentret under the Capital Region (now part of CKU Hillerød) is the specialized center serving Lyngby-Taarbæk Municipality in the vision field. The center has vision specialists who teach citizens with reduced vision compensatory strategies and use of assistive devices. Citizens can be referred via eye doctor or optician, but can also contact the center themselves for an initial conversation. The center covers 11 municipalities in the Capital Region, including Lyngby-Taarbæk, Rudersdal, and Hørsholm. Services include specialized ADL education (Activities of Daily Living), testing of low-vision optics, and guidance on digital assistive devices such as screen readers and magnification software.",
        servicesDa: [
            "Specialundervisning i at udnytte resterende syn optimalt",
            "ADL-undervisning: madlavning, personlig pleje, organisering med synsnedsættelse",
            "Afprøvning og tilpasning af svagsynsoptik og elektroniske hjælpemidler",
            "Vejledning i skærmlæsere (JAWS, NVDA, VoiceOver) og forstørringssoftware",
            "Synskonsulentbistand til borgere, familier og fagpersonale",
            "Tværfaglige vurderinger i samarbejde med kommunale sagsbehandlere",
        ],
        servicesEn: [
            "Specialized education in optimizing remaining vision",
            "ADL education: cooking, personal care, organization with visual impairment",
            "Testing and fitting of low-vision optics and electronic assistive devices",
            "Guidance on screen readers (JAWS, NVDA, VoiceOver) and magnification software",
            "Vision consultant assistance for citizens, families, and professionals",
            "Cross-disciplinary assessments in collaboration with municipal case workers",
        ],
        relevanceDa: "Specialist-niveauet — det er her borgere med synsnedsættelse får den specialiserede rehabilitering som kommunen ikke selv kan tilbyde. Henvisning typisk via øjenlæge, men også muligt via egen kontakt. Ventetid ca. 2-4 uger.",
        relevanceEn: "Specialist level — this is where citizens with visual impairment receive the specialized rehabilitation that the municipality cannot offer itself. Referral typically via eye doctor, but also possible through direct contact. Wait time approximately 2-4 weeks.",
        address: "Skansevej 2D, 3400 Hillerød",
        phoneDa: "72 32 38 00",
        phoneEn: "72 32 38 00",
        hoursDa: "Ma-Fr 8:00-15:00 · Email: kc-hil@hillerod.dk",
        hoursEn: "Mon-Fri 8:00-15:00 · Email: kc-hil@hillerod.dk",
        url: "densocialevirksomhed.dk",
        color: "#38a169",
        icon: Eye,
    },
    {
        id: "depot",
        name: "Hjælpemiddeldepotet",
        fullNameDa: "Fælles Hjælpemiddeldepot — Lyngby-Taarbæk, Rudersdal og Hørsholm",
        fullNameEn: "Shared Assistive Device Depot — Lyngby-Taarbæk, Rudersdal, and Hørsholm",
        roleDa: "Fælles kommunalt depot for udlevering, returnering og vedligeholdelse af bevilligede hjælpemidler — delt mellem tre kommuner.",
        roleEn: "Shared municipal depot for distribution, return, and maintenance of granted assistive devices — shared between three municipalities.",
        descDa: "Hjælpemiddeldepotet er et fælleskommunalt depot der betjener borgere i Lyngby-Taarbæk, Rudersdal og Hørsholm kommuner. Her kan borgere afhente og returnere bevilligede hjælpemidler efter godkendelse fra deres kommune. Depotet beslutter udbud af hjælpemidler hvert 4. år i samarbejde med 72 andre kommuner. Depotet er beliggende ved Rundforbivej 176 i Nærum, tæt på afkørsel 14 på Helsingørmotorvejen. For standardhjælpemidler (rollatorer, kørestole, toiletforhøjere, badestole) tilbyder Lyngby-Taarbæk Kommune desuden en Kvikservice ved Bauneporten 20.",
        descEn: "Hjælpemiddeldepotet is a shared municipal depot serving citizens in Lyngby-Taarbæk, Rudersdal, and Hørsholm municipalities. Citizens can pick up and return approved assistive devices after authorization from their municipality. The depot decides aid offerings every 4 years in collaboration with 72 other municipalities. The depot is located at Rundforbivej 176 in Nærum, near exit 14 on the Helsingør motorway. For standard assistive devices (rollators, wheelchairs, toilet raisers, bath chairs), Lyngby-Taarbæk Municipality also offers a Quick Service at Bauneporten 20.",
        servicesDa: [
            "Udlevering af bevilligede hjælpemidler efter kommunal godkendelse",
            "Returnering og genbrug af hjælpemidler",
            "Vedligeholdelse og reparation af udlånte hjælpemidler",
            "Kvikservice for standardhjælpemidler (Bauneporten 20, tirsdage)",
            "Koordinering med Center for Sundhed og Omsorg om bevillinger",
            "Logistisk levering til borgere der ikke selv kan afhente",
        ],
        servicesEn: [
            "Distribution of approved assistive devices after municipal authorization",
            "Return and recycling of assistive devices",
            "Maintenance and repair of loaned assistive devices",
            "Quick service for standard devices (Bauneporten 20, Tuesdays)",
            "Coordination with Center for Sundhed og Omsorg on grants",
            "Logistics delivery for citizens unable to pick up themselves",
        ],
        relevanceDa: "Fysisk afhentningststed — efter bevilling fra Center for Sundhed og Omsorg afhenter borgere (eller får leveret) deres hjælpemidler herfra. Vigtigt logistisk led i hele kæden fra ansøgning til brug.",
        relevanceEn: "Physical pickup point — after a grant from Center for Sundhed og Omsorg, citizens pick up (or receive delivery of) their assistive devices here. Important logistical link in the entire chain from application to use.",
        address: "Rundforbivej 176, 2850 Nærum",
        phoneDa: "45 97 34 93 (Hjælpemiddelafdelingen)",
        phoneEn: "45 97 34 93 (Assistive Devices Department)",
        hoursDa: "Depot: Hverdage 9:00-15:00\nKvikservice: Ti 9:00-12:00 (Bauneporten 20, Kgs. Lyngby)",
        hoursEn: "Depot: Weekdays 9:00-15:00\nQuick service: Tue 9:00-12:00 (Bauneporten 20, Kgs. Lyngby)",
        url: "ltk.dk/borger/hjælpemidler",
        color: "#805ad5",
        icon: Truck,
    },
    {
        id: "ibos",
        name: "IBOS",
        fullNameDa: "Institut for Blinde og Svagsynede",
        fullNameEn: "Institute for Blind and Visually Impaired",
        roleDa: "Nationalt specialiseret rehabiliteringsinstitut — tilbyder rehabilitering, specialundervisning og forskning til blinde og svagsynede borgere.",
        roleEn: "National specialized rehabilitation institute — provides rehabilitation, special education, and research for blind and visually impaired citizens.",
        descDa: "IBOS er et af Danmarks mest specialiserede centre inden for synsrehabilitering. Instituttet har ca. 130 medarbejdere og tilbyder intensive rehabiliteringsforløb for borgere med alvorligt synstab. IBOS er placeret i Hellerup og fungerer som det højeste specialistniveau i synsområdet. Borgere henvises typisk via kommunen eller Kommunikationscentret.",
        descEn: "IBOS is one of Denmark's most specialized centers for vision rehabilitation. The institute has approximately 130 employees and offers intensive rehabilitation programs for citizens with serious vision loss. IBOS is located in Hellerup and functions as the highest specialist level in the vision field. Citizens are typically referred via the municipality or Kommunikationscentret.",
        servicesDa: [
            "Intensiv synsrehabilitering og genoptræning",
            "Specialundervisning for blinde og svagsynede",
            "Forskning i synstab og rehabiliteringsmetoder",
            "Hjælpemiddelafprøvning og tilpasning",
            "Rådgivning til kommuner og fagpersonale",
            "Beskæftigelsesindsats for synshandicappede (kun 38% i arbejde)",
        ],
        servicesEn: [
            "Intensive vision rehabilitation and training",
            "Special education for blind and visually impaired",
            "Research on vision loss and rehabilitation methods",
            "Assistive device testing and fitting",
            "Counseling for municipalities and professionals",
            "Employment initiatives for visually impaired (only 38% employed)",
        ],
        relevanceDa: "Nationalt specialistniveau — IBOS yder rehabilitering og specialundervisning som kommunerne ikke kan tilbyde. Henvisning via kommune eller Kommunikationscentret.",
        relevanceEn: "National specialist level — IBOS provides rehabilitation and special education that municipalities cannot offer. Referral via municipality or Kommunikationscentret.",
        address: "Rymarksvej 1, 2900 Hellerup",
        phoneDa: "39 45 26 26",
        phoneEn: "39 45 26 26",
        hoursDa: "Ma-Fr 8:00-16:00",
        hoursEn: "Mon-Fri 8:00-16:00",
        url: "ibos.dk",
        color: "#d69e2e",
        icon: GraduationCap,
    },
    {
        id: "dbs",
        name: "Dansk Blindesamfund",
        fullNameDa: "Dansk Blindesamfund — interesseorganisation",
        fullNameEn: "Danish Association of the Blind — interest organization",
        roleDa: "Interesseorganisation for blinde og svagsynede — politisk fortalervirksomhed, rådgivning og socialt fællesskab.",
        roleEn: "Interest organization for the blind and visually impaired — political advocacy, counseling, and social community.",
        descDa: "Dansk Blindesamfund har 7.500+ medlemmer og er den primære interesseorganisation for blinde og svagsynede borgere i Danmark. Organisationen driver førerhundeordningen med ca. 190 aktive førerhunde og udøver politisk indflydelse for bedre vilkår. DBS tilbyder rådgivning, fællesskab, peer-støtte og kursusaktiviteter for medlemmer.",
        descEn: "Dansk Blindesamfund has 7,500+ members and is the primary interest organization for blind and visually impaired citizens in Denmark. The organization runs the guide dog scheme with approximately 190 active guide dogs and exerts political influence for better conditions. DBS offers counseling, community, peer support, and course activities for members.",
        servicesDa: [
            "Politisk fortalervirksomhed for blinde og svagsynedes rettigheder",
            "Førerhundeordning (~190 aktive førerhunde, ~20.000 IGDF-certificerede globalt)",
            "Rådgivning og juridisk vejledning til borgere",
            "Socialfællesskab, peer-støtte og kursusaktiviteter",
            "Ledsageordning for blinde over 67 år",
            "Kampagner for digital tilgængelighed og snerydning",
        ],
        servicesEn: [
            "Political advocacy for the rights of blind and visually impaired",
            "Guide dog scheme (~190 active guide dogs, ~20,000 IGDF certified globally)",
            "Counseling and legal guidance for citizens",
            "Social community, peer support, and course activities",
            "Companion scheme for blind people over 67",
            "Campaigns for digital accessibility and snow clearing",
        ],
        relevanceDa: "Advocacy og fællesskab — DBS er stemmen for blinde og svagsynede i danske politiske processer og tilbyder direkte støtte til borgere.",
        relevanceEn: "Advocacy and community — DBS is the voice for blind and visually impaired people in Danish political processes and offers direct support to citizens.",
        address: "Thoravej 31, 2400 København NV",
        phoneDa: "38 14 14 14",
        phoneEn: "38 14 14 14",
        hoursDa: "Ma-To 9:00-16:00, Fr 9:00-15:00",
        hoursEn: "Mon-Thu 9:00-16:00, Fri 9:00-15:00",
        url: "blind.dk",
        color: "#38a169",
        icon: HandHeart,
    },
];

export default function StakeholdersPage() {
    const { t, lang } = useLang();
    const isEn = lang === "en";
    const [searchQuery, setSearchQuery] = useState("");

    const filteredStakeholders = useMemo(() => {
        if (!searchQuery.trim()) return stakeholders;
        const q = searchQuery.toLowerCase();
        return stakeholders.filter(s => {
            const fullName = isEn ? s.fullNameEn : s.fullNameDa;
            const desc = isEn ? s.descEn : s.descDa;
            const role = isEn ? s.roleEn : s.roleDa;
            return s.name.toLowerCase().includes(q) ||
                fullName.toLowerCase().includes(q) ||
                desc.toLowerCase().includes(q) ||
                role.toLowerCase().includes(q) ||
                s.address.toLowerCase().includes(q);
        });
    }, [searchQuery, isEn]);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <div className={styles.localBadge}>
                        <MapPin size={14} />
                        Kongens Lyngby · Lyngby-Taarbæk Kommune
                    </div>
                    <h1 className={styles.title}>{t("stakeholdersTitle")}</h1>
                    <p className={styles.subtitle}>{t("stakeholdersSubtitle")}</p>
                </div>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={18} />
                    <input
                        type="text"
                        placeholder={t("searchStakeholders")}
                        className={styles.searchInput}
                        aria-label="Search stakeholders"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </header>

            <div className={styles.resultCount}>
                {filteredStakeholders.length} {isEn ? "stakeholders found" : "aktører fundet"}
            </div>

            {/* Stakeholder Relationship Map */}
            {!searchQuery.trim() && (
                <div className={styles.relationshipMap}>
                    <h2 className={styles.mapTitle}>
                        {isEn ? "System Relationships" : "Systemrelationer"}
                    </h2>
                    <p className={styles.mapSubtitle}>
                        {isEn
                            ? "How stakeholders interact in the support system for visually impaired citizens"
                            : "Hvordan aktørerne interagerer i støttesystemet for synshandicappede borgere"}
                    </p>
                    <div className={styles.flowGrid}>
                        {[
                            { from: "IBOS", to: isEn ? "Visually Impaired Citizens" : "Synshandicappede borgere", actionDa: "Rehabilitering og specialundervisning", actionEn: "Rehabilitation and special education", color: "#d69e2e" },
                            { from: isEn ? "Communication Center" : "Kommunikationscentret", to: isEn ? "Visually Impaired Citizens" : "Synshandicappede borgere", actionDa: "Hjælpemiddelvurdering og -tildeling", actionEn: "Aid assessment and allocation to individuals", color: "#38a169" },
                            { from: isEn ? "Center for Health and Care" : "Center for Sundhed og Omsorg", to: isEn ? "Visually Impaired Citizens" : "Synshandicappede borgere", actionDa: "Vurderer behov og giver endelig afgørelse om hjælp", actionEn: "Assesses need and gives final verdict on aid", color: "#2b6cb0" },
                            { from: isEn ? "The Aid Depot" : "Hjælpemiddeldepotet", to: isEn ? "Visually Impaired Citizens" : "Synshandicappede borgere", actionDa: "Udlevering og reparation af hjælpemidler", actionEn: "Handing out and repairing assistive devices", color: "#805ad5" },
                            { from: isEn ? "The Aid Depot" : "Hjælpemiddeldepotet", to: isEn ? "Center for Health and Care" : "Center for Sundhed og Omsorg", actionDa: "Beslutter udbud af hjælpemidler hvert 4. år (m. 72 kommuner)", actionEn: "Decides aid offerings every 4 years (with 72 municipalities)", color: "#805ad5" },
                            { from: isEn ? "Lyngby-Taarbæk Municipality" : "Lyngby-Taarbæk Kommune", to: isEn ? "Center for Health and Care" : "Center for Sundhed og Omsorg", actionDa: "Beslutter om midler og sætter politisk ramme", actionEn: "Decides on funds and sets political framework", color: "#dd6b20" },
                            { from: isEn ? "Voters" : "Vælgere", to: isEn ? "Lyngby-Taarbæk Municipality" : "Lyngby-Taarbæk Kommune", actionDa: "Stemmer på borgmester · politisk indflydelse", actionEn: "Voting for mayor · political influence", color: "#6b46c1" },
                            { from: "Dansk Blindesamfund", to: isEn ? "Voters" : "Vælgere", actionDa: "Politisk indflydelse og fortalervirksomhed", actionEn: "Political influence and advocacy", color: "#38a169" },
                        ].map((flow, i) => (
                            <div key={i} className={styles.flowItem}>
                                <div className={styles.flowNode} style={{ borderColor: flow.color, color: flow.color }}>
                                    {flow.from}
                                </div>
                                <div className={styles.flowArrow} style={{ color: flow.color }}>
                                    <ArrowRight size={14} />
                                    <span className={styles.flowAction}>{isEn ? flow.actionEn : flow.actionDa}</span>
                                </div>
                                <div className={styles.flowNode} style={{ borderColor: "var(--border)" }}>
                                    {flow.to}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className={styles.grid}>
                {filteredStakeholders.map((s) => {
                    const Icon = s.icon;
                    return (
                        <div key={s.id} className={styles.card}>
                            {/* Card Header */}
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon} style={{ backgroundColor: s.color + "15", color: s.color }}>
                                    <Icon size={26} />
                                </div>
                                <div className={styles.cardTitleBlock}>
                                    <h2 className={styles.cardName}>{s.name}</h2>
                                    <p className={styles.cardFullName}>{isEn ? s.fullNameEn : s.fullNameDa}</p>
                                </div>
                            </div>

                            {/* Role */}
                            <div className={styles.roleBlock} style={{ borderLeftColor: s.color }}>
                                <span className={styles.roleLabel}>{t("role")}</span>
                                <p className={styles.roleText}>{isEn ? s.roleEn : s.roleDa}</p>
                            </div>

                            {/* Description */}
                            <p className={styles.desc}>{isEn ? s.descEn : s.descDa}</p>

                            {/* Services */}
                            <div className={styles.servicesBlock}>
                                <h3 className={styles.sectionLabel}>
                                    <CheckCircle size={14} style={{ color: s.color }} />
                                    {t("services")}
                                </h3>
                                <ul className={styles.servicesList}>
                                    {(isEn ? s.servicesEn : s.servicesDa).map((svc, i) => (
                                        <li key={i}>{svc}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Relevance */}
                            <div className={styles.relevanceBlock}>
                                <h3 className={styles.sectionLabel}>
                                    <Eye size={14} style={{ color: s.color }} />
                                    {t("relevance")}
                                </h3>
                                <p className={styles.relevanceText}>{isEn ? s.relevanceEn : s.relevanceDa}</p>
                            </div>

                            {/* Contact Info */}
                            <div className={styles.contactBlock}>
                                <h3 className={styles.sectionLabel}>
                                    <Phone size={14} style={{ color: s.color }} />
                                    {t("contactInfo")}
                                </h3>
                                <div className={styles.contactGrid}>
                                    <div className={styles.contactItem}>
                                        <MapPin size={13} />
                                        <span>{s.address}</span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <Phone size={13} />
                                        <span style={{ whiteSpace: "pre-line" }}>{isEn ? s.phoneEn : s.phoneDa}</span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <Clock size={13} />
                                        <span style={{ whiteSpace: "pre-line" }}>{isEn ? s.hoursEn : s.hoursDa}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Website Link */}
                            <a href={`https://${s.url}`} className={styles.link} target="_blank" rel="noopener noreferrer" style={{ color: s.color, backgroundColor: s.color + "10" }}>
                                <Globe size={14} />
                                {s.url}
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
