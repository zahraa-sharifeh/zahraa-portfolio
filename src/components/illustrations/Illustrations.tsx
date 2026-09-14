type IllustrationProps = {
  className?: string
}

export function HeroIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 640 560"
      className={className}
      role="img"
      aria-label="Illustration of a developer working on a laptop"
    >
      <ellipse cx="430" cy="430" rx="170" ry="28" fill="#000" opacity="0.08" />
      <circle cx="520" cy="90" r="70" fill="#FDE68A" />
      <circle cx="90" cy="140" r="36" fill="#FDBA74" />
      <rect x="40" y="310" width="70" height="70" rx="12" fill="#5EEAD4" />
      <path d="M200 430h250c8 0 12 10 6 16H210c-10 0-16-16-10-16z" fill="#111" />
      <rect x="228" y="250" width="210" height="140" rx="10" fill="#111" />
      <rect x="238" y="260" width="190" height="110" rx="4" fill="#FAFAFA" />
      <rect x="250" y="276" width="90" height="8" rx="4" fill="#D4D4D8" />
      <rect x="250" y="294" width="150" height="8" rx="4" fill="#E4E4E7" />
      <rect x="250" y="312" width="120" height="8" rx="4" fill="#E4E4E7" />
      <rect x="250" y="340" width="46" height="14" rx="4" fill="#111" />
      <rect x="300" y="398" width="70" height="10" rx="3" fill="#111" />
      <ellipse cx="330" cy="455" rx="55" ry="12" fill="#111" />
      <path
        d="M250 430c-8-46 6-88 42-104 20-8 44-8 62 2 28 16 40 54 34 102"
        fill="#111"
      />
      <path
        d="M268 430c-4-36 8-70 34-82 14-6 32-6 46 2 20 12 30 42 26 80"
        fill="#F5D0C5"
      />
      <circle cx="338" cy="232" r="38" fill="#F5D0C5" />
      <path
        d="M300 228c8-34 28-50 52-48 26 2 44 22 46 50 2 16-6 28-18 34-8-22-28-34-50-32-14 2-26 10-30-4z"
        fill="#1C1917"
      />
      <path d="M312 214c18-16 48-16 64 2" fill="none" stroke="#1C1917" strokeWidth="8" />
      <circle cx="326" cy="236" r="3.5" fill="#111" />
      <circle cx="352" cy="236" r="3.5" fill="#111" />
      <path d="M332 252c8 6 16 6 24 0" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      <rect x="318" y="268" width="40" height="18" rx="8" fill="#F5D0C5" />
      <path d="M210 318c-36 10-48 46-40 78h48c-6-28 2-62 18-78 4-4-10-6-26 0z" fill="#111" />
      <path d="M430 318c36 10 48 46 40 78h-48c6-28-2-62-18-78-4-4 10-6 26 0z" fill="#111" />
      <rect x="168" y="372" width="44" height="58" rx="12" fill="#F5D0C5" />
      <rect x="428" y="372" width="44" height="58" rx="12" fill="#F5D0C5" />
      <path d="M120 470c40-60 80-70 90-30" fill="none" stroke="#111" strokeWidth="3" />
      <circle cx="118" cy="472" r="8" fill="#4ADE80" />
      <circle cx="132" cy="448" r="11" fill="#22C55E" />
      <circle cx="150" cy="430" r="8" fill="#86EFAC" />
      <rect x="560" y="300" width="18" height="130" rx="4" fill="#111" />
      <circle cx="569" cy="278" r="22" fill="#F472B6" />
    </svg>
  )
}

export function AboutIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 560 520"
      className={className}
      role="img"
      aria-label="Illustration of a developer standing with a phone"
    >
      <circle cx="430" cy="80" r="64" fill="#FDE68A" />
      <rect x="40" y="360" width="80" height="80" rx="16" fill="#5EEAD4" />
      <circle cx="80" cy="80" r="28" fill="#FDBA74" />
      <ellipse cx="280" cy="470" rx="120" ry="22" fill="#000" opacity="0.08" />
      <path d="M200 455h160c20 0 24 18 8 18H208c-18 0-24-18-8-18z" fill="#111" />
      <path d="M210 250c-10 70 6 160 70 205 64 46 130 8 150-70 16-64-8-150-70-190-58-38-140 0-150 55z" fill="#111" />
      <path d="M232 268c-6 60 10 140 58 176 50 38 108 6 122-58 12-54-10-128-58-162-46-32-116 0-122 44z" fill="#F5D0C5" />
      <circle cx="292" cy="168" r="44" fill="#F5D0C5" />
      <path
        d="M248 168c10-40 34-60 62-58 32 2 54 28 56 60 2 20-8 34-22 40-10-26-34-40-60-38-16 2-30 12-36-4z"
        fill="#1C1917"
      />
      <path d="M262 150c22-20 58-20 76 4" fill="none" stroke="#1C1917" strokeWidth="9" />
      <circle cx="278" cy="172" r="4" fill="#111" />
      <circle cx="308" cy="172" r="4" fill="#111" />
      <path d="M284 190c10 8 20 8 30 0" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="268" y="210" width="48" height="22" rx="10" fill="#F5D0C5" />
      <rect x="148" y="300" width="46" height="90" rx="18" fill="#F5D0C5" />
      <rect x="368" y="250" width="46" height="100" rx="18" fill="#F5D0C5" />
      <rect x="378" y="222" width="28" height="48" rx="6" fill="#111" />
      <rect x="382" y="228" width="20" height="36" rx="3" fill="#FAFAFA" />
      <circle cx="150" cy="292" r="16" fill="#F472B6" />
      <path d="M430 400c30 10 50 40 46 70" fill="none" stroke="#111" strokeWidth="3" />
      <circle cx="478" cy="478" r="10" fill="#4ADE80" />
    </svg>
  )
}
