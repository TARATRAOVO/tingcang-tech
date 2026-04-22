import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from 'lucide-react';
import { BrandMark } from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { brand } from '@/lib/brand';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('消息已发送', {
      description: '我们会尽快与您联系，感谢您的关注！',
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: brand.email,
      href: brand.emailHref,
    },
    {
      icon: Phone,
      label: '电话',
      value: brand.phone,
      href: brand.phoneHref,
    },
    {
      icon: MapPin,
      label: '地址',
      value: brand.address,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      label: '微信',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
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
              联系<span className="gradient-text">我们</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              无论您有任何问题或合作意向，我们都期待与您交流。
              请填写下方表单，我们会尽快回复。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">联系方式</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <item.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40 mb-1">
                        {item.label}
                      </div>
                      <div className="text-white group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4">关注我们</h3>
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                    title={item.label}
                  >
                    <item.icon size={20} className="text-white/60" />
                  </a>
                ))}
              </div>

              {/* Decorative element */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/5">
                <h4 className="font-semibold mb-2">工作时间</h4>
                <p className="text-white/60 text-sm">
                  周一至周五 9:00 - 18:00
                  <br />
                  周末及节假日休息
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">发送消息</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-white/60 mb-2"
                    >
                      姓名 <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-white/60 mb-2"
                    >
                      邮箱 <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm text-white/60 mb-2"
                  >
                    公司名称
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="您的公司名称"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/60 mb-2"
                  >
                    消息内容 <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请描述您的需求或问题..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      发送消息
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.04]">
                  <BrandMark className="h-11 w-11" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{brand.companyName}</h3>
                <p className="text-white/60">{brand.address}</p>
                <p className="text-white/40 text-sm mt-1">{brand.locationNote}</p>
              </div>
            </div>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              期待与您的<span className="gradient-text">合作</span>
            </h2>
            <p className="text-white/60 mb-8">
              无论您是通信运营商、铁塔公司，还是投资机构，
              我们都期待与您建立联系，共同探索合作机会。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={brand.emailHref}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={18} />
                发送邮件
              </a>
              <a href={brand.phoneHref} className="btn-outline flex items-center gap-2">
                <Phone size={18} />
                拨打电话
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
