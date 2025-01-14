import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulamos el envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: t("contact.success"),
      description: t("contact.successMessage"),
    });
    
    setLoading(false);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          {t("contact.title")}
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary-dark">
              {t("contact.subtitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t("contact.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder={t("contact.subjectPlaceholder")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder={t("contact.messagePlaceholder")}
                  className="min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? t("contact.sending") : t("contact.send")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};