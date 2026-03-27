# GeekSalon就活サポート LP

28卒・GeekSalon受講生・卒業生向けの就活支援サービスランディングページです。

## 技術構成

- **Next.js** (App Router)
- **Tailwind CSS**
- **Lucide React**（アイコン）
- **Netlify** ホスティング
- **Googleフォーム**（キャリア面談のお申し込み）

## 開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

## ビルド・デプロイ（Netlify）

1. リポジトリを Netlify に接続
2. **ビルド設定**
   - ビルドコマンド: `npm run build`
   - 公開ディレクトリ: **指定しない**（`@netlify/plugin-nextjs` が自動設定）
   - Node バージョン: 18 推奨（`netlify.toml` で設定済み）
3. デプロイ後、LP の「キャリア面談を申し込む」ボタンから Google フォームへ遷移します

### デプロイ後にサイトがおかしい場合の確認

- **Netlify のビルドログ**でエラーが出ていないか確認
- **ブラウザのキャッシュ**を削除するか、シークレットウィンドウで開き直す
- Netlify の **Site settings → Build & deploy → Environment** で `NODE_VERSION = 18` が効いているか確認
- デザインが崩れる場合: ビルドログで Tailwind のコンパイルが成功しているか確認（`content` に `src/**/*` を含め済み）
- 画像が表示されない場合: `public/images/` 以下のファイルがリポジトリにコミットされているか確認

### お申し込みフォームについて

- LP 下部のボタンから **[Geek卒業生向けキャリア面談申し込みフォーム](https://docs.google.com/forms/d/e/1FAIpQLSdtKLwzdJT5GC36pRqGwl1FojLv6rd8daYkFfoF-onpc6b2zQ/viewform)**（Googleフォーム）へ遷移します。
- 回答データは **Googleフォームの管理画面**（回答のスプレッドシート連携など）で確認できます。URLの変更は `src/app/page.tsx` の `GOOGLE_FORM_URL` を編集してください。

## 画像の配置

- **ロゴ**: `public/images/logo.png`
- **大谷メンター写真**: `public/images/mentor-otani.png`
- **野間口メンター**: `public/images/mentor-nomaguchi.png`

### 提携企業ロゴ

`public/images/partners/` に以下のファイル名で配置すると、提携企業セクションに表示されます。

- `benesse.png` — 株式会社ベネッセコーポレーション
- `mufg.png` — 株式会社三菱UFJ銀行
- `pwc.png` — PwCコンサルティング合同会社

未配置の場合は企業名のみ表示されます。
