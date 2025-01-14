import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Briefcase, MapPin, Clock, Code } from "lucide-react";

export const OpenPositions = () => {
  const { t } = useTranslation();
  
  const positions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      skills: ["React", "TypeScript", "Node.js"],
      description: "Buscamos un desarrollador Frontend Senior para liderar proyectos importantes",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      location: "Hybrid",
      type: "Full-time",
      skills: ["AWS", "Docker", "Kubernetes"],
      description: "Únete a nuestro equipo de infraestructura cloud en crecimiento",
    },
    {
      id: 3,
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      skills: ["Java", "Spring Boot", "MySQL"],
      description: "Desarrollador Backend con experiencia en microservicios",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
          {t("positions.title")}
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Descubre las oportunidades que tenemos para ti
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <Card 
              key={position.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-100 overflow-hidden"
            >
              <CardHeader className="space-y-1 p-6">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="mb-2">
                    Nuevo
                  </Badge>
                  <div className="text-primary">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary-dark group-hover:text-primary transition-colors">
                  {position.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 pt-0">
                <p className="text-gray-600">
                  {position.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {position.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className="bg-primary/5 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-white border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Aplicar ahora</span>
                  <Briefcase className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};