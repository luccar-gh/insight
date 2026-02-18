"use client";

import { createContext, useContext, useState, useCallback } from "react";

const LanguageContext = createContext();

const translations = {
    da: {
        // Sidebar
        navigation: "NAVIGATION",
        dashboard: "Dashboard",
        organizations: "Organisationer",
        people: "Personer",
        documents: "Dokumenter",
        accessibility: "Tilgængelighed",
        resources: "Ressourcer",
        insights: "Insight",
        accessibilityFirst: "♿ Tilgængelighed Først",
        copyright: "© 2026 Public Data Denmark",
        blindSystem: "Insight",
        denmark: "DTU 41639 🎓",

        // TopBar
        searchPlaceholder: "Søg i hele systemet...",
        langLabel: "DA 🇩🇰",

        // Dashboard
        dashboardTitle: "Dashboard",
        dashboardSubtitle: "Oversigt over det danske system for blinde og svagtseende borgere.",
        badgeLabel: "Synstab & Rehabilitering",
        statRegistered: "Registrerede personer",
        statRegisteredSub: "Blinde og svagtseende borgere",
        statOrgs: "Organisationer",
        statOrgsSub: "Aktive institutioner",
        statDocs: "Dokumenter",
        statDocsSub: "Lovgivning, rapporter & vejledninger",
        statAccessibility: "Tilgængelighedstiltag",
        statAccessibilitySub: "Aktive programmer & initiativer",
        keyOrganizations: "Nøgleorganisationer",
        recentDocuments: "Seneste dokumenter",
        viewAll: "Se alle →",
        thisMonth: "denne måned",
        docsUnit: "dokumenter",

        // People page
        peopleTitle: "Personer",
        peopleSubtitle: "Nøglepersoner i det danske system for blinde og svagtseende.",
        searchPeople: "Søg personer...",

        // Documents page
        documentsTitle: "Dokumenter",
        documentsSubtitle: "Gennemse lovgivning, rapporter og vejledninger om synstab i Danmark.",
        searchDocuments: "Søg i dokumenter...",
        filters: "Filtre",
        all: "Alle",
        legislation: "Lovgivning",
        reports: "Rapporter",
        guidelines: "Vejledninger",
        policy: "Politik",
        pages: "sider",

        // Organizations page
        orgsTitle: "Organisationer",
        orgsSubtitle: "Institutioner og organisationer der støtter blinde og svagtseende i Danmark.",
        searchOrgs: "Søg organisationer...",
        members: "medlemmer",
        founded: "Grundlagt",
        website: "Hjemmeside",

        // Accessibility page
        accessibilityTitle: "Tilgængelighed",
        accessibilitySubtitle: "Programmer og initiativer for tilgængelighed i det danske samfund.",
        searchPrograms: "Søg programmer...",
        active: "Aktiv",
        planned: "Planlagt",
        completed: "Afsluttet",
        programs: "programmer",

        // Resources page
        resourcesTitle: "Ressourcer",
        resourcesSubtitle: "Nyttige links, vejledninger og værktøjer for blinde og svagtseende.",
        searchResources: "Søg ressourcer...",
        guide: "Vejledning",
        tool: "Værktøj",
        link: "Link",
        contact: "Kontakt",

        // Document types
        typeLegislation: "Lovgivning",
        typeReport: "Rapport",
        typeGuideline: "Vejledning",
        typePolicy: "Politik",
    },
    en: {
        // Sidebar
        navigation: "NAVIGATION",
        dashboard: "Dashboard",
        organizations: "Organizations",
        people: "People",
        documents: "Documents",
        accessibility: "Accessibility",
        resources: "Resources",
        insights: "Insight",
        accessibilityFirst: "♿ Accessibility First",
        copyright: "© 2026 Public Data Denmark",
        blindSystem: "Insight",
        denmark: "DTU 41639 🎓",

        // TopBar
        searchPlaceholder: "Search the entire system...",
        langLabel: "EN 🇬🇧",

        // Dashboard
        dashboardTitle: "Dashboard",
        dashboardSubtitle: "Overview of Denmark's system for blind and visually impaired citizens.",
        badgeLabel: "Vision Loss & Rehabilitation",
        statRegistered: "Registered People",
        statRegisteredSub: "Blind and visually impaired citizens",
        statOrgs: "Organizations",
        statOrgsSub: "Active institutions",
        statDocs: "Documents",
        statDocsSub: "Legislation, reports & guidelines",
        statAccessibility: "Accessibility Initiatives",
        statAccessibilitySub: "Active programs & initiatives",
        keyOrganizations: "Key Organizations",
        recentDocuments: "Recent Documents",
        viewAll: "View all →",
        thisMonth: "this month",
        docsUnit: "documents",

        // People page
        peopleTitle: "People",
        peopleSubtitle: "Key people in Denmark's system for the blind and visually impaired.",
        searchPeople: "Search people...",

        // Documents page
        documentsTitle: "Documents",
        documentsSubtitle: "Browse legislation, reports, and guidelines on vision loss in Denmark.",
        searchDocuments: "Search documents...",
        filters: "Filters",
        all: "All",
        legislation: "Legislation",
        reports: "Reports",
        guidelines: "Guidelines",
        policy: "Policy",
        pages: "pages",

        // Organizations page
        orgsTitle: "Organizations",
        orgsSubtitle: "Institutions and organizations supporting blind and visually impaired people in Denmark.",
        searchOrgs: "Search organizations...",
        members: "members",
        founded: "Founded",
        website: "Website",

        // Accessibility page
        accessibilityTitle: "Accessibility",
        accessibilitySubtitle: "Programs and initiatives for accessibility in Danish society.",
        searchPrograms: "Search programs...",
        active: "Active",
        planned: "Planned",
        completed: "Completed",
        programs: "programs",

        // Resources page
        resourcesTitle: "Resources",
        resourcesSubtitle: "Useful links, guides, and tools for blinds and visually impaired people.",
        searchResources: "Search resources...",
        guide: "Guide",
        tool: "Tool",
        link: "Link",
        contact: "Contact",

        // Document types
        typeLegislation: "Legislation",
        typeReport: "Report",
        typeGuideline: "Guideline",
        typePolicy: "Policy",
    },
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("da");

    const toggleLang = useCallback(() => {
        setLang((prev) => (prev === "da" ? "en" : "da"));
    }, []);

    const t = useCallback(
        (key) => translations[lang]?.[key] || translations.da[key] || key,
        [lang]
    );

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLang must be used within LanguageProvider");
    return ctx;
}
