/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Componente de Filtros
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe os filtros para os produtos:
 * - Filtros por material (Ouro, Prata, Aço)
 * - Filtros por tipo (Brincos, Alianças, Pulseiras, Colares)
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

// ─────────────────────────────────────────────────────────────────────────────
// TIPOS DAS PROPS
// ─────────────────────────────────────────────────────────────────────────────
interface FiltersProps {
  selectedMaterials: Material[];
  selectedTypes: JewelryType[];
  onMaterialChange: (material: Material) => void;
  onTypeChange: (type: JewelryType) => void;
  onClearFilters: () => void;
  filteredCount: number;
  totalCount: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// LISTAS DE FILTROS
// ─────────────────────────────────────────────────────────────────────────────
const materials: Material[] = ["ouro", "prata", "aco"];
const types: JewelryType[] = ["brinco", "alianca", "pulseira", "colar"];

export function Filters({
  selectedMaterials,
  selectedTypes,
  onMaterialChange,
  onTypeChange,
  onClearFilters,
  filteredCount,
  totalCount,
}: FiltersProps) {
  const hasActiveFilters = selectedMaterials.length > 0 || selectedTypes.length > 0;

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* ─────────────────────────────────────────────────────────────────
         * FILTROS POR MATERIAL
         * ───────────────────────────────────────────────────────────────── */}
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

        {/* ─────────────────────────────────────────────────────────────────
         * FILTROS POR TIPO
         * ───────────────────────────────────────────────────────────────── */}
        <div>
          <h3 className="mb-3 font-semibold text-foreground">Tipo</h3>
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

        {/* ─────────────────────────────────────────────────────────────────
         * CONTADOR E BOTÃO LIMPAR
         * ───────────────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-start gap-3 lg:items-end">
          <p className="text-sm text-muted-foreground">
            Exibindo{" "}
            <span className="font-semibold text-accent">{filteredCount}</span> de{" "}
            <span className="font-semibold">{totalCount}</span> produtos
          </p>
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
    </div>
  );
}
