import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  businessType?: string;
  monthlyRevenue?: string;
  challenge: string;
  acceptedTerms: boolean;
};

export default function ModernContactForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Create localized schema
  const localizedSchema = z.object({
    name: z.string().min(2, t('contact.form.nameError')),
    email: z.string().email(t('contact.form.emailError')),
    phone: z.string().optional(),
    businessType: z.string().optional(),
    monthlyRevenue: z.string().optional(),
    challenge: z.string().min(10, t('contact.form.challengeError')),
    acceptedTerms: z.boolean().refine(val => val === true, t('contact.form.termsError'))
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(localizedSchema),
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
        title: t('contact.form.successTitle'),
        description: t('contact.form.successMessage'),
      });
      form.reset();
      setAcceptedTerms(false);
    },
    onError: (error: any) => {
      toast({
        title: t('contact.form.errorTitle'),
        description: error.message || t('contact.form.errorMessage'),
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')} 
            <span className="text-gradient">{t('contact.freeDiagnosis')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="card-modern p-8">
              <h3 className="text-2xl font-bold mb-6">{t('contact.whyChoose')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('contact.personalizedStrategy')}</h4>
                    <p className="text-muted-foreground text-sm">{t('contact.personalizedDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('contact.intelligentAutomation')}</h4>
                    <p className="text-muted-foreground text-sm">{t('contact.intelligentAutomationDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('contact.guaranteedROI')}</h4>
                    <p className="text-muted-foreground text-sm">{t('contact.guaranteedROIDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="card-modern p-8">
              <h3 className="text-xl font-bold mb-6">{t('contact.contactInfo')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{t('contact.phone')}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t('contact.email')}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{t('contact.location')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="card-modern p-8"
            onSubmit={form.handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label className="block text-sm font-semibold mb-3">{t('contact.form.fullName')}</Label>
                <Input
                  {...form.register("name")}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full form-input"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-semibold mb-3">{t('contact.form.email')}</Label>
                <Input
                  {...form.register("email")}
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full form-input"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label className="block text-sm font-semibold mb-3">{t('contact.form.phone')}</Label>
                <Input
                  {...form.register("phone")}
                  type="tel"
                  placeholder={t('contact.form.phonePlaceholder')}
                  className="w-full form-input"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <Label className="block text-sm font-semibold mb-3">{t('contact.form.businessType')}</Label>
                <Select onValueChange={(value) => form.setValue("businessType", value)}>
                  <SelectTrigger className="w-full form-input" data-testid="select-business-type">
                    <SelectValue placeholder={t('contact.form.selectOption')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">{t('contact.form.ecommerce')}</SelectItem>
                    <SelectItem value="services">{t('contact.form.services')}</SelectItem>
                    <SelectItem value="saas">{t('contact.form.saas')}</SelectItem>
                    <SelectItem value="consulting">{t('contact.form.consulting')}</SelectItem>
                    <SelectItem value="other">{t('contact.form.other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label className="block text-sm font-semibold mb-3">{t('contact.form.monthlyRevenue')}</Label>
              <Select onValueChange={(value) => form.setValue("monthlyRevenue", value)}>
                <SelectTrigger className="w-full form-input" data-testid="select-revenue">
                  <SelectValue placeholder={t('contact.form.selectRange')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="less-5k">{t('contact.form.less5k')}</SelectItem>
                  <SelectItem value="5k-15k">{t('contact.form.5k15k')}</SelectItem>
                  <SelectItem value="15k-50k">{t('contact.form.15k50k')}</SelectItem>
                  <SelectItem value="more-50k">{t('contact.form.more50k')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <Label className="block text-sm font-semibold mb-3">{t('contact.form.challenge')}</Label>
              <Textarea
                {...form.register("challenge")}
                rows={4}
                placeholder={t('contact.form.challengePlaceholder')}
                className="w-full form-input resize-none"
                data-testid="textarea-challenge"
              />
              {form.formState.errors.challenge && (
                <p className="text-red-400 text-sm mt-2">{form.formState.errors.challenge.message}</p>
              )}
            </div>

            <div className="mb-8">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => {
                    setAcceptedTerms(checked as boolean);
                    form.setValue("acceptedTerms", checked as boolean);
                  }}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  {t('contact.form.terms')}
                </Label>
              </div>
              {form.formState.errors.acceptedTerms && (
                <p className="text-red-400 text-sm mt-2">{form.formState.errors.acceptedTerms.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full btn-primary py-4 text-lg font-semibold rounded-full"
              disabled={submitContactMutation.isPending}
            >
              {submitContactMutation.isPending ? (
                <>
                  <svg className="w-5 h-5 mr-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {t('contact.form.submitButton')}
                </>
              )}
            </Button>

            <div className="mt-6 text-center text-muted-foreground text-sm flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {t('contact.form.dataSecure')}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}