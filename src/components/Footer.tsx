import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import delicattaLogo from "@/assets/delicatta-logo.jpeg";




const STORE_NAME = "Delicatta Joalheria";
const STORE_DESCRIPTION = "";
const CURRENT_YEAR = new Date().getFullYear();


const PHONE_NUMBER = "(96) 98106-1276";
const EMAIL = "delicatajoiasamapa1@gmail.com";
const ADDRESS = "Rua Salvador Diniz, 471 - Centro";
const CITY = "Santana - AP";
const HOURS = "Seg a Sáb: 9h às 18h";


const WHATSAPP_NUMBER = "5511999999999";
const INSTAGRAM_USERNAME = "delicattajoalheria";
const FACEBOOK_USERNAME = "delicattajoalheria";

export function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  const instagramLink = `https://instagram.com/${INSTAGRAM_USERNAME}`;
  const facebookLink = `https://facebook.com/${FACEBOOK_USERNAME}`;

  return (
    <footer className="bg-primary">
      
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="order-last flex flex-col items-center text-center lg:order-none lg:items-start lg:text-left">
            <img
              src={delicattaLogo}
              alt={STORE_NAME}
              className="mb-5 h-16 w-16 rounded-full object-cover mx-auto lg:ml-10 lg:mx-0"
            />
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
              {STORE_DESCRIPTION}
            </p>
            <div className="flex justify-center gap-3 lg:justify-start">
              <a
                href={"https://wa.link/mr3lkl"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={
                  "https://www.instagram.com/delicatta_joalheria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={"https://www.facebook.com/profile.php?id=61581978691855"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="mb-4 font-semibold text-accent">Navegação</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Início
              </a>
              <a
                href="#nossa-historia"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Sobre
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Produtos
              </a>
              <a
                href="#contato"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Contato
              </a>
            </nav>
          </div>

          
          <div>
            <h3 className="mb-4 font-semibold text-accent">Categorias</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Ouro
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Prata
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Aço
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Alianças
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Semijoias
              </a>
            </nav>
          </div>

          
          <div>
            <h3 className="mb-4 font-semibold text-accent">Contato</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <p>{PHONE_NUMBER}</p>
              <p>{EMAIL}</p>
              <p>{ADDRESS}</p>
              <p>{CITY}</p>
              <p>{HOURS}</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-primary-foreground/50">
            © {CURRENT_YEAR} {STORE_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
