import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Building, ThumbsUp } from "lucide-react";

export const Stats = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { id: 1, value: "500+", label: t("stats.placements"), icon: Users },
    { id: 2, value: "98%", label: t("stats.satisfaction"), icon: ThumbsUp },
    { id: 3, value: "50+", label: t("stats.clients"), icon: Building },
    { id: 4, value: "24h", label: t("stats.response"), icon: Clock },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          {t("stats.title")}
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <Card
              key={stat.id}
              className={`transform ${
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } transition duration-1000 ease-out hover:shadow-lg hover:-translate-y-1`}
              style={{ transitionDelay: `${stat.id * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <stat.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};