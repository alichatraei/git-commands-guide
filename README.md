📚 آموزش کامل Git - سایت آموزشی
===============================

<div align="center"> <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" /> <img src="https://img.shields.io/badge/TypeScript-5.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /> <img src="https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /> <img src="https://img.shields.io/badge/PWA-Enabled-FF6B35?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" /> </div> <div align="center"> <h3>🚀 سایت آموزشی مدرن و زیبا برای یادگیری Git از صفر تا صد</h3> <p>با استفاده از React، TypeScript، Tailwind CSS و فونت فارسی وزیر</p> </div>

* * * * *

🌟 ویژگی‌های کلیدی
------------------

### ✨ طراحی و UI/UX

-   🎨 طراحی مدرن و زیبا با Tailwind CSS
-   📱 Responsive Design - سازگار با همه دستگاه‌ها
-   🇮🇷 فونت فارسی وزیر - خوانایی بالا
-   🌈 انیمیشن‌های نرم و تعاملات کاربری
-   🎯 UX بهینه با طراحی کاربرپسند

### 🚀 فناوری‌های مدرن

-   ⚛️ React 18 با TypeScript
-   🏃‍♂️ Vite برای سرعت بالا در توسعه
-   🧭 React Router DOM برای مسیریابی
-   📱 PWA - قابل نصب روی موبایل و دسکتاپ
-   🔍 SEO Optimized با متاتگ‌های مناسب

### 📖 محتوای آموزشی

-   📚 سه فصل جامع آموزش Git
-   💡 مثال‌های عملی و کاربردی
-   🔧 راهنمای نصب برای همه سیستم‌عامل‌ها
-   🐛 رفع مشکلات رایج تازه‌کارها
-   🎯 آموزش تدریجی از مبتدی تا پیشرفته

* * * * *

📋 فهرست مطالب
--------------

### 🔰 فصل اول: مقدمات Git

-   تاریخچه و معرفی Git
-   کاربران و استفاده‌های Git
-   مزایا و ویژگی‌های کلیدی
-   مقایسه با سایر ابزارها

### 💻 فصل دوم: نصب و ترمینال

-   نصب Git روی Windows، macOS و Linux
-   آموزش کامل ترمینال (Crash Course)
-   دستورات اصلی فایل و پوشه
-   تنظیمات اولیه Git

### 🗃️ فصل سوم: Repository و Commands

-   مفهوم Git Repository
-   مراحل Staging و Commit
-   دستورات اصلی: `init`، `add`، `commit`، `status`
-   `git log` و پارامترهای مهم آن
-   رفع مشکلات رایج

* * * * *

🛠️ نصب و راه‌اندازی
--------------------

### پیش‌نیازها

bash

Copy

`Node.js >= 16.0.0
npm >= 8.0.0
Git`

### 1️⃣ کلون کردن پروژه

bash

Copy

`git clone https://github.com/username/git-tutorial-site.git
cd git-tutorial-site`

### 2️⃣ نصب وابستگی‌ها

bash

Copy

`npm install`

### 3️⃣ اجرای محیط توسعه

bash

Copy

`npm run dev`

سایت روی `http://localhost:5173` در دسترس خواهد بود.

### 4️⃣ ساخت نسخه تولید

bash

Copy

`npm run build`

### 5️⃣ پیش‌نمایش نسخه تولید

bash

Copy

`npm run preview`

* * * * *

🚀 دیپلوی روی GitHub Pages
--------------------------

### روش اول: استفاده از GitHub Actions (پیشنهادی)

1.  فایل `.github/workflows/deploy.yml` ایجاد کنید:

yaml

Copy

`name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist`

1.  در تنظیمات Repository، بخش Pages را روی "GitHub Actions" تنظیم کنید.

### روش دوم: دستور مستقیم

bash

Copy

`npm run deploy`

* * * * *

📁 ساختار پروژه
---------------

css

Copy

