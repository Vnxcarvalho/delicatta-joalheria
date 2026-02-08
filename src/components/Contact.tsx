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
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

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
const WHATSAPP_MESSAGE =
  "Olá! 👋 tudo bem? Tenho interesse em conhecer as peças da joalheria.";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
            Estamos prontos para atendê-lo. Envie uma mensagem ou visite nossa
            loja física.
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
                  <h4 className="font-semibold text-primary-foreground">
                    Telefone
                  </h4>
                  <p className="text-primary-foreground/70">{PHONE_NUMBER}</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">
                    E-mail
                  </h4>
                  <p className="text-primary-foreground/70">{EMAIL}</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">
                    Endereço
                  </h4>
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
                  <h4 className="font-semibold text-primary-foreground">
                    Horário
                  </h4>
                  <p className="text-primary-foreground/70">{STORE_HOURS}</p>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
             * BOTÕES DE REDES SOCIAIS
             * ───────────────────────────────────────────────────────────────── */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <a
                href={"https://wa.link/mr3lkl"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[hsl(142,70%,35%)] text-primary-foreground hover:bg-[hsl(142,70%,30%)]">
                  <WhatsAppIcon className="mr-[-3px] h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <a
                href={
                  "https://www.instagram.com/delicatta_joiasap?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                target="_blank"
                rel="noopener noreferrer"
              >
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
