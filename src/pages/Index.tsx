import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      icon: 'Zap',
      title: 'Закупка рекламы в Telegram',
      description: 'Посевы и Telegram Ads с бюджетами от 2 до 26 млн/мес. Отсев некачественных площадок, переговоры о скидках, маркировка и документооборот'
    },
    {
      icon: 'Target',
      title: 'Performance-маркетинг',
      description: 'Полный цикл запуска проектов: анализ ЦА, выбор каналов, тестирование гипотез, оптимизация в реальном времени'
    },
    {
      icon: 'FileText',
      title: 'Контент-маркетинг',
      description: 'Разработка контент-стратегии, создание продающих текстов и креативов для рекламных кампаний'
    },
    {
      icon: 'TrendingUp',
      title: 'Запуск онлайн-курсов',
      description: 'Проектное управление и маркетинг: от анализа до продаж. Воронки, работа с блогерами, аналитика'
    },
    {
      icon: 'Users',
      title: 'Продвижение личного бренда',
      description: 'B2B продвижение для экспертов и владельцев бизнеса. Формирование статуса для продажи франшиз и услуг'
    },
    {
      icon: 'CheckCircle',
      title: 'Проверка блогеров',
      description: 'Анализ площадок на накрутку, оценка эффективности, выбор оптимальных каналов для рекламы'
    }
  ];

  const portfolio = [
    {
      title: 'Онлайн-курс по пептидам',
      client: 'Запуск под ключ',
      description: 'Полный цикл: от анализа ЦА до запуска. Тестовая кампания с бюджетом 100 тыс. руб.',
      metrics: '93 лида → 27 оплат, чек 38 000₽'
    },
    {
      title: 'Рекламные кампании для крупного бизнеса',
      client: 'Сбер, Домклик, OBI',
      description: 'Закупка рекламы в Telegram: посевы, маркировка, документооборот',
      metrics: '10-13 кампаний/мес, бюджет 20-26 млн₽/мес'
    },
    {
      title: 'Продвижение франшизы',
      client: 'Студия балета Левита',
      description: 'Формирование личного бренда владельцев для B2B продаж франшизы',
      metrics: 'Экспертный статус + воронка продаж'
    },
    {
      title: 'Работа с топовыми блогерами',
      client: 'Performance-маркетинг',
      description: 'Продвижение каналов через @durovinfo, @aprelPR, @metod_Ro, @YuriyRazhev и др.',
      metrics: '+25% эффективность от оптимизации'
    }
  ];

  const blogPosts = [
    {
      title: 'Как проверить блогера на накрутку',
      date: '20 ноября 2024',
      excerpt: 'Простые способы определить качество аудитории перед закупкой рекламы',
      category: 'Telegram'
    },
    {
      title: 'Закупка рекламы: топ-5 ошибок',
      date: '15 ноября 2024',
      excerpt: 'Разбор частых ошибок при покупке посевов и как их избежать',
      category: 'Реклама'
    },
    {
      title: 'Telegram Ads vs посевы: что выбрать',
      date: '10 ноября 2024',
      excerpt: 'Сравнение эффективности двух главных инструментов продвижения в Telegram',
      category: 'Аналитика'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            MarketPro
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Эффективная реклама в Telegram
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Закупаю рекламу с бюджетами до 26 млн/мес. Performance-маркетинг и запуск проектов под ключ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                Начать проект
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Посмотреть кейсы
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">26 млн</div>
              <div className="text-muted-foreground mt-2">Рекл. бюджет/мес</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">+25%</div>
              <div className="text-muted-foreground mt-2">Эффективность</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">10-13</div>
              <div className="text-muted-foreground mt-2">Кампаний/мес</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">4 года</div>
              <div className="text-muted-foreground mt-2">Опыта</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://cdn.poehali.dev/files/7e5d370b-19d7-4d1d-81b0-3cdf505d5e21.jpg" 
                  alt="Маркетолог эксперт"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Обо мне
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Performance-маркетолог и закупщик рекламы в Telegram с 4-летним опытом.
                Специализируюсь на посевах и Telegram Ads с крупными бюджетами.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Работал с <strong className="text-foreground">Сбером, Домкликом, OBI</strong> — осваивал бюджет 20-26 млн рублей/мес, вёл 10-13 кампаний одновременно.
                Запускаю онлайн-курсы под ключ и развиваю личные бренды для B2B.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Проверка качества площадок</div>
                    <div className="text-muted-foreground">Отсев накрученных блогеров и неэффективных каналов</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Оптимизация бюджета</div>
                    <div className="text-muted-foreground">Скидки от проверенных площадок, +25% эффективность</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Полный документооборот</div>
                    <div className="text-muted-foreground">Маркировка рекламы, отчёты, закрывающие документы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр маркетинговых услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Портфолио
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты для реальных брендов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="TrendingUp" size={64} className="text-white opacity-30 group-hover:scale-125 transition-transform" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-semibold text-foreground/70">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold text-sm">
                    {project.metrics}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Блог
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делюсь знаниями и опытом в маркетинге
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Свяжитесь со мной
            </h2>
            <p className="text-xl text-muted-foreground">
              Готов обсудить ваш проект и предложить эффективные решения
            </p>
          </div>

          <Card className="animate-fade-in-up shadow-2xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="min-h-32 border-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>

              <div className="mt-10 pt-10 border-t grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">hello@marketpro.ru</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div className="font-semibold">Телефон</div>
                  <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div className="font-semibold">Локация</div>
                  <div className="text-muted-foreground">Москва, Россия</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">MarketPro</div>
              <p className="text-white/80">Маркетинг нового поколения</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li>Стратегия</li>
                <li>Digital</li>
                <li>Контент</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Linkedin" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Twitter" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            © 2024 MarketPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;