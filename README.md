# GeekSalon就活サポート LP

28卒・GeekSalon受講生・卒業生向けの就活支援サービスランディングページです。

## 技術構成

- **Next.js** (App Router)
- **Tailwind CSS**
- **Lucide React**（アイコン）
- **Netlify** ホスティング・Netlify Forms（応募フォーム送信）

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
3. デプロイ後、Netlify ダッシュボードの **Forms** で「application」フォームの送信内容を確認可能

### デプロイ後にサイトがおかしい場合の確認

- **Netlify のビルドログ**でエラーが出ていないか確認
- **ブラウザのキャッシュ**を削除するか、シークレットウィンドウで開き直す
- Netlify の **Site settings → Build & deploy → Environment** で `NODE_VERSION = 18` が効いているか確認
- デザインが崩れる場合: ビルドログで Tailwind のコンパイルが成功しているか確認（`content` に `src/**/*` を含め済み）
- 画像が表示されない場合: `public/images/` 以下のファイルがリポジトリにコミットされているか確認

### フォームについて

- 応募フォームは **Netlify Forms** で送信されます
- `public/__forms.html` に同じ `name` のフォームを定義してあり、デプロイ時に Netlify がフォームを検知します
- 送信先は Netlify の「Forms」一覧から確認・メール通知の設定ができます

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

### 受講生の写真

`public/images/students/` に以下のファイル名で配置すると、「一緒に頑張る仲間」セクションに表示されます。

- `student-1.png`, `student-2.png`, `student-3.png`

未配置の場合は「写真を追加」のプレースホルダーが表示されます。
