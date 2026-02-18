"use client";

import { Search, Globe, Menu, Accessibility, Languages } from "lucide-react";
import styles from "./TopBar.module.css";
import { useLang } from "@/context/LanguageContext";

export default function TopBar({ onMenuClick }) {
    const { t, toggleLang, lang } = useLang();

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <button className={styles.menuBtn} onClick={onMenuClick}>
                    <Menu size={24} />
                </button>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder={t("searchPlaceholder")}
                        className={styles.searchInput}
                        aria-label="Search the entire system"
                    />
                    <div className={styles.searchShortcut}>⌘K</div>
                </div>
            </div>

            <div className={styles.right}>
                <a href="#" className={styles.iconLink} aria-label="Accessibility">
                    <Accessibility size={20} />
                </a>
                <a href="#" className={styles.iconLink} aria-label="Website">
                    <Globe size={20} />
                </a>
                <button
                    className={styles.langBadge}
                    onClick={toggleLang}
                    aria-label={`Switch language to ${lang === "da" ? "English" : "Danish"}`}
                    title={lang === "da" ? "Switch to English" : "Skift til dansk"}
                >
                    <Languages size={14} />
                    {t("langLabel")}
                </button>
            </div>
        </header>
    );
}
