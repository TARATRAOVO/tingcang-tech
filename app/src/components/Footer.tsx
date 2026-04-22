import { ArrowUp } from 'lucide-react';
import { BrandLockup } from '@/components/Brand';
import { brand } from '@/lib/brand';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer = ({ onPageChange }: FooterProps) => {
  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: '首页' },
    { id: 'product', label: '产品' },
    { id: 'about', label: '关于我们' },
    { id: 'contact', label: '联系我们' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => handleNavClick('home')}
              className="mb-5 text-left hover:opacity-80 transition-opacity"
            >
              <BrandLockup />
            </button>
            <p className="text-white/60 max-w-md mb-6 leading-relaxed">
              {brand.productName} — 通信基础设施信号级数字化管理平台，
              推动低空智能巡检标准化发展。
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/40">
                © {brand.copyrightYear} {brand.companyName}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-sm text-white/40">保留所有权利</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              导航
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              联系方式
            </h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href={brand.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {brand.phone}
                </a>
              </li>
              <li>{brand.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-white/40">
            <button className="hover:text-white transition-colors">
              隐私政策
            </button>
            <button className="hover:text-white transition-colors">
              服务条款
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
          >
            回到顶部
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
