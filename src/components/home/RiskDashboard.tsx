import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge, Progress } from '@blinkdotnew/ui';
import { AlertTriangle, Bug, ShieldAlert, Zap, History, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const risks = [
  {
    title: "Vulnerabilidades en Smart Contracts",
    description: "Incluso con auditorías, el código puede tener bugs lógicos o re-entrancy attacks. La evolución es constante.",
    severity: 85,
    icon: Bug,
    status: "Mitigación Crítica"
  },
  {
    title: "Riesgos de Oráculo",
    description: "Dependencia de datos externos para el precio de activos reales. Manipulación de feeds de precios.",
    severity: 60,
    icon: Zap,
    status: "Monitoreo 24/7"
  },
  {
    title: "Ingeniería Social & Phishing",
    description: "El factor humano sigue siendo el eslabón más débil en la cadena de custodia de llaves privadas.",
    severity: 70,
    icon: ShieldAlert,
    status: "Educación Continua"
  }
];

export function RiskDashboard() {
  return (
    <section id="risks" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent/30 bg-accent/5">
            Gestión de Transparencia
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Nadie está exento: <span className="text-accent">El Mapa de Riesgos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            En Nexus Blockchain AR creemos en la transparencia total. Ningún sistema blockchain es 100% infalible. 
            Documentamos las vulnerabilidades históricas y actuales para construir una defensa robusta y evolutiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/30 border-border/50 backdrop-blur-sm hover:border-accent/50 transition-colors group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <risk.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{risk.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {risk.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end text-sm">
                      <span className="font-medium">Nivel de Exposición</span>
                      <span className="text-accent font-mono">{risk.severity}%</span>
                    </div>
                    <Progress value={risk.severity} className="h-1.5 bg-accent/10" />
                    <div className="flex items-center gap-2 pt-2 text-xs font-mono text-muted-foreground uppercase">
                      <RefreshCcw className="h-3 w-3 animate-spin-slow" />
                      {risk.status}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-card/50 to-background border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <History className="h-5 w-5 text-secondary" />
                <h3 className="text-2xl font-bold">Evolución de Hacks & Bugs</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Desde el DAO Hack de 2016 hasta las vulnerabilidades en puentes (Bridges) modernos, 
                la industria aprende de cada error. Nexus implementa un sistema de <strong>Actualización Continua</strong> 
                y <strong>Pause-Logic</strong> en sus contratos para mitigar desastres en tiempo real.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">Auditoría Mensual</Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">Multi-Sig 3/5</Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">Bug Bounty Program</Badge>
              </div>
            </div>
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50 relative">
              <div className="flex items-center gap-2 mb-4 text-sm font-medium text-accent">
                <AlertTriangle className="h-4 w-4" /> Alerta Activa: Actualización de Solidity V0.8.20
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    className="h-full bg-secondary"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  El 95% de nuestros activos están bajo la nueva capa de seguridad post-auditada por Trail of Bits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
