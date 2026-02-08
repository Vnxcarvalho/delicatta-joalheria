const imageModules = import.meta.glob("@/assets/products/*.{jpeg,jpg,png,svg,webp}", {
  eager: true,
  import: "default",
});

// Criar um mapeamento de nome de arquivo (sem extensão) para o caminho da imagem
export const productImages: Record<string, string> = {};
Object.entries(imageModules).forEach(([path, value]) => {
  const fileName = path.split("/").pop()?.split(".")[0] || "";
  if (fileName) {
    productImages[fileName] = value as string;
  }
});

export type Material = "ouro" | "prata" | "aco";
export type JewelryType = "brinco" | "alianca" | "pulseira" | "colar" | "anel" | "bracelete" | "argola" | "cordao" | "piercing";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  material: Material;
  type: JewelryType;
  available: boolean;
}

export const materialLabels: Record<Material, string> = {
  ouro: "Ouro",
  prata: "Prata",
  aco: "Aço",
};

export const typeLabels: Record<JewelryType, string> = {
  brinco: "Brincos",
  alianca: "Alianças",
  pulseira: "Pulseiras",
  colar: "Colares",
  anel: "Anéis",
  bracelete: "Braceletes",
  argola: "Argolas",
  cordao: "Cordões",
  piercing: "Piercings",
};

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
export const products: Product[] = [
  { id: 1, name: "Brinco Delicatta Clássico", price: 299.90, image: productImages["açobrinco1"], material: "aco", type: "brinco", available: true },
  { id: 2, name: "Brinco Gota Elegante", price: 349.90, image: productImages["açobrinco2"], material: "aco", type: "brinco", available: true },
  { id: 3, name: "Brinco Argola Aço", price: 159.90, image: productImages["açobrinco3"], material: "aco", type: "brinco", available: true },
  { id: 4, name: "Brinco Aço Minimalista", price: 79.90, image: productImages["açobrinco4"], material: "aco", type: "brinco", available: true },
  { id: 5, name: "Brinco Aço Moderno", price: 89.90, image: productImages["açobrinco5"], material: "aco", type: "brinco", available: true },
  { id: 6, name: "Brinco Aço Geométrico", price: 99.90, image: productImages["açobrinco6"], material: "aco", type: "brinco", available: true },
  { id: 7, name: "Brinco Aço Polido", price: 79.90, image: productImages["açobrinco7"], material: "aco", type: "brinco", available: true },
  { id: 8, name: "Brinco Aço Escovado", price: 79.90, image: productImages["açobrinco8"], material: "aco", type: "brinco", available: true },
  { id: 9, name: "Brinco Aço Brilhante", price: 79.90, image: productImages["açobrinco9"], material: "aco", type: "brinco", available: true },
  { id: 10, name: "Brinco Aço Delicado", price: 79.90, image: productImages["açobrinco10"], material: "aco", type: "brinco", available: true },
  { id: 11, name: "Brinco Aço Ponto de Luz", price: 79.90, image: productImages["açobrinco11"], material: "aco", type: "brinco", available: true },
  { id: 12, name: "Brinco Aço Argola Fina", price: 79.90, image: productImages["açobrinco12"], material: "aco", type: "brinco", available: true },

  // ─── ALIANÇAS ───
  { id: 13, name: "Par de Alianças Delicatta", price: 299.90, image: productImages["açoparalianças"], material: "aco", type: "alianca", available: true },
  { id: 14, name: "Aliança Aço com Cruz", price: 349.90, image: productImages["açoparaliançascruz"], material: "aco", type: "alianca", available: true },
  { id: 15, name: "Aliança Fina e Chata", price: 199.90, image: productImages["açoparaliançasfinochato"], material: "aco", type: "alianca", available: true },
  { id: 16, name: "Aliança Aço Batida", price: 189.90, image: productImages["paracçobatida"], material: "aco", type: "alianca", available: true },
  { id: 17, name: "Aliança Ouro Pirâmide", price: 1299.90, image: productImages["paraliançaouropirâmide"], material: "ouro", type: "alianca", available: true },
  { id: 18, name: "Par de Alianças Lisa", price: 999.90, image: productImages["paraliançaslisa"], material: "ouro", type: "alianca", available: true },
  { id: 19, name: "Par de Alianças Ouro 18k", price: 1599.90, image: productImages["paralicançasouro"], material: "ouro", type: "alianca", available: true },
  { id: 20, name: "Aliança Ouro com Solitária", price: 1899.90, image: productImages["paralicançasourocomsolitaria"], material: "ouro", type: "alianca", available: true },
  { id: 21, name: "Aliança Aço Conforto", price: 149.90, image: productImages["paraçoaliança"], material: "aco", type: "alianca", available: true },
  { id: 22, name: "Aliança Aço Batida Texturizada", price: 169.90, image: productImages["paraçobatidas2"], material: "aco", type: "alianca", available: true },
  { id: 23, name: "Aliança Aço Boleada", price: 129.90, image: productImages["paraçoboleado"], material: "aco", type: "alianca", available: true },
  { id: 24, name: "Aliança Aço Chata Grande", price: 159.90, image: productImages["paraçochatogrande"], material: "aco", type: "alianca", available: true },
  { id: 25, name: "Aliança Aço com Cortes Laterais", price: 179.90, image: productImages["paraçocortelaterais"], material: "aco", type: "alianca", available: true },
  { id: 26, name: "Aliança Aço Cravejada", price: 219.90, image: productImages["paraçocravejado"], material: "aco", type: "alianca", available: true },
  { id: 27, name: "Aliança Aço Frizada", price: 159.90, image: productImages["paraçofrizado"], material: "aco", type: "alianca", available: true },
  { id: 28, name: "Aliança Aço Romana", price: 199.90, image: productImages["paraçoromana"], material: "aco", type: "alianca", available: true },
  { id: 29, name: "Aliança Aço Tribal", price: 189.90, image: productImages["paraçotribal"], material: "aco", type: "alianca", available: true },

  // ─── ANÉIS ───
  { id: 30, name: "Anel Ouro Coração Azul", price: 899.90, image: productImages["anelourocoraçãoazul"], material: "ouro", type: "anel", available: true },
  { id: 31, name: "Anel Ouro Cruzado Solitário", price: 1199.90, image: productImages["anelourocruzadosolitario"], material: "ouro", type: "anel", available: true },
  { id: 32, name: "Anel de Formatura Ouro Clássico", price: 1499.90, image: productImages["anelouroformatura"], material: "ouro", type: "anel", available: true },
  { id: 33, name: "Anel de Formatura Ouro Pedra Verde", price: 1599.90, image: productImages["anelouroformaturaverde"], material: "ouro", type: "anel", available: true },
  { id: 34, name: "Anel Ouro com Pedra Amarela", price: 1299.90, image: productImages["anelouropedraamarela"], material: "ouro", type: "anel", available: true },
  { id: 35, name: "Anel Ouro Trançado", price: 799.90, image: productImages["anelourotrançado"], material: "ouro", type: "anel", available: true },
  { id: 36, name: "Anel Prata Coração", price: 189.90, image: productImages["anelpratacoração"], material: "prata", type: "anel", available: true },
  { id: 37, name: "Anel Prata Cravejado", price: 249.90, image: productImages["anelpratacravejado"], material: "prata", type: "anel", available: true },
  { id: 38, name: "Anel Prata Solitário", price: 199.90, image: productImages["anelsolitárioprata"], material: "prata", type: "anel", available: true },
  { id: 39, name: "Anel Prata com Pedra", price: 229.90, image: productImages["anelpratapedra"], material: "prata", type: "anel", available: true },
  { id: 40, name: "Anel Prata Trançado", price: 179.90, image: productImages["anelpratatrançado"], material: "prata", type: "anel", available: true },
  { id: 41, name: "Anel de Formatura Ouro Azul", price: 1549.90, image: productImages["anelouroformaturaazul"], material: "ouro", type: "anel", available: true },
  { id: 62, name: "Anel Ouro Formatura Topázio", price: 1699.90, image: productImages["anelouroformatura2"], material: "ouro", type: "anel", available: true },
  { id: 63, name: "Anel Ouro Formatura Rubi", price: 1699.90, image: productImages["anelouroformatura3"], material: "ouro", type: "anel", available: true },
  { id: 64, name: "Anel Ouro Formatura Safira", price: 1699.90, image: productImages["anelouroformatura4"], material: "ouro", type: "anel", available: true },
  { id: 65, name: "Anel Ouro Formatura Esmeralda", price: 1699.90, image: productImages["anelouroformaturaverde2"], material: "ouro", type: "anel", available: true },
  { id: 66, name: "Anel Prata Corações Entrelaçados", price: 189.90, image: productImages["anelpratacorações"], material: "prata", type: "anel", available: true },
  { id: 67, name: "Anel Prata Coração Cravejado", price: 259.90, image: productImages["anelpratacravejadacoração"], material: "prata", type: "anel", available: true },
  { id: 68, name: "Anel Prata Solitário Elegance", price: 219.90, image: productImages["anelsolitárioprata2"], material: "prata", type: "anel", available: true },

  // ─── PULSEIRAS & BRACELETES ───
  { id: 42, name: "Bracelete Ouro Rígido", price: 1899.90, image: productImages["braceleteouro"], material: "ouro", type: "bracelete", available: true },
  { id: 43, name: "Pulseira Ouro Elos", price: 1299.90, image: productImages["pulseiraouro1"], material: "ouro", type: "pulseira", available: true },
  { id: 44, name: "Pulseira Ouro Delicada", price: 999.90, image: productImages["pulseiraouro2"], material: "ouro", type: "pulseira", available: true },
  { id: 45, name: "Pulseira Ouro Malha", price: 1499.90, image: productImages["pulseiraouro3"], material: "ouro", type: "pulseira", available: true },
  { id: 46, name: "Pulseira Prata 925", price: 289.90, image: productImages["pulseiraprata"], material: "prata", type: "pulseira", available: true },
  { id: 47, name: "Pulseira Prata Blue", price: 329.90, image: productImages["pulseirapratablue"], material: "prata", type: "pulseira", available: true },
  { id: 48, name: "Pulseira Prata Cravejada", price: 399.90, image: productImages["pulseirapratacravejada"], material: "prata", type: "pulseira", available: true },
  { id: 49, name: "Pulseira Prata Coração Azul", price: 349.90, image: productImages["pulseirapratacoraçãoazulescuro"], material: "prata", type: "pulseira", available: true },
  { id: 50, name: "Pulseira Prata Rosa", price: 299.90, image: productImages["pulseirapratarosa"], material: "prata", type: "pulseira", available: true },
  { id: 51, name: "Pulseira Prata Verde", price: 299.90, image: productImages["pulseiraprataverde"], material: "prata", type: "pulseira", available: true },
  { id: 69, name: "Pulseira Prata Branca Delicada", price: 279.90, image: productImages["pulseirapratabranca"], material: "prata", type: "pulseira", available: true },
  { id: 70, name: "Pulseira Prata Red Passion", price: 319.90, image: productImages["pulseirapratared"], material: "prata", type: "pulseira", available: true },
  { id: 71, name: "Pulseira Prata Rosa Soft", price: 299.90, image: productImages["pulseirapratarosa2"], material: "prata", type: "pulseira", available: true },
  { id: 72, name: "Pulseira Prata Rosa Bright", price: 299.90, image: productImages["pulseirapratarosa3"], material: "prata", type: "pulseira", available: true },

  // ─── COLARES & CONJUNTOS ───
  { id: 52, name: "Colar Prata Trevo", price: 249.90, image: productImages["colarpratatrevo"], material: "prata", type: "colar", available: true },
  { id: 53, name: "Conjunto Prata Azul Coração", price: 449.90, image: productImages["conjuntoprataazulcoração"], material: "prata", type: "colar", available: true },
  { id: 54, name: "Conjunto Prata Branco", price: 399.90, image: productImages["conjuntopratabranco"], material: "prata", type: "colar", available: true },
  { id: 55, name: "Conjunto Prata Rosa", price: 399.90, image: productImages["conjuntopratarosa"], material: "prata", type: "colar", available: true },
  { id: 56, name: "Conjunto Prata Trevo", price: 429.90, image: productImages["conjuntopratatrevo"], material: "prata", type: "colar", available: true },
  { id: 57, name: "Escapulário Prata Sagrado", price: 199.90, image: productImages["escapularioprata"], material: "prata", type: "colar", available: true },
  { id: 58, name: "Colar Prata Trevo Elegance", price: 269.90, image: productImages["colarpratatrevo2"], material: "prata", type: "colar", available: true },
  { id: 73, name: "Conjunto Prata Verde Esmeralda", price: 459.90, image: productImages["conjuntoprataverde"], material: "prata", type: "colar", available: true },
  { id: 74, name: "Conjunto Prata Rosa Claro", price: 419.90, image: productImages["conjuntopratarosaclaro"], material: "prata", type: "colar", available: true },
  { id: 75, name: "Escapulário Prata Classic", price: 189.90, image: productImages["escapularioprata2"], material: "prata", type: "colar", available: true },

];
