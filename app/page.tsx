import Navbar from "./components/Navbar";
import InstallTip from "./components/InstallTip";

const APK_URL =
  "https://expo.dev/artifacts/eas/dxzLMxDPK5qhfTBGhT9v44.apk";

function ExpenseManagerIcon({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="14" fill="#0d1117" />
      {/* Wallet outline */}
      <path
        d="M14 20C14 18.3 15.3 17 17 17H47C48.7 17 50 18.3 50 20V44C50 45.7 48.7 47 47 47H17C15.3 47 14 45.7 14 44V20Z"
        stroke="#0f766e"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M14 26H50"
        stroke="#0f766e"
        strokeWidth="2"
      />
      {/* Wallet pocket */}
      <rect x="36" y="31" width="14" height="9" rx="2" fill="#0f766e" opacity="0.3" stroke="#0f766e" strokeWidth="1.5" />
      <circle cx="43" cy="35.5" r="1.5" fill="#34d399" />
      {/* Ascending bars */}
      <rect x="19" y="37" width="4" height="7" rx="1" fill="#34d399" opacity="0.6" />
      <rect x="25" y="33" width="4" height="11" rx="1" fill="#34d399" opacity="0.8" />
      <rect x="31" y="29" width="4" height="15" rx="1" fill="#34d399" />
      {/* Gold trend dot */}
      <circle cx="33" cy="28" r="2" fill="#fbbf24" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.18 15.64a2.18 2.18 0 0 1-2.18 2.18C2.98 17.82 2 16.84 2 15.64s.98-2.18 2.18-2.18c.76 0 1.37.37 1.76.93L4.12 15.2a.6.6 0 0 0 .6.44.6.6 0 0 0 .6-.6V12.1a2.78 2.78 0 0 1 2.78-2.78h.6a2.78 2.78 0 0 1 2.78 2.78v2.78a2.78 2.78 0 0 1-2.78 2.78H8.1a2.18 2.18 0 0 1-1.92-1.02zm11.64 0a2.18 2.18 0 0 0 2.18 2.18C21.2 17.82 22 16.84 22 15.64s-.8-2.18-2-2.18c-.76 0-1.37.37-1.76.93l1.82.81a.6.6 0 0 1-.6.44.6.6 0 0 1-.6-.6V12.1a2.78 2.78 0 0 0-2.78-2.78h-.6a2.78 2.78 0 0 0-2.78 2.78v2.78a2.78 2.78 0 0 0 2.78 2.78h.6a2.18 2.18 0 0 0 1.56-.62zM8.69 2.5l1.29 2.23A6.07 6.07 0 0 0 8 6.15h8a6.07 6.07 0 0 0-1.98-1.42L15.31 2.5a.5.5 0 0 0-.87-.5L13.1 4.13A6.06 6.06 0 0 0 12 4c-.38 0-.76.04-1.1.13L9.56 2a.5.5 0 0 0-.87.5zM10.5 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden dot-grid">
        {/* Glow orbs */}
        <div
          className="glow-orb"
          style={{
            width: 500,
            height: 500,
            top: -150,
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(15,118,110,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: 300,
            height: 300,
            bottom: 0,
            right: -80,
            background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-up delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#30363d] bg-[#161b22]/80 text-xs text-[#8b949e] font-medium mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
            React Native &amp; Expo · Direct APK Downloads
          </div>

          <h1
            className="fade-up delay-2 section-heading text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-[-0.04em] mb-4"
          >
            Your Apps,
            <br />
            <span className="gradient-text">One Link Away</span>
          </h1>

          <p className="fade-up delay-3 text-[#8b949e] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Production-grade mobile apps built with React Native &amp; Expo —
            download directly, no Play Store required.
          </p>

          <div className="fade-up delay-4 flex items-center justify-center gap-3 flex-wrap">
            <span className="stat-pill">
              <span className="text-[#34d399]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              1 App
            </span>
            <span className="stat-pill">
              <AndroidIcon />
              <span>Android Ready</span>
            </span>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <h2 className="section-heading text-2xl sm:text-3xl text-white mb-2">
              Available Apps
            </h2>
            <p className="text-[#8b949e] text-sm">
              Download and install directly on your Android device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Expense Manager Card */}
            <div className="app-card glass rounded-2xl p-5 sm:p-6 flex flex-col">
              {/* Icon + name row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg shadow-black/40">
                  <ExpenseManagerIcon size={60} />
                </div>
                <div>
                  <h3
                    className="text-white font-bold text-lg leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Expense Manager
                  </h3>
                  <span className="pill mt-1 inline-block">Budget Tracker</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#8b949e] text-sm leading-relaxed mb-4 flex-1">
                Offline-first budget tracker with SQLite, multi-currency support,
                dark mode, analytics, biometric lock, loans, and recurring expenses.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["SQLite", "Offline", "Multi-Currency", "Dark Mode", "Biometrics", "Analytics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#0d1117]/80 border border-[#30363d] text-[#8b949e] text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Meta row */}
              <div className="flex items-center gap-4 text-xs text-[#8b949e] mb-5 border-t border-[#30363d] pt-4">
                <div className="flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                  v1.0.0
                </div>
                <div className="flex items-center gap-1.5">
                  <AndroidIcon />
                  Android
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  ~35 MB
                </div>
              </div>

              {/* Download button */}
              <a
                href={APK_URL}
                className="btn-download flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm"
              >
                <DownloadIcon />
                Download APK
              </a>

              <InstallTip />
            </div>

            {/* Coming Soon 1 */}
            <div className="ghost-card rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#161b22] border border-[#30363d] mx-auto mb-3 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#30363d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <line x1="12" y1="8" x2="12" y2="16"/>
                      <line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                  </div>
                  <span className="text-[#30363d] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-syne)" }}>
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Coming Soon 2 */}
            <div className="ghost-card rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#161b22] border border-[#30363d] mx-auto mb-3 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#30363d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <line x1="12" y1="8" x2="12" y2="16"/>
                      <line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                  </div>
                  <span className="text-[#30363d] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-syne)" }}>
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#30363d] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#8b949e]">
            <span>Built by Muhammad Husnain</span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/husnain129"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#34d399] transition-colors duration-150 flex items-center gap-1.5"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span>© 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
