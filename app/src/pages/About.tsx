import { useEffect, useState } from 'react';
import { GraduationCap, Code2, Rocket, Target, Award, Users } from 'lucide-react';
import { assetUrl } from '@/lib/asset-url';
import { brand } from '@/lib/brand';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: '彭总',
      role: '太上长老',
      image: assetUrl('/team-peng.jpg'),
      background: '筑基期修士',
      expertise: '炼丹 · 符箓',
      description: '修仙界资深前辈，精通丹道与符箓之术，为团队提供超凡脱俗的技术指引与精神支撑。',
    },
    {
      name: '非哥',
      role: 'AI技术负责人',
      image: assetUrl('/team-feige.png'),
      background: '上海交通大学工学硕士',
      expertise: '计算机视觉 / AIGC / 三维重建',
      description: '上海交通大学工学学士、硕士，信息工程（图像信息处理）方向。长期聚焦计算机视觉与AIGC领域，在数字人、数字孪生、三维重建、多模态大模型等方向开展研究与实践。擅长将前沿AI技术转化为可落地的产品与平台能力。',
    },
    {
      name: '潘笛',
      role: '技术型创始人',
      image: assetUrl('/team-pandi.jpg'),
      background: '上海交大硕士 · 腾讯光子',
      expertise: '游戏AI / VR交互 / 工程交付',
      description: '腾讯光子战斗AI方向出身，用系统级方法做复杂问题，习惯把"机制—数据—工具链—验收"串成闭环。横跨游戏AI、VR交互、机器学习与工程交付，具备把技术变成生产力的综合优势。',
    },
  ];

  const milestones = [
    {
      year: '2023',
      title: '项目启动',
      description: '团队组建，技术可行性验证',
    },
    {
      year: '2024',
      title: '技术验证',
      description: 'SDR地面采样与频段识别验证完成',
    },
    {
      year: '2024',
      title: '系统集成',
      description: '无人机自主飞行系统成熟可控',
    },
    {
      year: '2025',
      title: '商业拓展',
      description: '推进机载集成研发，对接中国铁塔',
    },
  ];

  const advantages = [
    {
      icon: GraduationCap,
      title: '顶尖学术背景',
      description: '核心团队来自上海交通大学电子信息与电气工程学院',
    },
    {
      icon: Code2,
      title: '深厚技术积累',
      description: '具备无人机控制与信号处理系统研发经验',
    },
    {
      icon: Rocket,
      title: '工程落地能力',
      description: '从算法研发到产品落地的完整能力体系',
    },
    {
      icon: Target,
      title: '明确市场需求',
      description: '已与中国铁塔建立沟通对接，需求来源明确',
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
              关于<span className="gradient-text">{brand.companyName}</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              {brand.companyName}是一家专注于通信基础设施数字化管理的科技公司，
              致力于通过创新技术推动通信资产巡检的智能化升级。
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision */}
            <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl" />
              <Target size={32} className="text-blue-400 mb-6" />
              <h2 className="text-2xl font-semibold mb-4">我们的愿景</h2>
              <p className="text-white/60 leading-relaxed">
                构建通信基础设施信号级数字资产平台，推动低空智能巡检标准化发展，
                成为通信资产数据服务的基础设施提供者。
              </p>
            </div>

            {/* Mission */}
            <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl" />
              <Rocket size={32} className="text-purple-400 mb-6" />
              <h2 className="text-2xl font-semibold mb-4">我们的使命</h2>
              <p className="text-white/60 leading-relaxed">
                通过无人机自主飞行与SDR频谱扫描技术，实现通信铁塔资产的
                智能化、数字化巡检管理，为客户创造显著价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              核心<span className="gradient-text">竞争优势</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              信号识别替代视觉铭牌识别，实现代际升级
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="card-dark flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <advantage.icon size={28} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              核心<span className="gradient-text">团队</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              上海交通大学硕博背景，结合腾讯光子AI系统落地经验，
              具备从底层算法到系统级架构的完整技术视角
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-400 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <GraduationCap size={16} className="text-white/40" />
                    {member.background}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Award size={16} className="text-white/40" />
                    {member.expertise}
                  </div>
                  {member.description && (
                    <p className="text-xs text-white/40 mt-3 leading-relaxed">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              发展<span className="gradient-text">历程</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              从技术研发到商业落地，稳步前行的每一步
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold gradient-text">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-white/60">{milestone.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-blue-400 md:-translate-x-1.5 mt-2 ring-4 ring-black" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding Plan */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                融资<span className="gradient-text">计划</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                天使轮融资规模300-500万元，主要用于系统集成、试点拓展与团队扩充，
                预计18-24个月完成关键技术与商业里程碑。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Target size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">融资规模</h4>
                    <p className="text-white/60">天使轮 300-500万元</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">资金用途</h4>
                    <p className="text-white/60">系统集成、试点拓展、团队扩充</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Rocket size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">里程碑</h4>
                    <p className="text-white/60">18-24个月完成关键技术与商业目标</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">300-500万</div>
                  <div className="text-white/60">天使轮融资</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
