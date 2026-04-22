import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Radio, Scan, Database, Zap } from 'lucide-react';
import { BrandMark } from '@/components/Brand';
import { assetUrl } from '@/lib/asset-url';
import { brand } from '@/lib/brand';

interface HomeProps {
  onPageChange: (page: string) => void;
}

const Home = ({ onPageChange }: HomeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Scan,
      title: '智能扫描',
      description: '无人机自主环绕飞行，RTK厘米级定位精度',
    },
    {
      icon: Radio,
      title: '信号识别',
      description: 'SDR频谱扫描实现信号级识别与分析',
    },
    {
      icon: Database,
      title: '数字档案',
      description: '自动生成通信资产数字档案与巡检报告',
    },
    {
      icon: Zap,
      title: '降本增效',
      description: '相比传统方式降低30-50%巡检成本',
    },
  ];

  const stats = [
    { value: '200万+', label: '全国通信铁塔' },
    { value: '800元', label: '单次巡检成本' },
    { value: '百亿级', label: '潜在市场规模' },
    { value: '30-50%', label: '成本降低幅度' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={assetUrl('/hero-bg.jpg')}
            alt="City night view"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 pt-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <BrandMark className="h-5 w-5 shrink-0" />
              <span className="text-sm text-white/85">{brand.companyName}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-sm text-white/70">通信基础设施信号级数字化管理平台</span>
            </div>

            {/* Main Title */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="gradient-text">巡天智能</span>
              <br />
              <span className="text-white">扫频系统</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              基于无人机自主飞行与SDR频谱扫描技术，实现通信铁塔资产的
              <br className="hidden sm:block" />
              智能化、数字化巡检管理
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => onPageChange('product')}
                className="btn-primary flex items-center gap-2 group"
              >
                探索解决方案
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="btn-outline"
              >
                联系我们
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              核心<span className="gradient-text">技术优势</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              融合无人机自主飞行、RTK精准定位、SDR频谱扫描与3DGS三维重建技术
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-dark hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-black to-zinc-950">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Preview Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative img-zoom rounded-2xl overflow-hidden">
              <img
                src={assetUrl('/scanning.jpg')}
                alt="Drone scanning"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                信号识别替代
                <br />
                <span className="gradient-text">视觉铭牌识别</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                传统巡检方式依赖人工操控无人机拍摄铭牌，存在铭牌易缺失、腐蚀或遮挡等问题。
                我们的解决方案通过SDR频谱扫描直接获取信号数据，实现真正的信号级识别，
                确保资产信息的完整性与准确性。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '厘米级定位确保天线级精确匹配',
                  '系统级整合能力形成技术壁垒',
                  '具备持续数据沉淀与平台化潜力',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onPageChange('product')}
                className="btn-outline flex items-center gap-2 group"
              >
                了解详细方案
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative py-20 px-8 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                准备好开启
                <span className="gradient-text">智能巡检</span>了吗？
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-10">
                联系我们，获取专属解决方案，让通信资产巡检更高效、更智能
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onPageChange('contact')}
                  className="btn-primary"
                >
                  立即咨询
                </button>
                <button
                  onClick={() => onPageChange('about')}
                  className="btn-outline"
                >
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
