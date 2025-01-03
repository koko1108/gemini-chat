# Gemini AI 雙 AI 對話模擬器

## 簡介

這個專案是一個使用 Vue3、Vite、daisyUI 和 Google Gemini AI API 打造的雙 AI 對話模擬器。
使用者可以設定兩個 AI 角色的名稱和描述，然後讓它們自行對話。
這個專案旨在展示前端如何與 AI API 互動，以及如何建立具有互動性的 AI 應用程式。

## 專案特色

*   **雙 AI 對話：** 讓兩個 AI 角色自行對話，展現 AI 的對話能力。
*   **角色設定：** 使用者可以自定義 AI 角色的名稱和描述。
*   **隨機生成角色：** 提供隨機生成 AI 角色的功能。
*   **Gemini AI API：** 使用 Google Gemini AI API 進行對話生成。

## 技術棧

*   **前端框架：** Vue3
*   **建構工具：** Vite
*   **UI 組件庫：** daisyUI (Tailwind CSS)
*   **程式語言：** JavaScript
*   **AI API：** Google Gemini API
*   **套件管理工具：** npm 或 yarn
*   **其他套件：** tw-merge

## 如何使用

1.  **取得 Google Gemini API 金鑰：**
    *   前往 Google AI Studio ([https://aistudio.google.com/](https://aistudio.google.com/))。
    *   建立新專案並取得 API 金鑰。
2.  **複製專案：**
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```
3.  **安裝依賴：**
    ```bash
    npm install
    # 或
    yarn install
    ```
4.  **設定 API 金鑰：**
    *   在專案根目錄下建立 `.env` 或 `.env.local` 檔案。
    *   加入你的 Gemini API 金鑰：
        ```
        VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
        ```
        **請務必替換 `YOUR_GEMINI_API_KEY` 為你自己的 Gemini API 金鑰。**
5.  **啟動開發伺服器：**
    ```bash
    npm run dev
    # 或
    yarn dev
    ```
6.  **在瀏覽器中打開 `http://localhost:5173`。**
7.  **輸入兩個 AI 角色的名稱和描述，或點擊隨機生成按鈕。**
8.  **點擊「開始對話」按鈕。**
9.  **觀察 AI 角色的對話。**
10. **點擊「停止對話」按鈕來停止對話。**

## 專案結構
```
my-gemini-ai-project/
├── src/
│ ├── assets/
│ ├── components/
│ │ └── AIAgentConfig.vue // AI角色設定組件
│ ├── utils/
│ │ ├── gemini.js // Gemini API 相關工具
│ │ └── random.js // 隨機生成相關工具
│ ├── App.vue // 主要應用程式組件
│ ├── main.js
│ └── ...
├── public/
├── .env.local
├── package.json
├── ...
└── README.md // 你現在正在閱讀的 README 檔案
```
## 注意事項

*   **API 金鑰安全：** 請妥善保管你的 Gemini API 金鑰，不要將它公開在 GitHub 等地方。
*   **費用：** 使用 Gemini API 可能會產生費用，請注意 Google Cloud Platform 的費用說明。
*   **API 限制：** 請參考 Gemini API 的官方文件，了解 API 的限制，例如請求的頻率、內容長度等等。
*   **安全過濾：** 本專案預設使用 `HarmBlockThreshold.BLOCK_ONLY_HIGH` 的安全過濾，**請勿關閉安全過濾**。
