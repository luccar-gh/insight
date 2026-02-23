"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Building2,
  Accessibility,
  BookOpen,
  Eye,
  X,
  Lightbulb,
  MapPin,
  Newspaper
} from "lucide-react";
import styles from "./Sidebar.module.css";
import { useLang } from "@/context/LanguageContext";

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const { t } = useLang();

  const menuItems = [
    { name: t("dashboard"), icon: LayoutDashboard, href: "/" },
    { name: t("organizations"), icon: Building2, href: "/organizations", count: "12" },
    { name: t("stakeholders"), icon: MapPin, href: "/stakeholders", count: "6" },
    { name: t("people"), icon: Users, href: "/people", count: "340+" },
    { name: t("documents"), icon: FileText, href: "/documents", count: "1,850" },
    { name: t("accessibility"), icon: Accessibility, href: "/accessibility", count: "95" },
    { name: t("resources"), icon: BookOpen, href: "/resources", count: "210" },
    { name: t("press"), icon: Newspaper, href: "/press", count: "12" },
    { name: t("insights"), icon: Lightbulb, href: "/insights", count: "" },
  ];

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}
        onClick={onClose}
      />

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Eye size={16} color="white" />
            </div>
            <div className={styles.logoTextWrap}>
              <span className={styles.logoText}>{t("blindSystem")}</span>
              <span className={styles.logoSub}>{t("denmark")}</span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          <div className={styles.sectionTitle}>{t("navigation")}</div>
          <ul>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.link} ${isActive ? styles.active : ""}`}
                    onClick={onClose}
                  >
                    <div className={styles.linkContent}>
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </div>
                    {item.count && (
                      <span className={styles.badge}>{item.count}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <div className={styles.footerBadge}>{t("accessibilityFirst")}</div>
          <p>{t("copyright")}</p>
        </div>
      </aside>
    </>
  );
}
