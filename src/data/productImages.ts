import brincoImg from "@/assets/products/brinco-example.jpg";
import aliancaImg from "@/assets/products/alianca-example.jpg";
import pulseiraImg from "@/assets/products/pulseira-example.jpg";
import colarImg from "@/assets/products/colar-example.jpg";
import anelImg from "@/assets/products/anel-example.jpg";
import braceleteImg from "@/assets/products/bracelete-example.jpg";
import argolaImg from "@/assets/products/argola-example.jpg";
import cordaoImg from "@/assets/products/cordao-example.jpg";
import piercingImg from "@/assets/products/piercing-example.jpg";
import type { JewelryType } from "./products";

export const categoryImages: Record<JewelryType, string> = {
  brinco: brincoImg,
  alianca: aliancaImg,
  pulseira: pulseiraImg,
  colar: colarImg,
  anel: anelImg,
  bracelete: braceleteImg,
  argola: argolaImg,
  cordao: cordaoImg,
  piercing: piercingImg,
};
