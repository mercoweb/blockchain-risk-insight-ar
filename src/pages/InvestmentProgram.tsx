import React from 'react';
import { Button, Badge, Card, CardContent } from '@blinkdotnew/ui';
import { 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Calendar, 
  Home, 
  DollarSign, 
  Bitcoin, 
  Rocket, 
  FileText,
  Users,
  Star,
  Zap,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export function InvestmentProgram() {
  // Conversion: (EUR * 1100) * 0.5
  const conversionRate = 1100 * 0.5;

  const formatARS = (eur: number) => {
    const ars = eur * conversionRate;
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(ars);
  };

  const steps = [
    {
      week: "Semana 1",
      returns: "~20% anual",
      title: "Ladrillo Tokenizado",
      description: `Invierte en activos inmobiliarios sin comprar propiedades enteras. Accede a desarrollos premium desde ${formatARS(50)} con contratos inteligentes auditados.`,
      icon: Home,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      week: "Semana 2",
      returns: "10-15% anual",
      title: "Stablecoins de Alto Rendimiento",
      description: "Aprende a generar rendimientos estables con monedas vinculadas al dólar. Sin volatilidad extrema, con liquidez diaria.",
      icon: DollarSign,
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      week: "Semana 3",
      returns: "Riesgo Mitigado",
      title: "Estrategias con Bitcoin",
      description: "Métodos DCA y Delta Neutral para invertir en BTC minimizando riesgos de mercado. Ideal para exposición segura a largo plazo.",
      icon: Bitcoin,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      week: "Semana 4",
      returns: "Acceso VIP",
      title: "Oportunidades Exclusivas",
      description: "Startups Web3, activos de producción y royalties. Accede a inversiones que antes solo estaban al alcance de grandes fondos.",
      icon: Rocket,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="outline" className="px-4 py-1 border-primary/30 bg-primary/5 text-primary">
                Programa de formación práctica en Argentina
              </Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              Aprende a invertir en activos tokenizados <br />
              <span className="text-primary">sin arriesgar tu patrimonio</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              El método paso a paso con el que nuestros alumnos han logrado rentabilidades de hasta ~20% anual con ladrillo tokenizado, stablecoins y activos reales.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10"
            >
              {[
                { label: "Alumnos activos", value: "+160" },
                { label: "Rentabilidad", value: "~20%" },
                { label: "Semanas intensivas", value: "4" },
                { label: "Updates", value: "De por vida" }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-card border border-border/50">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">4 semanas para transformar tu forma de invertir</h2>
            <p className="text-muted-foreground text-lg">Cada semana dominas una estrategia real. Al terminar, tienes una cartera diversificada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className={`p-3 rounded-xl ${step.bg}`}>
                        <step.icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                      <Badge variant="secondary" className="font-mono text-[10px]">{step.returns}</Badge>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">{step.week}</p>
                      <h3 className="text-xl font-bold mt-1">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center gap-8">
            <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <h4 className="text-xl font-bold">Módulo Extra: Fiscalidad Crypto en Argentina</h4>
              <p className="text-muted-foreground">Declara tus inversiones correctamente y evita sorpresas con AFIP. Impartido por expertos contables especializados en activos digitales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projections Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Así crece tu patrimonio con interés compuesto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En el programa te enseñamos a construir esta proyección con tu propia cartera, optimizando cada peso invertido para maximizar el retorno a largo plazo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-2">
                  <p className="text-sm text-muted-foreground">Total Acumulado (15 años)</p>
                  <p className="text-3xl font-bold text-primary">{formatARS(726610)}</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-2">
                  <p className="text-sm text-muted-foreground">Total Invertido</p>
                  <p className="text-3xl font-bold">{formatARS(74000)}</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-2">
                  <p className="text-sm text-muted-foreground">Ganancias Netas</p>
                  <p className="text-3xl font-bold text-secondary">{formatARS(652610)}</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-2">
                  <p className="text-sm text-muted-foreground">Renta Mensual Estimada</p>
                  <p className="text-3xl font-bold">{formatARS(3028)}</p>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-2xl">
              <div className="h-[300px] flex items-end gap-2">
                {[40, 60, 90, 130, 180, 240, 310, 400].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}px` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-primary/80 to-primary rounded-t-lg"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                <span>Año 0</span>
                <span>Año 5</span>
                <span>Año 10</span>
                <span>Año 15</span>
              </div>
              <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50">
                <p className="text-[10px] font-bold text-primary uppercase">Proyección de Crecimiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Diseñado para gente como tú</h2>
            <p className="text-muted-foreground mt-4 text-lg">Que quiere invertir sin complicaciones técnicas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "A tu ritmo", desc: "Clases grabadas y en vivo que encajan en tu día a día. Avanza cuando quieras, sin agobios." },
              { icon: Star, title: "100% práctico", desc: "Nada de teoría vacía. Tutoriales paso a paso con las herramientas reales que usarás en Argentina." },
              { icon: Users, title: "Soporte ilimitado", desc: "No te dejamos solo. Te acompañamos hasta que tengas todo configurado y funcionando." },
              { icon: ShieldCheck, title: "Cartera real", desc: "Terminas el programa con una cartera real: rentable, segura y adaptada a tu perfil." },
              { icon: Star, title: "Comunidad privada", desc: "Acceso a un grupo exclusivo de inversores que comparten oportunidades locales." },
              { icon: Zap, title: "Alertas del mercado", desc: "Te avisamos cuando hay cambios importantes o nuevas oportunidades de inversión." }
            ].map((f, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-card transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-[2rem] bg-gradient-to-br from-primary/20 via-card to-secondary/10 border border-primary/20 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Comenzamos la próxima cohorte pronto</h2>
              <div className="flex justify-center gap-4">
                <div className="p-4 rounded-xl bg-background/50 border border-border/50 min-w-[80px]">
                  <p className="text-3xl font-bold">0</p>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Días</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border/50 min-w-[80px]">
                  <p className="text-3xl font-bold">19</p>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Horas</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border/50 min-w-[80px]">
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Minutos</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl font-bold text-primary">Inversión Única: US$ 1,494</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Garantía de satisfacción de 14 días</p>
              </div>

              <Button size="lg" className="w-full sm:w-auto px-12 h-14 text-lg font-bold gap-2">
                Solicitar mi Plaza Ahora <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
