import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

export const OpenPositions = () => {
  const { t } = useTranslation();
  
  const positions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "DevOps Engineer",
      location: "Hybrid",
      type: "Full-time",
      skills: ["AWS", "Docker", "Kubernetes"],
    },
    {
      id: 3,
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      skills: ["Java", "Spring Boot", "MySQL"],
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          {t("positions.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position) => (
            <Card key={position.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary-dark">
                  {position.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{position.location}</Badge>
                    <Badge variant="secondary">{position.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
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