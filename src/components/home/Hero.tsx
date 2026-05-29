import React from 'react';
import { Button, Badge, cn } from '@blinkdotnew/ui';
import { ArrowRight, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-4 py-1 border-primary/30 bg-primary/5 text-primary-foreground/90 backdrop-blur-sm">
                Tokenización Inmobiliaria en Argentina
              </Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-balance"
            >
              Invierte en Activos Reales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Tokenizados en 4 Semanas
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground text-balance max-w-[600px]"
            >
              Accede al mercado inmobiliario y agropecuario argentino a través de la red blockchain. 
              Seguridad jurídica, liquidez inmediata y retornos en stablecoins.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="gap-2 text-lg h-14 px-8 shadow-xl shadow-primary/20">
                Ver Proyectos <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-border/50 hover:bg-muted/50">
                Documentación Legal
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-10 border-t border-border/50"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">+12M</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">USD Tokenizados</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">15%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">APY Promedio</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">100%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Respaldo Legal</span>
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Isometric Stack Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 45, rotateZ: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 30, rotateZ: -10 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px]"
            >
              {/* Layer 1: Base - Legal Foundation */}
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-primary/20 border border-primary/50 rounded-xl transform -skew-x-12 flex items-center justify-center backdrop-blur-md">
                <span className="text-primary font-mono text-sm">CUMPLIMIENTO CNV ARGENTINA</span>
              </div>
              
              {/* Layer 2: Asset Layer */}
              <div className="absolute bottom-20 left-10 w-full h-[60px] bg-secondary/20 border border-secondary/50 rounded-xl transform -skew-x-12 flex items-center justify-center backdrop-blur-md">
                <span className="text-secondary font-mono text-sm">ACTIVOS REALES (RWA)</span>
              </div>

              {/* Layer 3: Smart Contract Layer */}
              <div className="absolute bottom-40 left-20 w-full h-[60px] bg-accent/20 border border-accent/50 rounded-xl transform -skew-x-12 flex items-center justify-center backdrop-blur-md">
                <span className="text-accent font-mono text-sm">ERC-3643 COMPLIANCE</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <TrendingUp className="h-20 w-20 text-secondary opacity-50" />
              </div>
            </motion.div>
            
            {/* Floating Info Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-bottom-8 md:left-0 p-4 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-md shadow-2xl flex items-center gap-4 max-w-[240px]"
            >
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Garantía Nexus</p>
                <p className="text-sm font-medium">Contratos auditados V2.0</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
