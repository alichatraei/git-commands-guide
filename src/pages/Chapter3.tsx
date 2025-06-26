import React, { useState } from "react";
import { GitBranch, FolderGit, RotateCcw } from "lucide-react";

const Chapter3: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "repo" | "staging" | "commit" | "log"
  >("repo");

  const gitCommands = {
    repo: [
      {
        command: "git init",
        description: "ایجاد repository جدید",
        example: "git init",
        output: "Initialized empty Git repository in /path/to/project/.git/",
      },
      {
        command: "git status",
        description: "نمایش وضعیت فایل‌ها",
        example: "git status",
        output: "On branch main\nNothing to commit, working tree clean",
      },
      {
        command: "git clone",
        description: "کپی کردن repository از سرور",
        example: "git clone https://github.com/user/repo.git",
        output: "Cloning into 'repo'...",
      },
    ],
    staging: [
      {
        command: "git add",
        description: "اضافه کردن فایل به staging area",
        example: "git add file.txt",
        output: "",
      },
      {
        command: "git add .",
        description: "اضافه کردن همه فایل‌ها",
        example: "git add .",
        output: "",
      },
      {
        command: "git reset",
        description: "خارج کردن فایل از staging",
        example: "git reset file.txt",
        output: "",
      },
    ],
    commit: [
      {
        command: "git commit",
        description: "ثبت تغییرات",
        example: 'git commit -m "Add new feature"',
        output:
          "[main 1a2b3c4] Add new feature\n 1 file changed, 10 insertions(+)",
      },
      {
        command: "git commit -a",
        description: "add و commit همزمان",
        example: 'git commit -am "Update files"',
        output:
          "[main 5d6e7f8] Update files\n 2 files changed, 15 insertions(+), 3 deletions(-)",
      },
    ],
    log: [
      {
        command: "git log",
        description: "نمایش تاریخچه commit ها",
        example: "git log",
        output:
          "commit 1a2b3c4d5e6f...\nAuthor: John Doe\nDate: Mon Jan 1 12:00:00 2024\n\n    Add new feature",
      },
      {
        command: "git log --oneline",
        description: "نمایش خلاصه تاریخچه",
        example: "git log --oneline",
        output:
          "1a2b3c4 Add new feature\n5d6e7f8 Update files\n9g0h1i2 Initial commit",
      },
      {
        command: "git log --graph",
        description: "نمایش گرافیکی تاریخچه",
        example: "git log --graph --oneline",
        output:
          "* 1a2b3c4 Add new feature\n* 5d6e7f8 Update files\n* 9g0h1i2 Initial commit",
      },
    ],
  };

  const commonIssues = [
    {
      issue: "فراموشی git init",
      description: 'پیام خطا: "not a git repository"',
      solution: "ابتدا git init را اجرا کنید",
      code: "git init",
    },
    {
      issue: "فراموشی git add",
      description: "هیچ چیز commit نمی‌شود",
      solution: "فایل‌ها را به staging area اضافه کنید",
      code: "git add .",
    },
    {
      issue: "پیام commit خالی",
      description: "Git پیام commit می‌خواهد",
      solution: "همیشه پیام مناسب بنویسید",
      code: 'git commit -m "توضیح تغییرات"',
    },
    {
      issue: "تنظیمات کاربر",
      description: "Git نام و ایمیل می‌خواهد",
      solution: "تنظیمات کاربری را انجام دهید",
      code: 'git config --global user.name "نام شما"\ngit config --global user.email "email@example.com"',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <FolderGit className="w-10 h-10 text-primary-600 ml-4" />
          <h1 className="text-4xl font-bold text-gray-800">
            فصل سوم: Repository و دستورات اصلی
          </h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          در این فصل با مفهوم Repository، مراحل staging و commit، و دستورات مهم
          Git آشنا می‌شوید
        </p>
      </div>

      {/* Git Repository */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <GitBranch className="w-8 h-8 text-purple-600 ml-3" />
          Git Repository چیست؟
        </h2>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Repository</strong> (مخزن) یک پوشه است که Git تمام تاریخچه
            تغییرات، فایل‌ها و اطلاعات پروژه را در آن ذخیره می‌کند. هر
            repository شامل یک پوشه مخفی
            <code className="bg-gray-200 px-2 py-1 rounded mx-2">.git</code>
            است که تمام اطلاعات Git در آن نگهداری می‌شود.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Local Repository
            </h3>
            <p className="text-green-700">
              Repository که روی کامپیوتر شما قرار دارد و می‌توانید روی آن کار
              کنید.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Remote Repository
            </h3>
            <p className="text-blue-700">
              Repository که روی سرور (مثل GitHub) قرار دارد و برای اشتراک‌گذاری
              استفاده می‌شود.
            </p>
          </div>
        </div>
      </div>

      {/* Git Workflow */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          مراحل کار با Git
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 text-center mb-4 md:mb-0">
            <h3 className="font-bold text-red-800">Working Directory</h3>
            <p className="text-red-600 text-sm">فایل‌های تغییر یافته</p>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-300 w-8 h-0.5"></div>
            <div className="bg-gray-800 text-white px-3 py-1 rounded text-sm mx-2">
              git add
            </div>
            <div className="bg-gray-300 w-8 h-0.5"></div>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 text-center mb-4 md:mb-0">
            <h3 className="font-bold text-yellow-800">Staging Area</h3>
            <p className="text-yellow-600 text-sm">فایل‌های آماده commit</p>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-300 w-8 h-0.5"></div>
            <div className="bg-green-600 text-white px-3 py-1 rounded text-sm mx-2">
              git commit
            </div>
            <div className="bg-gray-300 w-8 h-0.5"></div>
          </div>

          <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center">
            <h3 className="font-bold text-green-800">Repository</h3>
            <p className="text-green-600 text-sm">تاریخچه ثبت شده</p>
          </div>
        </div>
      </div>

      {/* Commands Tabs */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          دستورات مهم Git
        </h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(gitCommands).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof gitCommands)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab
                  ? "bg-gray-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab === "repo" && "Repository"}
              {tab === "staging" && "Staging"}
              {tab === "commit" && "Commit"}
              {tab === "log" && "Log"}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {gitCommands[activeTab].map((cmd, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <code className="bg-gray-900 text-green-400 px-4 py-2 rounded font-mono text-lg">
                  {cmd.command}
                </code>
              </div>
              <p className="text-gray-700 mb-3">{cmd.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">مثال:</h4>
                  <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                    $ {cmd.example}
                  </div>
                </div>

                {cmd.output && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">خروجی:</h4>
                    <div className="bg-green-50 text-green-800 p-3 rounded font-mono text-sm whitespace-pre-line">
                      {cmd.output}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Issues */}
      <div className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <RotateCcw className="w-8 h-8 text-red-600 ml-3" />
          مشکلات رایج تازه‌کارها
        </h2>

        <div className="space-y-6">
          {commonIssues.map((issue, index) => (
            <div
              key={index}
              className="bg-red-50 border border-red-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-red-800 mb-2">
                {issue.issue}
              </h3>
              <p className="text-red-700 mb-3">{issue.description}</p>
              <div className="bg-red-100 p-3 rounded mb-3">
                <strong className="text-red-800">راه حل:</strong>
                <span className="text-red-700 mr-2">{issue.solution}</span>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm whitespace-pre-line">
                {issue.code}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border-r-4 border-blue-500 p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-3">نکات مهم:</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• همیشه قبل از شروع کار git status را چک کنید</li>
            <li>• پیام‌های commit را واضح و مفهوم بنویسید</li>
            <li>• تغییرات کوچک و منطقی را commit کنید</li>
            <li>• قبل از commit، فایل‌ها را با git add اضافه کنید</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;
