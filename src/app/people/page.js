"use client";

import { useState, useMemo } from "react";
import TrendingCard from "@/components/TrendingCard";
import styles from "./page.module.css";
import { Search } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const people = [
    { name: "Thorkild Olesen", role: "Formand, Dansk Blindesamfund", roleEn: "Chairman, Danish Association of the Blind", count: 85, tag: "Ledelse" },
    { name: "John Heilbrunn", role: "Direktør, IBOS", roleEn: "Director, IBOS", count: 120, tag: "Institution" },
    { name: "Jesper Holst", role: "Formand, DøvBlinde Danmark", roleEn: "Chairman, DeafBlind Denmark", count: 45, tag: "Ledelse" },
    { name: "Kirsten Brøndum", role: "Socialrådgiver, IBOS", roleEn: "Social Worker, IBOS", count: 38, tag: "Fagperson" },
    { name: "Lars Søndergaard", role: "Synspædagog, Kennedy Centret", roleEn: "Vision Pedagogue, Kennedy Center", count: 62, tag: "Fagperson" },
    { name: "Mette Jensen", role: "Rehabiliteringskonsulent, DBS", roleEn: "Rehabilitation Consultant, DBS", count: 55, tag: "Rådgiver" },
    { name: "Peter Ravnborg", role: "IT-specialist, Nota", roleEn: "IT Specialist, Nota", count: 72, tag: "Teknologi" },
    { name: "Anette Poulsen", role: "Tilgængelighedsekspert, DPOD", roleEn: "Accessibility Expert, DPOD", count: 48, tag: "Ekspert" },
    { name: "Henrik Madsen", role: "Øjenlæge, Rigshospitalet", roleEn: "Ophthalmologist, Rigshospitalet", count: 95, tag: "Medicinsk" },
    { name: "Birgitte Olsen", role: "Punktskriftlærer, IBOS", roleEn: "Braille Teacher, IBOS", count: 33, tag: "Uddannelse" },
    { name: "Steen Andersen", role: "Orienterings- og mobilitets-instruktør", roleEn: "Orientation & Mobility Instructor", count: 41, tag: "Træning" },
    { name: "Camilla Friis", role: "Hjælpemiddelkonsulent, Kommunen", roleEn: "Assistive Device Consultant, Municipality", count: 27, tag: "Kommune" },
];

export default function PeoplePage() {
    const { t, lang } = useLang();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPeople = useMemo(() => {
        if (!searchQuery.trim()) return people;
        const q = searchQuery.toLowerCase();
        return people.filter(p => {
            const role = lang === "en" ? p.roleEn : p.role;
            return p.name.toLowerCase().includes(q) || role.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
        });
    }, [searchQuery, lang]);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>{t("peopleTitle")}</h1>
                    <p className={styles.subtitle}>{t("peopleSubtitle")}</p>
                </div>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={18} />
                    <input
                        type="text"
                        placeholder={t("searchPeople")}
                        className={styles.searchInput}
                        aria-label="Search people"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </header>

            <div className={styles.resultCount}>
                {filteredPeople.length} {lang === "en" ? "people found" : "personer fundet"}
            </div>

            <div className={styles.grid}>
                {filteredPeople.length > 0 ? (
                    filteredPeople.map((person, index) => (
                        <TrendingCard
                            key={index}
                            name={person.name}
                            role={lang === "en" ? person.roleEn : person.role}
                            count={person.count}
                            tag={person.tag}
                        />
                    ))
                ) : (
                    <div className={styles.emptyState}>
                        <Search size={40} />
                        <p>{lang === "en" ? "No people match your search." : "Ingen personer matcher din søgning."}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
