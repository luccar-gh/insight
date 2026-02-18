"use client";

import styles from "./page.module.css";
import { Search, CheckCircle, Clock, Award, Accessibility as AccessibilityIcon, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const programs = [
    {
        name: "Digital Tilgængelighed 2030",
        nameEn: "Digital Accessibility 2030",
        desc: "National strategi for at gøre alle offentlige digitale tjenester tilgængelige senest 2030.",
        descEn: "National strategy to make all public digital services accessible by 2030.",
        status: "active",
        category: "Digital",
        org: "Digitaliseringsstyrelsen",
        impact: "2.5M+ borgere",
        impactEn: "2.5M+ citizens",
    },
    {
        name: "Førerhundeprogrammet",
        nameEn: "Guide Dog Program",
        desc: "Uddannelse og tildeling af førerhunde til blinde og stærkt svagsynede borgere.",
        descEn: "Training and provision of guide dogs for blind and severely visually impaired citizens.",
        status: "active",
        category: "Service",
        org: "Dansk Blindesamfund",
        impact: "350+ hunde aktive",
        impactEn: "350+ dogs active",
    },
    {
        name: "Synsregisteret",
        nameEn: "Vision Registry",
        desc: "Nationalt register til overvågning af synshandicap og epidemiologisk forskning.",
        descEn: "National registry for monitoring visual impairment and epidemiological research.",
        status: "active",
        category: "Forskning",
        org: "Kennedy Centret",
        impact: "120,000+ registreringer",
        impactEn: "120,000+ registrations",
    },
    {
        name: "Skærmlæser i Folkeskolen",
        nameEn: "Screen Readers in Public Schools",
        desc: "Udrulning af skærmlæser-software til alle folkeskoler med synshandicappede elever.",
        descEn: "Rollout of screen reader software to all public schools with visually impaired students.",
        status: "planned",
        category: "Uddannelse",
        org: "Undervisningsministeriet",
        impact: "8,000+ elever",
        impactEn: "8,000+ students",
    },
    {
        name: "Tilgængelig Transport",
        nameEn: "Accessible Transportation",
        desc: "Modernisering af offentlig transport med taktile ledesystemer og taleannoncering.",
        descEn: "Modernization of public transport with tactile guidance systems and speech announcements.",
        status: "active",
        category: "Infrastruktur",
        org: "Transportministeriet",
        impact: "5M+ daglige rejsende",
        impactEn: "5M+ daily passengers",
    },
    {
        name: "Punktskrift Digitalisering",
        nameEn: "Braille Digitization",
        desc: "Digitalisering af eksisterende punktskrift-materialer og produktion af nye digitale formater.",
        descEn: "Digitization of existing braille materials and production of new digital formats.",
        status: "completed",
        category: "Bibliotek",
        org: "Nota",
        impact: "45,000+ titler",
        impactEn: "45,000+ titles",
    },
];

const statusIcons = { active: CheckCircle, planned: Clock, completed: Award };
const statusColors = {
    active: { bg: "#f0fff4", color: "#276749", border: "#9ae6b4" },
    planned: { bg: "#fffff0", color: "#975a16", border: "#fbd38d" },
    completed: { bg: "#ebf4ff", color: "#2b6cb0", border: "#90cdf4" },
};

export default function AccessibilityPage() {
    const { t, lang } = useLang();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>{t("accessibilityTitle")}</h1>
                    <p className={styles.subtitle}>{t("accessibilitySubtitle")}</p>
                </div>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={18} />
                    <input
                        type="text"
                        placeholder={t("searchPrograms")}
                        className={styles.searchInput}
                        aria-label="Search programs"
                    />
                </div>
            </header>

            <div className={styles.statusBar}>
                {["active", "planned", "completed"].map((s) => {
                    const count = programs.filter((p) => p.status === s).length;
                    const colors = statusColors[s];
                    return (
                        <div key={s} className={styles.statusPill} style={{ backgroundColor: colors.bg, color: colors.color, borderColor: colors.border }}>
                            {t(s)} ({count})
                        </div>
                    );
                })}
            </div>

            <div className={styles.grid}>
                {programs.map((program, index) => {
                    const StatusIcon = statusIcons[program.status];
                    const colors = statusColors[program.status];
                    return (
                        <div key={index} className={styles.programCard}>
                            <div className={styles.programHeader}>
                                <div className={styles.programCategory}>{program.category}</div>
                                <div className={styles.programStatus} style={{ backgroundColor: colors.bg, color: colors.color }}>
                                    <StatusIcon size={12} />
                                    {t(program.status)}
                                </div>
                            </div>
                            <h3 className={styles.programName}>{lang === "en" ? program.nameEn : program.name}</h3>
                            <p className={styles.programDesc}>{lang === "en" ? program.descEn : program.desc}</p>
                            <div className={styles.programFooter}>
                                <span className={styles.programOrg}>{program.org}</span>
                                <span className={styles.programImpact}>
                                    <AccessibilityIcon size={12} />
                                    {lang === "en" ? program.impactEn : program.impact}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
