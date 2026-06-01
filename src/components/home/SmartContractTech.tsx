import React from 'react';
import { Badge, Card, CardContent } from '@blinkdotnew/ui';
import { ShieldCheck, UserCheck, Lock, Zap, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: UserCheck,
    title: "Identidad On-chain",
    description: "Utiliza el estándar ONCHAINID para verificar la identidad del inversor directamente en la blockchain, garantizando que solo usuarios autorizados operen.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento Automatizado",
    description: "Reglas de cumplimiento (KYC/AML) integradas en el contrato. Las transferencias solo se ejecutan si ambas partes cumplen con los requisitos legales.",
  },
  {
    icon: Lock,
    title: "Control del Emisor",
    description: "Permite al emisor recuperar tokens en caso de pérdida de claves privadas o por mandatos judiciales, manteniendo la soberanía legal sobre el activo.",
  },
  {
    icon: Zap,
    title: "Interoperabilidad DeFi",
    description: "Compatible con el ecosistema EVM, permitiendo que los activos tokenizados se utilicen como colateral o en mercados secundarios regulados.",
  },
];

export function SmartContractTech() {
  return (
    <section id="tecnologia" className="py-24 bg-card/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Infraestructura Tecnológica
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Estándar <span className="text-primary">ERC-3643</span>: <br />
                El Protocolo T-REX
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adoptamos el estándar institucional para la tokenización de activos del mundo real (RWA). 
                A diferencia de los tokens convencionales, el protocolo ERC-3643 garantiza seguridad jurídica y cumplimiento normativo en cada transferencia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 flex items-start gap-4">
              <ShieldAlert className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary">Seguridad por Diseño</p>
                <p className="text-sm text-muted-foreground">
                  El smart contract actúa como un validador incansable, impidiendo transferencias a carteras no verificadas o jurisdicciones restringidas.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <Card className="bg-background/80 border-border/50 backdrop-blur-xl relative overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-secondary" />
                    <span className="font-mono text-sm text-secondary">Smart Contract Blueprint</span>
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px] uppercase">Mainnet Ready</Badge>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-card border border-border/50 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-muted-foreground">
                      <span>Function: verifyTransfer</span>
                      <span className="text-green-500">Active</span>
                    </div>
                    <div className="h-1.5 w-full bg-border/30 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border/50 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-muted-foreground">
                      <span>Identity: ONCHAINID</span>
                      <span className="text-secondary">Syncing</span>
                    </div>
                    <div className="h-1.5 w-full bg-border/30 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-secondary" 
                      />
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col items-center text-center space-y-3">
                    <ShieldCheck className="h-12 w-12 text-primary" />
                    <h5 className="font-bold">Protocolo de Confianza</h5>
                    <p className="text-xs text-muted-foreground">
                      Auditado y validado bajo estándares internacionales para activos financieros regulados.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-8 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">100%</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Legal Tech</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">Audited</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Security</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">EVM</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Interoperable</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
