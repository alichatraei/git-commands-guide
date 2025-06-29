import { useEffect, useState } from "react";
import {
  GitBranch,
  Plus,
  Eye,
  ArrowRightLeft,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Code,
  Users,
  Settings,
  Database,
  RefreshCw,
  Crown,
  Zap,
  Play,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";

const GitBranchChapter = () => {
  type SectionKey = keyof typeof sections;
  const [activeSection, setActiveSection] = useState<SectionKey>("intro");
  const [activeBranch, setActiveBranch] =
    useState<keyof typeof sampleBranches>("main");
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    const navbar = document.querySelector(".main-navbar");
    if (navbar) {
      setNavbarHeight(navbar.clientHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sample branch data for interactive examples
  const sampleBranches = {
    main: { commits: 15, status: "active", color: "blue" },
    "feature/login": { commits: 8, status: "development", color: "green" },
    "feature/dashboard": { commits: 5, status: "development", color: "purple" },
    "hotfix/security": { commits: 2, status: "urgent", color: "red" },
    "release/v2.0": { commits: 12, status: "testing", color: "orange" },
  };

  const sections = {
    intro: {
      title: "مقدمه و مفاهیم پایه",
      icon: BookOpen,
      content: (
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <GitBranch className="w-16 h-16 ml-4" />
              <div>
                <h2 className="text-4xl font-bold mb-2">Git Branch چیست؟</h2>
                <p className="text-xl opacity-90">
                  راهنمای کامل کار با شاخه‌های Git
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <h3 className="font-bold mb-2">🌳 شاخه‌بندی</h3>
                <p className="text-sm opacity-90">ایجاد مسیرهای مستقل توسعه</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <h3 className="font-bold mb-2">🔄 همکاری</h3>
                <p className="text-sm opacity-90">
                  کار همزمان روی ویژگی‌های مختلف
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                <h3 className="font-bold mb-2">🛡️ امنیت</h3>
                <p className="text-sm opacity-90">حفاظت از کد اصلی پروژه</p>
              </div>
            </div>
          </div>

          {/* What is Branch */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Branch یعنی چه؟
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Branch در Git مثل یک شاخه درخت است که از نقطه‌ای مشترک جدا شده
                  و مسیر مستقل خودش را دارد. هر branch نشان‌دهنده یک خط توسعه
                  مستقل است که می‌تواند تغییرات مختلفی داشته باشد.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">
                    💡 مثال ساده:
                  </h4>
                  <p className="text-blue-700 text-sm">
                    فرض کنید شما و دوستتان روی یک پروژه کار می‌کنید. شما روی
                    صفحه ورود و دوستتان روی صفحه ثبت‌نام کار می‌کند. هر کدام یک
                    branch جداگانه دارید.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full ml-3"></div>
                    <span className="font-mono text-sm">main</span>
                    <span className="text-gray-500 text-xs mr-2">
                      (شاخه اصلی)
                    </span>
                  </div>
                  <div className="mr-4 border-r-2 border-gray-300 pr-4 space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                      <span className="font-mono text-sm">feature/login</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full ml-3"></div>
                      <span className="font-mono text-sm">feature/signup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Use Branches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 ml-2" />
                چرا Branch استفاده کنیم؟
              </h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>جداسازی ویژگی‌ها:</strong> هر ویژگی در branch مستقل
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>کار تیمی:</strong> همکاری بدون تداخل
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>آزمایش امن:</strong> تست ایده‌های جدید بدون خطر
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>مدیریت نسخه‌ها:</strong> کنترل بهتر انتشار
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 ml-2" />
                بدون Branch چه مشکلاتی داریم؟
              </h3>
              <ul className="space-y-3 text-orange-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>تداخل کدها:</strong> تغییرات همدیگر را خراب می‌کنند
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>کد ناپایدار:</strong> main branch همیشه شکسته
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>صف انتظار:</strong> باید نوبت کار کردن بگیرید
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <div>
                    <strong>بازگشت سخت:</strong> برگشت تغییرات پیچیده
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Branch Types */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              انواع Branch ها
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Crown className="w-5 h-5 text-blue-600 ml-2" />
                  <h4 className="font-bold text-blue-800">Main/Master</h4>
                </div>
                <p className="text-blue-700 text-sm">
                  شاخه اصلی پروژه که کد پایدار در آن قرار دارد
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Zap className="w-5 h-5 text-green-600 ml-2" />
                  <h4 className="font-bold text-green-800">Feature</h4>
                </div>
                <p className="text-green-700 text-sm">
                  برای توسعه ویژگی‌های جدید استفاده می‌شود
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 ml-2" />
                  <h4 className="font-bold text-red-800">Hotfix</h4>
                </div>
                <p className="text-red-700 text-sm">
                  برای رفع باگ‌های فوری در production
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-purple-600 ml-2" />
                  <h4 className="font-bold text-purple-800">Release</h4>
                </div>
                <p className="text-purple-700 text-sm">
                  برای آماده‌سازی نسخه جدید
                </p>
              </div>
            </div>
          </div>

          {/* Basic Commands Preview */}
          <div className="bg-gray-900 text-green-400 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Code className="w-6 h-6 ml-2" />
              دستورات پایه (پیش‌نمایش)
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex">
                <span className="text-yellow-400 w-32">مشاهده:</span>
                <span className="text-white">git branch</span>
              </div>
              <div className="flex">
                <span className="text-yellow-400 w-32">ایجاد:</span>
                <span className="text-white">git branch feature/new</span>
              </div>
              <div className="flex">
                <span className="text-yellow-400 w-32">تغییر:</span>
                <span className="text-white">git switch feature/new</span>
              </div>
              <div className="flex">
                <span className="text-yellow-400 w-32">حذف:</span>
                <span className="text-white">git branch -d feature/old</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              💡 در بخش‌های بعدی هر کدام را به تفصیل یاد خواهیم گرفت
            </p>
          </div>
        </div>
      ),
    },

    viewing: {
      title: "مشاهده Branch ها",
      icon: Eye,
      content: (
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-indigo-600 ml-3" />
              <div>
                <h2 className="text-3xl font-bold text-indigo-800">
                  مشاهده Branch ها
                </h2>
                <p className="text-indigo-600">
                  روش‌های مختلف نمایش و بررسی شاخه‌ها
                </p>
              </div>
            </div>
          </div>

          {/* Basic Viewing */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              دستورات پایه مشاهده
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # مشاهده تمام branch های محلی
                </div>
                <div className="text-white">git branch</div>
                <div className="text-green-400 mt-2"> feature/login</div>
                <div className="text-green-400">* main</div>
                <div className="text-green-400"> feature/dashboard</div>

                <div className="text-yellow-400 mt-4 mb-2">
                  # مشاهده branch های remote
                </div>
                <div className="text-white">git branch -r</div>
                <div className="text-red-400 mt-2"> origin/main</div>
                <div className="text-red-400"> origin/feature/login</div>

                <div className="text-yellow-400 mt-4 mb-2">
                  # مشاهده همه (محلی + remote)
                </div>
                <div className="text-white">git branch -a</div>
                <div className="text-green-400 mt-2"> feature/login</div>
                <div className="text-green-400">* main</div>
                <div className="text-red-400"> remotes/origin/main</div>
                <div className="text-red-400">
                  {" "}
                  remotes/origin/feature/login
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">💡 نکات مهم:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• ستاره (*) نشان‌دهنده branch فعلی است</li>
                  <li>• رنگ سبز: branch های محلی</li>
                  <li>• رنگ قرمز: branch های remote</li>
                  <li>• -r فقط remote ها را نشان می‌دهد</li>
                  <li>• -a همه branch ها را نمایش می‌دهد</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Viewing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                مشاهده با جزئیات
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2">
                    # آخرین commit هر branch
                  </div>
                  <div className="text-white">git branch -v</div>
                  <div className="text-green-400 mt-2">
                    {" "}
                    feature/login 1a2b3c4 Add login form
                  </div>
                  <div className="text-green-400">
                    * main 5d6e7f8 Update README
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # branch های merge شده
                  </div>
                  <div className="text-white">git branch --merged</div>
                  <div className="text-green-400 mt-1">
                    {" "}
                    feature/old-feature
                  </div>
                  <div className="text-green-400">* main</div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # branch های merge نشده
                  </div>
                  <div className="text-white">git branch --no-merged</div>
                  <div className="text-green-400 mt-1">
                    {" "}
                    feature/in-progress
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                فیلتر و جستجو
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2">
                    # جستجوی branch با الگو
                  </div>
                  <div className="text-white">
                    git branch --list "feature/*"
                  </div>
                  <div className="text-green-400 mt-2"> feature/login</div>
                  <div className="text-green-400"> feature/dashboard</div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # مرتب‌سازی بر اساس تاریخ
                  </div>
                  <div className="text-white">
                    git branch --sort=-committerdate
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # نمایش تاریخ آخرین commit
                  </div>
                  <div className="text-white">
                    git for-each-ref --format='%(refname:short)
                    %(committerdate)' refs/heads
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Branch Display */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              نمایش گرافیکی Branch ها
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2"># نمایش گراف ساده</div>
                <div className="text-white">
                  git log --oneline --graph --all
                </div>
                <div className="text-green-400 mt-2">{`* 5d6e7f8 (HEAD -> main, origin/main) Update README`}</div>
                <div className="text-green-400">
                  | * 3c4d5e6 (feature/login) Add login validation
                </div>
                <div className="text-green-400">| * 1a2b3c4 Add login form</div>
                <div className="text-green-400">|/</div>
                <div className="text-green-400">* 9f0a1b2 Initial commit</div>

                <div className="text-yellow-400 mt-4 mb-2">
                  # نمایش کامل با تاریخ
                </div>
                <div className="text-white">{`git log --graph --pretty=format:'%h -%d %s (%cr) <%an>' --abbrev-commit --all`}</div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-800 mb-2">
                  🎨 ابزارهای گرافیکی:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-3 rounded border">
                    <strong className="text-indigo-700">GitKraken</strong>
                    <p className="text-gray-600">رابط گرافیکی حرفه‌ای</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <strong className="text-indigo-700">SourceTree</strong>
                    <p className="text-gray-600">ابزار رایگان Atlassian</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <strong className="text-indigo-700">VS Code</strong>
                    <p className="text-gray-600">پلاگین GitLens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Branch Viewer */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              نمایشگر تعاملی Branch ها
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">
                    Branch های موجود:
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(sampleBranches).map(([name, info]) => (
                      <div
                        key={name}
                        className={`p-3 rounded border cursor-pointer transition-all ${
                          activeBranch === name
                            ? `border-${info.color}-500 bg-${info.color}-50`
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() =>
                          setActiveBranch(name as keyof typeof sampleBranches)
                        }
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 bg-${info.color}-500 rounded-full ml-3`}
                            ></div>
                            <span className="font-mono text-sm">{name}</span>
                            {name === "main" && (
                              <Crown className="w-4 h-4 text-yellow-500 mr-2" />
                            )}
                          </div>
                          <div className="text-xs text-gray-500">
                            {info.commits} commits
                          </div>
                        </div>
                        <div className="mt-1 text-xs text-gray-600">
                          وضعیت: {info.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">
                    جزئیات Branch: {activeBranch}
                  </h4>
                  <div className="bg-gray-100 p-4 rounded">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>نام:</span>
                        <code className="bg-gray-200 px-2 py-1 rounded">
                          {activeBranch}
                        </code>
                      </div>
                      <div className="flex justify-between">
                        <span>تعداد Commits:</span>
                        <span>{sampleBranches[activeBranch]?.commits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>وضعیت:</span>
                        <span
                          className={`px-2 py-1 rounded text-xs bg-${sampleBranches[activeBranch]?.color}-100 text-${sampleBranches[activeBranch]?.color}-800`}
                        >
                          {sampleBranches[activeBranch]?.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    <div className="text-yellow-400">دستور مشاهده:</div>
                    <div className="text-white">git branch -v</div>
                    <div className="text-green-400 mt-1">
                      {activeBranch === "main" ? "* " : "  "}
                      {activeBranch}{" "}
                      <span className="text-gray-400">a1b2c3d</span> Last commit
                      message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Tips */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 ml-2" />
              نکات کاربردی
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-yellow-700 mb-3">
                  ✅ بهترین روش‌ها:
                </h4>
                <ul className="space-y-2 text-yellow-600 text-sm">
                  <li>• از git branch -v برای اطلاعات سریع استفاده کنید</li>
                  <li>
                    • --merged را برای شناسایی branch های قابل حذف بکار ببرید
                  </li>
                  <li>• از فیلترها برای مدیریت branch های زیاد استفاده کنید</li>
                  <li>• نمایش گرافیکی برای درک بهتر روابط</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-700 mb-3">
                  🔧 ترفندهای مفید:
                </h4>
                <ul className="space-y-2 text-yellow-600 text-sm">
                  <li>
                    • alias تعریف کنید: git config --global alias.br branch
                  </li>
                  <li>• از tab completion استفاده کنید</li>
                  <li>• branch name را در prompt نمایش دهید</li>
                  <li>• از ابزارهای گرافیکی کمک بگیرید</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    creating: {
      title: "ایجاد Branch جدید",
      icon: Plus,
      content: (
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center mb-4">
              <Plus className="w-10 h-10 text-green-600 ml-3" />
              <div>
                <h2 className="text-3xl font-bold text-green-800">
                  ایجاد Branch جدید
                </h2>
                <p className="text-green-600">
                  روش‌های مختلف ایجاد و تنظیم شاخه‌های جدید
                </p>
              </div>
            </div>
          </div>

          {/* Basic Creation */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              روش‌های پایه ایجاد Branch
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # ایجاد branch جدید (بدون تغییر)
                </div>
                <div className="text-white">git branch feature/new-feature</div>

                <div className="text-yellow-400 mt-4 mb-2">
                  # ایجاد و تغییر همزمان (روش قدیمی)
                </div>
                <div className="text-white">
                  git checkout -b feature/new-feature
                </div>
                <div className="text-green-400 mt-1">
                  Switched to a new branch 'feature/new-feature'
                </div>

                <div className="text-yellow-400 mt-4 mb-2">
                  # ایجاد و تغییر همزمان (روش جدید)
                </div>
                <div className="text-white">
                  git switch -c feature/new-feature
                </div>
                <div className="text-green-400 mt-1">
                  Switched to a new branch 'feature/new-feature'
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">git branch</h4>
                  <p className="text-blue-700 text-sm">
                    فقط ایجاد می‌کند، تغییر نمی‌دهد
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 p-3 rounded">
                  <h4 className="font-bold text-orange-800 mb-2">
                    git checkout -b
                  </h4>
                  <p className="text-orange-700 text-sm">
                    روش سنتی ایجاد + تغییر
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded">
                  <h4 className="font-bold text-green-800 mb-2">
                    git switch -c
                  </h4>
                  <p className="text-green-700 text-sm">
                    روش مدرن ایجاد + تغییر
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Creation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                ایجاد از نقاط مختلف
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2"># از commit مشخص</div>
                  <div className="text-white">
                    git branch feature/fix 1a2b3c4
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2"># از tag</div>
                  <div className="text-white">
                    git branch hotfix/urgent v1.2.0
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # از branch دیگر
                  </div>
                  <div className="text-white">
                    git branch feature/new develop
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # از remote branch
                  </div>
                  <div className="text-white">
                    git branch feature/copy origin/feature/template
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                ایجاد و Push همزمان
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2">
                    # ایجاد branch محلی
                  </div>
                  <div className="text-white">
                    git switch -c feature/awesome
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # کار روی branch...
                  </div>
                  <div className="text-white">{`echo "new feature" > feature.txt`}</div>
                  <div className="text-white">git add .</div>
                  <div className="text-white">
                    git commit -m "Add awesome feature"
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # push اولیه با تنظیم upstream
                  </div>
                  <div className="text-white">
                    git push -u origin feature/awesome
                  </div>
                  <div className="text-green-400 mt-1">
                    Branch 'feature/awesome' set up to track remote branch
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Naming Conventions */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              قوانین نام‌گذاری Branch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 ml-2" />
                  نام‌گذاری صحیح
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <code className="text-green-800 font-mono">
                      feature/user-authentication
                    </code>
                    <p className="text-green-600 text-sm mt-1">
                      ویژگی احراز هویت کاربر
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <code className="text-green-800 font-mono">
                      hotfix/security-patch
                    </code>
                    <p className="text-green-600 text-sm mt-1">
                      رفع باگ امنیتی
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <code className="text-green-800 font-mono">
                      release/v2.1.0
                    </code>
                    <p className="text-green-600 text-sm mt-1">
                      آماده‌سازی نسخه ۲.۱.۰
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <code className="text-green-800 font-mono">
                      bugfix/login-error
                    </code>
                    <p className="text-green-600 text-sm mt-1">رفع خطای ورود</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 ml-2" />
                  نام‌گذاری نادرست
                </h4>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <code className="text-red-800 font-mono">test</code>
                    <p className="text-red-600 text-sm mt-1">
                      ❌ خیلی کلی و نامفهوم
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <code className="text-red-800 font-mono">my-branch</code>
                    <p className="text-red-600 text-sm mt-1">
                      ❌ شخصی‌سازی نامناسب
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <code className="text-red-800 font-mono">
                      Feature/Login Page
                    </code>
                    <p className="text-red-600 text-sm mt-1">
                      ❌ فاصله و حروف بزرگ
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <code className="text-red-800 font-mono">
                      fix_everything
                    </code>
                    <p className="text-red-600 text-sm mt-1">
                      ❌ خیلی کلی و غیرمفید
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">📋 الگوهای رایج:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-700">Git Flow:</strong>
                  <ul className="text-blue-600 mt-1 space-y-1">
                    <li>• feature/feature-name</li>
                    <li>• hotfix/issue-description</li>
                    <li>• release/version-number</li>
                    <li>• develop</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-blue-700">GitHub Flow:</strong>
                  <ul className="text-blue-600 mt-1 space-y-1">
                    <li>• feature-name</li>
                    <li>• fix-issue-123</li>
                    <li>• update-documentation</li>
                    <li>• refactor-auth-module</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Creation Wizard */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              ابزار ایجاد Branch
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">
                    تنظیمات Branch جدید:
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نوع Branch:
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>feature</option>
                        <option>hotfix</option>
                        <option>bugfix</option>
                        <option>release</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نام Branch:
                      </label>
                      <input
                        type="text"
                        placeholder="user-authentication"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        شاخه مبدا:
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>main</option>
                        <option>develop</option>
                        <option>staging</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="switch" className="ml-2" />
                      <label htmlFor="switch" className="text-sm text-gray-700">
                        بعد از ایجاد به این branch تغییر کن
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">
                    دستور تولید شده:
                  </h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-yellow-400"># دستور پیشنهادی:</div>
                    <div className="text-white">
                      git switch -c feature/user-authentication
                    </div>

                    <div className="text-yellow-400 mt-3">
                      # یا به روش سنتی:
                    </div>
                    <div className="text-white">
                      git checkout -b feature/user-authentication
                    </div>

                    <div className="text-yellow-400 mt-3">
                      # برای push اولیه:
                    </div>
                    <div className="text-white">
                      git push -u origin feature/user-authentication
                    </div>
                  </div>

                  <div className="mt-4 bg-green-50 border border-green-200 p-3 rounded">
                    <h5 className="font-bold text-green-800 mb-2">
                      نام نهایی:
                    </h5>
                    <code className="text-green-700 bg-green-100 px-2 py-1 rounded">
                      feature/user-authentication
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Scenarios */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              سناریوهای رایج
            </h3>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Zap className="w-5 h-5 ml-2 text-blue-600" />
                  شروع ویژگی جدید
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400"># از main شروع کنید</div>
                  <div className="text-white">git switch main</div>
                  <div className="text-white">git pull origin main</div>
                  <div className="text-white">
                    git switch -c feature/shopping-cart
                  </div>
                  <div className="text-gray-400 mt-2">
                    # حالا می‌توانید کار کنید...
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  همیشه از آخرین نسخه main شروع کنید تا conflict های غیرضروری
                  نداشته باشید.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 ml-2 text-red-600" />
                  رفع باگ فوری
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400"># از production branch</div>
                  <div className="text-white">git switch main</div>
                  <div className="text-white">git pull origin main</div>
                  <div className="text-white">
                    git switch -c hotfix/critical-security-fix
                  </div>
                  <div className="text-gray-400 mt-2"># رفع باگ...</div>
                  <div className="text-white">
                    git push -u origin hotfix/critical-security-fix
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  برای باگ‌های فوری، مستقیماً از main شاخه‌بندی کنید و سریع
                  merge کنید.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 ml-2 text-green-600" />
                  کار تیمی روی ویژگی
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # ایجاد branch اصلی ویژگی
                  </div>
                  <div className="text-white">
                    git switch -c feature/user-management
                  </div>
                  <div className="text-white">
                    git push -u origin feature/user-management
                  </div>

                  <div className="text-yellow-400 mt-2">
                    # هر عضو تیم sub-branch ایجاد می‌کند
                  </div>
                  <div className="text-white">
                    git switch -c feature/user-management-frontend
                  </div>
                  <div className="text-white">
                    git switch -c feature/user-management-backend
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  برای پروژه‌های بزرگ، یک branch اصلی و چندین sub-branch ایجاد
                  کنید.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 ml-2" />
              بهترین روش‌ها
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-700 mb-3">
                  ✅ کارهای توصیه شده:
                </h4>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li>• نام‌گذاری واضح و توصیفی</li>
                  <li>• استفاده از prefix های استاندارد</li>
                  <li>• به‌روزرسانی قبل از ایجاد branch</li>
                  <li>• تنظیم upstream هنگام اولین push</li>
                  <li>• استفاده از git switch به جای checkout</li>
                  <li>• مستندسازی branch ها در README</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 mb-3">
                  ❌ کارهای غیرتوصیه شده:
                </h4>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li>• نام‌های کلی مثل "test" یا "temp"</li>
                  <li>• ایجاد branch از branch های قدیمی</li>
                  <li>• فراموش کردن pull قبل از branch جدید</li>
                  <li>• استفاده از فاصله در نام branch</li>
                  <li>• ایجاد branch های طولانی‌مدت</li>
                  <li>• عدم هماهنگی با تیم</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    switching: {
      title: "تغییر بین Branch ها",
      icon: ArrowRightLeft,
      content: (
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center mb-4">
              <ArrowRightLeft className="w-10 h-10 text-purple-600 ml-3" />
              <div>
                <h2 className="text-3xl font-bold text-purple-800">
                  تغییر بین Branch ها
                </h2>
                <p className="text-purple-600">
                  روش‌های مختلف جابجایی و مدیریت شاخه‌ها
                </p>
              </div>
            </div>
          </div>

          {/* Modern vs Traditional */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 ml-2" />
                روش مدرن (git switch)
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2">
                    # تغییر به branch موجود
                  </div>
                  <div className="text-white">git switch main</div>
                  <div className="text-green-400 mt-1">
                    Switched to branch 'main'
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # تغییر به branch remote
                  </div>
                  <div className="text-white">git switch feature/login</div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # ایجاد و تغییر همزمان
                  </div>
                  <div className="text-white">git switch -c feature/new</div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # برگشت به branch قبلی
                  </div>
                  <div className="text-white">git switch -</div>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <h4 className="font-bold text-green-800 mb-2">✅ مزایا:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• واضح و مشخص</li>
                    <li>• فقط برای branch ها</li>
                    <li>• کمتر اشتباه می‌شود</li>
                    <li>• Git 2.23+ پشتیبانی می‌کند</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <Settings className="w-6 h-6 ml-2" />
                روش سنتی (git checkout)
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2">
                    # تغییر به branch موجود
                  </div>
                  <div className="text-white">git checkout main</div>
                  <div className="text-green-400 mt-1">
                    Switched to branch 'main'
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # ایجاد و تغییر همزمان
                  </div>
                  <div className="text-white">git checkout -b feature/new</div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # تغییر به commit مشخص
                  </div>
                  <div className="text-white">git checkout 1a2b3c4</div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # برگشت به branch قبلی
                  </div>
                  <div className="text-white">git checkout -</div>
                </div>

                <div className="bg-orange-100 p-3 rounded">
                  <h4 className="font-bold text-orange-800 mb-2">⚠️ نکات:</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• چندمنظوره (branch + file + commit)</li>
                    <li>• قدیمی‌تر اما همه‌جا کار می‌کند</li>
                    <li>• ممکن است گیج‌کننده باشد</li>
                    <li>• هنوز پرکاربرد است</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Switching */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              تکنیک‌های پیشرفته
            </h3>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3">
                  تغییر با تنظیمات خاص
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # تغییر اجباری (نادیده گیری تغییرات)
                  </div>
                  <div className="text-white">git switch --force main</div>
                  <div className="text-red-400 mt-1">
                    ⚠️ تغییرات محلی از دست می‌روند!
                  </div>

                  <div className="text-yellow-400 mt-3">
                    # تغییر با ایجاد branch جدید از remote
                  </div>
                  <div className="text-white">
                    git switch -c local-branch origin/remote-branch
                  </div>

                  <div className="text-yellow-400 mt-3">
                    # تغییر به commit مشخص (detached HEAD)
                  </div>
                  <div className="text-white">git switch --detach 1a2b3c4</div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3">
                  مدیریت تغییرات هنگام تغییر
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # اگر تغییرات uncommitted دارید
                  </div>
                  <div className="text-white">git status</div>
                  <div className="text-red-400 mt-1">modified: file.txt</div>

                  <div className="text-yellow-400 mt-2">
                    # گزینه 1: stash کردن
                  </div>
                  <div className="text-white">git stash</div>
                  <div className="text-white">git switch other-branch</div>
                  <div className="text-white">git switch main</div>
                  <div className="text-white">git stash pop</div>

                  <div className="text-yellow-400 mt-2">
                    # گزینه 2: commit کردن
                  </div>
                  <div className="text-white">git add .</div>
                  <div className="text-white">
                    git commit -m "WIP: work in progress"
                  </div>
                  <div className="text-white">git switch other-branch</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Branch Switcher */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              شبیه‌ساز تغییر Branch
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">
                    Branch های موجود:
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(sampleBranches).map(([name, info]) => (
                      <div
                        key={name}
                        className={`p-3 rounded border cursor-pointer transition-all ${
                          activeBranch === name
                            ? `border-${info.color}-500 bg-${info.color}-50 ring-2 ring-${info.color}-200`
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        onClick={() =>
                          setActiveBranch(name as keyof typeof sampleBranches)
                        }
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 bg-${info.color}-500 rounded-full ml-3`}
                            ></div>
                            <span className="font-mono text-sm">{name}</span>
                            {activeBranch === name && (
                              <span className="mr-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                فعلی
                              </span>
                            )}
                            {name === "main" && (
                              <Crown className="w-4 h-4 text-yellow-500 mr-2" />
                            )}
                          </div>
                          <button
                            className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveBranch(
                                name as keyof typeof sampleBranches
                              );
                            }}
                          >
                            تغییر
                          </button>
                        </div>
                        <div className="mt-1 text-xs text-gray-600">
                          {info.commits} commits • {info.status}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-bold text-blue-800 mb-2">💡 نکته:</h5>
                    <p className="text-blue-700 text-sm">
                      روی هر branch کلیک کنید تا دستورات مربوطه را ببینید
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">
                    دستورات تغییر:
                  </h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-yellow-400">دستور مدرن:</div>
                    <div className="text-white">git switch {activeBranch}</div>

                    <div className="text-yellow-400 mt-3">دستور سنتی:</div>
                    <div className="text-white">
                      git checkout {activeBranch}
                    </div>

                    <div className="text-yellow-400 mt-3">بررسی وضعیت:</div>
                    <div className="text-white">git status</div>
                    <div className="text-green-400 mt-1">
                      On branch {activeBranch}
                    </div>

                    {activeBranch !== "main" && (
                      <>
                        <div className="text-yellow-400 mt-3">
                          برگشت به main:
                        </div>
                        <div className="text-white">git switch main</div>
                      </>
                    )}
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="bg-green-50 border border-green-200 p-3 rounded">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        <span className="text-green-800 text-sm font-medium">
                          Branch فعلی: {activeBranch}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 p-3 rounded">
                      <div className="text-gray-700 text-sm">
                        <strong>آخرین commit:</strong>{" "}
                        {sampleBranches[activeBranch]?.commits} commits
                      </div>
                      <div className="text-gray-700 text-sm">
                        <strong>وضعیت:</strong>{" "}
                        {sampleBranches[activeBranch]?.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Scenarios */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              سناریوهای رایج
            </h3>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Play className="w-5 h-5 ml-2 text-green-600" />
                  شروع کار روی ویژگی جدید
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # مطمئن شوید روی main هستید
                  </div>
                  <div className="text-white">git switch main</div>

                  <div className="text-yellow-400 mt-2">
                    # آخرین تغییرات را دریافت کنید
                  </div>
                  <div className="text-white">git pull origin main</div>

                  <div className="text-yellow-400 mt-2">
                    # branch جدید ایجاد کنید
                  </div>
                  <div className="text-white">
                    git switch -c feature/new-feature
                  </div>

                  <div className="text-gray-400 mt-2">
                    # حالا می‌توانید کار کنید...
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  این روش تضمین می‌کند که از آخرین نسخه کد شروع می‌کنید.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <RefreshCw className="w-5 h-5 ml-2 text-blue-600" />
                  تغییر سریع برای بررسی
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400"># ذخیره کار فعلی</div>
                  <div className="text-white">
                    git stash push -m "work in progress"
                  </div>

                  <div className="text-yellow-400 mt-2">
                    # تغییر به branch دیگر
                  </div>
                  <div className="text-white">git switch main</div>

                  <div className="text-yellow-400 mt-2"># بررسی کد...</div>
                  <div className="text-gray-400">git log --oneline -5</div>

                  <div className="text-yellow-400 mt-2"># برگشت به کار</div>
                  <div className="text-white">git switch feature/my-work</div>
                  <div className="text-white">git stash pop</div>
                </div>
                <p className="text-gray-600 text-sm">
                  برای بررسی سریع کد بدون از دست دادن کار فعلی.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 ml-2 text-red-600" />
                  حل مشکل تغییرات uncommitted
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # خطا هنگام تغییر branch
                  </div>
                  <div className="text-white">git switch main</div>
                  <div className="text-red-400 mt-1">
                    error: Your local changes would be overwritten
                  </div>

                  <div className="text-yellow-400 mt-2"># راه حل 1: stash</div>
                  <div className="text-white">git stash</div>
                  <div className="text-white">git switch main</div>

                  <div className="text-yellow-400 mt-2">
                    # راه حل 2: commit موقت
                  </div>
                  <div className="text-white">git add .</div>
                  <div className="text-white">
                    git commit -m "WIP: temporary commit"
                  </div>
                  <div className="text-white">git switch main</div>

                  <div className="text-yellow-400 mt-2">
                    # راه حل 3: تغییر اجباری (خطرناک!)
                  </div>
                  <div className="text-white">git switch --force main</div>
                  <div className="text-red-400 mt-1">
                    ⚠️ تغییرات از دست می‌روند!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Navigation Tips */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
              <Target className="w-6 h-6 ml-2" />
              ترفندهای ناوبری
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-700 mb-3">
                  🔄 تغییر سریع:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                    <div className="text-white">git switch -</div>
                    <div className="text-gray-400"># برگشت به branch قبلی</div>
                  </div>
                  <p className="text-indigo-600">
                    مثل cd - در terminal، شما را به branch قبلی برمی‌گرداند.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-700 mb-3">
                  📋 لیست اخیر:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                    <div className="text-white">git reflog --oneline -10</div>
                    <div className="text-gray-400">
                      # تاریخچه تغییرات branch
                    </div>
                  </div>
                  <p className="text-indigo-600">
                    مشاهده branch هایی که اخیراً روی آن‌ها بوده‌اید.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-700 mb-3">
                  🎯 تکمیل خودکار:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                    <div className="text-white">git switch fea&lt;TAB&gt;</div>
                    <div className="text-gray-400"># تکمیل نام branch</div>
                  </div>
                  <p className="text-indigo-600">
                    از Tab completion برای تایپ سریع‌تر استفاده کنید.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-700 mb-3">⚡ Alias ها:</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                    <div className="text-white">
                      git config --global alias.sw switch
                    </div>
                    <div className="text-white">git sw main</div>
                  </div>
                  <p className="text-indigo-600">
                    میانبرهای شخصی برای دستورات پرکاربرد تعریف کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 ml-2" />
              عیب‌یابی مشکلات رایج
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-700 mb-2">
                  🚫 "Branch not found"
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  <div className="text-red-400">
                    error: pathspec 'feature/login' did not match any file(s)
                  </div>
                  <div className="text-yellow-400 mt-2">
                    # بررسی branch های موجود
                  </div>
                  <div className="text-white">git branch -a</div>
                  <div className="text-yellow-400 mt-1"># یا fetch کردن</div>
                  <div className="text-white">git fetch origin</div>
                </div>
                <p className="text-red-600 text-sm">
                  Branch ممکن است محلی وجود نداشته باشد یا نیاز به fetch داشته
                  باشید.
                </p>
              </div>

              <div className="bg-white p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-700 mb-2">
                  ⚠️ "Uncommitted changes"
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  <div className="text-red-400">
                    error: Your local changes would be overwritten by checkout
                  </div>
                  <div className="text-yellow-400 mt-2"># راه حل‌های ممکن:</div>
                  <div className="text-white">git stash # ذخیره موقت</div>
                  <div className="text-white">
                    git add . && git commit -m "WIP" # commit موقت
                  </div>
                  <div className="text-white">
                    git switch --force main # اجباری (خطرناک)
                  </div>
                </div>
                <p className="text-red-600 text-sm">
                  تغییرات uncommitted مانع تغییر branch می‌شوند. ابتدا آن‌ها را
                  مدیریت کنید.
                </p>
              </div>

              <div className="bg-white p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-700 mb-2">
                  🔄 "Detached HEAD"
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  <div className="text-orange-400">
                    You are in 'detached HEAD' state
                  </div>
                  <div className="text-yellow-400 mt-2"># برگشت به branch</div>
                  <div className="text-white">git switch main</div>
                  <div className="text-yellow-400 mt-1">
                    # یا ایجاد branch جدید
                  </div>
                  <div className="text-white">git switch -c new-branch</div>
                </div>
                <p className="text-red-600 text-sm">
                  وقتی روی commit مشخص هستید، نه روی branch. برای ادامه کار به
                  branch برگردید.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 ml-2" />
              بهترین روش‌ها
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-700 mb-3">✅ توصیه‌ها:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>• از git switch به جای checkout استفاده کنید</li>
                  <li>• همیشه git status را قبل از تغییر چک کنید</li>
                  <li>• تغییرات را stash یا commit کنید</li>
                  <li>• نام branch ها را کامل تایپ کنید</li>
                  <li>• از tab completion استفاده کنید</li>
                  <li>• branch فعلی را در prompt نمایش دهید</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-700 mb-3">
                  ❌ اجتناب کنید:
                </h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>• تغییر اجباری بدون فکر</li>
                  <li>• فراموش کردن تغییرات uncommitted</li>
                  <li>• کار در حالت detached HEAD</li>
                  <li>• تغییر بدون بررسی وضعیت</li>
                  <li>• استفاده از نام‌های مشابه branch</li>
                  <li>• تغییر در وسط عملیات merge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    deleting: {
      title: "حذف Branch ها",
      icon: Trash2,
      content: (
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
            <div className="flex items-center mb-4">
              <Trash2 className="w-10 h-10 text-red-600 ml-3" />
              <div>
                <h2 className="text-3xl font-bold text-red-800">
                  حذف Branch ها
                </h2>
                <p className="text-red-600">
                  روش‌های امن و مؤثر حذف شاخه‌های غیرضروری
                </p>
              </div>
            </div>
          </div>

          {/* Safe vs Force Delete */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 ml-2" />
                حذف امن (Safe Delete)
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2">
                    # حذف branch merge شده
                  </div>
                  <div className="text-white">
                    git branch -d feature/completed
                  </div>
                  <div className="text-green-400 mt-1">
                    Deleted branch feature/completed (was 1a2b3c4).
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # اگر merge نشده باشد
                  </div>
                  <div className="text-white">
                    git branch -d feature/unmerged
                  </div>
                  <div className="text-red-400 mt-1">
                    error: The branch 'feature/unmerged' is not fully merged.
                  </div>
                  <div className="text-red-400">
                    If you are sure you want to delete it, run 'git branch -D
                    feature/unmerged'.
                  </div>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <h4 className="font-bold text-green-800 mb-2">✅ مزایا:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• جلوگیری از حذف اشتباهی</li>
                    <li>• محافظت از کار انجام شده</li>
                    <li>• بررسی خودکار merge status</li>
                    <li>• روش پیش‌فرض و امن</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 ml-2" />
                حذف اجباری (Force Delete)
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400 mb-2"># حذف اجباری</div>
                  <div className="text-white">
                    git branch -D feature/experimental
                  </div>
                  <div className="text-red-400 mt-1">
                    Deleted branch feature/experimental (was 5f6g7h8).
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2"># فرم کامل</div>
                  <div className="text-white">
                    git branch --delete --force feature/test
                  </div>

                  <div className="text-yellow-400 mt-3 mb-2">
                    # حذف چندین branch
                  </div>
                  <div className="text-white">
                    git branch -D branch1 branch2 branch3
                  </div>
                </div>

                <div className="bg-red-100 p-3 rounded">
                  <h4 className="font-bold text-red-800 mb-2">⚠️ خطرات:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• از دست رفتن کار انجام شده</li>
                    <li>• عدم امکان بازیابی آسان</li>
                    <li>• نیاز به احتیاط زیاد</li>
                    <li>• بررسی دستی لازم</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Remote Branch Deletion */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <Database className="w-6 h-6 ml-2" />
              حذف Branch های Remote
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2"># حذف از server</div>
                <div className="text-white">
                  git push origin --delete feature/old-feature
                </div>
                <div className="text-green-400 mt-1">
                  To https://github.com/user/repo.git
                </div>
                <div className="text-green-400">
                  {" "}
                  - [deleted] feature/old-feature
                </div>

                <div className="text-yellow-400 mt-3 mb-2"># سینتکس کوتاه</div>
                <div className="text-white">
                  git push origin :feature/old-feature
                </div>

                <div className="text-yellow-400 mt-3 mb-2">
                  # حذف همزمان محلی و remote
                </div>
                <div className="text-white">
                  git branch -d feature/old-feature
                </div>
                <div className="text-white">
                  git push origin --delete feature/old-feature
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded">
                <h4 className="font-bold text-blue-800 mb-2">📝 نکات مهم:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• حذف remote تأثیری روی branch محلی ندارد</li>
                  <li>• سایر اعضای تیم باید git fetch --prune اجرا کنند</li>
                  <li>• Pull Request ها معمولاً خودکار بسته می‌شوند</li>
                  <li>• برای بازیابی نیاز به push مجدد دارید</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bulk Operations */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              عملیات گروهی
            </h3>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <RefreshCw className="w-5 h-5 ml-2" />
                  حذف Branch های Merge شده
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # لیست branch های merge شده
                  </div>
                  <div className="text-white">git branch --merged main</div>
                  <div className="text-green-400 mt-1"> feature/login</div>
                  <div className="text-green-400"> feature/signup</div>
                  <div className="text-green-400">* main</div>

                  <div className="text-yellow-400 mt-2">
                    # حذف همه (به جز main)
                  </div>
                  <div className="text-white">
                    git branch --merged main | grep -v main | xargs git branch
                    -d
                  </div>

                  <div className="text-yellow-400 mt-2"># نسخه امن‌تر</div>
                  <div className="text-white">
                    git branch --merged main | grep -v -E
                    "(main|master|develop)" | xargs -n 1 git branch -d
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  این دستور تمام branch های merge شده را حذف می‌کند (به جز
                  branch های مهم).
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Target className="w-5 h-5 ml-2" />
                  حذف با الگو
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # حذف تمام branch های با prefix مشخص
                  </div>
                  <div className="text-white">
                    git branch | grep "feature/" | xargs git branch -d
                  </div>

                  <div className="text-yellow-400 mt-2">
                    # حذف branch های قدیمی‌تر از 30 روز
                  </div>
                  <div className="text-white">{`git for-each-ref --format="%(refname:short) %(committerdate)" refs/heads | awk '$2 < "'$(date -d '30 days ago' '+%Y-%m-%d')'"' | cut -d' ' -f1 | xargs git branch -D`}</div>

                  <div className="text-yellow-400 mt-2">
                    # حذف branch های شخصی
                  </div>
                  <div className="text-white">
                    git branch | grep "username/" | xargs git branch -d
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  استفاده از grep و xargs برای حذف دسته‌جمعی branch های با الگوی
                  خاص.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Database className="w-5 h-5 ml-2" />
                  تمیزکاری Remote References
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div className="text-yellow-400">
                    # حذف reference های remote که دیگر وجود ندارند
                  </div>
                  <div className="text-white">git remote prune origin</div>
                  <div className="text-green-400 mt-1">Pruning origin</div>
                  <div className="text-green-400">
                    URL: https://github.com/user/repo.git
                  </div>
                  <div className="text-green-400">
                    {" "}
                    * [pruned] origin/feature/deleted
                  </div>

                  <div className="text-yellow-400 mt-2">
                    # یا همزمان با fetch
                  </div>
                  <div className="text-white">git fetch --prune</div>

                  <div className="text-yellow-400 mt-2">
                    # تنظیم خودکار prune
                  </div>
                  <div className="text-white">
                    git config --global fetch.prune true
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  حذف reference های محلی که branch های remote آن‌ها دیگر وجود
                  ندارند.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Deletion Tool */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              ابزار حذف تعاملی
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">
                    Branch های قابل حذف:
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(sampleBranches)
                      .filter(([name]) => name !== "main")
                      .map(([name, info]) => (
                        <div
                          key={name}
                          className="p-3 rounded border border-gray-200 hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div
                                className={`w-3 h-3 bg-${info.color}-500 rounded-full ml-3`}
                              ></div>
                              <span className="font-mono text-sm">{name}</span>
                              <span
                                className={`mr-2 text-xs px-2 py-1 rounded ${
                                  info.status === "development"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : info.status === "testing"
                                    ? "bg-blue-100 text-blue-800"
                                    : info.status === "urgent"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {info.status}
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              <button className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors">
                                حذف امن
                              </button>
                              <button className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                                حذف اجباری
                              </button>
                            </div>
                          </div>
                          <div className="mt-1 text-xs text-gray-600">
                            {info.commits} commits • آخرین فعالیت: 2 روز پیش
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors">
                      حذف Merge شده‌ها
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition-colors">
                      حذف همه
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">دستورات حذف:</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-yellow-400">حذف امن:</div>
                    <div className="text-white">
                      git branch -d feature/login
                    </div>

                    <div className="text-yellow-400 mt-3">حذف اجباری:</div>
                    <div className="text-white">
                      git branch -D feature/experimental
                    </div>

                    <div className="text-yellow-400 mt-3">حذف remote:</div>
                    <div className="text-white">
                      git push origin --delete feature/old
                    </div>

                    <div className="text-yellow-400 mt-3">حذف گروهی:</div>
                    <div className="text-white">
                      git branch --merged | grep -v main | xargs git branch -d
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="bg-green-50 border border-green-200 p-3 rounded">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        <span className="text-green-800 text-sm font-medium">
                          3 branch آماده حذف امن
                        </span>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                      <div className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 ml-2" />
                        <span className="text-yellow-800 text-sm font-medium">
                          1 branch نیاز به حذف اجباری
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recovery Methods */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
              <RefreshCw className="w-6 h-6 ml-2" />
              بازیابی Branch های حذف شده
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400 mb-2">
                  # پیدا کردن commit آخرین branch حذف شده
                </div>
                <div className="text-white">git reflog</div>
                <div className="text-green-400 mt-1">
                  1a2b3c4 HEAD@{0}: checkout: moving from feature/deleted to
                  main
                </div>
                <div className="text-green-400">
                  5d6e7f8 HEAD@{1}: commit: Last commit on deleted branch
                </div>

                <div className="text-yellow-400 mt-3 mb-2">
                  # بازیابی branch
                </div>
                <div className="text-white">
                  git branch feature/recovered 5d6e7f8
                </div>
                <div className="text-green-400 mt-1">
                  Branch 'feature/recovered' created
                </div>

                <div className="text-yellow-400 mt-3 mb-2">
                  # یا استفاده از git fsck
                </div>
                <div className="text-white">git fsck --lost-found</div>
                <div className="text-white">git show &lt;commit-hash&gt;</div>
              </div>

              <div className="bg-yellow-100 p-4 rounded">
                <h4 className="font-bold text-yellow-800 mb-2">
                  ⏰ محدودیت زمانی:
                </h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Git reflog معمولاً 90 روز نگه داشته می‌شود</li>
                  <li>• Commit های unreachable پس از gc حذف می‌شوند</li>
                  <li>• هرچه زودتر بازیابی کنید بهتر است</li>
                  <li>• از git fsck برای commit های قدیمی‌تر استفاده کنید</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Automation Scripts */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
              <Code className="w-6 h-6 ml-2" />
              اسکریپت‌های خودکارسازی
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-700 mb-3">
                  🧹 اسکریپت تمیزکاری هفتگی
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div className="text-yellow-400">#!/bin/bash</div>
                  <div className="text-gray-400"># weekly-cleanup.sh</div>
                  <div className="text-white">echo "شروع تمیزکاری Git..."</div>
                  <div className="text-white"></div>
                  <div className="text-gray-400">
                    # حذف branch های merge شده
                  </div>
                  <div className="text-white">
                    git branch --merged main | grep -v -E
                    "(main|master|develop)" | xargs -n 1 git branch -d
                  </div>
                  <div className="text-white"></div>
                  <div className="text-gray-400">
                    # تمیزکاری remote references
                  </div>
                  <div className="text-white">git remote prune origin</div>
                  <div className="text-white"></div>
                  <div className="text-gray-400"># بهینه‌سازی repository</div>
                  <div className="text-white">git gc --aggressive</div>
                  <div className="text-white">echo "تمیزکاری کامل شد!"</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-700 mb-3">
                  🔍 اسکریپت تحلیل Branch
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div className="text-yellow-400">#!/bin/bash</div>
                  <div className="text-gray-400"># analyze-branches.sh</div>
                  <div className="text-white">echo "تحلیل Branch ها:"</div>
                  <div className="text-white">echo "=================="</div>
                  <div className="text-white"></div>
                  <div className="text-white">echo "Branch های merge شده:"</div>
                  <div className="text-white">
                    git branch --merged main | grep -v main
                  </div>
                  <div className="text-white"></div>
                  <div className="text-white">
                    echo "Branch های merge نشده:"
                  </div>
                  <div className="text-white">git branch --no-merged main</div>
                  <div className="text-white"></div>
                  <div className="text-white">
                    echo "Branch های قدیمی (بیش از 30 روز):"
                  </div>
                  <div className="text-white">
                    git for-each-ref --format="%(refname:short)
                    %(committerdate:relative)" refs/heads | grep -E
                    "(weeks|months) ago"
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-700 mb-3">
                  ⚡ Git Alias ها
                </h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div className="text-yellow-400">
                    # اضافه کردن alias های مفید
                  </div>
                  <div className="text-white">
                    git config --global alias.cleanup-merged "!git branch
                    --merged main | grep -v -E '(main|master|develop)' | xargs
                    -n 1 git branch -d"
                  </div>
                  <div className="text-white"></div>
                  <div className="text-white">
                    git config --global alias.branch-info "for-each-ref
                    --format='%(refname:short) %(committerdate:relative)
                    %(authorname)' refs/heads"
                  </div>
                  <div className="text-white"></div>
                  <div className="text-white">{`git config --global alias.delete-gone "!git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D"`}</div>
                  <div className="text-white"></div>
                  <div className="text-gray-400"># استفاده:</div>
                  <div className="text-white">git cleanup-merged</div>
                  <div className="text-white">git branch-info</div>
                  <div className="text-white">git delete-gone</div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Checklist */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 ml-2" />
              چک‌لیست ایمنی
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-700 mb-3">
                  ✅ قبل از حذف بررسی کنید:
                </h4>
                <ul className="space-y-2 text-red-600 text-sm">
                  <li className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>Branch واقعاً merge شده است؟</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>کد مهمی در branch وجود ندارد؟</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>سایر اعضای تیم اطلاع دارند؟</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>Pull Request بسته شده است؟</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>Branch در production استفاده نمی‌شود؟</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>Backup لازم وجود دارد؟</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-700 mb-3">🚨 علائم خطر:</h4>
                <ul className="space-y-2 text-red-600 text-sm">
                  <li>• Branch اخیراً فعالیت داشته</li>
                  <li>• Commit های منحصربه‌فرد دارد</li>
                  <li>• در حال توسعه است</li>
                  <li>• Pull Request باز دارد</li>
                  <li>• سایر branch ها به آن وابسته‌اند</li>
                  <li>• در CI/CD pipeline استفاده می‌شود</li>
                </ul>

                <div className="mt-3 bg-red-100 p-2 rounded">
                  <p className="text-red-800 text-xs font-medium">
                    در صورت شک، از حذف خودداری کنید و با تیم مشورت کنید!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 ml-2" />
              بهترین روش‌ها
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-700 mb-3">
                  ✅ توصیه‌های کلیدی:
                </h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>• همیشه ابتدا حذف امن (-d) امتحان کنید</li>
                  <li>• قبل از حذف اجباری دوبار فکر کنید</li>
                  <li>• تمیزکاری منظم انجام دهید</li>
                  <li>• از اسکریپت‌های خودکار استفاده کنید</li>
                  <li>• با تیم هماهنگ باشید</li>
                  <li>• reflog را برای بازیابی بلد باشید</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-700 mb-3">⚠️ نکات مهم:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>• حذف branch تاریخچه commit ها را پاک نمی‌کند</li>
                  <li>• Remote branch ها جداگانه حذف می‌شوند</li>
                  <li>• git prune برای تمیزکاری reference ها</li>
                  <li>• بازیابی محدودیت زمانی دارد</li>
                  <li>• main/master را هرگز حذف نکنید</li>
                  <li>• در صورت شک، stash یا backup بگیرید</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="grid gap-y-6 grid-cols-12 relative">
      {/* Navigation */}
      <div
        style={{
          top: `${navbarHeight + 100}px`,
        }}
        className="main-navbar col-span-12 lg:col-span-2 rounded-lg h-fit flex flex-col bg-white lg:!sticky top-0 z-10"
      >
        <div className="flex flex-col items-start justify-start p-4">
          <nav className="flex flex-col space-y-4">
            {Object.entries(sections).map(([key, section]) => {
              const Icon = section.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSection(key as keyof typeof sections)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                    activeSection === key
                      ? "bg-indigo-100 text-indigo-800 shadow-md"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4 ml-2" />
                  {section.title}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-12 lg:col-span-10 w-full  lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8">{sections[activeSection].content}</div>
        </div>
      </div>
    </div>
  );
};

export default GitBranchChapter;
