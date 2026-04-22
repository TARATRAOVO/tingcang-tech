import { useEffect, useState } from 'react';
import {
  Signal,
  Database,
  BarChart3,
  Zap,
  Settings,
  Radio,
  Eye,
  Layers,
  Wifi,
  Crosshair,
} from 'lucide-react';
import { assetUrl } from '@/lib/asset-url';

const Product = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techSpecs = [
    {
      icon: Zap,
      label: '重量',
      value: '≤200g',
      subtext: '最优≤100g',
      desc: '轻量化PCB设计，高集成度芯片',
    },
    {
      icon: Layers,
      label: '尺寸',
      value: '118×80×18mm',
      subtext: '紧凑型模块化',
      desc: '标准化安装接口，快速适配',
    },
    {
      icon: Radio,
      label: '支持频段',
      value: '4G/5G全频段',
      subtext: 'B1/B3/B5/B8/N1/N28/N78等',
      desc: '覆盖国内三大运营商网络',
    },
    {
      icon: Signal,
      label: '灵敏度',
      value: '≤-110dBm',
      subtext: '高性能射频前端',
      desc: '低噪声放大器，弱信号捕获',
    },
    {
      icon: Crosshair,
      label: '定位精度',
      value: '≤1m',
      subtext: 'GPS/北斗双模',
      desc: '与无人机定位系统协同',
    },
    {
      icon: Wifi,
      label: '扫频速度',
      value: '≤60秒',
      subtext: '最优≤30秒',
      desc: '自适应扫频算法，动态调整',
    },
  ];

  const workflow = [
    {
      step: '01',
      title: '作业规划',
      description: '通过手持终端输入铁塔位置、高度、天线层数等基础信息，规划悬停测试点',
    },
    {
      step: '02',
      title: '视觉预定位',
      description: '无人机抵达目标铁塔，通过高清相机拍摄全景图像，识别天线位置、层数及数量',
    },
    {
      step: '03',
      title: '精准悬停采集',
      description: '在每副天线正前方0.5米处精准悬停，启动扫频模块采集全频段信号',
    },
    {
      step: '04',
      title: '数据传输存储',
      description: '采集数据通过4G/5G网络实时回传至平台，模块本地存储备份',
    },
    {
      step: '05',
      title: '智能判决分析',
      description: '基于多源数据，通过核心算法模型实现天线规格、RRU状态、运营商归属判定',
    },
    {
      step: '06',
      title: '报告生成',
      description: '系统自动汇总分析结果，生成可视化巡检报告，支持导出与共享',
    },
  ];

  const algorithms = [
    {
      icon: Crosshair,
      title: '多源数据融合定位算法',
      description: '采用基于多信号的智能DOA算法，识别信号来波方向，结合无人机定位数据，实现对天线辐射信号来源的精准定位，解决多天线信号干扰问题',
      features: ['DOA方向到达技术', '多信号智能识别', '精准定位算法'],
    },
    {
      icon: Settings,
      title: '天线规格智能判决算法',
      description: '从采集信号中提取频段、频点、PCI、信号带宽、调制方式等关键特征，构建天线规格特征向量库，通过多站点联合校验提升判决可信度',
      features: ['特征向量提取', '聚类分析算法', '交叉验证机制'],
    },
    {
      icon: Database,
      title: '运营商归属智能识别算法',
      description: '基于采集的PLMN码（MCC+MNC），与预置的全国运营商PLMN码数据库进行精准匹配，结合信号特征辅助判定运营商归属',
      features: ['PLMN精准匹配', '全国运营商数据库', '信号特征辅助判定'],
    },
  ];

  const hardwareModules = [
    {
      title: '射频接收单元',
      description: '采用宽频带射频芯片，集成低噪声放大器、混频器、滤波器等组件，实现4G/5G全频段信号的接收与预处理',
    },
    {
      title: '信号处理单元',
      description: '搭载高性能处理器，实时解析和提取频点数据，数据采样率≥10Hz，支持JSON/CSV格式存储',
    },
    {
      title: '定位与通信单元',
      description: '集成GPS/北斗双模定位模块与4G/5G通信模块，实现高精度定位数据采集与数据实时回传',
    },
    {
      title: '电源管理单元',
      description: '采用宽压输入电源芯片（5V/12V，±10%），具备过压/过流/短路保护、低功耗管理功能',
    },
    {
      title: '接口单元',
      description: '预留无人机供电接口、数据传输接口、SMA天线接口，支持模块化扩展与快速适配',
    },
  ];

  const innovations = [
    {
      title: '轻量化与高精度融合',
      description: '在≤200g的轻量化设计前提下，实现-110dBm的高灵敏度信号采集与≤1m的定位精度，突破传统扫频设备"重负荷、低精度"的瓶颈',
    },
    {
      title: '多源数据智能融合',
      description: '创新性地融合射频信号数据、GPS/北斗定位数据、视觉图像数据，构建多维度判决模型，提升天线信息识别的准确性与可靠性',
    },
    {
      title: '算法体系化与智能化',
      description: '构建涵盖定位、分类、判定、识别的全流程算法体系，采用深度学习与传统信号处理算法结合的方式，兼顾判决精度与实时性',
    },
    {
      title: '一体化作业与可视化输出',
      description: '实现从飞行规划、信号采集、数据处理到报告生成的全流程自动化作业，输出可视化巡检报告，显著提升运维效率',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm text-white/80">无人机搭载智能扫频模块</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
              巡天<span className="gradient-text">智能扫频系统</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              一款轻量化、高精度、智能化的无人机搭载扫频模块，通过无人机平台在铁塔周边安全距离内悬停作业，
              精准采集天线辐射信号，实现对天线规格参数、RRU连接状态及运营商归属的自动化、智能化识别与判定。
            </p>
          </div>
        </div>
      </section>

      {/* Core Specs */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              核心技术<span className="gradient-text">指标</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              轻量化设计，工业级性能，满足复杂户外环境下的稳定运行需求
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {techSpecs.map((spec, index) => (
              <div
                key={spec.label}
                className="card-dark group p-5 md:p-6"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <spec.icon size={20} className="text-blue-400" />
                  </div>
                  <span className="text-sm text-white/40">{spec.label}</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {spec.value}
                </div>
                <div className="text-sm text-blue-400 mb-2">{spec.subtext}</div>
                <div className="text-xs text-white/50">{spec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              整体工作<span className="gradient-text">流程</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              从作业规划到报告生成，全流程自动化作业，单天线测试时间≤60秒
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className="relative card-dark group"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-400">{item.step}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Algorithms */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              核心算法<span className="gradient-text">体系</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              涵盖定位、分类、判定、识别的全流程算法体系，深度学习与传统信号处理算法结合
            </p>
          </div>

          <div className="space-y-6">
            {algorithms.map((algo, index) => (
              <div
                key={algo.title}
                className="card-dark group"
              >
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <algo.icon size={24} className="text-blue-400" />
                      </div>
                      <div className="text-xs text-white/40">算法 {index + 1}</div>
                    </div>
                    <h3 className="text-lg font-semibold">{algo.title}</h3>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-white/60 mb-4 leading-relaxed">
                      {algo.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {algo.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Architecture */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                硬件系统<span className="gradient-text">架构</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                五大功能单元协同工作，采用工业级元器件选型，
                工作温度范围-20~60℃，防护等级IP65，适应户外复杂环境
              </p>

              <div className="space-y-4">
                {hardwareModules.map((module, index) => (
                  <div
                    key={module.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-blue-400">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{module.title}</h4>
                      <p className="text-sm text-white/60">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden img-zoom">
                <img
                  src={assetUrl('/drone.jpg')}
                  alt="Hardware system"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection Details */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              采集数据<span className="gradient-text">维度</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              多维度数据融合，确保数据完整性与可追溯性
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-dark">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Signal size={24} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-4">基础网络参数</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• PLMN（MCC+MNC）</li>
                <li>• 频段/频点/PCI</li>
                <li>• TAC/eNodeID/gNodeID</li>
                <li>• 信号带宽/调制方式</li>
              </ul>
            </div>

            <div className="card-dark">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <BarChart3 size={24} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-4">信号质量指标</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• RSRP（参考信号接收功率）</li>
                <li>• SINR（信干噪比）</li>
                <li>• RSRQ（参考信号接收质量）</li>
                <li>• 采样率≥10Hz</li>
              </ul>
            </div>

            <div className="card-dark">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6">
                <Eye size={24} className="text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-4">辅助数据</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• 采集时间戳</li>
                <li>• 无人机经纬度/海拔</li>
                <li>• 天线局部图像</li>
                <li>• 铁塔全景图像</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              项目<span className="gradient-text">创新点</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              技术创新与工程实践相结合，打造行业领先的智能巡检解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {innovations.map((item, index) => (
              <div
                key={item.title}
                className="card-dark group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-blue-400">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

            <div className="relative py-16 px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                了解更多<span className="gradient-text">技术详情</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">
                获取完整技术白皮书，了解系统架构、算法原理与实施案例
              </p>
              <button className="btn-primary">下载技术白皮书</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
