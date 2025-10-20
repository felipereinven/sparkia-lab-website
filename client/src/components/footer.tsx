import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "@/components/language-switch";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-3xl font-bold mb-4" data-testid="text-company-name">Sparkia Lab</div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed" data-testid="text-company-description">
              {t("footer.description")}
            </p>
            <div className="mb-6">
              <LanguageSwitch />
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-lg" data-testid="text-services-title">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="link-service-diagnosis"
                >
                  {t("footer.servicesList.diagnosis")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="link-service-webdev"
                >
                  {t("footer.servicesList.aiWebDev")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="link-service-automation"
                >
                  {t("footer.servicesList.automation")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="link-service-social"
                >
                  {t("footer.servicesList.socialMedia")}
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-lg" data-testid="text-contact-title">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <a 
                  href={`tel:${t("footer.phone")}`}
                  className="hover:text-white transition-colors"
                  data-testid="link-phone"
                >
                  {t("footer.phone")}
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a 
                  href={`mailto:${t("footer.email")}`}
                  className="hover:text-white transition-colors"
                  data-testid="link-email"
                >
                  {t("footer.email")}
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span data-testid="text-location">{t("footer.location")}</span>
              </li>
            </ul>
            
            {/* Get Started Button */}
            <motion.button
              onClick={() => scrollToSection('contacto')}
              className="mt-6 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-get-started"
            >
              {t("footer.getStarted")}
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left" data-testid="text-copyright">
              {t("footer.copyright")}
            </p>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a 
                href="#" 
                className="hover:text-white transition-colors"
                data-testid="link-privacy"
              >
                {t("footer.privacy")}
              </a>
              <span>•</span>
              <a 
                href="#" 
                className="hover:text-white transition-colors"
                data-testid="link-terms"
              >
                {t("footer.terms")}
              </a>
              <span>•</span>
              <a 
                href="#" 
                className="hover:text-white transition-colors"
                data-testid="link-cookies"
              >
                {t("footer.cookies")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
