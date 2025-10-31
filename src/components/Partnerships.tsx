import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const partnerships = [
  {
    id: 1,
    name: "Air Algérie",
    logo: "/src/assets/Air_Algérie_logo.png",
    description: "National airline partnership"
  },
  {
    id: 2,
    name: "Bank of Algeria",
    logo: "/src/assets/Bank_of_Algeria.png",
    description: "Banking sector collaboration"
  },
  {
    id: 3,
    name: "Djezzy",
    logo: "/src/assets/Djezzy_Logo.png",
    description: "Telecommunications partner"
  },
  {
    id: 4,
    name: "Sonatrach",
    logo: "/src/assets/Flag_of_Sonatrach.png",
    description: "Energy sector partnership"
  },
  {
    id: 5,
    name: "Mobilis",
    logo: "/src/assets/Logo_Mobilis.png",
    description: "Mobile network operator"
  },
  {
    id: 6,
    name: "Ooredoo",
    logo: "/src/assets/Ooredoo_logo.svg",
    description: "Telecommunications partner"
  },
  {
    id: 7,
    name: "Sonelgaz",
    logo: "/src/assets/Sonlgaz.png",
    description: "Electricity and gas provider"
  },
  {
    id: 8,
    name: "CNAS",
    logo: "/src/assets/cnas.png",
    description: "Social security partner"
  }
];

const Partnerships = () => {
  const { t } = useTranslation();
  
  return (
    <section id="partnerships" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("partnerships.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("partnerships.subtitle")}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex w-max gap-8 animate-scroll-infinite">
            {[...partnerships, ...partnerships].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-24 border border-border/40 rounded-lg bg-background/50 backdrop-blur-sm"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
