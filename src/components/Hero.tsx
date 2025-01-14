import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Globe, Users, Building2 } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 animate-[spin_60s_linear_infinite] opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff0d,transparent)]" />
        </div>
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 text-center text-white relative ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">
              {t("hero.tagline")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            {t("hero.title")}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/80">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-white text-primary-dark rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold flex items-center gap-2 hover:gap-4">
              {t("hero.cta1")}
              <ArrowRight className="w-4 h-4 transition-all duration-300" />
            </button>
            <button className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              {t("hero.cta2")}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-white/60">Profesionales IT</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Building2 className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">100+</p>
                <p className="text-white/60">Empresas</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Globe className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-white/60">Países</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};