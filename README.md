# 智慧客家實驗室手機連結頁

這是一個可直接使用 Visual Studio Code 編輯、並放到 GitHub Pages 的靜態網站。

## 修改連結

開啟 `index.html`，找到六個 `<a href="#">`，把 `#` 換成實際網址，例如：

```html
<a href="https://example.com" aria-label="網站名稱"></a>
```

## 在電腦預覽

用 Visual Studio Code 開啟本資料夾，再用 Live Server 開啟 `index.html`。沒有安裝 Live Server 時，也可以直接雙擊 `index.html` 預覽。

## 發布到 GitHub Pages

將本資料夾內的所有檔案上傳到 GitHub repository，接著到 `Settings` → `Pages`，選擇從 `main` 分支發布。

## 尺寸

版面以附件的 360 × 720 比例製作，可等比例放大至 1080 × 2160。當手機螢幕為 1080 × 1920 時，網站會完整顯示在高度內並保留窄邊界，避免裁掉內容。
