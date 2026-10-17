# 智慧客家實驗室 · 客語 AI 應用入口

響應式靜態網站，展示六個客語應用，包含阿知牯自動揮手、說話表情與四句歡迎文字輪播。

## 本機預覽

直接以瀏覽器開啟 `index.html`，不需要安裝套件或編譯。

## 上傳 GitHub

1. 在 GitHub 建立新 repository，例如 `hakka-lab`。
2. 解壓縮本專案 ZIP。
3. 在 repository 選擇 **Add file → Upload files**。
4. 上傳專案資料夾裡的 `index.html`、`robot.js`、`assets` 資料夾與說明文件。請上傳資料夾內的內容，不要只上傳 ZIP。
5. 按 **Commit changes**。

完成後，repository 最外層應該直接看到 `index.html`，以及 `assets/`，不是另一層 `hakka-lab-github/`。

本套件未包含 Git 紀錄、原 Sites 遠端設定或 `.openai` 部署設定，可以上傳到自己的新 repository。

## 選用：GitHub Pages 網站

只上傳檔案不會啟用網站。若希望 GitHub 提供網站網址：

1. 進入 repository 的 **Settings → Pages**。
2. 在 **Build and deployment → Source** 選擇 **Deploy from a branch**。
3. 選擇 `main` 分支與 `/(root)`，按 **Save**。
4. 等待 Pages 顯示網站網址。

如果實際預設分支不是 `main`，選擇包含網站檔案的分支。GitHub Free 可用公開 repository 啟用 Pages；私人 repository 是否可用取決於方案。啟用 Pages 前請確認你希望網站公開。

圖片與程式均使用相對路徑，支援 GitHub Pages 的 repository 子路徑，不必修改程式中的網域。

官方說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 修改文字

在 `index.html` 搜尋現有句子後修改。六個應用集中在 `const systems`：

| 欄位 | 用途 |
| --- | --- |
| `name` | 應用名稱 |
| `tag` | 用途標示 |
| `desc` | 介紹文字 |
| `action` | 按鈕文字 |
| `url` | 應用連結 |

保留引號、逗號與括號。一般文字中若要輸入英文單引號，請使用 `\'`。不要把 HTML 標籤當成一般介紹文字輸入。

阿知牯的四句話在 `robot.js` 的 `messages`。`const cycle = 5000` 表示每句停留 5 秒。動畫在進入可視範圍時自動播放，離開畫面或切換分頁時暫停。

## 修改圖片

| 檔案 | 對應內容 |
| --- | --- |
| `assets/app-1.png` | Gohakka 臺灣客語翻譯 |
| `assets/app-2.png` | HakkaGPT |
| `assets/app-3.png` | Gohakka Podcast |
| `assets/app-4.png` | 酷客 Cool Hakka |
| `assets/app-5.png` | 桃園大客家 |
| `assets/app-6.png` | Gohakka Chatbot |
| `assets/chatbot-phone.png` | Chatbot 手機畫面 |
| `assets/azhi-0.png` 至 `assets/azhi-3.png` | 阿知牯四個姿勢 |

請保留透明背景，以及機器人各張圖片相同的畫布尺寸。PNG 檔名大小寫必須一致。

頁首目前使用暫用符號。加入正式 Logo 時，把圖片存為 `assets/lab-logo.png`，再將 `index.html` 內 `.logo-slot` 的內容改成：

```html
<img src="assets/lab-logo.png" alt="智慧客家實驗室 Logo">
```

## 專案結構

```text
index.html        頁面、樣式、應用資訊
robot.js          機器人動畫與輪播文字
assets/           全部網站圖片
.nojekyll         以靜態檔案方式發佈
.gitignore        忽略本機暫存及環境檔
README.md         本說明
```

本套件沒有加入開源授權；程式與圖片的再使用授權由實驗室決定。
