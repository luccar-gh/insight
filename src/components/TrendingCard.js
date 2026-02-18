"use client";

import styles from "./TrendingCard.module.css";
import { User, ArrowRight, Building2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function TrendingCard({ name, role, count, rank, tag, isOrg }) {
    const { t } = useLang();

    return (
        <div className={styles.card}>
            {rank && <div className={styles.rank}>#{rank}</div>}
            <div className={`${styles.avatar} ${isOrg ? styles.orgAvatar : ''}`}>
                {isOrg ? <Building2 size={22} /> : <User size={22} />}
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                <div className={styles.meta}>
                    {tag && <span className={styles.tag}>{tag}</span>}
                    <span className={styles.count}>{count} {t("docsUnit")}</span>
                </div>
            </div>
            <button className={styles.action} aria-label={`View details for ${name}`}>
                <ArrowRight size={18} />
            </button>
        </div>
    );
}
