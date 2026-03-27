import {
  Zap,
  ChevronRight,
  User,
  Quote,
  MessageCircle,
} from "lucide-react";
import { PartnerLogo } from "@/components/PartnerLogo";

/** Geek卒業生向けキャリア面談申し込み（Googleフォーム） */
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtKLwzdJT5GC36pRqGwl1FojLv6rd8daYkFfoF-onpc6b2zQ/viewform?usp=header";

const LOGO_URL = "/images/logo.png";
const MENTOR_OTANI_IMAGE = "/images/mentor-otani.png";
const MENTOR_NOMAGUCHI_IMAGE = "/images/mentor-nomaguchi.png";

// 提携企業ロゴは public/images/partners/ に ファイル名.png で配置
const PARTNERS = [
  { name: "株式会社ベネッセコーポレーション", logo: "/images/partners/benesse.png" },
  { name: "株式会社三菱UFJ銀行", logo: "/images/partners/mufg.png" },
  { name: "PwCコンサルティング合同会社", logo: "/images/partners/pwc.png" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50/50">
      {/* Header - 明るい */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-navy-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="GeekSalon"
              className="h-8 w-auto object-contain"
            />
            <span className="text-navy-800 font-bold text-lg hidden sm:inline">
              就活サポート
            </span>
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent-gold hover:text-accent-coral transition-colors"
          >
            応募する
          </a>
        </div>
      </header>

      {/* Hero - 爽快な背景 */}
      <section className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50/60">
        {/* 大きなソフトな円（奥行き・爽やかさ） */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-sky-200/30 blur-3xl" aria-hidden />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-emerald-200/25 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full bg-amber-100/40 blur-3xl" aria-hidden />
        {/* 微かな光の帯 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(56,189,248,0.12),transparent_50%)]" aria-hidden />
        {/* 下の波型（爽快な区切り） */}
        <div className="absolute bottom-0 left-0 right-0 w-full leading-[0]">
          <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden>
            <path fill="white" d="M0,60 C300,120 600,0 900,60 C1050,90 1125,90 1200,60 L1200,120 L0,120 Z" />
            <path fill="rgba(255,255,255,0.7)" d="M0,80 C400,20 800,100 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent-gold/15 text-navy-700 px-4 py-1.5 text-sm font-medium mb-6 border border-accent-gold/30">
            <Zap className="w-4 h-4 text-accent-gold" />
            28卒限定・完全無料
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-tight mb-4">
            受講生経験で、就活を勝ち抜こう
          </h1>
          <p className="text-lg sm:text-xl text-navy-600 max-w-2xl mx-auto mb-8">
            「受講生経験をどう就活に活かすか」に悩むあなたへ。
            <br className="hidden sm:block" />
            自己分析から企業紹介・選考対策まで。GeekSalon卒業生を10000人以上みてきた就活のプロが、あなたの人生を決める就活を伴走します。
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-gold text-navy-900 font-bold px-8 py-4 rounded-xl hover:bg-accent-coral hover:text-white transition-all shadow-lg hover:shadow-xl"
          >
            無料で応募する
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* 企業との実績 */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-emerald-50/40 via-white to-sky-50/60">
        <div className="absolute top-1/2 -left-20 w-[380px] h-[380px] rounded-full bg-sky-200/25 blur-3xl" aria-hidden />
        <div className="absolute top-0 right-1/3 w-[260px] h-[260px] rounded-full bg-amber-100/35 blur-3xl" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
              Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2 mb-4">
              紹介できる企業例
            </h2>
            <p className="text-navy-600 max-w-xl mx-auto">
              GeekSalonは10年弱の実績があります。ベンチャーから大企業まで、幅広い企業と提携し、信頼と実績を積み上げてきました。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {PARTNERS.map(({ name, logo }) => (
              <PartnerLogo key={name} name={name} logo={logo} />
            ))}
          </div>
          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center">
            <p className="text-navy-700 text-sm sm:text-base leading-relaxed mb-4">
              弊社は<strong className="text-navy-900">株式会社Deep Growth Partners</strong>のグループ会社であり、これまで累計<strong className="text-navy-900">500社以上</strong>と新卒採用における提携実績があります。
            </p>
            <p className="text-navy-700 text-sm sm:text-base leading-relaxed mb-4">
              GeekSalonの卒業生は特に、記載している企業さんから高く評価されています。企画からデプロイまで実現する経験は、たくさんの企業に評価される強みです。もちろんベンチャー企業もたくさんご紹介できますので、知りたいイベントがあればいくらでもお気軽におっしゃってください。
            </p>
          </div>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="relative py-14 sm:py-16 overflow-hidden bg-gradient-to-br from-sky-50/80 via-white to-emerald-50/50">
        <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full bg-sky-200/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] rounded-full bg-amber-100/30 blur-3xl" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-navy-900 mb-10">
            3つの特徴
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white/90 border-2 border-navy-100 shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent-gold/20 text-navy-900 mb-4">
                <span className="text-2xl sm:text-3xl font-black tabular-nums">80%<span className="text-lg font-bold">超</span></span>
              </div>
              <p className="text-navy-800 font-bold text-sm sm:text-base mb-2">面談希望率</p>
              <p className="text-navy-600 text-xs sm:text-sm leading-relaxed">広くIT就活に対応可能。エンジニアだけじゃなく、営業職も含めて対策可能。大企業とのコネクションも強く、沢山の方に伴走可能です。</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white/90 border-2 border-navy-100 shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent-gold/20 text-navy-900 mb-4">
                <span className="text-2xl sm:text-3xl font-black tabular-nums">99%</span>
              </div>
              <p className="text-navy-800 font-bold text-sm sm:text-base mb-2">満足度</p>
              <p className="text-navy-600 text-xs sm:text-sm leading-relaxed">一般的な就活エージェントとは違い、内定承諾の契約は一切していない。面接対策から自己分析まで、オンラインもオフラインもあなたに合わせて対応。結果として、あなたの本質的な就活課題に徹底的に向き合えます。</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white/90 border-2 border-navy-100 shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent-gold/20 text-navy-900 mb-4">
                <span className="text-xl sm:text-2xl font-black leading-tight">月1回<span className="block text-sm font-bold">+α</span></span>
              </div>
              <p className="text-navy-800 font-bold text-sm sm:text-base mb-2">面談・チャット</p>
              <p className="text-navy-600 text-xs sm:text-sm leading-relaxed">月1回面談、希望者はもっと面談もできる。チャットでの相談はいつでも可能。困ったときにいつでも聞けます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 面談はこちら - バナー */}
      <section className="relative py-14 sm:py-16 overflow-hidden bg-gradient-to-r from-navy-700 via-navy-600 to-sky-800">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white/10 flex items-center justify-center">
              <MessageCircle className="w-20 h-20 sm:w-24 sm:h-24 text-white/90" aria-hidden />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                受講生経験の活かし方を熟知している就活のプロに相談しませんか？
              </h2>
              <p className="text-white/90 text-sm sm:text-base mb-6">
                GeekSalonの経験を活用して難関企業に合格したOBが、あなたの就活のお悩みに徹底的に向き合います。お気軽に登録してください。
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-navy-800 font-bold px-6 py-3 rounded-xl hover:bg-accent-gold hover:text-navy-900 transition-colors"
              >
                面談はこちら
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* こんな方に */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-bl from-white via-sky-50/40 to-emerald-50/60">
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-200/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-sky-200/25 blur-3xl" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
              Voice
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2 mb-4">
              こんな方に
            </h2>
            <p className="text-navy-600 max-w-xl mx-auto mb-2">
              28卒・GeekSalon受講生限定の本サポート。
            </p>
            <p className="text-navy-600 max-w-xl mx-auto">
              利用された方から、こんな声をいただいています。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/95 border-2 border-navy-100 shadow-lg p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center shrink-0" aria-hidden>
                  <User className="w-7 h-7 text-navy-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-navy-500 text-sm font-medium">27卒・内定者</p>
                  <Quote className="w-5 h-5 text-accent-gold/60 mt-1" aria-hidden />
                </div>
              </div>
              <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
                就活のアドバイスがとにかく的確で、最終面接まで一切落ちずにいけました。面談がうまくいかないときも親身に寄り添ってくれて、結果的に最後まで伴走してもらえたのが大きかったです。
              </p>
            </div>
            <div className="rounded-2xl bg-white/95 border-2 border-navy-100 shadow-lg p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center shrink-0" aria-hidden>
                  <User className="w-7 h-7 text-navy-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-navy-500 text-sm font-medium">26卒・内定者</p>
                  <Quote className="w-5 h-5 text-accent-gold/60 mt-1" aria-hidden />
                </div>
              </div>
              <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
                GeekSalon卒業生限定枠をいくつも用意してくれたのと、直接私たちの様子を企業に伝えてくれたので、安心して面接に挑めました。「ここに必ず活かせる」と思えるサポートでした。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メンター紹介 */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-sky-50/80 via-white to-emerald-50/60">
        <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full bg-emerald-200/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-1/4 w-[320px] h-[320px] rounded-full bg-sky-200/25 blur-3xl" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_80%,rgba(56,189,248,0.06),transparent)]" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
              Mentors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2 mb-4">
              メンター紹介
            </h2>
            <p className="text-navy-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              自己分析から企業紹介・選考対策まで、就活の土台から伴走します。人事視点のフィードバックで「採用側にどう伝わるか」を磨き、型にはまらないキャリア観であなたらしいストーリーを一緒に組み立てる。そんなメンターがあなたの就活を支えます。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-navy-100">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-navy-100 shrink-0">
                  <img
                    src={MENTOR_NOMAGUCHI_IMAGE}
                    alt="野間口 友哉"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">野間口 友哉</h3>
                  <p className="text-navy-600 text-sm">
                    GeekSalonの仙台・関西エリア責任者
                  </p>
                </div>
              </div>
              <p className="text-navy-700 text-sm mb-3">
                仙台拠点の事業成長300%を牽引。自身も伊藤忠・PwC・三菱UFJなど複数内定を経験し、難関企業の選考を突破してきた実績があります。自己分析の軸づくりから企業選び・ES・面接対策まで、人事目線を交えながら伴走。型にはまらないキャリアの考え方も伝えています。
              </p>
              <ul className="space-y-1 text-navy-600 text-xs">
                <li>・仙台拠点 事業成長 300% を牽引</li>
                <li>・伊藤忠・PwC・三菱UFJなど複数内定</li>
                <li>・難関企業選考を自身の経験からサポート</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-navy-100">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-navy-100 shrink-0">
                  <img
                    src={MENTOR_OTANI_IMAGE}
                    alt="大谷 泰雅"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">大谷 泰雅</h3>
                  <p className="text-navy-600 text-sm">
                    GeekSalon 事業責任者・採用戦略担当
                  </p>
                </div>
              </div>
              <p className="text-navy-700 text-sm mb-3">
                1on1実績1,000名超。九州大学OBとして採用側の視点も熟知しており、人事視点のフィードバックとキャリア設計が強みです。自己分析から企業紹介・選考対策まで一気通貫でサポートし、広くIT就活（エンジニア・営業職）にも対応。あなたに合わせた伴走をします。
              </p>
              <ul className="space-y-1 text-navy-600 text-xs">
                <li>・1on1 実績 1,000 名超</li>
                <li>・九州大学 OB・採用側の視点を提供</li>
                <li>・人事視点のフィードバックとキャリア設計</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Googleフォームへ誘導 */}
      <section id="cta" className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-sky-900">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-emerald-500/10 blur-3xl" aria-hidden />
        <div className="relative max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              無料で応募する
            </h2>
            <p className="text-navy-300 mb-4">
              28卒・GeekSalon受講生・卒業生限定。下のボタンからキャリア面談のお申し込みフォームへ進んでください。
            </p>
            <p className="text-navy-200 text-sm leading-relaxed">
              フォーム送信後、GeekSalonの公式LINEから<strong className="text-white">5営業日以内</strong>に日程調整のURLをお送りします。
            </p>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 py-4 rounded-xl bg-accent-gold text-navy-950 font-bold hover:bg-accent-coral hover:text-white transition-colors shadow-lg"
          >
            キャリア面談を申し込む
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="text-center text-navy-400 text-xs mt-4">
            新しいタブでGoogleフォームが開きます
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(56,189,248,0.06),transparent)]" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 text-center text-navy-400 text-sm">
          GeekSalon就活サポート｜28卒・完全無料
        </div>
      </footer>
    </div>
  );
}