`git-tutorial-site/
├── public/
│   ├── manifest.json
│   ├── icon-192.png
│   ├── icon-512.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── LoadingSpinner.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Chapter1.tsx
│   │   ├── Chapter2.tsx
│   │   └── Chapter3.tsx
│   ├── hooks/
│   │   └── useScrollToTop.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md`

* * * * *

🎨 تکنولوژی‌های استفاده شده
---------------------------

| تکنولوژی | نسخه | کاربرد |
| --- | --- | --- |
| React | 18.2.0 | کتابخانه اصلی UI |
| TypeScript | 5.0.2 | Type Safety |
| Vite | 4.4.5 | Build Tool |
| Tailwind CSS | 3.3.3 | CSS Framework |
| React Router | 6.8.1 | مسیریابی |
| Lucide React | 0.263.1 | آیکون‌ها |
| Vite PWA | 0.16.4 | Progressive Web App |

* * * * *

📱 قابلیت‌های PWA
-----------------

-   ✅ نصب روی موبایل و دسکتاپ
-   ✅ کار آفلاین (Service Worker)
-   ✅ بارگذاری سریع
-   ✅ آیکون‌های سفارشی
-   ✅ Splash Screen

* * * * *

🎯 بهینه‌سازی‌ها
----------------

### Performance

-   ⚡ Lazy Loading کامپوننت‌ها
-   🗜️ Code Splitting خودکار
-   🚀 Fast Refresh در محیط توسعه
-   📦 Bundle Optimization با Vite

### SEO

-   🔍 Meta Tags کامل
-   🌐 Open Graph برای شبکه‌های اجتماعی
-   📱 Mobile-First طراحی
-   ♿ Accessibility بهینه

### UX

-   🎨 Smooth Animations
-   📱 Touch-Friendly روی موبایل
-   ⌨️ Keyboard Navigation
-   🌙 Loading States

* * * * *

🔧 دستورات مفید
---------------

bash

Copy

`# توسعه
npm run dev          # اجرای سرور توسعه
npm run build        # ساخت نسخه تولید
npm run preview      # پیش‌نمایش build
npm run lint         # بررسی کد

# دیپلوی
npm run deploy       # دیپلوی روی GitHub Pages

# PWA
npm run build        # شامل تولید Service Worker`

* * * * *

🤝 مشارکت در پروژه
------------------

### مراحل مشارکت

1.  Fork کردن پروژه
2.  ایجاد Branch جدید (`git switch -c feature/amazing-feature`)
3.  Commit تغییرات (`git commit -m 'Add amazing feature'`)
4.  Push به Branch (`git push origin feature/amazing-feature`)
5.  ایجاد Pull Request

### راهنمای مشارکت

-   📝 کد تمیز و خوانا بنویسید
-   🧪 تست تغییرات قبل از PR
-   📖 مستندسازی ویژگی‌های جدید
-   🎯 یک تغییر در هر PR

* * * * *

🐛 گزارش باگ
------------

اگر باگی پیدا کردید، لطفاً:

1.  Issue جدید ایجاد کنید
2.  مراحل بازتولید باگ را شرح دهید
3.  اسکرین‌شات یا ویدیو ضمیمه کنید
4.  محیط (مرورگر، سیستم‌عامل) را مشخص کنید

* * * * *


<div align="center"> <p>ساخته شده با ❤️ برای جامعه برنامه‌نویسان ایران</p>

اگر این پروژه برایتان مفید بود، ⭐ ستاره بدهید!

</div>

* * * * *

📞 تماس و پشتیبانی
------------------

-   📧 ایمیل: <alichatraei@yahoo.com>
-   💬 تلگرام: [telegram.me/alichatraei]
-   🐙 GitHub: [https://www.github.com/alichatraei]

* * * * *

<div align="center"> <h3>🎉 از استفاده کردن لذت ببرید!</h3> <p>اگر سوالی دارید، در Issues پرسیده یا با ما تماس بگیرید.</p> </div>
