import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge, Button, cn } from '@blinkdotnew/ui';
import { Building2, Tractor, Warehouse, Zap, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: "Tier 1: Residencial Premium",
    description: "Inversión en departamentos de lujo en pozo o terminados en CABA y GBA.",
    roi: "8-12%",
    term: "24-36 meses",
    min: "$1,000 USD",
    icon: Building2,
    color: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/30",
    accentColor: "text-secondary"
  },
  {
    name: "Tier 2: Agro & Commodity",
    description: "Participación en pools de siembra y exportación de granos tokenizados.",
    roi: "15-18%",
    term: "12 meses",
    min: "$500 USD",
    icon: Tractor,
    color: "from-green/20 to-green/5",
    borderColor: "border-green/30",
    accentColor: "text-green"
  },
  {
    name: "Tier 3: Logística & Industrial",
    description: "Centros de distribución y parques industriales con rentas mensuales.",
    roi: "10-14%",
    term: "48 meses",
    min: "$5,000 USD",
    icon: Warehouse,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    accentColor: "text-primary"
  }
];

export function InvestmentModels() {
  return (
    <section id="models" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/30 bg-secondary/5">
            Estructuras de Inversión
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Categorías de Activos <span className="text-secondary">Nexus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Diversifica tu portafolio con activos reales argentinos tokenizados. 
            Cada categoría cuenta con auditoría física y digital independiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className={cn(
                "relative h-full overflow-hidden bg-gradient-to-br border-2 transition-all duration-300 hover:-translate-y-2",
                tier.color,
                tier.borderColor
              )}>
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <tier.icon className="h-24 w-24" />
                </div>
                
                <CardHeader className="relative z-10">
                  <div className={cn("h-12 w-12 rounded-xl bg-background/50 flex items-center justify-center mb-4 border border-white/10", tier.accentColor)}>
                    <tier.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  <p className="text-muted-foreground">{tier.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl bg-background/40 border border-white/5">
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Retorno Est.</p>
                      <p className={cn("text-xl font-bold", tier.accentColor)}>{tier.roi} <span className="text-xs">APY</span></p>
                    </div>
                    <div className="p-3 rounded-xl bg-background/40 border border-white/5">
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Plazo</p>
                      <p className="text-xl font-bold">{tier.term}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-col">
                      <p className="text-xs text-muted-foreground">Mínimo</p>
                      <p className="text-lg font-bold">{tier.min}</p>
                    </div>
                    <Button variant="default" className="rounded-full h-12 w-12 p-0 shadow-lg">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-white/10 text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    <Shield className="h-3 w-3" /> Contrato Auditado por Quantstamp
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4 italic">
            * Los rendimientos son proyecciones basadas en datos históricos del mercado inmobiliario y agropecuario.
          </p>
          <Button size="lg" variant="link" className="text-secondary hover:text-secondary/80 gap-2">
            Descargar Brochure Completo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
