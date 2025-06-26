import React from "react";
import { Link } from "react-router-dom";
import { GitBranch, BookOpen, Code, Terminal, Users } from "lucide-react";

const Home: React.FC = () => {
  const chapters = [
    {
      id: 1,
      title: "مقدمات Git",
      description: "تاریخچه Git، کاربران و مفاهیم اولیه",
      icon: <BookOpen className="w-8 h-8 text-primary-600" />,
      path: "/chapter1",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "نصب و ترمینال",
      description: "نصب Git روی سیستم‌عامل‌های مختلف و آموزش ترمینال",
      icon: <Terminal className="w-8 h-8 text-green-600" />,
      path: "/chapter2",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "Repository و Commands",
      description: "Git Repository، دستورات اصلی و مدیریت تغییرات",
      icon: <Code className="w-8 h-8 text-orange-600" />,
      path: "/chapter3",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center flex flex-col gap-y-4 mb-16">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-4 rounded-full">
            <GitBranch className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800">آموزش کامل Git</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          یادگیری Git از صفر تا صد - از مفاهیم اولیه تا تکنیک‌های پیشرفته
          <br />
          همراه با مثال‌های عملی و پروژه‌های واقعی
        </p>
        <div className="flex flex-col w-fit mx-auto sm:flex-row gap-4 items-center justify-center">
          <Link to="/chapter1" className="btn-primary">
            شروع یادگیری
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
          >
            مشاهده GitHub
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="card text-center">
          <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            میلیون‌ها کاربر
          </h3>
          <p className="text-gray-600">
            Git توسط میلیون‌ها برنامه‌نویس در سراسر جهان استفاده می‌شود
          </p>
        </div>
        <div className="card text-center">
          <GitBranch className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            قدرتمند و سریع
          </h3>
          <p className="text-gray-600">
            سیستم کنترل نسخه توزیع‌شده با عملکرد بالا
          </p>
        </div>
        <div className="card text-center">
          <Code className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            متن‌باز و رایگان
          </h3>
          <p className="text-gray-600">کاملاً رایگان و با کد منبع باز</p>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          فصل‌های آموزشی
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={chapter.path}
              className="chapter-card hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {chapter.icon}
                <span className="mr-3 text-lg font-bold text-gray-800">
                  فصل {chapter.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {chapter.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {chapter.description}
              </p>
              <div
                className={`w-full h-1 bg-gradient-to-r ${chapter.color} rounded-full mt-4`}
              ></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="card">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ویژگی‌های این آموزش
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-x-4 space-x-reverse">
            <div className="bg-primary-100 p-2 bg-white/90 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">آموزش جامع</h3>
              <p className="text-gray-600">
                از مبتدی تا پیشرفته با مثال‌های عملی
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 space-x-reverse">
            <div className="bg-green-100 p-2 rounded-lg">
              <Terminal className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">تمرین‌های عملی</h3>
              <p className="text-gray-600">
                یادگیری از طریق انجام پروژه‌های واقعی
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 space-x-reverse">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Code className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">کد نمونه</h3>
              <p className="text-gray-600">مثال‌های کد کامل و قابل اجرا</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 space-x-reverse">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">پشتیبانی کامل</h3>
              <p className="text-gray-600">پاسخ به سوالات و راهنمایی مستمر</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
