"use client";

import Link from "next/link";
import { Users, FileText, Building2, Accessibility, Eye, Lightbulb, ArrowRight, BarChart3, AlertTriangle, Clock, Calendar, Target, CheckCircle2, Dog } from "lucide-react";
import StatCard from "@/components/StatCard";
import TrendingCard from "@/components/TrendingCard";
import DocumentListItem from "@/components/DocumentListItem";
import DashboardCharts from "@/components/DashboardCharts";
import styles from "./page.module.css";
import { useLang } from "@/context/LanguageContext";

const keyOrganizations = [
  { name: "IBOS", role: "Institut for Blinde og Svagsynede, Hellerup", roleEn: "Institute for Blind & Visually Impaired, Hellerup", count: 520, tag: "National", isOrg: true },
  { name: "Dansk Blindesamfund (DBS)", role: "Interesseorganisation for blinde og svagsynede", roleEn: "Interest organization for blind & visually impaired", count: 380, tag: "Members", isOrg: true },
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
    { title: t("statRegistered"), value: "~12.500", subtext: lang === "en" ? "Blind & visually impaired in Denmark" : "Blinde og svagsynede i Danmark", icon: Users, trend: 8, color: "#2b6cb0" },
    { title: t("statOrgs"), value: "12", subtext: t("statOrgsSub"), icon: Building2, trend: 2, color: "#dd6b20" },
    { title: t("statDocs"), value: "1,850", subtext: t("statDocsSub"), icon: FileText, trend: 15, color: "#38a169" },
    { title: t("statAccessibility"), value: "95", subtext: t("statAccessibilitySub"), icon: Accessibility, trend: 22, color: "#d53f8c" },
  ];

  const milestones = [
    { weeksDa: "Uge 1-4", weeksEn: "Week 1-4", labelDa: "Stakeholder-kontakt og problemanalyse", labelEn: "Stakeholder outreach and problem analysis", color: "#e53e3e", milestone: "M1" },
    { weeksDa: "Uge 5-7", weeksEn: "Week 5-7", labelDa: "Problemanalyse og stakeholder-interviews", labelEn: "Analyze problem and stakeholder interviews", color: "#dd6b20", milestone: "M2" },
    { weeksDa: "Uge 8-10", weeksEn: "Week 8-10", labelDa: "Ideation, prototyping og brugertest", labelEn: "Ideation, prototyping and user testing", color: "#d69e2e", milestone: "M3" },
    { weeksDa: "Uge 11-13", weeksEn: "Week 11-13", labelDa: "Forfin løsning og yderligere brugertests", labelEn: "Refine solution and further user tests", color: "#38a169", milestone: "M4" },
  ];

  const systemAnalysisPoints = [
    { icon: FileText, titleDa: "Komplicerede ansøgninger", titleEn: "Complicated applications", descDa: "Ansøgningen består af omfattende læsemateriale og dokumenter. Flere ansøgninger kan kræves.", descEn: "The application consists of extensive reading material and documents. Multiple applications may be required.", labelDa: "Komplekst system", labelEn: "Complex system", color: "#e53e3e" },
    { icon: Clock, titleDa: "Lang sagsbehandlingsproces", titleEn: "Long application process", descDa: "Ansøgningen sendes mellem forskellige kommunale afdelinger. Processen tager typisk 6-12 måneder.", descEn: "The application bounces between different municipal departments. The process typically takes 6-12 months.", labelDa: "Komplekst system", labelEn: "Complex system", color: "#dd6b20" },
    { icon: Users, titleDa: "Begrænset personlig assistance", titleEn: "Limited personal assistance", descDa: "Under sagsbehandling er synshandicappede begrænset til 15 timers personlig assistance per måned.", descEn: "While the application is being processed, visually impaired people are limited to 15 hours of personal assistance per month.", labelDa: "Artefakt", labelEn: "Artefact", color: "#6b46c1" },
    { icon: Dog, titleDa: "Mangel på førerhunde", titleEn: "Lack of guide dogs", descDa: "Ca. 190 aktive førerhunde i Dansk Blindesamfunds ordning. Kun ~20.000 IGDF-certificerede førerhunde på verdensplan.", descEn: "Around 190 active guide dogs in the Danish Blind Society's arrangement. Only ~20,000 IGDF certified guide dogs worldwide.", labelDa: "Artefakt", labelEn: "Artefact", color: "#2b6cb0" },
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

      {/* Problem Statement Banner */}
      <div className={styles.problemBanner}>
        <div className={styles.problemQuote}>
          <AlertTriangle size={20} className={styles.problemIcon} />
          <blockquote>
            {lang === "en"
              ? "\"Blind and visually impaired people face excessively long processing times when applying for essential assistive tools needed for independent daily living.\""
              : "\"Blinde og svagsynede oplever uacceptabelt lange sagsbehandlingstider ved ansøgning om nødvendige hjælpemidler til selvstændig daglig livsførelse.\""}
          </blockquote>
        </div>
        <div className={styles.problemStats}>
          <div className={styles.problemStat}>
            <span className={styles.problemStatValue}>~12.500</span>
            <span className={styles.problemStatLabel}>{lang === "en" ? "Danish blind & visually impaired affected" : "Danske blinde og svagsynede berørt"}</span>
          </div>
          <div className={styles.problemStatDivider} />
          <div className={styles.problemStat}>
            <span className={styles.problemStatValue} style={{ color: "#38a169" }}>6-10 {lang === "en" ? "weeks" : "uger"}</span>
            <span className={styles.problemStatLabel}>{lang === "en" ? "Listed processing time" : "Officiel sagsbehandlingstid"}</span>
          </div>
          <div className={styles.problemStatDivider} />
          <div className={styles.problemStat}>
            <span className={styles.problemStatValue} style={{ color: "#e53e3e" }}>6-12 {lang === "en" ? "months" : "mdr."}</span>
            <span className={styles.problemStatLabel}>{lang === "en" ? "Actual processing time" : "Reel sagsbehandlingstid"}</span>
          </div>
          <div className={styles.problemStatDivider} />
          <div className={styles.problemStat}>
            <span className={styles.problemStatValue}>15 {lang === "en" ? "hrs/mo" : "timer/md."}</span>
            <span className={styles.problemStatLabel}>{lang === "en" ? "Personal assistance while waiting" : "Personlig assistance under ventetid"}</span>
          </div>
        </div>
        <div className={styles.problemWarnings}>
          <span className={styles.problemWarning}>
            <AlertTriangle size={12} />
            {lang === "en" ? "Gotten worse over time" : "Forværret over tid"}
          </span>
          <span className={styles.problemWarning} style={{ color: "#e53e3e", borderColor: "#e53e3e" }}>
            <AlertTriangle size={12} />
            {lang === "en" ? "Prior or current assessment termination" : "Tidligere eller igangværende vurdering afbrudt"}
          </span>
        </div>
      </div>

      {/* Preliminary System Analysis */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Target size={18} style={{ marginRight: "0.4rem" }} />
            {lang === "en" ? "Preliminary System Analysis" : "Foreløbig systemanalyse"}
          </h2>
        </div>
        <div className={styles.analysisGrid}>
          {systemAnalysisPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div key={i} className={styles.analysisCard} style={{ borderTopColor: point.color }}>
                <div className={styles.analysisCardTop}>
                  <div className={styles.analysisCardIcon} style={{ color: point.color, background: `${point.color}12` }}>
                    <Icon size={18} />
                  </div>
                  <span className={styles.analysisCardLabel} style={{ color: point.color, borderColor: point.color }}>
                    {lang === "en" ? point.labelEn : point.labelDa}
                  </span>
                </div>
                <h3 className={styles.analysisCardTitle}>{lang === "en" ? point.titleEn : point.titleDa}</h3>
                <p className={styles.analysisCardDesc}>{lang === "en" ? point.descEn : point.descDa}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Milestone Plan */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Calendar size={18} style={{ marginRight: "0.4rem" }} />
            {lang === "en" ? "Project Milestone Plan — DTU 41639" : "Milepælsplan — DTU 41639"}
          </h2>
        </div>
        <div className={styles.milestoneTrack}>
          {milestones.map((ms, i) => (
            <div key={i} className={styles.milestoneItem} style={{ "--ms-color": ms.color }}>
              <div className={styles.milestoneBar} style={{ background: ms.color }}>
                <span className={styles.milestoneWeeks}>{lang === "en" ? ms.weeksEn : ms.weeksDa}</span>
              </div>
              <p className={styles.milestoneLabel}>{lang === "en" ? ms.labelEn : ms.labelDa}</p>
              <div className={styles.milestoneDot} style={{ borderColor: ms.color }}>
                <span>{ms.milestone}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Charts Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <BarChart3 size={18} style={{ marginRight: "0.4rem" }} />
            {lang === "en" ? "Lyngby-Taarbæk — Key Data" : "Lyngby-Taarbæk — Nøgledata"}
          </h2>
        </div>
        <DashboardCharts />
      </section>

      <div className={styles.mainGrid}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t("keyOrganizations")}</h2>
            <Link href="/organizations" className={styles.viewAll}>{t("viewAll")}</Link>
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
            <Link href="/documents" className={styles.viewAll}>{t("viewAll")}</Link>
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
