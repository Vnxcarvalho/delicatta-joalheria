

import { Award, Shield, Heart, Truck } from "lucide-react";




const SECTION_LABEL = "NOSSA HISTÓRIA";
const SECTION_TITLE = "Tradição e elegância em cada detalhe";
const SECTION_TEXT_1 =
  "A Delicatta nasce da união entre tradição joalheira e olhar contemporâneo. Cada peça é cuidadosamente fabricada com atenção absoluta aos detalhes, desde o desenho inicial até o acabamento final. O processo valoriza a precisão, a harmonia das formas e o brilho perfeito do metal, garantindo joias que não apenas encantam, mas permanecem.";
const SECTION_TEXT_2 = "";


const YEARS_OF_TRADITION = "10+";
const YEARS_LABEL = "Anos de tradição";




const HISTORY_IMAGE = "src/public/anelouropedra.jpeg";




const benefits = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Joias certificadas com garantia de autenticidade",
  },
  {
    icon: Shield,
    title: "Garantia Vitalícia",
    description: "Manutenção gratuita em ouro e prata",
  },
  {
    icon: Heart,
    title: "Atendimento Especial",
    description: "Consultoria personalizada para você",
  },
  {
    icon: Truck,
    title: "Entrega Segura",
    description: "Entregamos para todo Brasil",
  },
];

export function OurHistory() {
  return (
    <section
      id="nossa-historia"
      className="bg-primary pt-10 pb-6 md:pt-16 md:pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={"anelouropedra.jpeg"}
                alt="Joias Delicatta"
                className="h-[350px] w-full md:h-[600px] md:w-[700px] object-cover object-[center_80%]"
              />
            </div>

            
            <div className="absolute bottom-6 right-6 rounded bg-accent px-6 py-3 text-center shadow-lg">
              <span className="block text-3xl font-bold text-accent-foreground">
                {YEARS_OF_TRADITION}
              </span>
              <span className="text-sm text-accent-foreground">
                {YEARS_LABEL}
              </span>
            </div>
          </div>

          
          <div className="space-y-8">
            
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-accent">
                {SECTION_LABEL}
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                {SECTION_TITLE}
              </h2>
            </div>

            
            <div className="space-y-4">
              <p className="text-primary-foreground/80">{SECTION_TEXT_1}</p>
              <p className="text-primary-foreground/80">{SECTION_TEXT_2}</p>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-4"
                >
                  <benefit.icon className="mb-2 h-6 w-6 text-accent" />
                  <h3 className="font-semibold text-primary-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
