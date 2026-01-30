/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Catálogo de Produtos
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este arquivo contém todos os 84 produtos da loja.
 * 
 * COMO EDITAR:
 * 
 * Cada produto tem os seguintes campos:
 * 
 * {
 *   id: 1,                           // Número único do produto (não repetir!)
 *   name: "Nome do Produto",         // Nome que aparece no card
 *   price: 199.90,                   // Preço em reais (use ponto para centavos)
 *   image: "/placeholder.svg",       // Caminho da imagem (veja instruções abaixo)
 *   material: "ouro",                // Opções: "ouro", "prata" ou "aco"
 *   type: "brinco",                  // Opções: "brinco", "alianca", "pulseira" ou "colar"
 *   available: true,                 // true = disponível, false = esgotado
 * }
 * 
 * ─────────────────────────────────────────────────────────────────────────────
 * COMO ADICIONAR SUAS FOTOS:
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * Opção 1 - Pasta public (mais fácil):
 *   1. Coloque suas fotos na pasta "public/products/"
 *   2. Use o caminho "/products/sua-foto.jpg"
 *   Exemplo: image: "/products/brinco-ouro-01.jpg"
 * 
 * Opção 2 - Pasta src/assets:
 *   1. Coloque suas fotos na pasta "src/assets/products/"
 *   2. Importe a foto no topo deste arquivo
 *   3. Use a variável importada
 *   Exemplo:
 *     import brincoOuro01 from "@/assets/products/brinco-ouro-01.jpg";
 *     // Depois use: image: brincoOuro01
 * 
 * ─────────────────────────────────────────────────────────────────────────────
 * MATERIAIS DISPONÍVEIS:
 * ─────────────────────────────────────────────────────────────────────────────
 * - "ouro"  → Joias em ouro
 * - "prata" → Joias em prata
 * - "aco"   → Joias em aço
 * 
 * ─────────────────────────────────────────────────────────────────────────────
 * TIPOS DE JOIAS:
 * ─────────────────────────────────────────────────────────────────────────────
 * - "brinco"   → Brincos
 * - "alianca"  → Alianças
 * - "pulseira" → Pulseiras
 * - "colar"    → Colares
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────────
// TIPOS (não modifique esta parte)
// ─────────────────────────────────────────────────────────────────────────────

export type Material = "ouro" | "prata" | "aco";
export type JewelryType = "brinco" | "alianca" | "pulseira" | "colar";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  material: Material;
  type: JewelryType;
  available: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// RÓTULOS PARA EXIBIÇÃO (não modifique)
// ─────────────────────────────────────────────────────────────────────────────

export const materialLabels: Record<Material, string> = {
  ouro: "Ouro",
  prata: "Prata",
  aco: "Aço",
};

export const typeLabels: Record<JewelryType, string> = {
  brinco: "Brinco",
  alianca: "Aliança",
  pulseira: "Pulseira",
  colar: "Colar",
};

