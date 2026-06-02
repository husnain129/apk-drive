"use client";

import { useState } from "react";

export default function InstallTip() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-[#8b949e] hover:text-[#34d399] text-xs font-medium transition-colors duration-150 mx-auto"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        How to install on Android
      </button>

      {open && (
        <div className="mt-3 p-4 rounded-xl bg-[#0d1117]/80 border border-[#30363d] text-left">
          <ol className="space-y-2 text-xs text-[#8b949e] list-none">
            {[
              "Download the APK file to your Android device",
              'Open your Files app and locate the downloaded APK',
              'Tap the APK file — if prompted, allow "Install unknown apps" for your browser or files app',
              "Tap Install and wait for it to finish",
              "Open PocketLedger from your home screen",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0f766e]/20 border border-[#0f766e]/40 text-[#34d399] text-[10px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
