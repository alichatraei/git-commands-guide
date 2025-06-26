import React from "react";
import { GitBranch, Clock, Users, Star } from "lucide-react";

const Chapter1: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <GitBranch className="w-10 h-10 text-primary-600 ml-4" />
          <h1 className="text-4xl font-bold text-gray-800">
            فصل اول: مقدمات Git
          </h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          در این فصل با تاریخچه Git، کاربران آن و مفاهیم اولیه آشنا می‌شوید
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
            برای ردیابی تغییرات در فایل‌ها و هماهنگی کار بین چندین نفر روی یک
            پروژه طراحی شده است.
          </p>

          <div className="bg-blue-50 border-r-4 border-blue-500 p-6 my-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              ویژگی‌های کلیدی Git:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>توزیع‌شده بودن (هر کاربر کپی کاملی از تاریخچه دارد)</li>
              <li>سرعت بالا در عملیات</li>
              <li>پشتیبانی از branching و merging پیشرفته</li>
              <li>یکپارچگی داده‌ها</li>
              <li>پشتیبانی از پروژه‌های بزرگ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Clock className="w-8 h-8 text-green-600 ml-3" />
          تاریخچه Git
        </h2>
        <div className="space-y-6">
          <div className="border-r-4 border-green-500 pr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ۲۰۰۵ - شروع
            </h3>
            <p className="text-gray-700">
              لینوس تورولدز برای مدیریت کد هسته لینوکس، Git را توسعه داد. قبل از
              این از BitKeeper استفاده می‌شد.
            </p>
          </div>

          <div className="border-r-4 border-blue-500 pr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ۲۰۰۸ - GitHub
            </h3>
            <p className="text-gray-700">
              راه‌اندازی GitHub که Git را برای عموم قابل دسترس‌تر کرد و انقلابی
              در توسعه نرم‌افزار ایجاد کرد.
            </p>
          </div>

          <div className="border-r-4 border-purple-500 pr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">امروز</h3>
            <p className="text-gray-700">
              Git استاندارد صنعت برای کنترل نسخه شده و توسط میلیون‌ها
              توسعه‌دهنده استفاده می‌شود.
            </p>
          </div>
        </div>
      </div>

      {/* Who Uses Git */}
      <div className="card mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Users className="w-8 h-8 text-purple-600 ml-3" />
          چه کسانی از Git استفاده می‌کنند؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              برنامه‌نویسان
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li>• توسعه‌دهندگان وب</li>
              <li>• برنامه‌نویسان موبایل</li>
              <li>• توسعه‌دهندگان بازی</li>
              <li>• مهندسان نرم‌افزار</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              تیم‌ها و شرکت‌ها
            </h3>
            <ul className="space-y-2 text-green-700">
              <li>• شرکت‌های فناوری بزرگ</li>
              <li>• استارتاپ‌ها</li>
              <li>• پروژه‌های متن‌باز</li>
              <li>• مؤسسات تحقیقاتی</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              سایر کاربران
            </h3>
            <ul className="space-y-2 text-purple-700">
              <li>• نویسندگان و بلاگرها</li>
              <li>• طراحان</li>
              <li>• محققان</li>
              <li>• دانشجویان</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-orange-800 mb-3">
              پروژه‌های معروف
            </h3>
            <ul className="space-y-2 text-orange-700">
              <li>• Linux Kernel</li>
              <li>• React.js</li>
              <li>• Vue.js</li>
              <li>• Node.js</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Git */}
      <div className="card">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">چرا Git ؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-x-3 space-x-reverse">
              <div className="bg-green-500 w-3 h-3 rounded-full mt-2"></div>
              <div>
                <h4 className="font-bold text-gray-800">پشتیبان‌گیری خودکار</h4>
                <p className="text-gray-600">هیچ‌وقت کدتان گم نمی‌شود</p>
              </div>
            </div>

            <div className="flex items-start gap-x-3 space-x-reverse">
              <div className="bg-blue-500 w-3 h-3 rounded-full mt-2"></div>
              <div>
                <h4 className="font-bold text-gray-800">همکاری آسان</h4>
                <p className="text-gray-600">کار تیمی بدون تداخل</p>
              </div>
            </div>

            <div className="flex items-start gap-x-3 space-x-reverse">
              <div className="bg-purple-500 w-3 h-3 rounded-full mt-2"></div>
              <div>
                <h4 className="font-bold text-gray-800">ردیابی تغییرات</h4>
                <p className="text-gray-600">مشاهده دقیق تغییرات</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-x-3 space-x-reverse">
              <div className="bg-red-500 w-3 h-3 rounded-full mt-2"></div>
              <div>
                <h4 className="font-bold text-gray-800">برگشت به نسخه قبل</h4>
                <p className="text-gray-600">بازگشت آسان به حالت قبل</p>
              </div>
            </div>

            <div className="flex items-start gap-x-3 space-x-reverse">
              <div className="bg-yellow-500 w-3 h-3 rounded-full mt-2"></div>
              <div>
                <h4 className="font-bold text-gray-800">شاخه‌سازی</h4>
                <p className="text-gray-600">توسعه موازی ویژگی‌ها</p>
              </div>
            </div>

            <div className="flex items-start gap-x-3 space-x-reverse">
              <div className="bg-indigo-500 w-3 h-3 rounded-full mt-2"></div>
              <div>
                <h4 className="font-bold text-gray-800">رایگان و متن‌باز</h4>
                <p className="text-gray-600">هیچ هزینه‌ای ندارد</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;
