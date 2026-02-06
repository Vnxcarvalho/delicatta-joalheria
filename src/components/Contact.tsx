/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Seção de Contato
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe o formulário de contato e informações da loja.
 * 
 * COMO EDITAR:
 * - Altere as constantes abaixo com suas informações
 * - Substitua os links do WhatsApp, Instagram e Facebook
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

import { useToast } from "@/hooks/use-toast";

// ─────────────────────────────────────────────────────────────────────────────
// INFORMAÇÕES DE CONTATO - Edite aqui com seus dados
// ─────────────────────────────────────────────────────────────────────────────

const PHONE_NUMBER = "(96) 98106-1276";
const WHATSAPP_NUMBER = "(96) 98106-1276";
const EMAIL = "delicatajoiasamapa1@gmail.com";
const STORE_ADDRESS = "Rua Salvador Diniz, 471 - Centro";
const STORE_CITY = "Santana - AP";
const STORE_HOURS = "Seg a Sáb: 9h às 18h";

// Links das redes sociais
const WHATSAPP_MESSAGE = "Olá! 👋 tudo bem? Tenho interesse em conhecer as peças da joalheria.";
const INSTAGRAM_USERNAME = "delicattajoalheria";
const FACEBOOK_USERNAME = "delicattajoalheria";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const instagramLink = `https://instagram.com/${INSTAGRAM_USERNAME}`;
  const facebookLink = `https://facebook.com/${FACEBOOK_USERNAME}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        {/* ─────────────────────────────────────────────────────────────────
         * TÍTULO
         * ───────────────────────────────────────────────────────────────── */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-accent">
            Fale Conosco
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Entre em Contato
          </h2>
          <p className="text-primary-foreground/70">
            Estamos prontos para atendê-lo. Envie uma mensagem ou visite nossa loja física.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
         * GRID COM FORMULÁRIO E INFORMAÇÕES
         * ───────────────────────────────────────────────────────────────── */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* ─────────────────────────────────────────────────────────────────
           * FORMULÁRIO DE CONTATO
           * ───────────────────────────────────────────────────────────────── */}
          <div className="rounded-lg border border-accent/30 bg-primary p-8">
            <h3 className="mb-6 text-xl font-semibold text-primary-foreground">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-primary-foreground">
                  Nome completo
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="border-accent/30 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-primary-foreground">
                  E-mail
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="border-accent/30 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-primary-foreground">
                  Telefone
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(96) 99999-9999"
                  className="border-accent/30 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-primary-foreground">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudá-lo?"
                  required
                  rows={5}
                  className="border-accent/30 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
           * INFORMAÇÕES DE CONTATO
           * ───────────────────────────────────────────────────────────────── */}
          <div className="rounded-lg border border-accent/30 bg-primary p-8">
            <h3 className="mb-8 text-xl font-semibold text-primary-foreground">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Telefone</h4>
                  <p className="text-primary-foreground/70">{PHONE_NUMBER}</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">E-mail</h4>
                  <p className="text-primary-foreground/70">{EMAIL}</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Endereço</h4>
                  <p className="text-primary-foreground/70">{STORE_ADDRESS}</p>
                  <p className="text-primary-foreground/70">{STORE_CITY}</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Horário</h4>
                  <p className="text-primary-foreground/70">{STORE_HOURS}</p>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
             * BOTÕES DE REDES SOCIAIS
             * ───────────────────────────────────────────────────────────────── */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[hsl(142,70%,35%)] text-primary-foreground hover:bg-[hsl(142,70%,30%)]">
                  <WhatsAppIcon className="mr-[-3px] h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full border-accent/30 bg-transparent text-primary-foreground hover:bg-accent/10"
                >
                  <Instagram className="mr-[-4px] h-4 w-4" />
                  Instagram
                </Button>
              </a>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <Facebook className="mr-[-5px] h-4 w-4" />
                  Facebook
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
