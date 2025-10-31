import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar, Clock } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import homepage_banner from "@/assets/homepage_banner.svg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                {t("hero.trusted")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold leading-tight"
            >
              <span className="text-primary">Smart</span>{" "}
              {t("hero.title").split("Smart ")[1] ||
                t("hero.title").split("intelligente ")[1] ||
                t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button variant="hero" size="xl" className="group shadow-glow">
                {t("hero.cta")}
                <motion.div
                  className={`${t("hero.cta").length > 20 ? 'mr-2 rtl:ml-2 rtl:mr-0' : 'ml-2 rtl:mr-2 rtl:ml-0'}`}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="flex flex-col items-start space-y-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">25K+</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t("hero.stat1")}
                </span>
              </div>
              <div className="flex flex-col items-start space-y-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t("hero.stat2")}
                </span>
              </div>
              <div className="flex flex-col items-start space-y-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-success" />
                  <span className="text-2xl font-bold text-foreground">45min</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t("hero.stat3")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={homepage_banner}
                alt="Smart Scheduling Dashboard"
                className="w-[800px] h-auto rounded-3xl mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
