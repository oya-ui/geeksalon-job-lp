"use client";

import { useState } from "react";

type Props = { name: string; logo: string };

export function PartnerLogo({ name, logo }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-light-cream border border-navy-100 shadow-sm min-h-[140px]">
      <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3 bg-white rounded-xl border border-navy-100 overflow-hidden">
        {failed ? (
          <span className="text-navy-400 text-sm font-medium">{name}</span>
        ) : (
          <img
            src={logo}
            alt={name}
            className="max-w-full max-h-full object-contain p-2"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span className="text-navy-700 font-medium text-sm text-center break-words max-w-full">{name}</span>
    </div>
  );
}
