import React, { useState } from "react";
import {
  Terminal,
  Download,
  Apple,
  Monitor,
  CheckCircle,
  AlertTriangle,
  Settings,
  User,
  Mail,
  Play,
  Code,
  Lightbulb,
  Book,
  Target,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Chapter2: React.FC = () => {
  const [activeOS, setActiveOS] = useState<"windows" | "mac" | "linux">(
    "windows"
  );
  const [activeTab, setActiveTab] = useState<
    "basic" | "advanced" | "shortcuts"
  >("basic");

  const installationSteps = {
    windows: [
      {
        step: 1,
        title: "دانلود Git",
        content: "از سایت رسمی git-scm.com نسخه ویندوز را دانلود کنید",
        code: "https://git-scm.com/download/win",
        detail: "فایل حدود 50MB حجم دارد و آخرین نسخه پایدار را انتخاب کنید",
      },
      {
        step: 2,
        title: "اجرای نصب",
        content: "فایل .exe را اجرا کرده و مراحل نصب را دنبال کنید",
        code: "git-installer.exe",
        detail:
          "در مرحله انتخاب components، Git Bash و Git GUI را فعال نگه دارید",
      },
      {
        step: 3,
        title: "تنظیمات نصب",
        content: "گزینه‌های مهم را انتخاب کنید",
        code: "✓ Git Bash Here\n✓ Git GUI Here\n✓ Associate .git* files",
        detail:
          "این گزینه‌ها دسترسی راحت‌تر به Git از Windows Explorer فراهم می‌کنند",
      },
      {
        step: 4,
        title: "تأیید نصب",
        content:
          "Command Prompt یا Git Bash را باز کرده و دستور زیر را اجرا کنید",
        code: "git --version",
        detail: "باید نسخه نصب شده Git را نمایش دهد، مثل: git version 2.41.0",
      },
    ],
    mac: [
      {
        step: 1,
        title: "بررسی نصب قبلی",
        content: "ابتدا بررسی کنید Git نصب شده یا خیر",
        code: "git --version",
        detail:
          "اگر Git نصب نباشد، macOS خودکار پیشنهاد نصب Xcode Command Line Tools می‌دهد",
      },
      {
        step: 2,
        title: "نصب با Homebrew (توصیه شده)",
        content: "اگر Homebrew دارید، از دستور زیر استفاده کنید",
        code: "brew install git",
        detail:
          "Homebrew آخرین نسخه Git را نصب می‌کند و به‌روزرسانی آسان‌تر است",
      },
      {
        step: 3,
        title: "نصب دستی",
        content: "از سایت رسمی نسخه macOS را دانلود کنید",
        code: "https://git-scm.com/download/mac",
        detail: "اگر Homebrew ندارید، این روش را انتخاب کنید",
      },
      {
        step: 4,
        title: "تأیید نصب",
        content: "Terminal را باز کرده و دستور زیر را اجرا کنید",
        code: "git --version\nwhich git",
        detail: "دومین دستور مسیر نصب Git را نشان می‌دهد",
      },
    ],
    linux: [
      {
        step: 1,
        title: "Ubuntu/Debian",
        content: "برای توزیع‌های مبتنی بر Debian",
        code: "sudo apt update\nsudo apt install git",
        detail: "ابتدا لیست بسته‌ها به‌روزرسانی می‌شود سپس Git نصب می‌شود",
      },
      {
        step: 2,
        title: "CentOS/RHEL/Fedora",
        content: "برای توزیع‌های مبتنی بر Red Hat",
        code: "# CentOS/RHEL\nsudo yum install git\n\n# Fedora\nsudo dnf install git",
        detail: "Fedora از dnf استفاده می‌کند، نسخه‌های قدیمی‌تر از yum",
      },
      {
        step: 3,
        title: "Arch Linux",
        content: "برای Arch Linux و مشتقات آن",
        code: "sudo pacman -S git",
        detail: "Arch معمولاً آخرین نسخه‌های نرم‌افزارها را ارائه می‌دهد",
      },
      {
        step: 4,
        title: "تأیید نصب",
        content: "Terminal را باز کرده و دستور زیر را اجرا کنید",
        code: "git --version\ngit --help",
        detail: "دستور دوم راهنمای کامل Git را نمایش می‌دهد",
      },
    ],
  };

  const terminalCommands = {
    basic: [
      {
        command: "pwd",
        description: "نمایش مسیر فعلی (Print Working Directory)",
        example: "/Users/username/Documents",
        tip: "همیشه بدانید کجا هستید!",
      },
      {
        command: "ls / dir",
        description: "لیست فایل‌ها و پوشه‌ها (ls در Linux/Mac، dir در Windows)",
        example: "file1.txt  folder1  folder2",
        tip: "از ls -la برای جزئیات بیشتر استفاده کنید",
      },
      {
        command: "cd",
        description: "تغییر مسیر (Change Directory)",
        example: "cd Desktop\ncd ..\ncd ~",
        tip: "cd .. برای بالا رفتن، cd ~ برای home directory",
      },
      {
        command: "mkdir",
        description: "ساخت پوشه جدید (Make Directory)",
        example: "mkdir my-project\nmkdir -p path/to/folder",
        tip: "از -p برای ساخت مسیر کامل استفاده کنید",
      },
      {
        command: "touch / echo",
        description: "ساخت فایل جدید",
        example: "touch index.html\necho 'Hello' > file.txt",
        tip: "touch در Linux/Mac، echo > در همه جا کار می‌کند",
      },
      {
        command: "rm / del",
        description: "حذف فایل (rm در Linux/Mac، del در Windows)",
        example: "rm file.txt\nrm -rf folder/",
        tip: "احتیاط! rm -rf بازگشت‌ناپذیر است",
      },
    ],
    advanced: [
      {
        command: "find / where",
        description: "جستجوی فایل‌ها",
        example: "find . -name '*.js'\nwhere git",
        tip: "برای پیدا کردن فایل‌های خاص استفاده کنید",
      },
      {
        command: "grep / findstr",
        description: "جستجو در محتوای فایل‌ها",
        example: "grep 'function' *.js\nfindstr 'text' file.txt",
        tip: "برای جستجوی متن در فایل‌ها",
      },
      {
        command: "cat / type",
        description: "نمایش محتوای فایل",
        example: "cat README.md\ntype README.md",
        tip: "برای مشاهده سریع محتوای فایل‌های کوچک",
      },
      {
        command: "head / tail",
        description: "نمایش ابتدا یا انتهای فایل",
        example: "head -10 file.txt\ntail -20 log.txt",
        tip: "مفید برای فایل‌های بزرگ",
      },
      {
        command: "chmod",
        description: "تغییر مجوزهای فایل (Linux/Mac)",
        example: "chmod +x script.sh\nchmod 755 file.txt",
        tip: "برای قابل اجرا کردن فایل‌ها",
      },
      {
        command: "history",
        description: "نمایش تاریخچه دستورات",
        example: "history\nhistory | grep git",
        tip: "برای پیدا کردن دستورات قبلی",
      },
    ],
    shortcuts: [
      {
        command: "Tab",
        description: "تکمیل خودکار",
        example: "cd Des[Tab] → cd Desktop/",
        tip: "صرفه‌جویی زمان زیادی می‌کند!",
      },
      {
        command: "↑ ↓",
        description: "پیمایش تاریخچه دستورات",
        example: "فلش بالا/پایین",
        tip: "دیگر نیازی به تایپ مجدد نیست",
      },
      {
        command: "Ctrl+C",
        description: "لغو دستور فعلی",
        example: "متوقف کردن فرآیند",
        tip: "برای خروج از دستورات طولانی",
      },
      {
        command: "Ctrl+L",
        description: "پاک کردن صفحه",
        example: "clear screen",
        tip: "برای تمیز کردن ترمینال",
      },
      {
        command: "Ctrl+A / Home",
        description: "رفتن به ابتدای خط",
        example: "جابجایی cursor",
        tip: "سریع‌تر از کلیک کردن",
      },
      {
        command: "Ctrl+E / End",
        description: "رفتن به انتهای خط",
        example: "جابجایی cursor",
        tip: "مفید برای ویرایش دستورات طولانی",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <Download className="w-10 h-10 text-primary-600 ml-4" />
          <h1 className="text-4xl font-bold text-gray-800">
            فصل دوم: نصب Git و تسلط بر ترمینال
          </h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          در این فصل نحوه نصب Git روی سیستم‌عامل‌های مختلف، تنظیمات اولیه و تسلط
          کامل بر ترمینال را یاد می‌گیریم
        </p>
      </div>

      {/* Pre-installation Check */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <CheckCircle className="w-8 h-8 text-green-600 ml-3" />
          بررسی قبل از نصب
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <Settings className="w-6 h-6 ml-2" />
              بررسی نصب قبلی
            </h3>
            <div
              dir="ltr"
              className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4"
            >
              git --version
            </div>
            <p className="text-blue-700">
              اگر Git نصب باشد، نسخه آن را نمایش می‌دهد. در غیر این صورت پیام
              خطا دریافت می‌کنید.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 ml-2" />
              حداقل سیستم مورد نیاز
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>
                • <strong>Windows:</strong> 7 یا بالاتر
              </li>
              <li>
                • <strong>macOS:</strong> 10.9 یا بالاتر
              </li>
              <li>
                • <strong>Linux:</strong> هر توزیع مدرن
              </li>
              <li>
                • <strong>حافظه:</strong> حداقل 100MB فضای خالی
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Download className="w-8 h-8 text-blue-600 ml-3" />
          نصب Git
        </h2>

        {/* OS Selection */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setActiveOS("windows")}
            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
              activeOS === "windows"
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Monitor className="w-5 h-5 ml-2" />
            Windows
          </button>
          <button
            onClick={() => setActiveOS("mac")}
            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
              activeOS === "mac"
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Apple className="w-5 h-5 ml-2" />
            macOS
          </button>
          <button
            onClick={() => setActiveOS("linux")}
            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
              activeOS === "linux"
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Terminal className="w-5 h-5 ml-2" />
            Linux
          </button>
        </div>

        {/* Installation Steps */}
        <div className="space-y-6">
          {installationSteps[activeOS].map((step) => (
            <div
              key={step.step}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mr-4">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">{step.content}</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                <pre dir="ltr" className="whitespace-pre-wrap">
                  {step.code}
                </pre>
              </div>
              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded">
                <p className="text-blue-700 text-sm">
                  <strong>💡 نکته:</strong> {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Git Configuration */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <User className="w-8 h-8 text-purple-600 ml-3" />
          تنظیمات اولیه Git
        </h2>

        <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            چرا تنظیمات اولیه مهم است؟
          </h3>
          <p className="text-purple-700 leading-relaxed">
            Git برای هر commit نام و ایمیل شما را ثبت می‌کند. این اطلاعات در
            تاریخچه پروژه نمایش داده می‌شود و برای همکاری در تیم ضروری است.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <User className="w-5 h-5 text-blue-500 ml-2" />
                تنظیم نام کاربری
              </h4>
              <div
                dir="ltr"
                className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3"
              >
                git config --global user.name "نام شما"
              </div>
              <p className="text-gray-600 text-sm">
                این نام در تمام commit های شما نمایش داده می‌شود
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Mail className="w-5 h-5 text-green-500 ml-2" />
                تنظیم ایمیل
              </h4>
              <div
                dir="ltr"
                className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3"
              >
                git config --global user.email "email@example.com"
              </div>
              <p className="text-gray-600 text-sm">
                بهتر است از همان ایمیل GitHub استفاده کنید
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Settings className="w-5 h-5 text-orange-500 ml-2" />
                تنظیمات اضافی
              </h4>
              <div
                dir="ltr"
                className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3"
              >
                <div className="mb-2"># تنظیم ویرایشگر پیش‌فرض</div>
                <div className="text-white">
                  git config --global core.editor "code --wait"
                </div>
                <div className="mt-3 mb-2"># فعال کردن رنگ‌ها</div>
                <div className="text-white">
                  git config --global color.ui auto
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-500 ml-2" />
                بررسی تنظیمات
              </h4>
              <div
                dir="ltr"
                className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3"
              >
                git config --list
              </div>
              <p className="text-gray-600 text-sm">
                نمایش تمام تنظیمات فعلی Git
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Mastery */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Terminal className="w-8 h-8 text-green-600 ml-3" />
          تسلط بر ترمینال
        </h2>

        <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 mb-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
            <Lightbulb className="w-6 h-6 ml-2" />
            چرا ترمینال مهم است؟
          </h3>
          <p className="text-yellow-700 leading-relaxed">
            Git عمدتاً از طریق خط فرمان کار می‌کند. تسلط بر ترمینال نه تنها برای
            Git، بلکه برای کل مسیر توسعه نرم‌افزار شما مفید خواهد بود. ترمینال
            سریع‌تر، قدرتمندتر و انعطاف‌پذیرتر از رابط گرافیکی است.
          </p>
        </div>

        {/* Terminal Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab("basic")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === "basic"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Book className="w-4 h-4 inline ml-1" />
            دستورات پایه
          </button>
          <button
            onClick={() => setActiveTab("advanced")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === "advanced"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Zap className="w-4 h-4 inline ml-1" />
            دستورات پیشرفته
          </button>
          <button
            onClick={() => setActiveTab("shortcuts")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === "shortcuts"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Target className="w-4 h-4 inline ml-1" />
            میانبرها
          </button>
        </div>

        {/* Terminal Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terminalCommands[activeTab].map((cmd, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-3">
                <code
                  dir="ltr"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm font-bold shadow-lg"
                >
                  {cmd.command}
                </code>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">
                {cmd.description}
              </h4>
              <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono text-gray-700 mb-3 overflow-x-auto">
                <pre dir="ltr" className="whitespace-pre-wrap">
                  {cmd.example}
                </pre>
              </div>
              <div className="bg-blue-50 border-r-4 border-blue-400 p-3 rounded">
                <p className="text-blue-700 text-sm">
                  <strong>💡 نکته:</strong> {cmd.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Exercises */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Play className="w-8 h-8 text-indigo-600 ml-3" />
          تمرین‌های عملی
        </h2>

        <div className="space-y-8">
          {/* Exercise 1 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <Target className="w-6 h-6 ml-2" />
              تمرین ۱: ایجاد ساختار پروژه
            </h3>
            <p className="text-blue-700 mb-4">
              یک ساختار پروژه کامل ایجاد کنید و با دستورات ترمینال آشنا شوید:
            </p>

            <div dir="ltr" className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۱: ایجاد پوشه اصلی پروژه
                </div>
                <div className="text-white">mkdir my-awesome-project</div>
                <div className="text-white">cd my-awesome-project</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۲: ایجاد ساختار پوشه‌ها
                </div>
                <div className="text-white">mkdir src docs tests</div>
                <div className="text-white">mkdir src/components src/utils</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۳: ایجاد فایل‌های اولیه
                </div>
                <div className="text-white">{`echo "# My Awesome Project" > README.md`}</div>
                <div className="text-white">{`echo "console.log('Hello World!');" > src/index.js`}</div>
                <div className="text-white">{`echo "/* Main styles */" > src/style.css`}</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۴: بررسی ساختار ایجاد شده
                </div>
                <div className="text-white">tree . # یا ls -la برای ویندوز</div>
                <div className="text-white">
                  find . -type f # نمایش تمام فایل‌ها
                </div>
              </div>
            </div>

            <div className="mt-4 bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">
                🎯 هدف: آشنایی با ایجاد ساختار پروژه و navigation در ترمینال
              </p>
            </div>
          </div>

          {/* Exercise 2 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Code className="w-6 h-6 ml-2" />
              تمرین ۲: مدیریت فایل‌ها و محتوا
            </h3>
            <p className="text-green-700 mb-4">
              با دستورات مدیریت فایل‌ها آشنا شوید و محتوای فایل‌ها را ویرایش
              کنید:
            </p>

            <div dir="ltr" className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۱: ایجاد فایل‌های مختلف
                </div>
                <div className="text-white">{`echo "# پروژه من" > README.md`}</div>
                <div className="text-white">{`echo "node_modules/" > .gitignore`}</div>
                <div className="text-white">{`echo '{"name": "my-project"}' > package.json`}</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۲: مشاهده محتوای فایل‌ها
                </div>
                <div className="text-white">cat README.md # Linux/Mac</div>
                <div className="text-white">type README.md # Windows</div>
                <div className="text-white">
                  head -5 package.json # ۵ خط اول
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۳: کپی و جابجایی فایل‌ها
                </div>
                <div className="text-white">
                  cp README.md docs/README-backup.md
                </div>
                <div className="text-white">mv src/style.css src/main.css</div>
                <div className="text-white">ls -la src/ # بررسی تغییرات</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۴: جستجو در فایل‌ها
                </div>
                <div className="text-white">
                  grep "console" src/*.js # جستجوی console در فایل‌های JS
                </div>
                <div className="text-white">
                  find . -name "*.md" # پیدا کردن فایل‌های Markdown
                </div>
              </div>
            </div>

            <div className="mt-4 bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-semibold">
                🎯 هدف: تسلط بر مدیریت فایل‌ها و جستجو در محتوا
              </p>
            </div>
          </div>

          {/* Exercise 3 */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
              <Settings className="w-6 h-6 ml-2" />
              تمرین ۳: تنظیمات Git و بررسی محیط
            </h3>
            <p className="text-purple-700 mb-4">
              Git را تنظیم کنید و محیط کاری خود را آماده سازید:
            </p>

            <div dir="ltr" className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۱: تنظیم هویت
                </div>
                <div className="text-white">
                  git config --global user.name "نام شما"
                </div>
                <div className="text-white">
                  git config --global user.email "your.email@example.com"
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۲: تنظیمات اضافی
                </div>
                <div className="text-white">
                  git config --global color.ui auto
                </div>
                <div className="text-white">
                  git config --global core.editor "code --wait"
                </div>
                <div className="text-white">
                  git config --global init.defaultBranch main
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۳: بررسی تنظیمات
                </div>
                <div className="text-white">git config --list</div>
                <div className="text-white">
                  git config user.name # بررسی نام
                </div>
                <div className="text-white">
                  git config user.email # بررسی ایمیل
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۴: بررسی نسخه و راهنما
                </div>
                <div className="text-white">git --version</div>
                <div className="text-white">git --help</div>
                <div className="text-white">
                  git help config # راهنمای دستور config
                </div>
              </div>
            </div>

            <div className="mt-4 bg-purple-100 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold">
                🎯 هدف: آماده‌سازی کامل محیط Git برای شروع کار
              </p>
            </div>
          </div>

          {/* Exercise 4 - Challenge */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
              <Zap className="w-6 h-6 ml-2" />
              تمرین ۴: چالش ترکیبی (پیشرفته)
            </h3>
            <p className="text-orange-700 mb-4">
              یک پروژه کامل ایجاد کنید و تمام مهارت‌های یادگرفته را ترکیب کنید:
            </p>

            <div dir="ltr" className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # چالش: ایجاد پروژه وب‌سایت شخصی
                </div>
                <div className="text-white">
                  mkdir personal-website && cd personal-website
                </div>
                <div className="text-white">mkdir assets css js images</div>
                <div className="text-white">
                  mkdir css/components js/modules
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # ایجاد فایل‌های HTML و CSS
                </div>
                <div className="text-white">{`echo '&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;وب‌سایت من&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;سلام دنیا!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;' > index.html`}</div>
                <div className="text-white">{`echo 'body { font-family: Arial; margin: 0; padding: 20px; }' > css/main.css`}</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # ایجاد فایل‌های پیکربندی
                </div>
                <div className="text-white">{`echo -e "node_modules/\n*.log\n.DS_Store\n*.tmp" > .gitignore`}</div>
                <div className="text-white">{`echo '# وب‌سایت شخصی من\n\nیک وب‌سایت ساده با HTML، CSS و JavaScript' > README.md`}</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # بررسی و تحلیل ساختار
                </div>
                <div className="text-white">
                  find . -type f -name "*.html" -o -name "*.css" -o -name "*.js"
                </div>
                <div className="text-white">
                  wc -l *.html *.md # شمارش خطوط فایل‌ها
                </div>
                <div className="text-white">du -sh * # اندازه پوشه‌ها</div>
              </div>
            </div>

            <div className="mt-4 bg-orange-100 p-4 rounded-lg">
              <p className="text-orange-800 font-semibold">
                🏆 چالش: ساختار کامل یک پروژه واقعی با تمام فایل‌های مورد نیاز
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Windows Specific Enhanced */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Monitor className="w-8 h-8 text-blue-600 ml-3" />
          راهنمای کامل ویندوز
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <Terminal className="w-6 h-6 ml-2" />
              Git Bash (توصیه شده)
            </h3>
            <div className="space-y-3 text-blue-700">
              <p>
                <strong>مزایا:</strong>
              </p>
              <ul className="space-y-1 mr-4">
                <li>• دستورات Linux/Unix</li>
                <li>• رنگی بودن خروجی</li>
                <li>• پشتیبانی کامل از Git</li>
                <li>• SSH و GPG داخلی</li>
                <li>• تکمیل خودکار پیشرفته</li>
              </ul>
            </div>
            <div className="mt-4 bg-blue-200 p-3 rounded text-sm">
              <strong>نکته:</strong> Git Bash محیط یونیکس شبیه‌سازی شده در
              ویندوز است
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Code className="w-6 h-6 ml-2" />
              PowerShell
            </h3>
            <div className="space-y-3 text-green-700">
              <p>
                <strong>ویژگی‌ها:</strong>
              </p>
              <ul className="space-y-1 mr-4">
                <li>• قدرتمندتر از CMD</li>
                <li>• Object-oriented</li>
                <li>• اسکریپت‌نویسی پیشرفته</li>
                <li>• یکپارچگی با .NET</li>
                <li>• پشتیبانی از Git</li>
              </ul>
            </div>
            <div className="mt-4 bg-green-200 p-3 rounded text-sm">
              <strong>نکته:</strong> PowerShell 7 روی همه پلتفرم‌ها کار می‌کند
            </div>
          </div>
        </div>

        {/* Windows Terminal Comparison */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            مقایسه ترمینال‌های ویندوز
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-right">
                    ویژگی
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Git Bash
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    PowerShell
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    CMD
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    دستورات Linux
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    محدود
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ❌
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Git Integration
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    عالی
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    خوب
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    پایه
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    رنگی بودن
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    محدود
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    تکمیل خودکار
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    عالی
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    عالی
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    پایه
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Path Issues */}
        <div className="mt-6 bg-red-50 border-r-4 border-red-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 ml-2" />
            مسائل مسیر در ویندوز
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-red-700 mb-2">مسیرهای ویندوز:</h4>
              <div
                dir="ltr"
                className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm"
              >
                C:\Users\Username\Documents
              </div>
            </div>
            <div>
              <h4 className="font-bold text-red-700 mb-2">مسیرهای Git Bash:</h4>
              <div
                dir="ltr"
                className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm"
              >
                /c/Users/Username/Documents
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-red-100 rounded">
            <p className="text-red-700 text-sm">
              <strong>نکته مهم:</strong> در Git Bash از forward slash (/)
              استفاده کنید، نه backslash (\)
            </p>
          </div>
        </div>
      </div>

      {/* Common Issues and Solutions */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Shield className="w-8 h-8 text-red-600 ml-3" />
          مشکلات رایج و راه‌حل‌ها
        </h2>

        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-800 mb-3">
              ❌ مشکل: "git: command not found"
            </h3>
            <p className="text-red-700 mb-4">
              این خطا معمولاً به دلیل عدم اضافه شدن Git به PATH سیستم رخ می‌دهد.
            </p>
            <div
              dir="ltr"
              className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4"
            >
              <div className="text-yellow-400 mb-2"># بررسی PATH</div>
              <div className="text-white">echo $PATH # Linux/Mac</div>
              <div className="text-white">echo %PATH% # Windows CMD</div>
              <div className="text-white">$env:PATH # Windows PowerShell</div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-semibold">
                💡 راه‌حل: Git را مجدداً نصب کنید و گزینه "Add Git to PATH" را
                فعال کنید
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-800 mb-3">
              ⚠️ مشکل: مشکلات encoding و فارسی
            </h3>
            <p className="text-orange-700 mb-4">
              نمایش نادرست کاراکترهای فارسی در ترمینال
            </p>
            <div
              dir="ltr"
              className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4"
            >
              <div className="text-yellow-400 mb-2"># تنظیم encoding</div>
              <div className="text-white">
                git config --global core.quotepath false
              </div>
              <div className="text-white">
                git config --global i18n.filesEncoding utf-8
              </div>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg">
              <p className="text-orange-800 font-semibold">
                💡 راه‌حل: تنظیم UTF-8 و استفاده از ترمینال‌های مدرن
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">
              ⚡ مشکل: کندی Git در ویندوز
            </h3>
            <p className="text-yellow-700 mb-4">
              Git در ویندوز گاهی کند عمل می‌کند، خصوصاً در پروژه‌های بزرگ
            </p>
            <div
              dir="ltr"
              className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4"
            >
              <div className="text-yellow-400 mb-2"># بهینه‌سازی عملکرد</div>
              <div className="text-white">
                git config --global core.preloadindex true
              </div>
              <div className="text-white">
                git config --global core.fscache true
              </div>
              <div className="text-white">git config --global gc.auto 256</div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-yellow-800 font-semibold">
                💡 راه‌حل: تنظیمات بهینه‌سازی و استفاده از SSD
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Globe className="w-8 h-8 text-indigo-600 ml-3" />
          آماده برای مرحله بعد؟
        </h2>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                ✅ چیزهایی که یاد گرفتید:
              </h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• نصب Git روی سیستم‌عامل‌های مختلف</li>
                <li>• تنظیمات اولیه و پیکربندی</li>
                <li>• تسلط بر دستورات ترمینال</li>
                <li>• ایجاد و مدیریت ساختار پروژه</li>
                <li>• حل مشکلات رایج</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                🚀 مرحله بعد:
              </h3>
              <ul className="space-y-2 text-purple-700">
                <li>• ایجاد اولین Repository</li>
                <li>• آشنایی با دستورات اصلی Git</li>
                <li>• مفهوم Staging Area</li>
                <li>• انجام اولین Commit</li>
                <li>• مشاهده تاریخچه تغییرات</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
              🎯 چک‌لیست آمادگی برای فصل سوم
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">
                    Git نصب شده و کار می‌کند
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">نام و ایمیل تنظیم شده</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">با ترمینال راحت هستم</span>
                </label>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">
                    می‌توانم پوشه و فایل بسازم
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">
                    تمرین‌ها را انجام داده‌ام
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">آماده یادگیری Git هستم!</span>
                </label>
              </div>
            </div>
          </div>

          <Link to="/chapter3">
            <div className="!mt-6 !text-center w-fit mx-auto flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
              <Play className="w-5 h-5 ml-2" />
              <span className="font-bold">بریم فصل سوم: اولین Repository!</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapter2;