// ─────────────────────────────────────────────────────────────────────────────
// LISTA DE PRODUTOS
// ─────────────────────────────────────────────────────────────────────────────
// 
// Edite os produtos abaixo com suas informações!
// Cada produto segue o modelo explicado acima.
// 
// ─────────────────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // BRINCOS EM OURO (Produtos 1-7)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    name: "Brinco Delicatta Clássico",
    price: 299.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: true,
  },
  {
    id: 2,
    name: "Brinco Argola Elegante",
    price: 349.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: true,
  },
  {
    id: 3,
    name: "Brinco Gota Dourada",
    price: 259.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: true,
  },
  {
    id: 4,
    name: "Brinco Flor de Ouro",
    price: 399.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: false,
  },
  {
    id: 5,
    name: "Brinco Coração Luxo",
    price: 329.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: true,
  },
  {
    id: 6,
    name: "Brinco Estrela Brilhante",
    price: 279.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: true,
  },
  {
    id: 7,
    name: "Brinco Pérola Dourada",
    price: 449.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRINCOS EM PRATA (Produtos 8-14)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 8,
    name: "Brinco Lua Prata",
    price: 159.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: true,
  },
  {
    id: 9,
    name: "Brinco Argola Prata 925",
    price: 189.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: true,
  },
  {
    id: 10,
    name: "Brinco Folha Prateada",
    price: 139.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: true,
  },
  {
    id: 11,
    name: "Brinco Cristal Prata",
    price: 199.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: false,
  },
  {
    id: 12,
    name: "Brinco Infinito Prata",
    price: 169.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: true,
  },
  {
    id: 13,
    name: "Brinco Borboleta Prata",
    price: 179.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: true,
  },
  {
    id: 14,
    name: "Brinco Zircônia Prata",
    price: 219.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRINCOS EM AÇO (Produtos 15-21)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 15,
    name: "Brinco Aço Minimalista",
    price: 79.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: true,
  },
  {
    id: 16,
    name: "Brinco Argola Aço",
    price: 89.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: true,
  },
  {
    id: 17,
    name: "Brinco Geométrico Aço",
    price: 69.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: true,
  },
  {
    id: 18,
    name: "Brinco Ponto Aço",
    price: 59.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: true,
  },
  {
    id: 19,
    name: "Brinco Cruz Aço",
    price: 99.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: false,
  },
  {
    id: 20,
    name: "Brinco Cubo Aço",
    price: 84.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: true,
  },
  {
    id: 21,
    name: "Brinco Triângulo Aço",
    price: 74.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ALIANÇAS EM OURO (Produtos 22-28)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 22,
    name: "Aliança Amor Eterno",
    price: 899.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: true,
  },
  {
    id: 23,
    name: "Aliança Clássica Ouro",
    price: 799.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: true,
  },
  {
    id: 24,
    name: "Aliança Compromisso",
    price: 699.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: true,
  },
  {
    id: 25,
    name: "Aliança Diamante Ouro",
    price: 1299.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: false,
  },
  {
    id: 26,
    name: "Aliança Fina Ouro",
    price: 599.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: true,
  },
  {
    id: 27,
    name: "Aliança Larga Ouro",
    price: 999.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: true,
  },
  {
    id: 28,
    name: "Aliança Texturizada",
    price: 849.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ALIANÇAS EM PRATA (Produtos 29-35)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 29,
    name: "Aliança Prata 925",
    price: 299.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: true,
  },
  {
    id: 30,
    name: "Aliança União Prata",
    price: 349.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: true,
  },
  {
    id: 31,
    name: "Aliança Prata Polida",
    price: 279.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: true,
  },
  {
    id: 32,
    name: "Aliança Prata Fosca",
    price: 289.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: true,
  },
  {
    id: 33,
    name: "Aliança Prata com Zircônia",
    price: 399.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: false,
  },
  {
    id: 34,
    name: "Aliança Prata Trabalhada",
    price: 329.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: true,
  },
  {
    id: 35,
    name: "Aliança Prata Elegante",
    price: 359.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ALIANÇAS EM AÇO (Produtos 36-42)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 36,
    name: "Aliança Aço Inox",
    price: 129.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: true,
  },
  {
    id: 37,
    name: "Aliança Aço Black",
    price: 149.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: true,
  },
  {
    id: 38,
    name: "Aliança Aço com Detalhe",
    price: 139.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: true,
  },
  {
    id: 39,
    name: "Aliança Aço Giratória",
    price: 169.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: true,
  },
  {
    id: 40,
    name: "Aliança Aço Fina",
    price: 99.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: true,
  },
  {
    id: 41,
    name: "Aliança Aço Larga",
    price: 159.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: false,
  },
  {
    id: 42,
    name: "Aliança Aço Romano",
    price: 179.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PULSEIRAS EM OURO (Produtos 43-49)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 43,
    name: "Pulseira Elo Ouro",
    price: 599.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: true,
  },
  {
    id: 44,
    name: "Pulseira Cartier Ouro",
    price: 799.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: true,
  },
  {
    id: 45,
    name: "Pulseira Berloques Ouro",
    price: 899.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: true,
  },
  {
    id: 46,
    name: "Pulseira Fina Ouro",
    price: 449.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: false,
  },
  {
    id: 47,
    name: "Pulseira Groumet Ouro",
    price: 699.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: true,
  },
  {
    id: 48,
    name: "Pulseira Veneziana Ouro",
    price: 549.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: true,
  },
  {
    id: 49,
    name: "Pulseira Riviera Ouro",
    price: 1199.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PULSEIRAS EM PRATA (Produtos 50-56)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 50,
    name: "Pulseira Elo Prata",
    price: 199.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: true,
  },
  {
    id: 51,
    name: "Pulseira Pandora Style",
    price: 289.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: true,
  },
  {
    id: 52,
    name: "Pulseira Prata Delicada",
    price: 159.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: true,
  },
  {
    id: 53,
    name: "Pulseira Prata Coração",
    price: 179.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: true,
  },
  {
    id: 54,
    name: "Pulseira Prata Estrelas",
    price: 189.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: false,
  },
  {
    id: 55,
    name: "Pulseira Prata Infinito",
    price: 169.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: true,
  },
  {
    id: 56,
    name: "Pulseira Prata Bracelete",
    price: 249.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PULSEIRAS EM AÇO (Produtos 57-63)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 57,
    name: "Pulseira Aço Corrente",
    price: 89.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: true,
  },
  {
    id: 58,
    name: "Pulseira Aço Masculina",
    price: 119.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: true,
  },
  {
    id: 59,
    name: "Pulseira Aço Feminina",
    price: 99.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: true,
  },
  {
    id: 60,
    name: "Pulseira Aço com Couro",
    price: 139.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: true,
  },
  {
    id: 61,
    name: "Pulseira Aço Magnética",
    price: 149.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: true,
  },
  {
    id: 62,
    name: "Pulseira Aço Rosé",
    price: 109.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: false,
  },
  {
    id: 63,
    name: "Pulseira Aço Mesh",
    price: 129.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COLARES EM OURO (Produtos 64-70)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 64,
    name: "Colar Gargantilha Ouro",
    price: 699.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: true,
  },
  {
    id: 65,
    name: "Colar Veneziana Ouro",
    price: 599.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: true,
  },
  {
    id: 66,
    name: "Colar Ponto de Luz Ouro",
    price: 899.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: true,
  },
  {
    id: 67,
    name: "Colar Coração Ouro",
    price: 749.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: false,
  },
  {
    id: 68,
    name: "Colar Pingente Ouro",
    price: 649.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: true,
  },
  {
    id: 69,
    name: "Colar Riviera Ouro",
    price: 1499.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: true,
  },
  {
    id: 70,
    name: "Colar Choker Ouro",
    price: 549.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COLARES EM PRATA (Produtos 71-77)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 71,
    name: "Colar Prata 925",
    price: 199.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: true,
  },
  {
    id: 72,
    name: "Colar Prata com Zircônia",
    price: 289.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: true,
  },
  {
    id: 73,
    name: "Colar Prata Estrela",
    price: 219.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: true,
  },
  {
    id: 74,
    name: "Colar Prata Lua",
    price: 229.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: true,
  },
  {
    id: 75,
    name: "Colar Prata Olho Grego",
    price: 249.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: false,
  },
  {
    id: 76,
    name: "Colar Prata Terço",
    price: 279.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: true,
  },
  {
    id: 77,
    name: "Colar Prata Gota",
    price: 259.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COLARES EM AÇO (Produtos 78-84)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 78,
    name: "Colar Aço Corrente",
    price: 99.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: true,
  },
  {
    id: 79,
    name: "Colar Aço com Pingente",
    price: 119.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: true,
  },
  {
    id: 80,
    name: "Colar Aço Masculino",
    price: 139.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: true,
  },
  {
    id: 81,
    name: "Colar Aço Cruz",
    price: 109.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: true,
  },
  {
    id: 82,
    name: "Colar Aço Groumet",
    price: 149.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: false,
  },
  {
    id: 83,
    name: "Colar Aço Fígaro",
    price: 129.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: true,
  },
  {
    id: 84,
    name: "Colar Aço Veneziana",
    price: 119.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FUNÇÕES AUXILIARES (não modifique)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Formata o preço para exibição em Reais
 * Exemplo: 299.90 → "R$ 299,90"
 */
export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
