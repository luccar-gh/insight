"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className={styles.content}>
                <TopBar onMenuClick={() => setIsSidebarOpen(true)} />

                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
}
