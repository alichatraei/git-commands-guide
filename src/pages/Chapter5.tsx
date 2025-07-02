// Chapter: Git Merge Conflicts Resolution
import React, { useState } from "react";
import {
  AlertTriangle,
  GitMerge,
  FileX,
  CheckCircle,
  XCircle,
  Edit3,
  Settings,
  Target,
  Lightbulb,
  RefreshCw,
  Play,
  Terminal,
  Code,
  GitBranch,
  ArrowRight,
} from "lucide-react";

const GitMergeConflictsPage = () => {
  const [activeTab, setActiveTab] = useState("understanding");
  const [selectedFile, setSelectedFile] =
    useState<keyof typeof conflictScenario.files>("app.js");
  const [resolvedConflicts, setResolvedConflicts] = useState(new Set());
  const [conflictStep, setConflictStep] = useState(0);

  // Sample conflict data
  const conflictScenario = {
    files: {
      "app.js": {
        conflicts: [
          {
            id: 1,
            line: 15,
            current: 'const API_URL = "https://api.example.com/v1";',
            incoming: 'const API_URL = "https://api.example.com/v2";',
            type: "modification",
          },
          {
            id: 2,
            line: 23,
            current:
              "function getUserData(id) {\n  return fetch(`${API_URL}/users/${id}`);\n}",
            incoming:
              "async function getUserData(id) {\n  const response = await fetch(`${API_URL}/users/${id}`);\n  return response.json();\n}",
            type: "modification",
          },
        ],
      },
      "config.json": {
        conflicts: [
          {
            id: 3,
            line: 5,
            current: '"timeout": 5000,',
            incoming: '"timeout": 10000,',
            type: "modification",
          },
        ],
      },
      "package.json": {
        conflicts: [
          {
            id: 4,
            line: 12,
            current: '"react": "^17.0.2",',
            incoming: '"react": "^18.2.0",',
            type: "modification",
          },
        ],
      },
    },
  };

  const resolutionSteps = [
    {
      title: "شناسایی تعارضات",
      description: "Git به شما نشان می‌دهد کدام فایل‌ها دارای تعارض هستند",
      command: "git status",
      output:
        "Unmerged paths:\n  both modified:   app.js\n  both modified:   config.json",
    },
    {
      title: "بررسی فایل‌های تعارض",
      description: "فایل‌ها را باز کنید و نشانگرهای تعارض را پیدا کنید",
      command: "cat app.js",
      output:
        '<<<<<<< HEAD\nconst API_URL = "v1";\n=======\nconst API_URL = "v2";\n>>>>>>> feature-branch',
    },
    {
      title: "حل تعارض",
      description:
        "محتوای مناسب را انتخاب یا ترکیب کنید و نشانگرها را حذف کنید",
      command: "nano app.js",
      output: 'const API_URL = "v2"; // نسخه جدید انتخاب شد',
    },
    {
      title: "اضافه کردن فایل حل شده",
      description: "فایل‌های حل شده را به staging area اضافه کنید",
      command: "git add app.js config.json",
      output: "Changes staged for commit",
    },
    {
      title: "تکمیل Merge",
      description: "merge را با commit کردن تکمیل کنید",
      command: "git commit",
      output: "Merge completed successfully",
    },
  ];

  const tabs = [
    { id: "understanding", title: "درک تعارضات", icon: AlertTriangle },
    { id: "types", title: "انواع تعارضات", icon: FileX },
    { id: "resolution", title: "روش‌های حل", icon: Edit3 },
    { id: "tools", title: "ابزارها", icon: Settings },
    { id: "prevention", title: "پیشگیری", icon: Lightbulb },
    { id: "practice", title: "تمرین عملی", icon: Play },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Page Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <GitMerge className="w-12 h-12 text-red-600 ml-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            حل تعارضات Merge در Git
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          راهنمای جامع شناسایی، درک و حل کانفلیکت‌های Git هنگام ادغام branch ها
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex flex-wrap border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-red-50 text-red-700 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-4 h-4 ml-2" />
              {tab.title}
            </button>
          ))}
        </div>

        <div className="p-8">
          {/* Understanding Conflicts */}
          {activeTab === "understanding" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  تعارض (Conflict) چیست؟
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  تعارض زمانی رخ می‌دهد که Git نمی‌تواند به طور خودکار تغییرات
                  دو branch را با هم ترکیب کند
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    چرا تعارض رخ می‌دهد؟
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-blue-800">
                          تغییر همزمان خطوط
                        </h4>
                        <p className="text-blue-700 text-sm">
                          دو branch همان خط را به شکل متفاوت تغییر داده‌اند
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-blue-800">
                          حذف و تغییر همزمان
                        </h4>
                        <p className="text-blue-700 text-sm">
                          یک branch فایل را حذف، دیگری تغییر داده است
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-blue-800">
                          تغییر نام متفاوت
                        </h4>
                        <p className="text-blue-700 text-sm">
                          هر دو branch فایل را به نام متفاوت تغییر داده‌اند
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    مثال ساده تعارض
                  </h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <div className="text-yellow-400 mb-2"># Branch main:</div>
                    <div className="text-white">const version = "1.0.0";</div>

                    <div className="text-yellow-400 mt-3 mb-2">
                      # Branch feature:
                    </div>
                    <div className="text-white">const version = "2.0.0";</div>

                    <div className="text-yellow-400 mt-3 mb-2">
                      # نتیجه merge:
                    </div>
                    <div className="text-red-400">
                      CONFLICT (content): Merge conflict in config.js
                    </div>
                    <div className="text-red-400">Automatic merge failed</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  نشانگرهای تعارض
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-red-400">
                    &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                  </div>
                  <div className="text-white">
                    محتوای نسخه فعلی (branch فعلی)
                  </div>
                  <div className="text-blue-400">=======</div>
                  <div className="text-white">
                    محتوای نسخه ورودی (branch دیگر)
                  </div>
                  <div className="text-red-400">
                    &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch-name
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    <strong>HEAD:</strong> نسخه فعلی branch شما
                  </p>
                  <p>
                    <strong>=======:</strong> جداکننده دو نسخه
                  </p>
                  <p>
                    <strong>branch-name:</strong> نام branch ای که merge می‌کنید
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Types of Conflicts */}
          {activeTab === "types" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <FileX className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  انواع تعارضات Git
                </h2>
                <p className="text-gray-600">
                  شناخت انواع مختلف تعارضات و نحوه تشخیص آنها
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Content Conflict */}
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <FileX className="w-8 h-8 text-red-600 ml-3" />
                    <h3 className="text-xl font-bold text-red-800">
                      Content Conflict
                    </h3>
                  </div>
                  <p className="text-red-700 text-sm mb-4">
                    رایج‌ترین نوع تعارض که هنگام تغییر محتوای همان خطوط در دو
                    branch مختلف رخ می‌دهد.
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                    <div className="text-red-400">
                      &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                    </div>
                    <div className="text-white">console.log('Hello');</div>
                    <div className="text-blue-400">=======</div>
                    <div className="text-white">console.log('Hi there!');</div>
                    <div className="text-red-400">
                      &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
                    </div>
                  </div>
                  <div className="mt-3 text-red-600 text-xs">
                    <strong>حل:</strong> یکی از محتوا ها را انتخاب یا ترکیب کنید
                  </div>
                </div>

                {/* Delete/Modify Conflict */}
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <XCircle className="w-8 h-8 text-orange-600 ml-3" />
                    <h3 className="text-xl font-bold text-orange-800">
                      Delete/Modify
                    </h3>
                  </div>
                  <p className="text-orange-700 text-sm mb-4">
                    یک branch فایل را حذف کرده، اما branch دیگر همان فایل را
                    تغییر داده است.
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                    <div className="text-red-400">
                      CONFLICT (modify/delete):
                    </div>
                    <div className="text-white">
                      file.txt deleted in feature
                    </div>
                    <div className="text-white">and modified in HEAD</div>
                    <div className="text-yellow-400 mt-2">
                      Use (m)odified or (d)eleted version?
                    </div>
                  </div>
                  <div className="mt-3 text-orange-600 text-xs">
                    <strong>حل:</strong> تصمیم بگیرید فایل باقی بماند یا حذف شود
                  </div>
                </div>

                {/* Rename Conflict */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <RefreshCw className="w-8 h-8 text-yellow-600 ml-3" />
                    <h3 className="text-xl font-bold text-yellow-800">
                      Rename Conflict
                    </h3>
                  </div>
                  <p className="text-yellow-700 text-sm mb-4">
                    هر دو branch فایل را به نام‌های مختلف تغییر داده‌اند یا یکی
                    rename، دیگری modify کرده.
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                    <div className="text-red-400">
                      CONFLICT (rename/rename):
                    </div>
                    <div className="text-white">old.txt → new1.txt in HEAD</div>
                    <div className="text-white">
                      old.txt → new2.txt in feature
                    </div>
                  </div>
                  <div className="mt-3 text-yellow-600 text-xs">
                    <strong>حل:</strong> نام نهایی را انتخاب یا فایل‌ها را ادغام
                    کنید
                  </div>
                </div>
              </div>

              {/* Advanced Conflict Types */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  انواع پیشرفته‌تر تعارضات
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-purple-200 bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">
                        Submodule Conflicts
                      </h4>
                      <p className="text-purple-700 text-sm mb-2">
                        تعارض در submodule ها
                      </p>
                      <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                        <div className="text-red-400">
                          CONFLICT (submodule):
                        </div>
                        <div className="text-white">
                          Submodule lib/utils contains unmerged changes
                        </div>
                      </div>
                    </div>

                    <div className="border border-indigo-200 bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-bold text-indigo-800 mb-2">
                        Binary File Conflicts
                      </h4>
                      <p className="text-indigo-700 text-sm mb-2">
                        تعارض در فایل‌های باینری
                      </p>
                      <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                        <div className="text-red-400">CONFLICT (binary):</div>
                        <div className="text-white">
                          Cannot merge binary files: image.png
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-teal-200 bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-bold text-teal-800 mb-2">
                        Symlink Conflicts
                      </h4>
                      <p className="text-teal-700 text-sm mb-2">
                        تعارض در symbolic link ها
                      </p>
                      <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                        <div className="text-red-400">
                          CONFLICT (file/symlink):
                        </div>
                        <div className="text-white">
                          config is a symlink in HEAD but file in feature
                        </div>
                      </div>
                    </div>

                    <div className="border border-pink-200 bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-bold text-pink-800 mb-2">
                        Mode Conflicts
                      </h4>
                      <p className="text-pink-700 text-sm mb-2">
                        تعارض در مجوزهای فایل
                      </p>
                      <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                        <div className="text-red-400">CONFLICT (mode):</div>
                        <div className="text-white">
                          script.sh has different modes: 755 vs 644
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resolution Methods */}
          {activeTab === "resolution" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Edit3 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  روش‌های حل تعارض
                </h2>
                <p className="text-gray-600">
                  تکنیک‌های مختلف برای حل انواع تعارضات
                </p>
              </div>

              {/* Step by Step Process */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-6 text-center">
                  فرآیند قدم به قدم حل تعارض
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  {resolutionSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        conflictStep === index
                          ? "border-green-500 bg-white shadow-lg"
                          : "border-green-200 bg-green-50 hover:bg-white"
                      }`}
                      onClick={() => setConflictStep(index)}
                    >
                      <div className="text-center mb-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 ${
                            conflictStep === index
                              ? "bg-green-500"
                              : "bg-green-400"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-green-800 text-sm">
                          {step.title}
                        </h4>
                      </div>
                      {conflictStep === index && (
                        <div className="mt-3">
                          <p className="text-green-700 text-xs mb-2">
                            {step.description}
                          </p>
                          <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                            <div className="text-yellow-400">
                              $ {step.command}
                            </div>
                            <div className="text-white mt-1">{step.output}</div>
                          </div>
                        </div>
                      )}
                      {index < resolutionSteps.length - 1 && (
                        <ArrowRight className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 bg-white rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Manual Resolution */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  حل دستی تعارضات
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      مراحل حل دستی:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold ml-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">
                            شناسایی فایل‌های تعارض
                          </h5>
                          <p className="text-gray-600 text-sm">
                            با{" "}
                            <code className="bg-gray-100 px-1 rounded">
                              git status
                            </code>{" "}
                            فایل‌های unmerged را پیدا کنید
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold ml-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">
                            باز کردن فایل در ویرایشگر
                          </h5>
                          <p className="text-gray-600 text-sm">
                            فایل را در ویرایشگر مورد علاقه خود باز کنید
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold ml-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">
                            پیدا کردن نشانگرهای تعارض
                          </h5>
                          <p className="text-gray-600 text-sm">
                            دنبال{" "}
                            <code className="bg-gray-100 px-1 rounded">
                              &lt;&lt;&lt;&lt;&lt;&lt;&lt;
                            </code>{" "}
                            و{" "}
                            <code className="bg-gray-100 px-1 rounded">
                              &gt;&gt;&gt;&gt;&gt;&gt;&gt;
                            </code>{" "}
                            بگردید
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold ml-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">
                            انتخاب یا ترکیب محتوا
                          </h5>
                          <p className="text-gray-600 text-sm">
                            محتوای مناسب را انتخاب یا دو نسخه را ترکیب کنید
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold ml-3 mt-0.5 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">
                            حذف نشانگرها
                          </h5>
                          <p className="text-gray-600 text-sm">
                            تمام نشانگرهای تعارض را حذف کنید
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold ml-3 mt-0.5 flex-shrink-0">
                          6
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">
                            Add و Commit
                          </h5>
                          <p className="text-gray-600 text-sm">
                            فایل را add کرده و merge را commit کنید
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">مثال عملی:</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-3">
                      <div>
                        <div className="text-yellow-400"># 1. بررسی وضعیت</div>
                        <div className="text-white">$ git status</div>
                        <div className="text-red-400 text-xs">
                          Unmerged paths: app.js
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># 2. مشاهده تعارض</div>
                        <div className="text-white">$ cat app.js</div>
                        <div className="text-red-400 text-xs">
                          &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                        </div>
                        <div className="text-white text-xs">
                          const version = "1.0";
                        </div>
                        <div className="text-blue-400 text-xs">=======</div>
                        <div className="text-white text-xs">
                          const version = "2.0";
                        </div>
                        <div className="text-red-400 text-xs">
                          &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400">
                          # 3. حل تعارض (انتخاب نسخه 2.0)
                        </div>
                        <div className="text-white">$ nano app.js</div>
                        <div className="text-green-400 text-xs">
                          const version = "2.0";
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># 4. تکمیل merge</div>
                        <div className="text-white">$ git add app.js</div>
                        <div className="text-white">$ git commit</div>
                        <div className="text-green-400 text-xs">
                          Merge completed successfully
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resolution Strategies */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  استراتژی‌های حل تعارض
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600 ml-2" />
                      <h4 className="font-bold text-green-800">
                        Accept Current (Ours)
                      </h4>
                    </div>
                    <p className="text-green-700 text-sm mb-3">
                      نسخه فعلی (HEAD) را انتخاب کنید و تغییرات ورودی را نادیده
                      بگیرید.
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                      <div className="text-white">
                        git checkout --ours filename
                      </div>
                      <div className="text-white">git add filename</div>
                    </div>
                  </div>

                  <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Target className="w-6 h-6 text-blue-600 ml-2" />
                      <h4 className="font-bold text-blue-800">
                        Accept Incoming (Theirs)
                      </h4>
                    </div>
                    <p className="text-blue-700 text-sm mb-3">
                      نسخه ورودی را انتخاب کنید و تغییرات فعلی را نادیده بگیرید.
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                      <div className="text-white">
                        git checkout --theirs filename
                      </div>
                      <div className="text-white">git add filename</div>
                    </div>
                  </div>

                  <div className="border border-purple-200 bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <GitMerge className="w-6 h-6 text-purple-600 ml-2" />
                      <h4 className="font-bold text-purple-800">
                        Manual Merge
                      </h4>
                    </div>
                    <p className="text-purple-700 text-sm mb-3">
                      هر دو نسخه را بررسی کرده و به صورت دستی ترکیب کنید.
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                      <div className="text-white">nano filename</div>
                      <div className="text-white">git add filename</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Resolution Commands */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  دستورات پیشرفته حل تعارض
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      دستورات سریع:
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>
                        <div className="text-yellow-400">
                          # انتخاب همه فایل‌ها از نسخه فعلی
                        </div>
                        <div className="text-white">git checkout --ours .</div>
                      </div>
                      <div>
                        <div className="text-yellow-400">
                          # انتخاب همه فایل‌ها از نسخه ورودی
                        </div>
                        <div className="text-white">
                          git checkout --theirs .
                        </div>
                      </div>
                      <div>
                        <div className="text-yellow-400">
                          # لغو merge در حین انجام
                        </div>
                        <div className="text-white">git merge --abort</div>
                      </div>
                      <div>
                        <div className="text-yellow-400">
                          # ادامه merge بعد از حل تعارضات
                        </div>
                        <div className="text-white">git merge --continue</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      بررسی تعارضات:
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>
                        <div className="text-yellow-400">
                          # لیست فایل‌های دارای تعارض
                        </div>
                        <div className="text-white">
                          git diff --name-only --diff-filter=U
                        </div>
                      </div>
                      <div>
                        <div className="text-yellow-400">
                          # مشاهده تعارضات فایل مشخص
                        </div>
                        <div className="text-white">git diff filename</div>
                      </div>
                      <div>
                        <div className="text-yellow-400">
                          # مقایسه با نسخه‌های مختلف
                        </div>
                        <div className="text-white">
                          git show :1:filename # common ancestor
                        </div>
                        <div className="text-white">
                          git show :2:filename # ours (HEAD)
                        </div>
                        <div className="text-white">
                          git show :3:filename # theirs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tools */}
          {activeTab === "tools" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Settings className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ابزارهای حل تعارض
                </h2>
                <p className="text-gray-600">
                  ابزارهای گرافیکی و خط فرمان برای حل آسان‌تر تعارضات
                </p>
              </div>

              {/* Built-in Git Tools */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  ابزارهای داخلی Git
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-3">
                      Git Mergetool
                    </h4>
                    <p className="text-blue-700 text-sm mb-3">
                      ابزار داخلی Git برای راه‌اندازی merge tool های خارجی
                    </p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm space-y-1">
                      <div className="text-yellow-400"># راه‌اندازی</div>
                      <div className="text-white">
                        git config --global merge.tool vimdiff
                      </div>
                      <div className="text-white">
                        git config --global merge.tool meld
                      </div>
                      <div className="text-white">
                        git config --global merge.tool code
                      </div>

                      <div className="text-yellow-400 mt-2"># استفاده</div>
                      <div className="text-white">git mergetool</div>
                      <div className="text-white">git mergetool filename</div>
                    </div>
                  </div>

                  <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-3">
                      Git Difftool
                    </h4>
                    <p className="text-green-700 text-sm mb-3">
                      برای مقایسه فایل‌ها قبل از حل تعارض
                    </p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm space-y-1">
                      <div className="text-yellow-400"># راه‌اندازی</div>
                      <div className="text-white">
                        git config --global diff.tool vimdiff
                      </div>

                      <div className="text-yellow-400 mt-2">
                        # مقایسه تعارضات
                      </div>
                      <div className="text-white">git difftool</div>
                      <div className="text-white">git difftool --staged</div>
                      <div className="text-white">git difftool HEAD~1</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Merge Tools */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  ابزارهای گرافیکی محبوب
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* VS Code */}
                  <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Code className="w-8 h-8 text-blue-600 ml-3" />
                      <h4 className="font-bold text-blue-800">VS Code</h4>
                    </div>
                    <p className="text-blue-700 text-sm mb-3">
                      ویرایشگر محبوب با پشتیبانی عالی از Git conflicts
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400"># تنظیم</div>
                      <div className="text-white">
                        git config --global merge.tool vscode
                      </div>
                      <div className="text-white">
                        git config --global mergetool.vscode.cmd
                      </div>
                      <div className="text-white">
                        'code --wait --merge $REMOTE $LOCAL $BASE $MERGED'
                      </div>
                    </div>
                    <div className="mt-3 text-blue-600 text-xs">
                      ✅ رایگان، آسان، پشتیبانی IntelliSense
                    </div>
                  </div>

                  {/* Meld */}
                  <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <GitMerge className="w-8 h-8 text-green-600 ml-3" />
                      <h4 className="font-bold text-green-800">Meld</h4>
                    </div>
                    <p className="text-green-700 text-sm mb-3">
                      ابزار قدرتمند و رایگان برای مقایسه و merge
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400">
                        # نصب (Ubuntu/Debian)
                      </div>
                      <div className="text-white">sudo apt install meld</div>

                      <div className="text-yellow-400 mt-1"># تنظیم</div>
                      <div className="text-white">
                        git config --global merge.tool meld
                      </div>
                    </div>
                    <div className="mt-3 text-green-600 text-xs">
                      ✅ رایگان، نمایش سه‌طرفه، Linux/Windows/Mac
                    </div>
                  </div>

                  {/* Beyond Compare */}
                  <div className="border border-purple-200 bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Target className="w-8 h-8 text-purple-600 ml-3" />
                      <h4 className="font-bold text-purple-800">
                        Beyond Compare
                      </h4>
                    </div>
                    <p className="text-purple-700 text-sm mb-3">
                      ابزار حرفه‌ای و قدرتمند (پولی)
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400"># تنظیم</div>
                      <div className="text-white">
                        git config --global merge.tool bc
                      </div>
                      <div className="text-white">
                        git config --global mergetool.bc.cmd
                      </div>
                      <div className="text-white">
                        'bcomp "$LOCAL" "$REMOTE" "$BASE" "$MERGED"'
                      </div>
                    </div>
                    <div className="mt-3 text-purple-600 text-xs">
                      ✅ حرفه‌ای، سریع، فیچرهای پیشرفته
                    </div>
                  </div>

                  {/* KDiff3 */}
                  <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <RefreshCw className="w-8 h-8 text-orange-600 ml-3" />
                      <h4 className="font-bold text-orange-800">KDiff3</h4>
                    </div>
                    <p className="text-orange-700 text-sm mb-3">
                      ابزار رایگان با قابلیت merge خودکار
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400"># تنظیم</div>
                      <div className="text-white">
                        git config --global merge.tool kdiff3
                      </div>
                    </div>
                    <div className="mt-3 text-orange-600 text-xs">
                      ✅ رایگان، merge خودکار، cross-platform
                    </div>
                  </div>

                  {/* P4Merge */}
                  <div className="border border-teal-200 bg-teal-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <GitBranch className="w-8 h-8 text-teal-600 ml-3" />
                      <h4 className="font-bold text-teal-800">P4Merge</h4>
                    </div>
                    <p className="text-teal-700 text-sm mb-3">
                      ابزار رایگان Perforce با UI ساده
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400"># تنظیم</div>
                      <div className="text-white">
                        git config --global merge.tool p4merge
                      </div>
                    </div>
                    <div className="mt-3 text-teal-600 text-xs">
                      ✅ رایگان، ساده، نمایش بصری خوب
                    </div>
                  </div>

                  {/* Vim/Neovim */}
                  <div className="border border-gray-300 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Terminal className="w-8 h-8 text-gray-600 ml-3" />
                      <h4 className="font-bold text-gray-800">Vim/Neovim</h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      ویرایشگر خط فرمان برای کاربران پیشرفته
                    </p>
                    <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400"># تنظیم</div>
                      <div className="text-white">
                        git config --global merge.tool vimdiff
                      </div>
                    </div>
                    <div className="mt-3 text-gray-600 text-xs">
                      ✅ سریع، قدرتمند، در همه جا موجود
                    </div>
                  </div>
                </div>
              </div>

              {/* IDE Integration */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  ادغام با IDE ها
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      IDE های محبوب:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <Code className="w-6 h-6 text-blue-600 ml-3" />
                        <div>
                          <h5 className="font-bold text-blue-800">
                            IntelliJ IDEA / WebStorm
                          </h5>
                          <p className="text-blue-600 text-sm">
                            پشتیبانی کامل از Git conflicts با UI گرافیکی
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                        <GitBranch className="w-6 h-6 text-green-600 ml-3" />
                        <div>
                          <h5 className="font-bold text-green-800">Eclipse</h5>
                          <p className="text-green-600 text-sm">
                            EGit plugin با merge tool داخلی
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <Settings className="w-6 h-6 text-purple-600 ml-3" />
                        <div>
                          <h5 className="font-bold text-purple-800">
                            Sublime Text / Atom
                          </h5>
                          <p className="text-purple-600 text-sm">
                            پلاگین‌های Git با قابلیت حل تعارض
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      تنظیم سریع:
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>
                        <div className="text-yellow-400"># VS Code</div>
                        <div className="text-white">
                          git config --global merge.tool vscode
                        </div>
                        <div className="text-white">
                          git config --global mergetool.vscode.cmd
                        </div>
                        <div className="text-white">
                          'code --wait --merge $REMOTE $LOCAL $BASE $MERGED'
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># IntelliJ IDEA</div>
                        <div className="text-white">
                          git config --global merge.tool idea
                        </div>
                        <div className="text-white">
                          git config --global mergetool.idea.cmd
                        </div>
                        <div className="text-white">
                          'idea merge $LOCAL $REMOTE $BASE $MERGED'
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># استفاده</div>
                        <div className="text-white">git mergetool</div>
                        <div className="text-green-400 text-xs">
                          ابزار تنظیم شده باز می‌شود
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Prevention */}
          {activeTab === "prevention" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  پیشگیری از تعارضات
                </h2>
                <p className="text-gray-600">
                  بهترین روش‌ها برای کاهش احتمال بروز conflict
                </p>
              </div>

              {/* Best Practices */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-6">
                  بهترین روش‌های کاری
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800">
                          به‌روزرسانی مکرر
                        </h4>
                        <p className="text-green-700 text-sm">
                          به طور منظم از main branch به‌روزرسانی کنید تا تغییرات
                          انباشته نشوند.
                        </p>
                        <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mt-2">
                          <div className="text-white">git pull origin main</div>
                          <div className="text-white">
                            git merge main # یا rebase
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800">
                          تقسیم کار به قسمت‌های کوچک
                        </h4>
                        <p className="text-green-700 text-sm">
                          feature های کوچک‌تر کمتر با یکدیگر تداخل دارند.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800">
                          هماهنگی تیمی
                        </h4>
                        <p className="text-green-700 text-sm">
                          قبل از کار روی فایل‌های مشترک با تیم هماهنگ کنید.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800">
                          استفاده از .gitattributes
                        </h4>
                        <p className="text-green-700 text-sm">
                          تنظیم merge strategy برای فایل‌های خاص.
                        </p>
                        <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mt-2">
                          <div className="text-white">
                            *.generated merge=ours
                          </div>
                          <div className="text-white">
                            package-lock.json merge=union
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800">
                          استفاده از Rebase
                        </h4>
                        <p className="text-green-700 text-sm">
                          rebase کردن به جای merge برای تاریخچه تمیزتر.
                        </p>
                        <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mt-2">
                          <div className="text-white">git rebase main</div>
                          <div className="text-white">git rebase -i HEAD~3</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800">
                          تست قبل از Merge
                        </h4>
                        <p className="text-green-700 text-sm">
                          همیشه تغییرات را تست کنید قبل از merge کردن.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Workflow */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  سازماندهی کار تیمی
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-3">Git Flow</h4>
                    <p className="text-blue-700 text-sm mb-3">
                      استراتژی branching با branch های مشخص برای هر نوع کار
                    </p>
                    <div className="text-blue-600 text-xs space-y-1">
                      <div>• main: کد production</div>
                      <div>• develop: کد در حال توسعه</div>
                      <div>• feature/*: ویژگی‌های جدید</div>
                      <div>• hotfix/*: رفع باگ‌های فوری</div>
                    </div>
                  </div>

                  <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-3">
                      GitHub Flow
                    </h4>
                    <p className="text-green-700 text-sm mb-3">
                      روش ساده‌تر با main branch و feature branch ها
                    </p>
                    <div className="text-green-600 text-xs space-y-1">
                      <div>• main: همیشه deployable</div>
                      <div>• feature branch از main</div>
                      <div>• Pull Request برای merge</div>
                      <div>• Deploy بعد از merge</div>
                    </div>
                  </div>

                  <div className="border border-purple-200 bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-3">
                      GitLab Flow
                    </h4>
                    <p className="text-purple-700 text-sm mb-3">
                      ترکیب Git Flow و GitHub Flow با environment branch ها
                    </p>
                    <div className="text-purple-600 text-xs space-y-1">
                      <div>• main: development</div>
                      <div>• pre-production: staging</div>
                      <div>• production: live</div>
                      <div>• feature branches</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuration Tips */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  تنظیمات پیشگیرانه
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      تنظیمات Git مفید:
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>
                        <div className="text-yellow-400">
                          # تنظیم merge strategy پیش‌فرض
                        </div>
                        <div className="text-white">
                          git config --global merge.ours.driver true
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400">
                          # نمایش بهتر تعارضات
                        </div>
                        <div className="text-white">
                          git config --global merge.conflictstyle diff3
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400">
                          # خودکار cleanup بعد از merge
                        </div>
                        <div className="text-white">
                          git config --global mergetool.keepBackup false
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400">
                          # تنظیم rerere برای تعارضات تکراری
                        </div>
                        <div className="text-white">
                          git config --global rerere.enabled true
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      فایل .gitattributes:
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>
                        <div className="text-yellow-400">
                          # تنظیم merge برای فایل‌های خاص
                        </div>
                        <div className="text-white">*.generated merge=ours</div>
                        <div className="text-white">
                          CHANGELOG.md merge=union
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># فایل‌های باینری</div>
                        <div className="text-white">*.jpg binary</div>
                        <div className="text-white">*.png binary</div>
                        <div className="text-white">*.pdf binary</div>
                      </div>

                      <div>
                        <div className="text-yellow-400">
                          # تنظیم line ending
                        </div>
                        <div className="text-white">* text=auto</div>
                        <div className="text-white">*.js text eol=lf</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Guidelines */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-6">
                  راهنمای ارتباط تیمی
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-yellow-800">
                      قبل از شروع کار:
                    </h4>
                    <div className="space-y-2 text-yellow-700 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full ml-2"></div>
                        اعلام کنید روی کدام فایل‌ها کار می‌کنید
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full ml-2"></div>
                        از آخرین تغییرات main مطلع شوید
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full ml-2"></div>
                        برنامه کاری خود را با تیم هماهنگ کنید
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-yellow-800">حین کار:</h4>
                    <div className="space-y-2 text-yellow-700 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full ml-2"></div>
                        commit های کوچک و منظم بزنید
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full ml-2"></div>
                        پیام‌های commit واضح بنویسید
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full ml-2"></div>
                        به طور منظم pull کنید
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Practice */}
          {activeTab === "practice" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Play className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  تمرین عملی
                </h2>
                <p className="text-gray-600">
                  شبیه‌سازی تعارضات واقعی و تمرین حل آنها
                </p>
              </div>

              {/* Interactive Conflict Simulator */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  شبیه‌ساز تعارض
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* File Selection */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-3">
                      انتخاب فایل:
                    </h4>
                    <div className="space-y-2">
                      {Object.keys(conflictScenario.files).map((filename) => {
                        const typedFilename = filename as keyof typeof conflictScenario.files;
                        return (
                          <button
                            key={filename}
                            onClick={() => setSelectedFile(typedFilename)}
                            className={`w-full text-left p-2 rounded border transition-colors ${
                              selectedFile === filename
                                ? "border-blue-500 bg-blue-50 text-blue-800"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-sm">
                                {filename}
                              </span>
                              <span className="text-xs text-red-600">
                                {
                                  conflictScenario.files[typedFilename].conflicts
                                    .length
                                }{" "}
                                تعارض
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Conflict Display */}
                  <div className="lg:col-span-2 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-3">
                      محتوای {selectedFile}:
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-4">
                      {conflictScenario.files[selectedFile].conflicts.map(
                        (conflict) => (
                          <div
                            key={conflict.id}
                            className="border border-gray-600 rounded p-3"
                          >
                            <div className="text-yellow-400 mb-2">
                              خط {conflict.line}:
                            </div>
                            <div className="space-y-1">
                              <div className="text-red-400">
                                &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                              </div>
                              <div className="text-white bg-red-900 bg-opacity-30 p-1 rounded">
                                {conflict.current}
                              </div>
                              <div className="text-blue-400">=======</div>
                              <div className="text-white bg-green-900 bg-opacity-30 p-1 rounded">
                                {conflict.incoming}
                              </div>
                              <div className="text-red-400">
                                &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch
                              </div>
                            </div>

                            <div className="mt-3 flex gap-2">
                              <button
                                onClick={() => {
                                  const newResolved = new Set(
                                    resolvedConflicts
                                  );
                                  newResolved.add(conflict.id);
                                  setResolvedConflicts(newResolved);
                                }}
                                className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                                disabled={resolvedConflicts.has(conflict.id)}
                              >
                                {resolvedConflicts.has(conflict.id)
                                  ? "✓ حل شده"
                                  : "انتخاب Incoming"}
                              </button>
                              <button
                                onClick={() => {
                                  const newResolved = new Set(
                                    resolvedConflicts
                                  );
                                  newResolved.add(conflict.id);
                                  setResolvedConflicts(newResolved);
                                }}
                                className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
                                disabled={resolvedConflicts.has(conflict.id)}
                              >
                                انتخاب Current
                              </button>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-800">پیشرفت:</span>
                    <span className="text-sm text-gray-600">
                      {resolvedConflicts.size} از{" "}
                      {Object.values(conflictScenario.files).reduce(
                        (acc, file) => acc + file.conflicts.length,
                        0
                      )}{" "}
                      تعارض حل شده
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (resolvedConflicts.size /
                            Object.values(conflictScenario.files).reduce(
                              (acc, file) => acc + file.conflicts.length,
                              0
                            )) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Common Scenarios */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  سناریوهای متداول
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-3">
                      سناریو 1: تغییر API URL
                    </h4>
                    <p className="text-red-700 text-sm mb-3">
                      دو developer همزمان URL API را تغییر داده‌اند
                    </p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                      <div className="text-red-400">
                        &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                      </div>
                      <div className="text-white">
                        const API_URL = "https://api.old.com";
                      </div>
                      <div className="text-blue-400">=======</div>
                      <div className="text-white">
                        const API_URL = "https://api.new.com";
                      </div>
                      <div className="text-red-400">
                        &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
                      </div>
                    </div>
                    <div className="mt-3 text-red-600 text-xs">
                      <strong>راه حل:</strong> بررسی کنید کدام URL صحیح است و آن
                      را انتخاب کنید
                    </div>
                  </div>

                  <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-3">
                      سناریو 2: تغییر نام function
                    </h4>
                    <p className="text-orange-700 text-sm mb-3">
                      یک نفر function را rename، دیگری محتوای آن را تغییر داده
                    </p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                      <div className="text-red-400">
                        &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                      </div>
                      <div className="text-white">
                        function getUserData() {`{...}`}
                      </div>
                      <div className="text-blue-400">=======</div>
                      <div className="text-white">
                        function fetchUserInfo() {`{...}`}
                      </div>
                      <div className="text-red-400">
                        &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
                      </div>
                    </div>
                    <div className="mt-3 text-orange-600 text-xs">
                      <strong>راه حل:</strong> نام جدید را انتخاب و محتوای
                      به‌روز را اعمال کنید
                    </div>
                  </div>

                  <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-3">
                      سناریو 3: اضافه کردن import
                    </h4>
                    <p className="text-green-700 text-sm mb-3">
                      هر دو نفر import های مختلف اضافه کرده‌اند
                    </p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                      <div className="text-red-400">
                        &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                      </div>
                      <div className="text-white">
                        import {`{ axios }`} from 'axios';
                      </div>
                      <div className="text-blue-400">=======</div>
                      <div className="text-white">
                        import {`{ fetch }`} from 'node-fetch';
                      </div>
                      <div className="text-red-400">
                        &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
                      </div>
                    </div>
                    <div className="mt-3 text-green-600 text-xs">
                      <strong>راه حل:</strong> هر دو import را نگه دارید (اگر
                      نیاز است)
                    </div>
                  </div>

                  <div className="border border-purple-200 bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-3">
                      سناریو 4: تغییر package.json
                    </h4>
                    <p className="text-purple-700 text-sm mb-3">
                      dependency های مختلف اضافه شده است
                    </p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                      <div className="text-red-400">
                        &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                      </div>
                      <div className="text-white">"lodash": "^4.17.21",</div>
                      <div className="text-blue-400">=======</div>
                      <div className="text-white">"moment": "^2.29.4",</div>
                      <div className="text-red-400">
                        &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
                      </div>
                    </div>
                    <div className="mt-3 text-purple-600 text-xs">
                      <strong>راه حل:</strong> هر دو dependency را نگه دارید
                    </div>
                  </div>
                </div>
              </div>

              {/* Practice Commands */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  دستورات تمرینی
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">
                      ایجاد تعارض برای تمرین:
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>
                        <div className="text-yellow-400"># ایجاد repo جدید</div>
                        <div className="text-white">
                          git init conflict-practice
                        </div>
                        <div className="text-white">cd conflict-practice</div>
                      </div>

                      <div>
                        <div className="text-yellow-400">
                          # ایجاد فایل اولیه
                        </div>
                        <div className="text-white">
                          echo "line 1" &gt; file.txt
                        </div>
                        <div className="text-white">git add file.txt</div>
                        <div className="text-white">
                          git commit -m "initial commit"
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400">
                          # ایجاد branch جدید
                        </div>
                        <div className="text-white">
                          git checkout -b feature
                        </div>
                        <div className="text-white">
                          echo "line 1 modified in feature" &gt; file.txt
                        </div>
                        <div className="text-white">
                          git commit -am "modify in feature"
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># تغییر در main</div>
                        <div className="text-white">git checkout main</div>
                        <div className="text-white">
                          echo "line 1 modified in main" &gt; file.txt
                        </div>
                        <div className="text-white">
                          git commit -am "modify in main"
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># ایجاد تعارض</div>
                        <div className="text-white">git merge feature</div>
                        <div className="text-red-400">CONFLICT!</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">حل تعارض:</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                      <div>
                        <div className="text-yellow-400"># بررسی وضعیت</div>
                        <div className="text-white">git status</div>
                        <div className="text-red-400 text-xs">
                          both modified: file.txt
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># مشاهده تعارض</div>
                        <div className="text-white">cat file.txt</div>
                        <div className="text-red-400 text-xs">
                          &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                        </div>
                        <div className="text-white text-xs">
                          line 1 modified in main
                        </div>
                        <div className="text-blue-400 text-xs">=======</div>
                        <div className="text-white text-xs">
                          line 1 modified in feature
                        </div>
                        <div className="text-red-400 text-xs">
                          &gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># حل دستی</div>
                        <div className="text-white">nano file.txt</div>
                        <div className="text-gray-400 text-xs">
                          # حذف نشانگرها و انتخاب محتوا
                        </div>
                      </div>

                      <div>
                        <div className="text-yellow-400"># تکمیل merge</div>
                        <div className="text-white">git add file.txt</div>
                        <div className="text-white">git commit</div>
                        <div className="text-green-400 text-xs">
                          Merge successful!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips for Practice */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  نکات تمرینی
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-blue-800">
                      تمرینات پیشنهادی:
                    </h4>
                    <div className="space-y-2 text-blue-700 text-sm">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>روزانه یک تعارض ساده ایجاد و حل کنید</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>انواع مختلف تعارض را تمرین کنید</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>با ابزارهای مختلف merge آشنا شوید</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>تعارضات پیچیده‌تر را شبیه‌سازی کنید</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-blue-800">منابع یادگیری:</h4>
                    <div className="space-y-2 text-blue-700 text-sm">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>Git documentation رسمی</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>وب‌سایت‌های تمرین آنلاین</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>پروژه‌های open source</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 ml-2 flex-shrink-0"></div>
                        <div>کار تیمی در پروژه‌های واقعی</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitMergeConflictsPage;
