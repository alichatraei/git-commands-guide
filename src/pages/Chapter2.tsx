import React, { useState } from "react";
import { Terminal, Download, Apple, Monitor } from "lucide-react";

const Chapter2: React.FC = () => {
  const [activeOS, setActiveOS] = useState<"windows" | "mac" | "linux">(
    "windows"
  );

  const installationSteps = {
    windows: [
      {
        step: 1,
        title: "دانلود Git",
        content: "از سایت رسمی git-scm.com نسخه ویندوز را دانلود کنید",
        code: "https://git-scm.com/download/win",
      },
      {
        step: 2,
        title: "اجرای نصب",
        content: "فایل .exe را اجرا کرده و مراحل نصب را دنبال کنید",
        code: "git-installer.exe",
      },
      {
        step: 3,
        title: "تأیید نصب",
        content: "Command Prompt را باز کرده و دستور زیر را اجرا کنید",
        code: "git --version",
      },
    ],
    mac: [
      {
        step: 1,
        title: "نصب با Homebrew",
        content: "اگر Homebrew دارید، از دستور زیر استفاده کنید",
        code: "brew install git",
      },
      {
        step: 2,
        title: "نصب دستی",
        content: "از سایت رسمی نسخه macOS را دانلود کنید",
        code: "https://git-scm.com/download/mac",
      },
      {
        step: 3,
        title: "تأیید نصب",
        content: "Terminal را باز کرده و دستور زیر را اجرا کنید",
        code: "git --version",
      },
    ],
    linux: [
      {
        step: 1,
        title: "Ubuntu/Debian",
        content: "برای توزیع‌های مبتنی بر Debian",
        code: "sudo apt update && sudo apt install git",
      },
      {
        step: 2,
        title: "CentOS/RHEL",
        content: "برای توزیع‌های مبتنی بر Red Hat",
        code: "sudo yum install git",
      },
      {
        step: 3,
        title: "تأیید نصب",
        content: "Terminal را باز کرده و دستور زیر را اجرا کنید",
        code: "git --version",
      },
    ],
  };

  const terminalCommands = [
    {
      command: "pwd",
      description: "نمایش مسیر فعلی",
      example: "/Users/username/Documents",
    },
    {
      command: "ls",
      description: "لیست فایل‌ها و پوشه‌ها",
      example: "file1.txt  folder1  folder2",
    },
    {
      command: "cd",
      description: "تغییر مسیر",
      example: "cd Desktop",
    },
    {
      command: "mkdir",
      description: "ساخت پوشه جدید",
      example: "mkdir my-project",
    },
    {
      command: "touch",
      description: "ساخت فایل جدید (Linux/Mac)",
      example: "touch index.html",
    },
    {
      command: "echo",
      description: "ساخت فایل با محتوا",
      example: 'echo "Hello" > file.txt',
    },
    {
      command: "rm",
      description: "حذف فایل",
      example: "rm file.txt",
    },
    {
      command: "rmdir",
      description: "حذف پوشه خالی",
      example: "rmdir empty-folder",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <Download className="w-10 h-10 text-primary-600 ml-4" />
          <h1 className="text-4xl font-bold text-gray-800">
            فصل دوم: نصب Git و آموزش ترمینال
          </h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          در این فصل نحوه نصب Git روی سیستم‌عامل‌های مختلف و آموزش کار با
          ترمینال را یاد می‌گیریم
        </p>
      </div>

      {/* Installation Section */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">نصب Git</h2>

        {/* OS Selection */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setActiveOS("windows")}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeOS === "windows"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Monitor className="w-5 h-5 ml-2" />
            Windows
          </button>
          <button
            onClick={() => setActiveOS("mac")}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeOS === "mac"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Apple className="w-5 h-5 ml-2" />
            macOS
          </button>
          <button
            onClick={() => setActiveOS("linux")}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeOS === "linux"
                ? "bg-blue-600 text-white"
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
              className="border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center mb-3">
                <div className="bg-primary-600 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold ">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-3">{step.content}</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                {step.code}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Crash Course */}
      <div className="card mb-8">
        <h2 className="text-3xl gap-x-2 font-bold text-gray-800 mb-6 flex items-center">
          <Terminal className="w-8 h-8 text-green-600 " />
          کرش کورس ترمینال
        </h2>

        <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 mb-6">
          <h3 className="text-xl font-bold text-yellow-800 mb-3">
            چرا ترمینال مهم است؟
          </h3>
          <p className="text-yellow-700">
            Git عمدتاً از طریق خط فرمان (Command Line) کار می‌کند. یادگیری
            دستورات اصلی ترمینال برای کار با Git ضروری است.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terminalCommands.map((cmd, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <code className="bg-gray-900 text-green-400 px-3 py-1 rounded font-mono text-sm">
                  {cmd.command}
                </code>
              </div>
              <p className="text-gray-700 mb-2">{cmd.description}</p>
              <div className="bg-gray-100 p-2 rounded text-sm font-mono text-gray-600">
                {cmd.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Exercise */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">تمرین عملی</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            ایجاد ساختار پروژه
          </h3>
          <p className="text-blue-700 mb-4">
            دستورات زیر را به ترتیب در ترمینال اجرا کنید:
          </p>

          <div className="space-y-3">
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="mb-2"># ایجاد پوشه پروژه</div>
              <div className="text-white">mkdir my-first-git-project</div>
            </div>

            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="mb-2"># ورود به پوشه</div>
              <div className="text-white">cd my-first-git-project</div>
            </div>

            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="mb-2"># ایجاد فایل README</div>
              <div className="text-white">{`echo "# My First Git Project" > README.md`}</div>
            </div>

            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="mb-2"># مشاهده محتویات پوشه</div>
              <div className="text-white">ls -la</div>
            </div>
          </div>
        </div>
      </div>

      {/* Windows Specific */}
      <div className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          نکات مهم برای ویندوز
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br flex flex-col justify-between from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Git Bash</h3>
            <p className="text-blue-700 mb-3">
              Git Bash یک ترمینال شبیه‌سازی شده Linux برای ویندوز است که با Git
              نصب می‌شود.
            </p>
            <div className="bg-blue-200 p-3 rounded text-sm">
              <strong>مزایا:</strong> دستورات Linux، رنگی بودن، پشتیبانی از Git
            </div>
          </div>

          <div className="bg-gradient-to-br justify-between flex-col flex from-green-50 to-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Command Prompt
            </h3>
            <p className="text-green-700 mb-3">
              ترمینال پیش‌فرض ویندوز که می‌توانید Git را در آن اجرا کنید.
            </p>
            <div className="bg-green-200 p-3 rounded text-sm">
              <strong>نکته:</strong> دستورات کمی متفاوت از Linux/Mac
            </div>
          </div>
        </div>

        <div className="mt-6 bg-red-50 border-r-4 border-red-500 p-6">
          <h3 className="text-xl font-bold text-red-800 mb-3">
            مسیرها در ویندوز
          </h3>
          <div className="space-y-2 text-red-700">
            <p>
              <strong>ویندوز:</strong> <code>C:\Users\Username\Documents</code>
            </p>
            <p>
              <strong>Git Bash:</strong>{" "}
              <code>/c/Users/Username/Documents</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter2;
