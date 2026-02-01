/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Catálogo de Produtos
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este arquivo contém todos os produtos da loja.
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
 *   type: "brinco",                  // Opções: veja lista de tipos abaixo
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
 * TIPOS DE JOIAS (use exatamente como está escrito):
 * ─────────────────────────────────────────────────────────────────────────────
 * - "brinco"    → Brincos
 * - "alianca"   → Alianças
 * - "pulseira"  → Pulseiras
 * - "colar"     → Colares
 * - "anel"      → Anéis
 * - "bracelete" → Braceletes
 * - "argola"    → Argolas
 * - "cordao"    → Cordões
 * - "piercing"  → Piercings
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * EXEMPLOS DE COMO ADICIONAR PRODUTOS EM CADA CATEGORIA:
 * 
 * ─── BRINCO ───
 * {
 *   id: 100,
 *   name: "Brinco Dourado Elegante",
 *   price: 299.90,
 *   image: "/products/brinco-01.jpg",
 *   material: "ouro",
 *   type: "brinco",        // ← Use "brinco" para aparecer na categoria Brincos
 *   available: true,
 * },
 * 
 * ─── ALIANÇA ───
 * {
 *   id: 101,
 *   name: "Aliança Amor Eterno",
 *   price: 899.90,
 *   image: "/products/alianca-01.jpg",
 *   material: "ouro",
 *   type: "alianca",       // ← Use "alianca" para aparecer na categoria Alianças
 *   available: true,
 * },
 * 
 * ─── PULSEIRA ───
 * {
 *   id: 102,
 *   name: "Pulseira Delicada",
 *   price: 199.90,
 *   image: "/products/pulseira-01.jpg",
 *   material: "prata",
 *   type: "pulseira",      // ← Use "pulseira" para aparecer na categoria Pulseiras
 *   available: true,
 * },
 * 
 * ─── COLAR ───
 * {
 *   id: 103,
 *   name: "Colar Pingente Coração",
 *   price: 349.90,
 *   image: "/products/colar-01.jpg",
 *   material: "prata",
 *   type: "colar",         // ← Use "colar" para aparecer na categoria Colares
 *   available: true,
 * },
 * 
 * ─── ANEL ───
 * {
 *   id: 104,
 *   name: "Anel Solitário Diamante",
 *   price: 1299.90,
 *   image: "/products/anel-01.jpg",
 *   material: "ouro",
 *   type: "anel",          // ← Use "anel" para aparecer na categoria Anéis
 *   available: true,
 * },
 * 
 * ─── BRACELETE ───
 * {
 *   id: 105,
 *   name: "Bracelete Rígido Ouro",
 *   price: 599.90,
 *   image: "/products/bracelete-01.jpg",
 *   material: "ouro",
 *   type: "bracelete",     // ← Use "bracelete" para aparecer na categoria Braceletes
 *   available: true,
 * },
 * 
 * ─── ARGOLA ───
 * {
 *   id: 106,
 *   name: "Argola Grande Prata",
 *   price: 179.90,
 *   image: "/products/argola-01.jpg",
 *   material: "prata",
 *   type: "argola",        // ← Use "argola" para aparecer na categoria Argolas
 *   available: true,
 * },
 * 
 * ─── CORDÃO ───
 * {
 *   id: 107,
 *   name: "Cordão Masculino Grosso",
 *   price: 499.90,
 *   image: "/products/cordao-01.jpg",
 *   material: "aco",
 *   type: "cordao",        // ← Use "cordao" para aparecer na categoria Cordões
 *   available: true,
 * },
 * 
 * ─── PIERCING ───
 * {
 *   id: 108,
 *   name: "Piercing Nariz Delicado",
 *   price: 89.90,
 *   image: "/products/piercing-01.jpg",
 *   material: "prata",
 *   type: "piercing",      // ← Use "piercing" para aparecer na categoria Piercings
 *   available: true,
 * },
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────────
// TIPOS (não modifique esta parte)
// ─────────────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────────────
// RÓTULOS PARA EXIBIÇÃO (não modifique)
// ─────────────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────────────
// FUNÇÃO PARA FORMATAR PREÇO (não modifique)
// ─────────────────────────────────────────────────────────────────────────────

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// LISTA DE PRODUTOS
// ─────────────────────────────────────────────────────────────────────────────
// 
// Edite os produtos abaixo com suas informações!
// Cada produto segue o modelo explicado acima.
// 
// ─────────────────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // BRINCOS (type: "brinco")
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
    name: "Brinco Gota Elegante",
    price: 349.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "brinco",
    available: true,
  },
  {
    id: 3,
    name: "Brinco Lua Prata",
    price: 159.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "brinco",
    available: true,
  },
  {
    id: 4,
    name: "Brinco Aço Minimalista",
    price: 79.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "brinco",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ALIANÇAS (type: "alianca")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 10,
    name: "Aliança Amor Eterno",
    price: 899.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "alianca",
    available: true,
  },
  {
    id: 11,
    name: "Aliança Clássica Prata",
    price: 299.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "alianca",
    available: true,
  },
  {
    id: 12,
    name: "Aliança Compromisso Aço",
    price: 149.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "alianca",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PULSEIRAS (type: "pulseira")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 20,
    name: "Pulseira Elos Ouro",
    price: 499.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "pulseira",
    available: true,
  },
  {
    id: 21,
    name: "Pulseira Delicada Prata",
    price: 189.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "pulseira",
    available: true,
  },
  {
    id: 22,
    name: "Pulseira Aço Inox",
    price: 99.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "pulseira",
    available: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COLARES (type: "colar")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 30,
    name: "Colar Pingente Coração",
    price: 399.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "colar",
    available: true,
  },
  {
    id: 31,
    name: "Colar Corrente Prata",
    price: 249.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "colar",
    available: true,
  },
  {
    id: 32,
    name: "Colar Masculino Aço",
    price: 129.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "colar",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ANÉIS (type: "anel")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 40,
    name: "Anel Solitário Ouro",
    price: 1299.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "anel",
    available: true,
  },
  {
    id: 41,
    name: "Anel Delicado Prata",
    price: 179.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "anel",
    available: true,
  },
  {
    id: 42,
    name: "Anel Aço Design Moderno",
    price: 89.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "anel",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRACELETES (type: "bracelete")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 50,
    name: "Bracelete Rígido Ouro",
    price: 699.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "bracelete",
    available: true,
  },
  {
    id: 51,
    name: "Bracelete Prata 925",
    price: 299.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "bracelete",
    available: true,
  },
  {
    id: 52,
    name: "Bracelete Aço Elegante",
    price: 159.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "bracelete",
    available: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ARGOLAS (type: "argola")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 60,
    name: "Argola Grande Ouro",
    price: 449.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "argola",
    available: true,
  },
  {
    id: 61,
    name: "Argola Média Prata",
    price: 189.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "argola",
    available: true,
  },
  {
    id: 62,
    name: "Argola Pequena Aço",
    price: 69.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "argola",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CORDÕES (type: "cordao")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 70,
    name: "Cordão Cartier Ouro",
    price: 899.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "cordao",
    available: true,
  },
  {
    id: 71,
    name: "Cordão Prata Masculino",
    price: 349.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "cordao",
    available: true,
  },
  {
    id: 72,
    name: "Cordão Grosso Aço",
    price: 199.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "cordao",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PIERCINGS (type: "piercing")
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 80,
    name: "Piercing Nariz Ouro",
    price: 149.90,
    image: "/placeholder.svg",
    material: "ouro",
    type: "piercing",
    available: true,
  },
  {
    id: 81,
    name: "Piercing Helix Prata",
    price: 89.90,
    image: "/placeholder.svg",
    material: "prata",
    type: "piercing",
    available: true,
  },
  {
    id: 82,
    name: "Piercing Tragus Aço",
    price: 49.90,
    image: "/placeholder.svg",
    material: "aco",
    type: "piercing",
    available: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADICIONE MAIS PRODUTOS ABAIXO!
  // Copie um dos modelos acima e altere os dados
  // Lembre-se de usar um ID único para cada produto
  // ═══════════════════════════════════════════════════════════════════════════
];
