import React from "react";
import { GitBranch, Heart, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GitBranch className="w-8 h-8 text-primary-400 ml-3" />
              <span className="text-2xl font-bold">آموزش Git</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              آموزش کامل و جامع Git
              <br />
              برای همه سطوح از مبتدی تا پیشرفته
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://git-scm.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  سایت رسمی Git
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  GitLab
                </a>
              </li>
              <li>
                <a
                  href="https://bitbucket.org"
                  className="hover:text-primary-400 transition-colors"
                >
                  Bitbucket
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تماس با من</h3>
            <div className="space-y-2 text-gray-300">
              <p>برای سوالات و پیشنهادات:</p>
              <Link
                to="https://github.com/alichatraei"
                className="flex items-center hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 ml-2" />
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            ساخته شده با
            <Heart className="w-5 h-5 text-red-500 mx-2" />
            برای جامعه برنامه‌نویسان ایران
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
