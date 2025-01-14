import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Building, ThumbsUp, Target, Briefcase } from "lucide-react";

export const Stats = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { 
      id: 1, 
      value: "500+", 
      label: t("stats.placements"), 
      icon: Users,
      description: "Profesionales IT colocados exitosamente"
    },
    { 
      id: 2, 
      value: "98%", 
      label: t("stats.satisfaction"), 
      icon: ThumbsUp,
      description: "Tasa de satisfacción de clientes"
    },
    { 
      id: 3, 
      value: "50+", 
      label: t("stats.clients"), 
      icon: Building,
      description: "Empresas confían en nosotros"
    },
    { 
      id: 4, 
      value: "24h", 
      label: t("stats.response"), 
      icon: Clock,
      description: "Tiempo promedio de respuesta"
    },
    { 
      id: 5, 
      value: "90%", 
      label: "Efectividad", 
      icon: Target,
      description: "Tasa de colocación exitosa"
    },
    { 
      id: 6, 
      value: "1000+", 
      label: "Búsquedas", 
      icon: Briefcase,
      description: "Búsquedas completadas"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-dark mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
          {t("stats.title")}
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <Card
              key={stat.id}
              className={`transform ${
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } transition-all duration-1000 ease-out hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border border-gray-100`}
              style={{ transitionDelay: `${stat.id * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};