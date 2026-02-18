"use client";

import styles from "./StatCard.module.css";
import { TrendingUp } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function StatCard({ title, value, subtext, icon: Icon, trend, color }) {
    const { t } = useLang();
    const colorStyle = color ? { '--card-accent': color } : {};

    return (
        <div className={styles.card} style={colorStyle}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                {Icon && (
                    <div className={styles.iconWrap}>
                        <Icon size={18} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.value}>{value}</div>
                {subtext && <div className={styles.subtext}>{subtext}</div>}
            </div>
            {trend && (
                <div className={styles.trend}>
                    <TrendingUp size={14} />
                    <span className={styles.trendValue}>+{trend}%</span>
                    <span className={styles.trendLabel}>{t("thisMonth")}</span>
                </div>
            )}
        </div>
    );
}
