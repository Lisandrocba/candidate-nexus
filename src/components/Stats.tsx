import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export const Stats = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { id: 1, value: "500+", label: t("stats.placements") },
    { id: 2, value: "98%", label: t("stats.satisfaction") },
    { id: 3, value: "50+", label: t("stats.clients") },
    { id: 4, value: "24h", label: t("stats.response") },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          {t("stats.title")}
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`transform ${
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } transition duration-1000 ease-out`}
              style={{ transitionDelay: `${stat.id * 200}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};