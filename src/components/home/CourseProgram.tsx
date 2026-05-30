import React from 'react';
import { Badge, Button, Card, CardContent } from '@blinkdotnew/ui';
import { BookOpen, Code2, Gavel, Coins, CheckCircle2, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const modules = [
  {
    title: "Módulo 1: Fundamentos & DeFi",
    description: "Introducción a la arquitectura blockchain, protocolos de finanzas descentralizadas y economía cripto.",
    icon: BookOpen,
  },
  {
    title: "Módulo 2: Smart Contracts & RWA",
    description: "Desarrollo y auditoría de contratos inteligentes bajo el estándar ERC-3643 para activos reales.",
    icon: Code2,
  },
  {
    title: "Módulo 3: Regulación & Legal Tech",
    description: "Marco legal en Argentina (CNV, UIF) y estructuras jurídicas para la tokenización segura.",
    icon: Gavel,
  },
  {
    title: "Módulo 4: Tokenización Práctica",
    description: "De la teoría a la mainnet: emisión, gestión de liquidez y captación de capital on-chain.",
    icon: Coins,
  }
];

export function CourseProgram() {
  return (
    <section id="curso" className="py-24 bg-card/10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-magenta/20 text-magenta border-magenta/30">
                Programa de Especialización
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Especialízate en Web3: <br />
                <span className="text-magenta">Dominio 100% Práctico</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Domina una de las profesiones más demandadas del ecosistema cripto. 
                Aprende a estructurar, desarrollar y lanzar proyectos de tokenización real en el mercado hispano.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-magenta/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-magenta" />
                </div>
                <span className="font-medium text-foreground/90">Acompañamiento de mentores expertos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-magenta/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-magenta" />
                </div>
                <span className="font-medium text-foreground/90">Acceso a red de builders y founders</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-magenta/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-magenta" />
                </div>
                <span className="font-medium text-foreground/90">Certificación on-chain de Nexus Blockchain</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-magenta text-white hover:bg-magenta/90 gap-2 h-14 px-8 shadow-lg shadow-magenta/20">
                Inscribirme al Programa <GraduationCap className="h-5 w-5" />
              </Button>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-foreground">Próxima Cohorte</span>
                <span className="text-xs text-muted-foreground">Cupos limitados disponibles</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background/50 border-border/50 backdrop-blur-sm h-full hover:border-magenta/50 transition-colors group">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-10 w-10 rounded-lg bg-magenta/10 flex items-center justify-center group-hover:bg-magenta/20 transition-colors">
                      <module.icon className="h-5 w-5 text-magenta" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-foreground">{module.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
