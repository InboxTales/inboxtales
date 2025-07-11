"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import styles from "./contact.module.css";

export default function CalWidget() {
  useEffect(() => {
    (async () => {
      try {
        const cal = await getCalApi({ namespace: "15min" });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: { "cal-brand": "#fa4616" },
            dark: { "cal-brand": "#1f2328" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className={styles.calEmbed}>
      <Cal
        namespace="15min"
        calLink="inboxtales/15min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
} 