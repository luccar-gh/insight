"use client";

import Link from "next/link";
import { Users, FileText, Building2, Accessibility, Eye, Lightbulb, ArrowRight } from "lucide-react";
import StatCard from "@/components/StatCard";
import TrendingCard from "@/components/TrendingCard";
import DocumentListItem from "@/components/DocumentListItem";
import styles from "./page.module.css";
import { useLang } from "@/context/LanguageContext";

const keyOrganizations = [
  { name: "IBOS", role: "Institut for Blinde og Svagsynede, Hellerup", roleEn: "Institute for Blind & Visually Impaired, Hellerup", count: 520, tag: "National", isOrg: true },
  { name: "Dansk Blindesamfund (DAB)", role: "Interesseorganisation for blinde og svagsynede", roleEn: "Interest organization for blind & visually impaired", count: 380, tag: "Members", isOrg: true },
  { name: "Nota", role: "Nationalbibliotek for mennesker med læsevanskeligheder", roleEn: "National library for people with reading difficulties", count: 290, tag: "Library", isOrg: true },
  { name: "DøvBlinde Danmark", role: "Organisation for døvblinde personer", roleEn: "Organization for deafblind people", count: 145, tag: "Specialized", isOrg: true },
  { name: "DPOD", role: "Danske Handicaporganisationers paraplyorganisation", roleEn: "Danish Disability Organizations umbrella org", count: 210, tag: "Umbrella", isOrg: true },
];

const recentDocs = [
  { title: "Lov om social service – Synstabsrehabilitering", titleEn: "Social Services Act – Vision Loss Rehabilitation", date: "Jan 2026", pages: 42, type: "Lovgivning", fileUrl: "https://retsinformation.dk" },
  { title: "IBOS Årsrapport 2025", titleEn: "IBOS Annual Report 2025", date: "Mar 2025", pages: 68, type: "Rapport", fileUrl: "https://ibos.dk" },
  { title: "Vejledning om hjælpemidler til synshandicappede", titleEn: "Guide to Assistive Devices for Visually Impaired", date: "Sep 2024", pages: 24, type: "Vejledning", fileUrl: "https://hmi-basen.dk" },
  { title: "National handlingsplan for tilgængelighed", titleEn: "National Action Plan for Accessibility", date: "Jun 2024", pages: 35, type: "Politik", fileUrl: "https://handicap.dk" },
  { title: "Evaluering af Nota's digitale tjenester", titleEn: "Evaluation of Nota's Digital Services", date: "Feb 2025", pages: 52, type: "Rapport", fileUrl: "https://nota.dk" },
];

export default function Home() {
  const { t, lang } = useLang();

  const stats = [
    { title: t("statRegistered"), value: "340+", subtext: t("statRegisteredSub"), icon: Users, trend: 8, color: "#2b6cb0" },
    { title: t("statOrgs"), value: "12", subtext: t("statOrgsSub"), icon: Building2, trend: 2, color: "#dd6b20" },
    { title: t("statDocs"), value: "1,850", subtext: t("statDocsSub"), icon: FileText, trend: 15, color: "#38a169" },
    { title: t("statAccessibility"), value: "95", subtext: t("statAccessibilitySub"), icon: Accessibility, trend: 22, color: "#d53f8c" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>{t("dashboardTitle")}</h1>
          <p className={styles.subtitle}>{t("dashboardSubtitle")}</p>
        </div>
        <div className={styles.headerBadge}>
          <Eye size={16} />
          <span>{t("badgeLabel")}</span>
        </div>
      </header>

      {/* Insights CTA Banner */}
      <Link href="/insights" className={styles.insightsBanner}>
        <div className={styles.insightsBannerIcon}>
          <Lightbulb size={22} />
        </div>
        <div className={styles.insightsBannerContent}>
          <h3>
            {lang === "en"
              ? "N-Model Analysis: Mapping the socio-technical system for blind citizens"
              : "N-Model Analyse: Kortlægning af det sociotekniske system for blinde borgere"}
          </h3>
          <p>
            {lang === "en"
              ? "6 system layers · 5 cross-layer conflicts · 78-158 days aid process · DTU 41639"
              : "6 systemlag · 5 konflikter på tværs · 78-158 dages hjælpeforløb · DTU 41639"}
          </p>
        </div>
        <ArrowRight size={20} className={styles.insightsBannerArrow} />
      </Link>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className={styles.mainGrid}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t("keyOrganizations")}</h2>
            <a href="/organizations" className={styles.viewAll}>{t("viewAll")}</a>
          </div>
          <div className={styles.peopleGrid}>
            {keyOrganizations.map((org, index) => (
              <TrendingCard
                key={index}
                name={org.name}
                role={lang === "en" ? org.roleEn : org.role}
                count={org.count}
                tag={org.tag}
                isOrg={org.isOrg}
                rank={index + 1}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t("recentDocuments")}</h2>
            <a href="/documents" className={styles.viewAll}>{t("viewAll")}</a>
          </div>
          <div className={styles.documentList}>
            {recentDocs.map((doc, index) => (
              <DocumentListItem
                key={index}
                title={lang === "en" ? doc.titleEn : doc.title}
                date={doc.date}
                pages={doc.pages}
                type={doc.type}
                onDownload={() => window.open(doc.fileUrl, '_blank', 'noopener,noreferrer')}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
