import React from "react";
import {
  GitBranch,
  Clock,
  Users,
  Star,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Network,
  FileText,
  Lightbulb,
  TrendingUp,
  Award,
} from "lucide-react";

const Chapter1: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <GitBranch className="w-10 h-10 text-primary-600 ml-4" />
          <h1 className="text-4xl font-bold text-gray-800">
            فصل اول: مقدمات Git
          </h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          در این فصل با تاریخچه Git، کاربران آن، مفاهیم اولیه و مقایسه با سایر
          ابزارها آشنا می‌شوید
        </p>
      </div>

      {/* What is Git */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Star className="w-8 h-8 text-yellow-500 ml-3" />
          Git چیست؟
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Git یک سیستم کنترل نسخه توزیع‌شده (Distributed Version Control
            System) است که توسط
            <strong> لینوس تورولدز </strong> در سال ۲۰۰۵ ایجاد شد. این ابزار
            قدرتمند برای ردیابی تغییرات در فایل‌ها، مدیریت تاریخچه پروژه و
            هماهنگی کار بین چندین نفر روی یک پروژه طراحی شده است.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-r-4 border-blue-500 p-6 my-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <Zap className="w-6 h-6 ml-2" />
              ویژگی‌های کلیدی Git:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                  توزیع‌شده بودن (Distributed)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                  سرعت بالا در عملیات
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                  Branching و Merging پیشرفته
                </li>
              </ul>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                  یکپارچگی و امنیت داده‌ها
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                  پشتیبانی از پروژه‌های بزرگ
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                  رایگان و متن‌باز
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 my-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
              <Lightbulb className="w-6 h-6 ml-2" />
              چرا Git "توزیع‌شده" است؟
            </h3>
            <p className="text-yellow-700 leading-relaxed">
              برخلاف سیستم‌های کنترل نسخه متمرکز (مثل SVN)، در Git هر کاربر کپی
              کاملی از تمام تاریخچه پروژه را روی سیستم خود دارد. این یعنی حتی
              اگر سرور اصلی از کار بیفتد، هر کاربر می‌تواند به عنوان backup عمل
              کند.
            </p>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Clock className="w-8 h-8 text-green-600 ml-3" />
          تاریخچه و تکامل Git
        </h2>

        <div className="relative">
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-purple-500"></div>

          <div className="space-y-8">
            <div className="relative flex items-start">
              <div className="absolute right-4 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="mr-12 bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  ۲۰۰۵ - تولد Git
                </h3>
                <p className="text-green-700 mb-3">
                  لینوس تورولدز برای مدیریت کد هسته لینوکس، Git را در عرض چند
                  هفته توسعه داد. قبل از این از BitKeeper استفاده می‌شد که
                  مشکلات لایسنسی پیدا کرد.
                </p>
                <div className="text-sm text-green-600 font-semibold">
                  🎯 هدف: جایگزینی سریع و قدرتمند برای BitKeeper
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute right-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="mr-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  ۲۰۰۸ - انقلاب GitHub
                </h3>
                <p className="text-blue-700 mb-3">
                  راه‌اندازی GitHub که Git را برای عموم قابل دسترس‌تر کرد و
                  انقلابی در توسعه نرم‌افزار و همکاری‌های متن‌باز ایجاد کرد.
                  Social Coding متولد شد!
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  🚀 تأثیر: تغییر کامل فرهنگ توسعه نرم‌افزار
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute right-4 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="mr-12 bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  ۲۰۱۰-۲۰۱۵ - رشد سریع
                </h3>
                <p className="text-purple-700 mb-3">
                  Git به استاندارد صنعت تبدیل شد. GitLab، Bitbucket و سایر
                  پلتفرم‌ها ظهور کردند. ابزارهای GUI مختلف برای Git توسعه
                  یافتند.
                </p>
                <div className="text-sm text-purple-600 font-semibold">
                  📈 رشد: از ابزار نیش تا استاندارد جهانی
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute right-4 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="mr-12 bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  ۲۰۱۸ - Microsoft خرید GitHub
                </h3>
                <p className="text-orange-700 mb-3">
                  مایکروسافت GitHub را به مبلغ ۷.۵ میلیارد دلار خرید. این
                  نشان‌دهنده اهمیت Git و توسعه متن‌باز در صنعت فناوری بود.
                </p>
                <div className="text-sm text-orange-600 font-semibold">
                  💰 ارزش: تأیید اهمیت استراتژیک Git
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute right-4 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="mr-12 bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">
                  امروز - هر جا هست!
                </h3>
                <p className="text-indigo-700 mb-3">
                  Git استاندارد مطلق صنعت شده. بیش از ۱۰۰ میلیون repository در
                  GitHub، میلیون‌ها توسعه‌دهنده و حتی استفاده در پروژه‌های
                  غیرنرم‌افزاری.
                </p>
                <div className="text-sm text-indigo-600 font-semibold">
                  🌍 امروز: ابزار ضروری هر توسعه‌دهنده
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who Uses Git - Enhanced */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Users className="w-8 h-8 text-purple-600 ml-3" />
          چه کسانی از Git استفاده می‌کنند؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-blue-600 ml-2" />
              <h3 className="text-xl font-bold text-blue-800">برنامه‌نویسان</h3>
            </div>
            <ul className="space-y-2 text-blue-700">
              <li>• توسعه‌دهندگان Front-end</li>
              <li>• توسعه‌دهندگان Back-end</li>
              <li>• برنامه‌نویسان موبایل</li>
              <li>• توسعه‌دهندگان بازی</li>
              <li>• مهندسان DevOps</li>
              <li>• Data Scientists</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Network className="w-8 h-8 text-green-600 ml-2" />
              <h3 className="text-xl font-bold text-green-800">
                تیم‌ها و شرکت‌ها
              </h3>
            </div>
            <ul className="space-y-2 text-green-700">
              <li>• شرکت‌های فناوری بزرگ</li>
              <li>• استارتاپ‌های نوپا</li>
              <li>• آژانس‌های طراحی</li>
              <li>• مؤسسات تحقیقاتی</li>
              <li>• دانشگاه‌ها</li>
              <li>• سازمان‌های دولتی</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-purple-600 ml-2" />
              <h3 className="text-xl font-bold text-purple-800">
                سایر کاربران
              </h3>
            </div>
            <ul className="space-y-2 text-purple-700">
              <li>• نویسندگان و بلاگرها</li>
              <li>• طراحان UI/UX</li>
              <li>• محققان و دانشمندان</li>
              <li>• دانشجویان</li>
              <li>• مدیران پروژه</li>
              <li>• مترجمان</li>
            </ul>
          </div>
        </div>

        {/* Famous Projects */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Award className="w-6 h-6 text-yellow-500 ml-2" />
            پروژه‌های معروف که از Git استفاده می‌کنند:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">Linux Kernel</div>
              <div className="text-sm text-gray-600">هسته لینوکس</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">React.js</div>
              <div className="text-sm text-gray-600">کتابخانه Facebook</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">Vue.js</div>
              <div className="text-sm text-gray-600">فریمورک جاوااسکریپت</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">Node.js</div>
              <div className="text-sm text-gray-600">محیط اجرای JS</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">TensorFlow</div>
              <div className="text-sm text-gray-600">Machine Learning</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">Django</div>
              <div className="text-sm text-gray-600">فریمورک Python</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">Bootstrap</div>
              <div className="text-sm text-gray-600">CSS Framework</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">VS Code</div>
              <div className="text-sm text-gray-600">ویرایشگر کد</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Git - Enhanced */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <TrendingUp className="w-8 h-8 text-indigo-600 ml-3" />
          چرا Git انتخاب بهتری است؟
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Shield className="w-5 h-5 text-green-500 ml-2" />
                  پشتیبان‌گیری خودکار و امن
                </h4>
                <p className="text-gray-600">
                  هر commit یک snapshot کامل از پروژه است. هیچ‌وقت کدتان گم
                  نمی‌شود و می‌توانید به هر نقطه از تاریخچه برگردید.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Users className="w-5 h-5 text-blue-500 ml-2" />
                  همکاری بدون تداخل
                </h4>
                <p className="text-gray-600">
                  چندین نفر می‌توانند همزمان روی پروژه کار کنند. Git به طور
                  هوشمند تغییرات را ادغام می‌کند.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Database className="w-5 h-5 text-purple-500 ml-2" />
                  ردیابی دقیق تغییرات
                </h4>
                <p className="text-gray-600">
                  مشاهده دقیق اینکه چه کسی، چه زمانی و چرا تغییری ایجاد کرده. هر
                  خط کد قابل ردیابی است.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Clock className="w-5 h-5 text-red-500 ml-2" />
                  بازگشت آسان به گذشته
                </h4>
                <p className="text-gray-600">
                  اگر باگی پیدا شد، به راحتی به نسخه قبلی برگردید. حتی می‌توانید
                  تغییرات خاصی را لغو کنید.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <GitBranch className="w-5 h-5 text-yellow-500 ml-2" />
                  شاخه‌سازی قدرتمند
                </h4>
                <p className="text-gray-600">
                  برای هر ویژگی جدید branch مجزا بسازید. توسعه موازی بدون تأثیر
                  روی کد اصلی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Globe className="w-5 h-5 text-indigo-500 ml-2" />
                  رایگان و متن‌باز
                </h4>
                <p className="text-gray-600">
                  هیچ هزینه‌ای ندارد و کد آن متن‌باز است. توسط جامعه بزرگی
                  پشتیبانی می‌شود.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Zap className="w-5 h-5 text-pink-500 ml-2" />
                  سرعت فوق‌العاده
                </h4>
                <p className="text-gray-600">
                  عملیات Git بسیار سریع است. حتی در پروژه‌های بزرگ با میلیون‌ها
                  فایل.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Network className="w-5 h-5 text-teal-500 ml-2" />
                  انعطاف‌پذیری بالا
                </h4>
                <p className="text-gray-600">
                  از پروژه‌های کوچک تا بزرگ، از تک‌نفره تا تیم‌های هزارنفره. Git
                  با همه سازگار است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Git vs Others */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          مقایسه Git با سایر ابزارها
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-800">
                  ویژگی
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-bold text-green-700">
                  Git
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-bold text-gray-600">
                  SVN
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-bold text-gray-600">
                  Mercurial
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-bold text-gray-600">
                  Perforce
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-semibold">
                  توزیع‌شده
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-semibold">
                  سرعت
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-bold">
                  عالی
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-yellow-600">
                  متوسط
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-600">
                  خوب
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-yellow-600">
                  متوسط
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-semibold">
                  Branching
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-bold">
                  عالی
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-red-600">
                  ضعیف
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-600">
                  خوب
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-yellow-600">
                  متوسط
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-semibold">
                  یادگیری
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-yellow-600">
                  متوسط
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-600">
                  آسان
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-600">
                  آسان
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-red-600">
                  سخت
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-semibold">
                  محبوبیت
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-bold">
                  بسیار بالا
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-yellow-600">
                  متوسط
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-yellow-600">
                  کم
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-yellow-600">
                  کم
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-semibold">
                  هزینه
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-bold">
                  رایگان
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-600">
                  رایگان
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-600">
                  رایگان
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-red-600">
                  پولی
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Git Concepts Preview */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          مفاهیم کلیدی که باید بدانید
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
              <Database className="w-6 h-6 ml-2" />
              Repository (مخزن)
            </h3>
            <p className="text-blue-700 mb-3">
              محلی که تمام فایل‌های پروژه و تاریخچه تغییرات در آن ذخیره می‌شود.
              هر پروژه یک repository دارد.
            </p>
            <div className="text-sm text-blue-600 bg-blue-100 p-2 rounded">
              💡 در فصل ۳ کاملاً یاد می‌گیرید
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <CheckCircle className="w-6 h-6 ml-2" />
              Commit (ثبت تغییرات)
            </h3>
            <p className="text-green-700 mb-3">
              عمل ذخیره کردن تغییرات در repository. هر commit یک snapshot از
              پروژه در آن لحظه است.
            </p>
            <div className="text-sm text-green-600 bg-green-100 p-2 rounded">
              💡 قلب Git همین commits هستند
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
              <GitBranch className="w-6 h-6 ml-2" />
              Branch (شاخه)
            </h3>
            <p className="text-purple-700 mb-3">
              خط توسعه مجزا که اجازه کار موازی روی ویژگی‌های مختلف را می‌دهد.
              مثل کپی کردن پروژه برای تست.
            </p>
            <div className="text-sm text-purple-600 bg-purple-100 p-2 rounded">
              💡 قدرتمندترین ویژگی Git
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
            <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
              <Network className="w-6 h-6 ml-2" />
              Remote (ریموت)
            </h3>
            <p className="text-orange-700 mb-3">
              نسخه آنلاین repository که روی سرور (مثل GitHub) قرار دارد. برای
              همکاری و backup استفاده می‌شود.
            </p>
            <div className="text-sm text-orange-600 bg-orange-100 p-2 rounded">
              💡 پل ارتباطی بین توسعه‌دهندگان
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Star className="w-8 h-8 text-yellow-500 ml-3" />
          داستان‌های موفقیت با Git
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              🚀 Netflix: مدیریت هزاران میکروسرویس
            </h3>
            <p className="text-green-700 leading-relaxed">
              Netflix با استفاده از Git و GitHub، بیش از ۲۰۰۰ میکروسرویس را
              مدیریت می‌کند. تیم‌های مختلف می‌توانند مستقل کار کنند و روزانه
              صدها deployment انجام دهند.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              🌍 Wikipedia: همکاری جهانی
            </h3>
            <p className="text-blue-700 leading-relaxed">
              ویکی‌پدیا از Git برای مدیریت محتوا و کد استفاده می‌کند. هزاران
              مترجم و توسعه‌دهنده از سراسر جهان همزمان روی پروژه کار می‌کنند.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              🎮 Epic Games: Unreal Engine
            </h3>
            <p className="text-purple-700 leading-relaxed">
              Epic Games موتور Unreal Engine را با Git مدیریت می‌کند. میلیون‌ها
              خط کد، هزاران asset و تیم‌های بین‌المللی - همه با Git هماهنگ
              هستند.
            </p>
          </div>
        </div>
      </div>

      {/* Common Misconceptions */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <AlertCircle className="w-8 h-8 text-red-500 ml-3" />
          تصورات غلط رایج درباره Git
        </h2>

        <div className="space-y-4">
          <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-red-800 mb-2">
              ❌ "Git فقط برای برنامه‌نویسان است"
            </h3>
            <p className="text-red-700">
              <strong>واقعیت:</strong> Git برای هر نوع فایل متنی مفید است.
              نویسندگان، طراحان، محققان و حتی وکلا از آن استفاده می‌کنند.
            </p>
          </div>

          <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-2">
              ❌ "Git خیلی پیچیده است"
            </h3>
            <p className="text-orange-700">
              <strong>واقعیت:</strong> برای شروع فقط ۴-۵ دستور کافی است.
              پیچیدگی‌های بیشتر برای کارهای پیشرفته هستند که اختیاری‌اند.
            </p>
          </div>

          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">
              ❌ "Git و GitHub یکی هستند"
            </h3>
            <p className="text-yellow-700">
              <strong>واقعیت:</strong> Git ابزار است، GitHub سرویس. Git روی
              کامپیوتر شما کار می‌کند، GitHub فقط یکی از جاهای نگهداری آنلاین
              است.
            </p>
          </div>

          <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">
              ❌ "فقط برای پروژه‌های بزرگ مفید است"
            </h3>
            <p className="text-blue-700">
              <strong>واقعیت:</strong> حتی برای یک فایل تکی هم مفید است. backup
              خودکار، تاریخچه تغییرات و امکان برگشت همیشه کاربرد دارند.
            </p>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Lightbulb className="w-8 h-8 text-yellow-500 ml-3" />
          مرحله بعدی چیست؟
        </h2>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            حالا که با Git آشنا شدید، وقت آن رسیده که عملی شروع کنیم! در فصل دوم
            یاد می‌گیریم که Git را نصب کنیم و با ترمینال کار کنیم.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h3 className="font-bold text-indigo-800 mb-2">فصل ۲</h3>
              <p className="text-sm text-indigo-600">نصب Git و آموزش ترمینال</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h3 className="font-bold text-indigo-800 mb-2">فصل ۳</h3>
              <p className="text-sm text-indigo-600">
                Repository و دستورات اصلی
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h3 className="font-bold text-indigo-800 mb-2">تمرین</h3>
              <p className="text-sm text-indigo-600">پروژه عملی با Git</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-100 rounded-lg">
            <p className="text-indigo-800 font-semibold text-center">
              💡 نکته: هر فصل را به ترتیب مطالعه کنید و حتماً تمرین کنید!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;
