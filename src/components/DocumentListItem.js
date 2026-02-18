"use client";

import styles from "./DocumentListItem.module.css";
import { FileText, BookOpen, Scale, Landmark, Download } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const typeIcons = {
    "Lovgivning": Scale,
    "Rapport": FileText,
    "Vejledning": BookOpen,
    "Politik": Landmark,
};

const typeColors = {
    "Lovgivning": { bg: "#fef3c7", color: "#92400e", border: "#fcd34d" },
    "Rapport": { bg: "#ebf4ff", color: "#2b6cb0", border: "#90cdf4" },
    "Vejledning": { bg: "#f0fff4", color: "#276749", border: "#9ae6b4" },
    "Politik": { bg: "#fff5f7", color: "#97266d", border: "#fbb6ce" },
};

const typeTranslationKeys = {
    "Lovgivning": "typeLegislation",
    "Rapport": "typeReport",
    "Vejledning": "typeGuideline",
    "Politik": "typePolicy",
};

export default function DocumentListItem({ title, date, pages, type, onDownload }) {
    const { t } = useLang();
    const Icon = typeIcons[type] || FileText;
    const colors = typeColors[type] || { bg: "#f3f4f6", color: "#4a5568", border: "#e2e8f0" };
    const translatedType = t(typeTranslationKeys[type] || type);

    return (
        <div className={styles.item}>
            <div className={styles.iconWrapper} style={{ backgroundColor: colors.bg, color: colors.color }}>
                <Icon size={20} />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h4 className={styles.title}>{title}</h4>
                    <span
                        className={styles.tag}
                        style={{
                            backgroundColor: colors.bg,
                            color: colors.color,
                            borderColor: colors.border
                        }}
                    >
                        {translatedType}
                    </span>
                </div>
                <div className={styles.meta}>
                    <span>{date}</span> • <span>{pages} {t("pages")}</span>
                </div>
            </div>
            <button
                className={styles.action}
                aria-label="Download document"
                onClick={onDownload}
                title={t("pages") === "sider" ? "Åbn dokument" : "Open document"}
            >
                <Download size={18} />
            </button>
        </div>
    );
}
