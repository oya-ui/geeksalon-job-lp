"use client";

import { useState } from "react";

type Props = { src: string; alt: string };

export function StudentPhoto({ src, alt }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-navy-100 border border-navy-200 shadow-md">
      {failed ? (
        <div className="w-full h-full flex items-center justify-center bg-navy-100 text-navy-400 text-sm">
          写真を追加
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
