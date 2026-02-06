/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Componente de Filtros
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe os filtros para os produtos:
 * - Filtros por material (Ouro, Prata, Aço)
 * - Filtros por tipo (9 categorias de joias)
 * - Botão para limpar filtros
 * - Contador de produtos exibidos
 * 
 * Os filtros podem ser combinados (ex: Ouro + Brincos)
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Material, JewelryType, materialLabels, typeLabels } from "@/data/products";
import { X } from "lucide-react";
interface FiltersProps {
  selectedMaterials: Material[];
  selectedTypes: JewelryType[];
  onMaterialChange: (material: Material) => void;
  onTypeChange: (type: JewelryType) => void;
  onClearFilters: () => void;
}
const materials: Material[] = ["ouro", "prata", "aco"];
const types: JewelryType[] = [
  "brinco",
  "alianca",
  "pulseira",
  "colar",
  "anel",
  "bracelete",
  "argola",
  "cordao",
  "piercing",
];

export function Filters({
  selectedMaterials,
  selectedTypes,
  onMaterialChange,
  onTypeChange,
  onClearFilters,
}: FiltersProps) {
  const hasActiveFilters = selectedMaterials.length > 0 || selectedTypes.length > 0;

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="mb-3 font-semibold text-foreground">Material</h3>
            <div className="flex flex-wrap gap-4">
              {materials.map((material) => (
                <div key={material} className="flex items-center space-x-2">
                  <Checkbox
                    id={`material-${material}`}
                    checked={selectedMaterials.includes(material)}
                    onCheckedChange={() => onMaterialChange(material)}
                    className="border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                  />
                  <Label
                    htmlFor={`material-${material}`}
                    className="cursor-pointer text-sm font-medium"
                  >
                    {materialLabels[material]}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={onClearFilters}
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="mr-1 h-4 w-4" />
                Limpar Filtros
              </Button>
            )}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
         * LINHA INFERIOR: TIPOS DE JOIAS
         * ───────────────────────────────────────────────────────────────── */}
        <div>
          <h3 className="mb-3 font-semibold text-foreground">Categoria</h3>
          <div className="flex flex-wrap gap-4">
            {types.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={() => onTypeChange(type)}
                  className="border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                />
                <Label
                  htmlFor={`type-${type}`}
                  className="cursor-pointer text-sm font-medium"
                >
                  {typeLabels[type]}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
