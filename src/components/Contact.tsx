import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";





const PHONE_NUMBER = "(96) 98106-1276";
const WHATSAPP_NUMBER = "(96) 98106-1276";
const EMAIL = "delicatajoiasamapa1@gmail.com";
const STORE_ADDRESS = "Rua Salvador Diniz, 471 - Centro";
const STORE_CITY = "Santana - AP";
const STORE_HOURS = "Seg a Sáb: 9h às 18h";


const FACEBOOK_USERNAME = "delicattajoalheria";

export function Contact() {
  const facebookLink = `https://facebook.com/${FACEBOOK_USERNAME}`;

  return (
    <section id="contato" className="bg-primary pt-6 pb-10 md:pt-10 md:pb-12">
      <div className="container mx-auto px-4">
        
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

        
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-accent/30 bg-primary p-8">
            <h3 className="mb-8 text-xl font-semibold text-primary-foreground">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              
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

            
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
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
                  "https://www.instagram.com/delicatta_joalheria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
              <a
                href="https://www.facebook.com/profile.php?id=61581978691855"
                target="_blank"
                rel="noopener noreferrer"
              >
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
