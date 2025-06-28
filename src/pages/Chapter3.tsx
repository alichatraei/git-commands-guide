import React, { useState } from "react";
import {
  GitBranch,
  FolderGit,
  FileText,
  CheckCircle,
  AlertTriangle,
  Eye,
  Plus,
  Archive,
  Play,
  BookOpen,
  Target,
  Lightbulb,
  Code,
  Settings,
  Users,
  Star,
  GitCommit,
  History,
  Search,
} from "lucide-react";

const Chapter3: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "repo" | "staging" | "commit" | "log"
  >("repo");
  const [activeWorkflow, setActiveWorkflow] = useState<
    "working" | "staging" | "repository"
  >("working");

  const gitCommands = {
    repo: [
      {
        command: "git init",
        description: "ایجاد repository جدید در پوشه فعلی",
        example: "git init\n# یا با نام مشخص\ngit init my-project",
        output: "Initialized empty Git repository in /path/to/project/.git/",
        tips: "پس از اجرا، پوشه .git ایجاد می‌شود که حاوی تمام اطلاعات Git است",
        useCase: "شروع پروژه جدید یا تبدیل پوشه موجود به Git repository",
      },
      {
        command: "git status",
        description: "نمایش وضعیت کامل فایل‌ها و تغییرات",
        example: "git status\n# نمایش خلاصه\ngit status -s",
        output:
          'On branch main\nYour branch is up to date with \'origin/main\'.\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n\tmodified:   README.md\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n\tmodified:   index.html\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tnew-file.js',
        tips: "مهم‌ترین دستور Git! همیشه قبل از هر کاری اجرا کنید",
        useCase: "بررسی وضعیت فایل‌ها قبل از add، commit یا push",
      },
      {
        command: "git clone",
        description: "کپی کردن repository از سرور به کامپیوتر",
        example:
          "git clone https://github.com/user/repo.git\n# با نام مشخص\ngit clone https://github.com/user/repo.git my-folder",
        output:
          "Cloning into 'repo'...\nremote: Enumerating objects: 125, done.\nremote: Counting objects: 100% (125/125), done.\nremote: Compressing objects: 100% (89/89), done.\nremote: Total 125 (delta 45), reused 98 (delta 32), pack-reused 0\nReceiving objects: 100% (125/125), 1.2 MiB | 850.00 KiB/s, done.\nResolving deltas: 100% (45/45), done.",
        tips: "پس از clone، خودکار وارد پوشه پروژه شوید",
        useCase: "دانلود پروژه‌های موجود از GitHub، GitLab و...",
      },
      {
        command: "git remote",
        description: "مدیریت remote repository ها",
        example:
          "git remote -v\n# اضافه کردن remote جدید\ngit remote add origin https://github.com/user/repo.git",
        output:
          "origin\thttps://github.com/user/repo.git (fetch)\norigin\thttps://github.com/user/repo.git (push)",
        tips: "origin نام پیش‌فرض remote اصلی است",
        useCase: "اتصال repository محلی به سرور یا مشاهده remote های موجود",
      },
    ],
    staging: [
      {
        command: "git add",
        description: "اضافه کردن فایل‌های مشخص به staging area",
        example:
          "git add file.txt\n# چندین فایل\ngit add file1.txt file2.js\n# فایل‌های با پسوند خاص\ngit add *.js",
        output: "",
        tips: "فقط فایل‌های مشخص شده اضافه می‌شوند",
        useCase: "انتخاب دقیق فایل‌هایی که می‌خواهید commit کنید",
      },
      {
        command: "git add .",
        description: "اضافه کردن همه فایل‌های تغییر یافته",
        example: "git add .\n# یا\ngit add --all\n# یا\ngit add -A",
        output: "",
        tips: "شامل فایل‌های جدید، تغییر یافته و حذف شده می‌شود",
        useCase: "زمانی که می‌خواهید همه تغییرات را commit کنید",
      },
      {
        command: "git add -p",
        description: "اضافه کردن بخش‌هایی از فایل‌ها (patch mode)",
        example: "git add -p file.txt",
        output:
          "diff --git a/file.txt b/file.txt\nindex 1234567..abcdefg 100644\n--- a/file.txt\n+++ b/file.txt\n@@ -1,3 +1,4 @@\n line 1\n line 2\n+new line\n line 3\nStage this hunk [y,n,q,a,d,e,?]?",
        tips: "برای commit های دقیق‌تر، فقط بخش‌هایی از تغییرات را انتخاب کنید",
        useCase:
          "زمانی که فایل شامل تغییرات مختلف است و می‌خواهید جداگانه commit کنید",
      },
      {
        command: "git reset",
        description: "خارج کردن فایل‌ها از staging area",
        example:
          "git reset file.txt\n# همه فایل‌ها\ngit reset\n# یا\ngit restore --staged file.txt",
        output: "Unstaged changes after reset:\nM\tfile.txt",
        tips: "فایل‌ها از staging خارج می‌شوند اما تغییرات حفظ می‌مانند",
        useCase: "لغو add کردن فایل‌هایی که اشتباه اضافه کرده‌اید",
      },
      {
        command: "git diff",
        description: "مشاهده تغییرات فایل‌ها",
        example:
          "git diff\n# تغییرات staged\ngit diff --staged\n# مقایسه فایل مشخص\ngit diff file.txt",
        output:
          "diff --git a/file.txt b/file.txt\nindex 1234567..abcdefg 100644\n--- a/file.txt\n+++ b/file.txt\n@@ -1,3 +1,4 @@\n line 1\n line 2\n+این خط اضافه شده\n line 3",
        tips: "خطوط سبز (+) اضافه شده، خطوط قرمز (-) حذف شده",
        useCase: "بررسی دقیق تغییرات قبل از commit",
      },
    ],
    commit: [
      {
        command: "git commit -m",
        description: "ثبت تغییرات با پیام مشخص",
        example:
          'git commit -m "Add user authentication feature"\n# پیام چندخطی\ngit commit -m "Add login form" -m "- Add validation\\n- Add error handling"',
        output:
          "[main 1a2b3c4] Add user authentication feature\n 3 files changed, 45 insertions(+), 2 deletions(-)\n create mode 100644 auth.js",
        tips: "پیام باید کوتاه، واضح و توصیفی باشد",
        useCase: "ثبت تغییرات با توضیح مناسب",
      },
      {
        command: "git commit -a",
        description: "add و commit همزمان برای فایل‌های tracked",
        example:
          'git commit -am "Update existing files"\n# فقط فایل‌های قبلاً track شده',
        output:
          "[main 5d6e7f8] Update existing files\n 2 files changed, 15 insertions(+), 3 deletions(-)",
        tips: "فایل‌های جدید (untracked) شامل نمی‌شوند",
        useCase: "به‌روزرسانی سریع فایل‌های موجود",
      },
      {
        command: "git commit --amend",
        description: "ویرایش آخرین commit",
        example:
          'git commit --amend -m "New commit message"\n# اضافه کردن فایل به آخرین commit\ngit add forgotten-file.txt\ngit commit --amend --no-edit',
        output:
          "[main 1a2b3c4] New commit message\n Date: Mon Jan 1 12:00:00 2024 +0330\n 4 files changed, 50 insertions(+), 2 deletions(-)",
        tips: "فقط برای commit هایی که push نشده‌اند استفاده کنید",
        useCase: "اصلاح پیام یا اضافه کردن فایل فراموش شده به آخرین commit",
      },
      {
        command: "git commit --allow-empty",
        description: "ایجاد commit خالی (بدون تغییرات)",
        example: 'git commit --allow-empty -m "Trigger CI/CD pipeline"',
        output: "[main 9g0h1i2] Trigger CI/CD pipeline",
        tips: "مفید برای trigger کردن CI/CD یا علامت‌گذاری",
        useCase: "فعال‌سازی pipeline ها یا ایجاد milestone",
      },
    ],
    log: [
      {
        command: "git log",
        description: "نمایش کامل تاریخچه commit ها",
        example:
          "git log\n# محدود کردن تعداد\ngit log -5\n# با جزئیات فایل‌ها\ngit log --stat",
        output:
          "commit 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0\nAuthor: John Doe <john@example.com>\nDate:   Mon Jan 1 12:00:00 2024 +0330\n\n    Add user authentication feature\n    \n    - Implement login form\n    - Add password validation\n    - Create user session management\n\ncommit 5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4\nAuthor: Jane Smith <jane@example.com>\nDate:   Sun Dec 31 18:30:00 2023 +0330\n\n    Initial project setup",
        tips: "از q برای خروج از نمایش log استفاده کنید",
        useCase: "بررسی تاریخچه کامل پروژه و جزئیات commit ها",
      },
      {
        command: "git log --oneline",
        description: "نمایش خلاصه و فشرده تاریخچه",
        example: "git log --oneline\n# با تعداد محدود\ngit log --oneline -10",
        output:
          "1a2b3c4 Add user authentication feature\n5d6e7f8 Update README with installation guide\n9g0h1i2 Fix navigation bug in mobile view\na1b2c3d Add responsive design to homepage\ne5f6g7h Initial project setup",
        tips: "بهترین حالت برای مرور سریع تاریخچه",
        useCase: "مرور سریع commit های اخیر",
      },
      {
        command: "git log --graph",
        description: "نمایش گرافیکی تاریخچه و branch ها",
        example:
          "git log --graph --oneline --all\n# با رنگ\ngit log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'",
        output:
          "* 1a2b3c4 Add user authentication feature\n* 5d6e7f8 Update README with installation guide\n|\\  \n| * 9g0h1i2 Fix navigation bug in mobile view\n|/  \n* a1b2c3d Add responsive design to homepage\n* e5f6g7h Initial project setup",
        tips: "بهترین روش برای درک ساختار branch ها",
        useCase: "مشاهده روابط بین commit ها و branch ها",
      },
      {
        command: "git log --author",
        description: "فیلتر کردن commit ها بر اساس نویسنده",
        example:
          'git log --author="John Doe"\n# جستجوی بخشی از نام\ngit log --author="John"',
        output:
          "commit 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0\nAuthor: John Doe <john@example.com>\nDate:   Mon Jan 1 12:00:00 2024 +0330\n\n    Add user authentication feature",
        tips: "مفید برای پیگیری کارهای یک نفر خاص",
        useCase: "بررسی commit های یک توسعه‌دهنده مشخص",
      },
      {
        command: "git log --since",
        description: "فیلتر کردن commit ها بر اساس تاریخ",
        example:
          'git log --since="2024-01-01"\n# یا\ngit log --since="2 weeks ago"\ngit log --since="yesterday"',
        output:
          "commit 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0\nAuthor: John Doe <john@example.com>\nDate:   Mon Jan 1 12:00:00 2024 +0330\n\n    Add user authentication feature",
        tips: "می‌توانید از --until برای تاریخ پایان استفاده کنید",
        useCase: "بررسی تغییرات در بازه زمانی مشخص",
      },
    ],
  };

  const workflowSteps = {
    working: {
      title: "Working Directory",
      description: "محل کار شما - فایل‌هایی که در حال ویرایش هستید",
      files: [
        "modified: index.html",
        "new file: script.js",
        "deleted: old-file.txt",
      ],
      color: "red",
      icon: FileText,
      details: [
        "فایل‌های تغییر یافته (Modified)",
        "فایل‌های جدید (Untracked)",
        "فایل‌های حذف شده (Deleted)",
      ],
    },
    staging: {
      title: "Staging Area (Index)",
      description: "فایل‌هایی که برای commit آماده شده‌اند",
      files: ["staged: index.html", "staged: script.js"],
      color: "yellow",
      icon: Archive,
      details: [
        "فایل‌های انتخاب شده برای commit",
        "می‌توانید فایل‌ها را اضافه یا حذف کنید",
        "مرحله میانی قبل از commit",
      ],
    },
    repository: {
      title: "Repository (.git)",
      description: "تاریخچه کامل و ثبت شده پروژه",
      files: ["commit: 1a2b3c4", "commit: 5d6e7f8", "commit: 9g0h1i2"],
      color: "green",
      icon: GitCommit,
      details: [
        "تاریخچه کامل commit ها",
        "اطلاعات branch ها",
        "تنظیمات repository",
      ],
    },
  };

  const commonIssues = [
    {
      issue: "فراموشی git init",
      description:
        'پیام خطا: "fatal: not a git repository (or any of the parent directories): .git"',
      solution: "ابتدا repository را مقداردهی اولیه کنید",
      code: "cd your-project-folder\ngit init",
      severity: "high",
      frequency: "خیلی رایج",
    },
    {
      issue: "فراموشی git add",
      description:
        'پیام: "nothing to commit, working tree clean" در حالی که فایل‌ها تغییر کرده‌اند',
      solution: "فایل‌ها را ابتدا به staging area اضافه کنید",
      code: "git add .\n# یا فایل مشخص\ngit add filename.txt",
      severity: "medium",
      frequency: "رایج",
    },
    {
      issue: "پیام commit خالی یا نامناسب",
      description: "Git از شما پیام commit می‌خواهد یا پیام‌های غیرواضح",
      solution: "همیشه پیام واضح و توصیفی بنویسید",
      code: 'git commit -m "Add user login functionality"\n\n# پیام‌های خوب:\n# "Fix navigation bug on mobile"\n# "Add email validation to signup form"\n# "Update README with installation steps"',
      severity: "low",
      frequency: "رایج",
    },
    {
      issue: "تنظیمات کاربری نشده",
      description:
        'پیام: "Please tell me who you are" یا عدم نمایش نام در commit ها',
      solution: "تنظیمات کاربری Git را انجام دهید",
      code: 'git config --global user.name "نام شما"\ngit config --global user.email "your.email@example.com"\n\n# بررسی تنظیمات\ngit config --list',
      severity: "high",
      frequency: "یک بار",
    },
    {
      issue: "اشتباه در staging فایل‌ها",
      description: "اضافه کردن فایل‌های اضافی یا فراموشی فایل‌های مهم",
      solution: "از git status برای بررسی و git reset برای اصلاح استفاده کنید",
      code: "# بررسی وضعیت\ngit status\n\n# حذف از staging\ngit reset filename.txt\n\n# یا همه فایل‌ها\ngit reset",
      severity: "medium",
      frequency: "رایج",
    },
    {
      issue: "commit کردن فایل‌های حساس",
      description:
        "اضافه کردن فایل‌هایی مثل passwords، API keys یا node_modules",
      solution: "از .gitignore استفاده کنید و فایل‌های حساس را حذف کنید",
      code: "# ایجاد .gitignore\necho 'node_modules/\n.env\n*.log\n.DS_Store' > .gitignore\n\n# حذف فایل از Git (اما نه از دیسک)\ngit rm --cached sensitive-file.txt\n\ngit add .gitignore\ngit commit -m 'Add .gitignore file'",
      severity: "high",
      frequency: "گاهی",
    },
  ];

  const bestPractices = [
    {
      title: "پیام‌های Commit مناسب",
      description: "پیام‌هایی واضح، کوتاه و توصیفی بنویسید",
      examples: [
        "✅ Add user authentication system",
        "✅ Fix mobile navigation bug",
        "✅ Update README with API documentation",
        "❌ fix",
        "❌ changes",
        "❌ update stuff",
      ],
      tips: "از فعل امری استفاده کنید و در 50 کاراکتر خلاصه کنید",
    },
    {
      title: "Commit های منطقی",
      description: "هر commit باید یک تغییر منطقی و کامل باشد",
      examples: [
        "✅ یک feature کامل",
        "✅ یک bug fix",
        "✅ بهبود performance یک بخش",
        "❌ نصف کار کرده",
        "❌ چندین تغییر نامرتبط",
        "❌ کدهای test شده نشده",
      ],
      tips: "اگر نمی‌توانید در یک جمله توضیح دهید، احتمالاً باید تقسیم کنید",
    },
    {
      title: "استفاده از .gitignore",
      description: "فایل‌های غیرضروری را از Git حذف کنید",
      examples: [
        "node_modules/",
        ".env",
        "*.log",
        ".DS_Store",
        "dist/",
        "build/",
      ],
      tips: "قبل از اولین commit، .gitignore را تنظیم کنید",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <FolderGit className="w-10 h-10 text-primary-600 ml-4" />
          <h1 className="text-4xl font-bold text-gray-800">
            فصل سوم: Repository و تسلط بر Git
          </h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          در این فصل با مفهوم Repository، چرخه کاری Git، دستورات اصلی و بهترین
          روش‌های کار با Git آشنا می‌شوید
        </p>
      </div>

      {/* Git Repository Concept */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <GitBranch className="w-8 h-8 text-purple-600 ml-3" />
          Git Repository چیست؟
        </h2>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6 border border-purple-200">
          <div className="flex items-start">
            <BookOpen className="w-8 h-8 text-purple-600 ml-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                تعریف Repository
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Repository</strong> (مخزن) یک پوشه هوشمند است که Git
                تمام تاریخچه تغییرات، فایل‌ها، branch ها و اطلاعات پروژه را در
                آن ذخیره می‌کند. هر repository شامل یک پوشه مخفی
                <code className="bg-gray-200 px-2 py-1 rounded mx-2">.git</code>
                است که مغز Git محسوب می‌شود.
              </p>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-purple-700">
                  <strong>💡 نکته:</strong> پوشه .git را هرگز دستی تغییر ندهید!
                  Git خودش آن را مدیریت می‌کند.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FolderGit className="w-8 h-8 text-green-600 ml-3" />
              <h3 className="text-xl font-bold text-green-800">
                Local Repository
              </h3>
            </div>
            <p className="text-green-700 mb-4">
              Repository که روی کامپیوتر شما قرار دارد و می‌توانید مستقیماً روی
              آن کار کنید.
            </p>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• کنترل کامل روی تغییرات</li>
              <li>• کار آفلاین</li>
              <li>• سرعت بالا</li>
              <li>• امنیت داده‌ها</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-600 ml-3" />
              <h3 className="text-xl font-bold text-blue-800">
                Remote Repository
              </h3>
            </div>
            <p className="text-blue-700 mb-4">
              Repository که روی سرور (مثل GitHub، GitLab) قرار دارد و برای
              همکاری تیمی استفاده می‌شود.
            </p>
            <ul className="text-blue-600 space-y-1 text-sm">
              <li>• اشتراک‌گذاری با تیم</li>
              <li>• پشتیبان‌گیری خودکار</li>
              <li>• دسترسی از هر جا</li>
              <li>• ابزارهای همکاری</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Git Workflow */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Target className="w-8 h-8 text-indigo-600 ml-3" />
          چرخه کاری Git (تعاملی)
        </h2>

        {/* Workflow Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(workflowSteps).map(([key, step]) => (
            <button
              key={key}
              onClick={() =>
                setActiveWorkflow(key as keyof typeof workflowSteps)
              }
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                activeWorkflow === key
                  ? `bg-${step.color}-600 text-white shadow-lg transform scale-105`
                  : `bg-${step.color}-100 text-${step.color}-700 hover:bg-${step.color}-200`
              }`}
            >
              <step.icon className="w-5 h-5 ml-2" />
              {step.title}
            </button>
          ))}
        </div>

        {/* Active Workflow Step Details */}
        <div className="mb-8">
          {Object.entries(workflowSteps).map(
            ([key, step]) =>
              activeWorkflow === key && (
                <div
                  key={key}
                  className={`bg-${step.color}-50 border border-${step.color}-200 rounded-xl p-6`}
                >
                  <div className="flex items-center mb-4">
                    <step.icon
                      className={`w-8 h-8 text-${step.color}-600 ml-3`}
                    />
                    <div>
                      <h3
                        className={`text-2xl font-bold text-${step.color}-800`}
                      >
                        {step.title}
                      </h3>
                      <p className={`text-${step.color}-700`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`font-bold text-${step.color}-800 mb-3`}>
                        فایل‌های موجود:
                      </h4>
                      <div className={`bg-${step.color}-100 p-4 rounded-lg`}>
                        {step.files.map((file, index) => (
                          <div
                            key={index}
                            className={`text-${step.color}-700 font-mono text-sm mb-1`}
                          >
                            {file}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-bold text-${step.color}-800 mb-3`}>
                        ویژگی‌ها:
                      </h4>
                      <ul className={`space-y-2 text-${step.color}-700`}>
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 ml-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        {/* Visual Workflow */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            مسیر تغییرات در Git
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 text-center min-w-[150px]">
              <FileText className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-red-800">Working Directory</h4>
              <p className="text-red-600 text-sm">فایل‌های تغییر یافته</p>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-300 w-12 h-0.5 hidden md:block"></div>
              <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mx-2 shadow-lg">
                <code>git add</code>
              </div>
              <div className="bg-gray-300 w-12 h-0.5 hidden md:block"></div>
            </div>

            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 text-center min-w-[150px]">
              <Archive className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-bold text-yellow-800">Staging Area</h4>
              <p className="text-yellow-600 text-sm">فایل‌های آماده commit</p>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-300 w-12 h-0.5 hidden md:block"></div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm mx-2 shadow-lg">
                <code>git commit</code>
              </div>
              <div className="bg-gray-300 w-12 h-0.5 hidden md:block"></div>
            </div>

            <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center min-w-[150px]">
              <GitCommit className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-bold text-green-800">Repository</h4>
              <p className="text-green-600 text-sm">تاریخچه ثبت شده</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-r-4 border-blue-500 p-4 rounded">
            <p className="text-blue-700">
              <strong>💡 نکته مهم:</strong> این مسیر یک‌طرفه نیست! می‌توانید با
              دستورات مختلف بین مراحل جابجا شوید.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Commands Section */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Code className="w-8 h-8 text-blue-600 ml-3" />
          دستورات کامل Git
        </h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(gitCommands).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof gitCommands)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab === "repo" && (
                <>
                  <FolderGit className="w-4 h-4 ml-1" /> Repository
                </>
              )}
              {tab === "staging" && (
                <>
                  <Plus className="w-4 h-4 ml-1" /> Staging
                </>
              )}
              {tab === "commit" && (
                <>
                  <GitCommit className="w-4 h-4 ml-1" /> Commit
                </>
              )}
              {tab === "log" && (
                <>
                  <History className="w-4 h-4 ml-1" /> History
                </>
              )}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {gitCommands[activeTab].map((cmd, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <code className="bg-gradient-to-r from-gray-800 to-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-lg font-bold shadow-lg">
                  {cmd.command}
                </code>
                <div className="mr-4">
                  <h3 className="font-bold text-gray-800">{cmd.description}</h3>
                  <p className="text-gray-600 text-sm">{cmd.useCase}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Play className="w-4 h-4 ml-1" />
                    مثال:
                  </h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre className="whitespace-pre-wrap">$ {cmd.example}</pre>
                  </div>
                </div>

                {cmd.output && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Eye className="w-4 h-4 ml-1" />
                      خروجی:
                    </h4>
                    <div className="bg-green-50 text-green-800 p-4 rounded-lg font-mono text-sm whitespace-pre-line overflow-x-auto border border-green-200">
                      {cmd.output}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 bg-blue-50 border-r-4 border-blue-400 p-4 rounded">
                <p className="text-blue-700 text-sm">
                  <strong>💡 نکته:</strong> {cmd.tips}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Exercises */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Target className="w-8 h-8 text-indigo-600 ml-3" />
          تمرین‌های عملی
        </h2>

        <div className="space-y-8">
          {/* Exercise 1 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <Star className="w-6 h-6 ml-2" />
              تمرین ۱: ایجاد اولین Repository
            </h3>
            <p className="text-blue-700 mb-4">
              یک پروژه کامل از صفر ایجاد کنید و اولین commit های خود را انجام
              دهید:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۱: ایجاد پروژه
                </div>
                <div className="text-white">mkdir my-first-git-project</div>
                <div className="text-white">cd my-first-git-project</div>
                <div className="text-white">git init</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۲: ایجاد فایل‌های اولیه
                </div>
                <div className="text-white">{`echo "# پروژه اول من با Git" > README.md`}</div>
                <div className="text-white">{`echo "console.log('سلام Git!');" > index.js`}</div>
                <div className="text-white">{`echo "body { font-family: Arial; }" > style.css`}</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۳: بررسی وضعیت و اولین commit
                </div>
                <div className="text-white">git status</div>
                <div className="text-white">git add .</div>
                <div className="text-white">git status</div>
                <div className="text-white">
                  git commit -m "Initial commit: Add basic project files"
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مرحله ۴: مشاهده نتیجه
                </div>
                <div className="text-white">git log --oneline</div>
                <div className="text-white">git status</div>
              </div>
            </div>

            <div className="mt-4 bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">
                🎯 هدف: آشنایی با چرخه کامل ایجاد repository و اولین commit
              </p>
            </div>
          </div>

          {/* Exercise 2 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Settings className="w-6 h-6 ml-2" />
              تمرین ۲: تمرین Staging Area
            </h3>
            <p className="text-green-700 mb-4">
              با مفهوم staging area آشنا شوید و یاد بگیرید چطور فایل‌ها را
              انتخابی commit کنید:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # ایجاد تغییرات مختلف
                </div>
                <div className="text-white">{`echo "## توضیحات پروژه" >> README.md`}</div>
                <div className="text-white">{`echo "function sayHello() { console.log('Hello!'); }" >> index.js`}</div>
                <div className="text-white">{`echo "h1 { color: blue; }" >> style.css`}</div>
                <div className="text-white">{`echo "node_modules/" > .gitignore`}</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2"># بررسی تغییرات</div>
                <div className="text-white">git status</div>
                <div className="text-white">git diff</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2"># staging انتخابی</div>
                <div className="text-white">git add README.md index.js</div>
                <div className="text-white">git status</div>
                <div className="text-white">
                  git commit -m "Update README and add sayHello function"
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2"># commit دوم</div>
                <div className="text-white">git add .</div>
                <div className="text-white">
                  git commit -m "Add CSS styles and gitignore file"
                </div>
                <div className="text-white">git log --oneline</div>
              </div>
            </div>

            <div className="mt-4 bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-semibold">
                🎯 هدف: درک عمیق staging area و commit های منطقی
              </p>
            </div>
          </div>

          {/* Exercise 3 */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
              <Search className="w-6 h-6 ml-2" />
              تمرین ۳: کاوش در تاریخچه
            </h3>
            <p className="text-purple-700 mb-4">
              با دستورات مختلف log آشنا شوید و یاد بگیرید چطور در تاریخچه جستجو
              کنید:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # ایجاد commit های بیشتر برای تمرین
                </div>
                <div className="text-white">{`echo "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;My Project&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;سلام دنیا&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;" > index.html`}</div>
                <div className="text-white">git add index.html</div>
                <div className="text-white">
                  git commit -m "Add HTML structure"
                </div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # آشنایی با انواع مختلف log
                </div>
                <div className="text-white">git log</div>
                <div className="text-white">git log --oneline</div>
                <div className="text-white">git log --graph --oneline</div>
                <div className="text-white">git log --stat</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2"># فیلتر کردن تاریخچه</div>
                <div className="text-white">git log --oneline -3</div>
                <div className="text-white">
                  git log --author="$(git config user.name)"
                </div>
                <div className="text-white">git log --since="1 hour ago"</div>
                <div className="text-white">git log --grep="Add"</div>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مشاهده تغییرات مشخص
                </div>
                <div className="text-white">git show HEAD</div>
                <div className="text-white">git show --name-only HEAD</div>
                <div className="text-white">git diff HEAD~1 HEAD</div>
              </div>
            </div>

            <div className="mt-4 bg-purple-100 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold">
                🎯 هدف: تسلط بر مشاهده و جستجو در تاریخچه Git
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Common Issues */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <AlertTriangle className="w-8 h-8 text-red-600 ml-3" />
          مشکلات رایج و راه‌حل‌های کامل
        </h2>

        <div className="space-y-6">
          {commonIssues.map((issue, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 ${
                issue.severity === "high"
                  ? "bg-red-50 border-red-200"
                  : issue.severity === "medium"
                  ? "bg-orange-50 border-orange-200"
                  : "bg-yellow-50 border-yellow-200"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      issue.severity === "high"
                        ? "text-red-800"
                        : issue.severity === "medium"
                        ? "text-orange-800"
                        : "text-yellow-800"
                    }`}
                  >
                    {issue.issue}
                  </h3>
                  <p
                    className={`mb-3 ${
                      issue.severity === "high"
                        ? "text-red-700"
                        : issue.severity === "medium"
                        ? "text-orange-700"
                        : "text-yellow-700"
                    }`}
                  >
                    {issue.description}
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      issue.severity === "high"
                        ? "bg-red-200 text-red-800"
                        : issue.severity === "medium"
                        ? "bg-orange-200 text-orange-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {issue.severity === "high"
                      ? "بحرانی"
                      : issue.severity === "medium"
                      ? "متوسط"
                      : "کم"}
                  </span>
                  <span className="text-xs text-gray-600">
                    {issue.frequency}
                  </span>
                </div>
              </div>

              <div
                className={`p-4 rounded-lg mb-4 ${
                  issue.severity === "high"
                    ? "bg-red-100"
                    : issue.severity === "medium"
                    ? "bg-orange-100"
                    : "bg-yellow-100"
                }`}
              >
                <strong
                  className={`${
                    issue.severity === "high"
                      ? "text-red-800"
                      : issue.severity === "medium"
                      ? "text-orange-800"
                      : "text-yellow-800"
                  }`}
                >
                  راه حل:
                </strong>
                <span
                  className={`mr-2 ${
                    issue.severity === "high"
                      ? "text-red-700"
                      : issue.severity === "medium"
                      ? "text-orange-700"
                      : "text-yellow-700"
                  }`}
                >
                  {issue.solution}
                </span>
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre-line overflow-x-auto">
                {issue.code}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Lightbulb className="w-8 h-8 text-yellow-600 ml-3" />
          بهترین روش‌های کار با Git
        </h2>

        <div className="space-y-6">
          {bestPractices.map((practice, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                <Star className="w-6 h-6 ml-2" />
                {practice.title}
              </h3>
              <p className="text-yellow-700 mb-4">{practice.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-800 mb-3">مثال‌ها:</h4>
                  <div className="bg-white p-4 rounded-lg border border-yellow-200">
                    {practice.examples.map((example, idx) => (
                      <div
                        key={idx}
                        className={`font-mono text-sm mb-2 ${
                          example.startsWith("✅")
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-3">نکته مهم:</h4>
                  <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                    <p className="text-yellow-700 text-sm">{practice.tips}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Play className="w-8 h-8 text-indigo-600 ml-3" />
          آماده برای مرحله بعد؟
        </h2>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                ✅ مهارت‌های کسب شده:
              </h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• درک کامل مفهوم Repository</li>
                <li>• تسلط بر چرخه کاری Git</li>
                <li>• استفاده از Staging Area</li>
                <li>• انجام commit های مناسب</li>
                <li>• مشاهده و جستجو در تاریخچه</li>
                <li>• حل مشکلات رایج</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                🚀 فصل چهارم:
              </h3>
              <ul className="space-y-2 text-purple-700">
                <li>• کار با Branch ها</li>
                <li>• Merge و Conflict Resolution</li>
                <li>• Remote Repository ها</li>
                <li>• Push و Pull</li>
                <li>• همکاری تیمی</li>
                <li>• GitHub و GitLab</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              🎯 چک‌لیست آمادگی برای فصل چهارم
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">
                    Repository ایجاد کرده‌ام
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">
                    Commit های مناسب انجام داده‌ام
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">با git log آشنا هستم</span>
                </label>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">Staging Area را می‌فهمم</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">
                    تمرین‌ها را کامل کرده‌ام
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <span className="text-gray-700">
                    آماده یادگیری Branch ها هستم!
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <GitBranch className="w-5 h-5 ml-2" />
              <span className="font-bold">
                بریم فصل چهارم: Branch ها و همکاری!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;
