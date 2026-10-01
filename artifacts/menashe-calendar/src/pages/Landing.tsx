import { useLanguage } from "../context/LanguageContext";

interface LandingProps {
  onSignIn: () => void;
  onOpenCalendar: () => void;
}

/** Guest landing: Open Calendar goes to /app; Sign In stays on /sign-in. */
export default function Landing({ onSignIn, onOpenCalendar }: LandingProps) {
  const { t, lang, setLang } = useLanguage();

  return (
    <div className="landing-root" style={{ position: "fixed", inset: 0, overflowY: "auto", background: "#081120", color: "#F8F6F0", zIndex: 999 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px" }}>
        <span style={{ fontWeight: 700, color: "#D4AF37" }}>{t.landingBadge}</span>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button type="button" onClick={() => setLang(lang === "en" ? "tk" : "en")} style={{ background: "transparent", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 99, padding: "6px 12px" }}>
            {lang.toUpperCase()}
          </button>
          <button type="button" className="btn-gold" onClick={onSignIn} style={{ background: "#D4AF37", color: "#1a0d00", border: "none", borderRadius: 99, padding: "10px 28px", fontWeight: 700 }}>
            {t.landingSignIn}
          </button>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 24px" }}>
        <h1 style={{ fontSize: "clamp(32px,6vw,56px)", fontWeight: 800, marginBottom: 24 }}>{t.landingHero}</h1>
        <p style={{ color: "#8fa8c8", marginBottom: 44, maxWidth: 440, marginInline: "auto" }}>{t.landingSubtitle}</p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <button type="button" className="btn-gold" onClick={onOpenCalendar} style={{ background: "#D4AF37", color: "#1a0d00", border: "none", borderRadius: 99, padding: "16px 48px", fontWeight: 700, fontSize: 17 }}>
            Open Calendar
          </button>
          <span style={{ fontSize: 13, color: "#475569" }}>{t.landingFree}</span>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "60px 24px 100px" }}>
        <button type="button" className="btn-gold" onClick={onOpenCalendar} style={{ background: "#D4AF37", color: "#1a0d00", border: "none", borderRadius: 99, padding: "18px 56px", fontWeight: 700, fontSize: 18 }}>
          Open Calendar
        </button>
      </section>
    </div>
  );
}
