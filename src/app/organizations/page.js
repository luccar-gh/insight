"use client";

import { useState, useMemo } from "react";
import styles from "./page.module.css";
import { Search, Building2, Globe, Users, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const organizations = [
    {
        name: "IBOS",
        fullName: "Institut for Blinde og Svagsynede",
        fullNameEn: "Institute for the Blind and Visually Impaired",
        desc: "Nationalt videns- og rehabiliteringscenter for mennesker med synsnedsættelse. Ca. 130 medarbejdere tilbyder vurdering, rådgivning, specialundervisning og rehabilitering.",
        descEn: "National knowledge and rehabilitation center for people with visual impairment. ~130 employees offer assessment, counseling, specialized education, and rehabilitation.",
        members: "520+",
        founded: "1858",
        location: "Hellerup",
        url: "ibos.dk",
        color: "#2b6cb0",
    },
    {
        name: "Dansk Blindesamfund (DAB)",
        fullName: "Dansk Blindesamfund",
        fullNameEn: "Danish Association of the Blind",
        desc: "Rettigheds- og medlemsdrevet organisation med 11.000+ medlemmer. Kæmper for fuld inklusion og deltagelse i alle aspekter af samfundet. Certificeret leverandør af førerhunde.",
        descEn: "Rights-based, member-driven organization with 11,000+ members. Advocates for full inclusion and participation in all aspects of society. Certified guide dog provider.",
        members: "11,000+",
        founded: "1911",
        location: "København",
        url: "blind.dk",
        color: "#dd6b20",
    },
    {
        name: "Nota",
        fullName: "Nota – Del af Det Kgl. Bibliotek",
        fullNameEn: "Nota – Part of the Royal Danish Library",
        desc: "Producerer og formidler litteratur i tilgængelige formater: lyd, punktskrift og e-tekst. 289.714 medlemmer, 50.000+ digitale bøger. Producerer e-bøger på 10-15 dage og lydbøger på 20-25 dage.",
        descEn: "Produces and distributes literature in accessible formats: audio, braille, and e-text. 289,714 members, 50,000+ digital books. E-book production in 10-15 days, audiobooks in 20-25 days.",
        members: "289,714",
        founded: "1943",
        location: "København",
        url: "nota.dk",
        color: "#38a169",
    },
    {
        name: "DøvBlinde Danmark",
        fullName: "Foreningen af DøvBlinde i Danmark",
        fullNameEn: "Association of the DeafBlind in Denmark",
        desc: "Støtter personer med kombineret syns- og høretab med rådgivning, kontaktpersonmer og fællesskab.",
        descEn: "Supports individuals with combined vision and hearing loss through counseling, contact persons, and community.",
        members: "450+",
        founded: "1987",
        location: "Aalborg",
        url: "dovblinde.dk",
        color: "#805ad5",
    },
    {
        name: "DPOD",
        fullName: "Danske Handicaporganisationer",
        fullNameEn: "Danish Disability Organizations",
        desc: "Paraplyorganisation for 34 handicaporganisationer med 330.000+ medlemmer. Arbejder for lige rettigheder og administrerer Danish Disability Fund med 4-årig finansieringshorisont (2025-2028).",
        descEn: "Umbrella organization for 34 disability organizations with 330,000+ members. Advocates for equal rights and manages the Danish Disability Fund with a 4-year funding horizon (2025-2028).",
        members: "330,000+",
        founded: "1934",
        location: "København",
        url: "handicap.dk",
        color: "#d53f8c",
    },
    {
        name: "Kennedy Centret",
        fullName: "Nationalt Øjenklinik og Forskningscenter",
        fullNameEn: "National Eye Clinic and Research Center",
        desc: "Specialiseret oftalmologisk klinik med fokus på sjældne øjensygdomme. Driver det nationale børnesynsregister. Incidensen af synshandicap hos børn er 2,8 per 10.000 levendefødte.",
        descEn: "Specialized ophthalmological clinic focusing on rare eye diseases. Runs the national children's vision registry. Childhood visual impairment incidence is 2.8 per 10,000 live births.",
        members: "200+",
        founded: "1960",
        location: "Glostrup",
        url: "kennedy.dk",
        color: "#e53e3e",
    },
    {
        name: "Synscenter Refsnæs",
        fullName: "Dansk Center for Synshandicap, Børn og Unge",
        fullNameEn: "Danish Centre for Visual Impairment, Children and Youth",
        desc: "Nationalt specialpædagogisk center for børn og unge med synsnedsættelse. Tilbyder rådgivning, undervisning og materialer til familier og fagpersoner.",
        descEn: "National special education center for children and youth with visual impairment. Offers counseling, education, and materials for families and professionals.",
        members: "150+",
        founded: "1898",
        location: "Kalundborg",
        url: "444.444",
        color: "#319795",
    },
];

export default function OrganizationsPage() {
    const { t, lang } = useLang();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredOrgs = useMemo(() => {
        if (!searchQuery.trim()) return organizations;
        const q = searchQuery.toLowerCase();
        return organizations.filter(org => {
            const desc = lang === "en" ? org.descEn : org.desc;
            const fullName = lang === "en" ? org.fullNameEn : org.fullName;
            return org.name.toLowerCase().includes(q) || fullName.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || org.location.toLowerCase().includes(q);
        });
    }, [searchQuery, lang]);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>{t("orgsTitle")}</h1>
                    <p className={styles.subtitle}>{t("orgsSubtitle")}</p>
                </div>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={18} />
                    <input
                        type="text"
                        placeholder={t("searchOrgs")}
                        className={styles.searchInput}
                        aria-label="Search organizations"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </header>

            <div className={styles.resultCount}>
                {filteredOrgs.length} {lang === "en" ? "organizations found" : "organisationer fundet"}
            </div>

            <div className={styles.grid}>
                {filteredOrgs.map((org, index) => (
                    <div key={index} className={styles.orgCard}>
                        <div className={styles.orgHeader}>
                            <div className={styles.orgIcon} style={{ backgroundColor: org.color + "18", color: org.color }}>
                                <Building2 size={24} />
                            </div>
                            <div className={styles.orgTitleBlock}>
                                <h3 className={styles.orgName}>{org.name}</h3>
                                <p className={styles.orgFullName}>{lang === "en" ? org.fullNameEn : org.fullName}</p>
                            </div>
                        </div>
                        <p className={styles.orgDesc}>{lang === "en" ? org.descEn : org.desc}</p>
                        <div className={styles.orgMeta}>
                            <div className={styles.orgMetaItem}>
                                <Users size={14} />
                                <span>{org.members} {t("members")}</span>
                            </div>
                            <div className={styles.orgMetaItem}>
                                <span>📍 {org.location}</span>
                            </div>
                            <div className={styles.orgMetaItem}>
                                <span>{t("founded")} {org.founded}</span>
                            </div>
                        </div>
                        <a href={`https://${org.url}`} className={styles.orgLink} target="_blank" rel="noopener noreferrer">
                            <Globe size={14} />
                            {org.url}
                            <ArrowRight size={14} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
