import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  businessType: z.string().optional(),
  monthlyRevenue: z.string().optional(),
  challenge: z.string().min(10, "Describe tu desafío con más detalle"),
  acceptedTerms: z.boolean().refine(val => val === true, "Debes aceptar los términos")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      monthlyRevenue: "",
      challenge: "",
      acceptedTerms: false
    }
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", {
        ...data,
        acceptedTerms: data.acceptedTerms ? "true" : "false"
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Formulario enviado!",
        description: "Te contactaremos en menos de 24 horas.",
      });
      form.reset();
      setAcceptedTerms(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error al enviar formulario",
        description: error.message || "Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Solicita tu <span className="text-blue-600">Diagnóstico Gratuito</span>
          </h2>
          <p className="text-xl text-gray-600">
            Completa el formulario y te contactaremos en menos de 24 horas.
          </p>
        </motion.div>

        <motion.form 
          className="bg-gray-50 rounded-2xl p-8"
          onSubmit={form.handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="block text-gray-700 font-semibold mb-2">Nombre completo *</Label>
              <Input
                {...form.register("name")}
                placeholder="Tu nombre completo"
                className="w-full"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div>
              <Label className="block text-gray-700 font-semibold mb-2">Email *</Label>
              <Input
                {...form.register("email")}
                type="email"
                placeholder="tu@email.com"
                className="w-full"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="block text-gray-700 font-semibold mb-2">Teléfono</Label>
              <Input
                {...form.register("phone")}
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full"
              />
            </div>
            <div>
              <Label className="block text-gray-700 font-semibold mb-2">Tipo de negocio</Label>
              <Select onValueChange={(value) => form.setValue("businessType", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="services">Servicios profesionales</SelectItem>
                  <SelectItem value="saas">SaaS / Tecnología</SelectItem>
                  <SelectItem value="consulting">Consultoría</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <Label className="block text-gray-700 font-semibold mb-2">Ingresos mensuales actuales</Label>
            <Select onValueChange={(value) => form.setValue("monthlyRevenue", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un rango" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-5k">Menos de $5K</SelectItem>
                <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                <SelectItem value="15k-50k">$15K - $50K</SelectItem>
                <SelectItem value="more-50k">Más de $50K</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <Label className="block text-gray-700 font-semibold mb-2">¿Cuál es tu mayor desafío actual? *</Label>
            <Textarea
              {...form.register("challenge")}
              rows={4}
              placeholder="Describe brevemente tu situación actual y qué te gustaría lograr..."
              className="w-full"
            />
            {form.formState.errors.challenge && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.challenge.message}</p>
            )}
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptedTerms}
                onCheckedChange={(checked) => {
                  setAcceptedTerms(checked as boolean);
                  form.setValue("acceptedTerms", checked as boolean);
                }}
              />
              <Label htmlFor="terms" className="text-gray-700">
                Acepto recibir comunicaciones de Sparkia Lab y la política de privacidad *
              </Label>
            </div>
            {form.formState.errors.acceptedTerms && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.acceptedTerms.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            disabled={submitContactMutation.isPending}
          >
            {submitContactMutation.isPending ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Enviando...
              </>
            ) : (
              <>
                <i className="fas fa-rocket mr-2"></i>
                Solicitar Mi Diagnóstico Gratuito
              </>
            )}
          </Button>

          <div className="mt-4 text-center text-gray-500 text-sm">
            <i className="fas fa-shield-alt mr-2"></i>
            Tus datos están 100% seguros y nunca serán compartidos
          </div>
        </motion.form>
      </div>
    </section>
  );
}
