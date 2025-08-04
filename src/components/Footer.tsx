import { Github, Linkedin, MessageCircle, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/franco-regenerating-world',
      label: 'LinkedIn'
    },
    {
      icon: MessageCircle,
      url: 'https://t.me/FrancoAguzzi',
      label: 'Telegram'
    },
    {
      icon: Github,
      url: 'https://github.com/FrancoAguzzi',
      label: 'GitHub'
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/77f04559-2276-4c39-87ec-adc407007fbc.png" 
                  alt="GraphQL Lint" 
                  className="w-8 h-8"
                />
              </div>
              <div className="font-bold text-xl text-white">GraphQL Lint</div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Detect unused fields in GraphQL queries with powerful terminal and pipeline tools.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-slate-400 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-slate-400 hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://www.npmjs.com/package/graphql-lint-unused-fields" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  NPM Package
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/regenerating-world/graphql-lint-unused-fields" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">{t('footer.contact')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
            <p className="text-slate-400 text-sm">
              Franco Aguzzi • Regenerating World
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © {currentYear} GraphQL Lint Unused Fields. {t('footer.license')}.
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for the GraphQL community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;