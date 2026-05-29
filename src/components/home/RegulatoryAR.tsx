import React from 'react';
import { Badge, Button } from '@blinkdotnew/ui';
import { Landmark, FileText, Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const compliancePoints = [
  "Registro de Proveedores de Servicios de Activos Virtuales (PSAV)",
  "Normativa CNV para Emisión de Títulos Tokenizados",
  "Ley de Mercado de Capitales Argentina",
  "Prevención de Lavado de Activos (UIF)",
];

export function RegulatoryAR() {
  return (
    <section id="regulatory" className="py-24 bg-card/20 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30">Marco Legal Argentino</Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Cumplimiento con la <span className="text-primary">CNV</span> y Normativas Locales
              </h2>
              <p className="text-lg text-muted-foreground">
                Invertir en Argentina requiere un conocimiento profundo del ecosistema regulatorio local. 
                Nexus Blockchain AR opera bajo el marco de la <strong>Comisión Nacional de Valores (CNV)</strong>, 
                asegurando que cada token represente un derecho legal ejecutable.
              </p>

              <div className="space-y-4 pt-4">
                {compliancePoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground/90 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" /> Ver Dictamen Legal
                </Button>
                <Button variant="ghost" className="gap-2">
                  <Landmark className="h-4 w-4" /> Consultar PSAV
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-tr from-primary/10 to-secondary/10 border border-primary/20 shadow-2xl"
            >
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-background border border-border shadow-xl">
                <Scale className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" /> Riesgos Jurisdiccionales
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <p className="text-sm font-semibold mb-1 text-foreground">Volatilidad Macroeconómica</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Nexus utiliza Smart Contracts que colateralizan activos físicos para mitigar la devaluación del peso. 
                    Sin embargo, los cambios en políticas impositivas locales pueden afectar el rendimiento neto.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <p className="text-sm font-semibold mb-1 text-foreground">Controles de Capital (CEPO)</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Nuestras estructuras permiten la salida vía activos digitales (USDT/USDC), cumpliendo con las 
                    restricciones vigentes y proporcionando una vía legal de dolarización.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <p className="text-sm font-semibold mb-1 text-foreground">Inseguridad Jurídica</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Utilizamos contratos de fideicomiso inscritos que sirven de respaldo offline para la emisión 
                    online, creando una doble capa de protección legal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
