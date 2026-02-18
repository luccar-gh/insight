"use client";

import styles from "./page.module.css";
import { Search, ExternalLink, BookOpen, Wrench, Link2, Phone, ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const resources = [
    {
        title: "Hjælpemiddelbasen",
        titleEn: "Assistive Device Database",
        desc: "Database over hjælpemidler til mennesker med synshandicap – opdateret løbende.",
        descEn: "Database of assistive devices for people with visual impairment – continuously updated.",
        type: "tool",
        url: "hmi-basen.dk",
        icon: Wrench,
    },
    {
        title: "Punktskriftguide",
        titleEn: "Braille Guide",
        desc: "Komplet guide til punktskrift – fra grundlæggende tegn til avanceret notation.",
        descEn: "Complete braille guide – from basic characters to advanced notation.",
        type: "guide",
        url: "nota.dk/punktskrift",
        icon: BookOpen,
    },
    {
        title: "Synsrådgivning Hotline",
        titleEn: "Vision Counseling Hotline",
        desc: "Gratis telefonisk rådgivning for blinde, svagsynede og deres pårørende.",
        descEn: "Free telephone counseling for blind, visually impaired people and their relatives.",
        type: "contact",
        url: "70 10 10 33",
        icon: Phone,
    },
    {
        title: "WCAG 2.2 – Dansk Oversættelse",
        titleEn: "WCAG 2.2 – Danish Translation",
        desc: "Officiel dansk oversættelse af Web Content Accessibility Guidelines 2.2.",
        descEn: "Official Danish translation of Web Content Accessibility Guidelines 2.2.",
        type: "link",
        url: "w3.org/WAI",
        icon: Link2,
    },
    {
        title: "IT-tilgængelighed Værktøj",
        titleEn: "IT Accessibility Tool",
        desc: "Test dit website for tilgængelighed med dette gratis online-værktøj.",
        descEn: "Test your website for accessibility with this free online tool.",
        type: "tool",
        url: "siteimprove.com",
        icon: Wrench,
    },
    {
        title: "Synstab – Patientvejledning",
        titleEn: "Vision Loss – Patient Guide",
        desc: "Vejledning for nysdiagnosticerede patienter med synstab, udgivet af Sundhedsstyrelsen.",
        descEn: "Guide for newly diagnosed patients with vision loss, published by the Danish Health Authority.",
        type: "guide",
        url: "sundhed.dk/synstab",
        icon: BookOpen,
    },
    {
        title: "Kommunal Synsrådgiver Kontakt",
        titleEn: "Municipality Vision Advisor Contact",
        desc: "Find din lokale synsrådgiver – alle landets kommuner har en kontaktperson.",
        descEn: "Find your local vision advisor – all municipalities in Denmark have a contact person.",
        type: "contact",
        url: "borger.dk",
        icon: Phone,
    },
    {
        title: "Tilgængelighed i Bygninger",
        titleEn: "Accessibility in Buildings",
        desc: "Vejledning om krav til bygningsindretning for synshandicappede ifølge Bygningsreglementet.",
        descEn: "Guide on building requirements for visually impaired people per the Building Regulations.",
        type: "guide",
        url: "bygningsreglementet.dk",
        icon: BookOpen,
    },
    {
        title: "Assistive Technology Portal",
        titleEn: "Assistive Technology Portal",
        desc: "Oversigt over de nyeste hjælpeteknologier for blinde og svagtseende – internationalt perspektiv.",
        descEn: "Overview of the latest assistive technologies for the blind and visually impaired – international perspective.",
        type: "link",
        url: "atia.org",
        icon: Link2,
    },
];

const typeColors = {
    guide: { bg: "#ebf4ff", color: "#2b6cb0" },
    tool: { bg: "#f0fff4", color: "#276749" },
    link: { bg: "#fff5f7", color: "#97266d" },
    contact: { bg: "#fffff0", color: "#975a16" },
};

export default function ResourcesPage() {
    const { t, lang } = useLang();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>{t("resourcesTitle")}</h1>
                    <p className={styles.subtitle}>{t("resourcesSubtitle")}</p>
                </div>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={18} />
                    <input
                        type="text"
                        placeholder={t("searchResources")}
                        className={styles.searchInput}
                        aria-label="Search resources"
                    />
                </div>
            </header>

            <div className={styles.grid}>
                {resources.map((res, index) => {
                    const Icon = res.icon;
                    const colors = typeColors[res.type];
                    return (
                        <div key={index} className={styles.resourceCard}>
                            <div className={styles.resHeader}>
                                <div className={styles.resIcon} style={{ backgroundColor: colors.bg, color: colors.color }}>
                                    <Icon size={20} />
                                </div>
                                <span className={styles.resType} style={{ backgroundColor: colors.bg, color: colors.color }}>
                                    {t(res.type)}
                                </span>
                            </div>
                            <h3 className={styles.resTitle}>{lang === "en" ? res.titleEn : res.title}</h3>
                            <p className={styles.resDesc}>{lang === "en" ? res.descEn : res.desc}</p>
                            <a href={res.type === "contact" ? `tel:${res.url.replace(/\s/g, "")}` : `https://${res.url}`} className={styles.resLink} target="_blank" rel="noopener noreferrer">
                                {res.url}
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
