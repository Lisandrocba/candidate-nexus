import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div
        ref={ref}
        className={`container mx-auto px-4 text-center text-white relative ${
          inView ? "animate-float" : ""
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-primary-dark rounded-md hover:bg-gray-100 transition font-semibold">
            {t("hero.cta1")}
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-primary-dark transition font-semibold">
            {t("hero.cta2")}
          </button>
        </div>
      </div>
    </div>
  );
};