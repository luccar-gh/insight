"use client";

import { useState, useMemo } from "react";
import DocumentListItem from "@/components/DocumentListItem";
import styles from "./page.module.css";
import { Search, Filter, Download } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const documents = [
    { title: "Lov om social service – Synstabsrehabilitering", titleEn: "Social Services Act – Vision Loss Rehabilitation", date: "Jan 2026", pages: 42, type: "Lovgivning", fileUrl: "https://www.retsinformation.dk/eli/lta/2023/170" },
    { title: "IBOS Årsrapport 2025", titleEn: "IBOS Annual Report 2025", date: "Mar 2025", pages: 68, type: "Rapport", fileUrl: "https://ibos.dk" },
    { title: "Vejledning om hjælpemidler til synshandicappede", titleEn: "Guide to Assistive Devices for Visually Impaired", date: "Sep 2024", pages: 24, type: "Vejledning", fileUrl: "https://hmi-basen.dk" },
    { title: "National handlingsplan for tilgængelighed", titleEn: "National Action Plan for Accessibility", date: "Jun 2024", pages: 35, type: "Politik", fileUrl: "https://handicap.dk" },
    { title: "Evaluering af Nota's digitale tjenester", titleEn: "Evaluation of Nota's Digital Services", date: "Feb 2025", pages: 52, type: "Rapport", fileUrl: "https://nota.dk" },
    { title: "FN's Handicapkonvention – Dansk implementering", titleEn: "UN Convention on Disability – Danish Implementation", date: "Nov 2023", pages: 88, type: "Lovgivning", fileUrl: "https://menneskeret.dk/handicapkonventionen" },
    { title: "Retningslinjer for synscreening i folkeskolen", titleEn: "Guidelines for Vision Screening in Public Schools", date: "Aug 2024", pages: 16, type: "Vejledning", fileUrl: "https://sundhedsstyrelsen.dk" },
    { title: "Strategi for digital tilgængelighed 2025-2030", titleEn: "Strategy for Digital Accessibility 2025-2030", date: "Jan 2025", pages: 30, type: "Politik", fileUrl: "https://digst.dk" },
    { title: "Dansk Blindesamfund – Medlemsundersøgelse 2024", titleEn: "Danish Association of the Blind – Member Survey 2024", date: "Dec 2024", pages: 45, type: "Rapport", fileUrl: "https://blind.dk" },
    { title: "Bekendtgørelse om førerhunde", titleEn: "Executive Order on Guide Dogs", date: "Apr 2023", pages: 12, type: "Lovgivning", fileUrl: "https://retsinformation.dk" },
];

const typeMap = {
    "Alle": null,
    "All": null,
    "Lovgivning": "Lovgivning",
    "Legislation": "Lovgivning",
    "Rapporter": "Rapport",
    "Reports": "Rapport",
    "Vejledninger": "Vejledning",
    "Guidelines": "Vejledning",
    "Politik": "Politik",
    "Policy": "Politik",
};

export default function DocumentsPage() {
    const { t, lang } = useLang();
    const [activeFilter, setActiveFilter] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const filters = [t("all"), t("legislation"), t("reports"), t("guidelines"), t("policy")];

    const filteredDocs = useMemo(() => {
        let docs = documents;

        // Apply type filter
        const filterLabel = filters[activeFilter];
        const filterType = typeMap[filterLabel];
        if (filterType) {
            docs = docs.filter(d => d.type === filterType);
        }

        // Apply search
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            docs = docs.filter(d => {
                const title = lang === "en" ? d.titleEn : d.title;
                return title.toLowerCase().includes(q) || d.type.toLowerCase().includes(q) || d.date.toLowerCase().includes(q);
            });
        }

        return docs;
    }, [activeFilter, searchQuery, lang, filters]);

    const handleDownload = (doc) => {
        window.open(doc.fileUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>{t("documentsTitle")}</h1>
                    <p className={styles.subtitle}>{t("documentsSubtitle")}</p>
                </div>
            </header>

            <div className={styles.content}>
                <aside className={styles.filters}>
                    <div className={styles.filterTitle}>
                        <Filter size={16} /> {t("filters")}
                    </div>
                    {filters.map((filter, index) => (
                        <button
                            key={filter}
                            className={`${styles.filterBtn} ${index === activeFilter ? styles.active : ''}`}
                            onClick={() => setActiveFilter(index)}
                        >
                            {filter}
                            {index > 0 && (
                                <span className={styles.filterCount}>
                                    {documents.filter(d => d.type === Object.values(typeMap).filter(Boolean)[index - 1]).length}
                                </span>
                            )}
                        </button>
                    ))}
                </aside>

                <main className={styles.main}>
                    <div className={styles.searchBar}>
                        <Search className={styles.searchIcon} size={18} />
                        <input
                            type="text"
                            placeholder={t("searchDocuments")}
                            className={styles.searchInput}
                            aria-label="Search documents"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className={styles.resultCount}>
                        {filteredDocs.length} {lang === "en" ? "documents found" : "dokumenter fundet"}
                    </div>

                    <div className={styles.list}>
                        {filteredDocs.length > 0 ? (
                            filteredDocs.map((doc, index) => (
                                <DocumentListItem
                                    key={index}
                                    title={lang === "en" ? doc.titleEn : doc.title}
                                    date={doc.date}
                                    pages={doc.pages}
                                    type={doc.type}
                                    onDownload={() => handleDownload(doc)}
                                />
                            ))
                        ) : (
                            <div className={styles.emptyState}>
                                <Search size={40} />
                                <p>{lang === "en" ? "No documents match your search." : "Ingen dokumenter matcher din søgning."}</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
