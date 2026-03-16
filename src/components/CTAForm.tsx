"use client";

import { useState } from "react";

export function CTAForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Netlify Forms 用に form-name を追加
    formData.append("form-name", "application");

    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-navy-800/80 rounded-xl p-8 text-center border border-white/10">
        <p className="text-accent-gold font-bold text-lg mb-2">送信完了しました</p>
        <p className="text-navy-200 text-sm">
          ご応募ありがとうございます。内容を確認のうえ、ご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      name="application"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-navy-800/80 rounded-xl p-6 sm:p-8 border border-white/10 space-y-5"
    >
      <input type="hidden" name="form-name" value="application" />
      <p className="hidden" aria-hidden="true">
        <label>
          Don’t fill: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="block text-navy-200 text-sm font-medium mb-1">
          お名前 <span className="text-accent-coral">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/20 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-gold"
          placeholder="山田 太郎"
          disabled={status === "sending"}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-navy-200 text-sm font-medium mb-1">
          メールアドレス <span className="text-accent-coral">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/20 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-gold"
          placeholder="example@email.com"
          disabled={status === "sending"}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-navy-200 text-sm font-medium mb-1">
          相談したいこと・メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/20 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-gold resize-y"
          placeholder="志望業界や悩んでいることなど、お気軽にどうぞ"
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && (
        <p className="text-accent-coral text-sm">
          送信に失敗しました。しばらくしてから再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-lg bg-accent-gold text-navy-950 font-bold hover:bg-accent-coral hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "送信中…" : "応募する"}
      </button>
    </form>
  );
}
