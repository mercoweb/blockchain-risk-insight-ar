import React from 'react';
import { Badge, Button, Card, CardContent } from '@blinkdotnew/ui';
import {
  CheckCircle2,
  Users,
  Scale,
  TrendingUp,
  Network,
  GraduationCap,
  CalendarDays,
  BookOpenCheck,
  Rocket,
  Award,
  Briefcase,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';

const differentiators = [
  {
    icon: Scale,
    title: 'Operá dentro del marco legal',
    description:
      'Aprendé las regulaciones de la CNV sobre tokenización de activos y criptoactivos —único programa que te prepara para cumplir con la normativa argentina desde el día 1.',
  },
  {
    icon: Star,
    title: 'Sé de los primeros',
    description:
      'Solo 10 emprendedores argentinos pasaron por NEXUS TOK. Estás entrando a una comunidad selecta, con acceso directo a mentores e inversores.',
  },
  {
    icon: TrendingUp,
    title: 'Captá inversión con respaldo legal',
    description:
      'Estructurá tu proyecto para atraer inversores locales con la tranquilidad de estar alineado con las leyes vigentes.',
  },
  {
    icon: Network,
    title: 'Conectá con el ecosistema',
    description:
      'Accedé a emprendedores, inversores y builders que ya están construyendo dentro del marco regulatorio argentino.',
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Certificación',
    description: 'Diploma avalado, con especialización en marco regulatorio argentino.',
  },
  {
    icon: BookOpenCheck,
    title: 'Proyecto compliant',
    description:
      'Un modelo de negocio estructurado para operar dentro de las leyes de la CNV.',
  },
  {
    icon: Users,
    title: 'Red selecta',
    description:
      'Acceso a los 10 fundadores que ya pasaron por NEXUS TOK y a inversores que buscan proyectos regulatoriamente sólidos.',
  },
  {
    icon: Rocket,
    title: 'Investors Day Argentina',
    description:
      'Presentá tu proyecto ante inversores locales que valoran el cumplimiento normativo.',
  },
];

export function NexusTok() {
  return (
    <section id="nexus-tok" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-6"
        >
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-sm px-4 py-1">
            Programa Exclusivo · Solo 10 cupos
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Máster en Tokenización +{' '}
            <span className="text-primary">Incubación Web3</span>
            <br />
            para el mercado argentino
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            El único programa que combina formación práctica con el marco regulatorio de la CNV.
            En 4 meses pasarás de una idea a un proyecto <span className="text-foreground font-semibold">compliant</span>,
            listo para inversores locales y regionales, con la certeza de operar dentro de la ley argentina.
          </p>

          {/* Pioneer counter */}
          <div className="inline-flex items-center gap-3 bg-card/60 border border-border/50 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary"
                >
                  {i + 1}
                </div>
              ))}
              <div className="h-8 w-8 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-secondary">
                +5
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">
                Tú podés ser el <span className="text-secondary">#11</span> de los pioneros
              </p>
              <p className="text-xs text-muted-foreground">10 argentinos ya pasaron por NEXUS TOK</p>
            </div>
          </div>

          <div className="pt-2">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 gap-2 h-14 px-10 shadow-lg shadow-primary/30 text-base font-bold"
            >
              QUIERO LANZAR MI PROYECTO WEB3
              <Rocket className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* ── Why different ── */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-10"
          >
            ¿Por qué <span className="text-primary">NEXUS TOK</span> es diferente?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/40 transition-all group">
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Phases ── */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-primary/30 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40" />
              <CardContent className="p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpenCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs mb-1">Fase 1</Badge>
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      Máster en Tokenización con enfoque CNV
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Microaprendizajes para entender el marco regulatorio argentino, a tu ritmo.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">15 sesiones en directo</p>
                      <p className="text-xs text-muted-foreground">
                        Cada jueves · 19:00 a 20:30 (hora Argentina)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Clases prácticas + análisis de casos de cumplimiento normativo local
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-secondary/30 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/40" />
              <CardContent className="p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs mb-1">Fase 2</Badge>
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      Incubación + Preparación regulatoria
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Diseñá tu proyecto compatible con las regulaciones de la CNV: desde la estructura
                  legal hasta la presentación ante inversores.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Estructura legal adaptada al marco de la CNV
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Acompañamiento de expertos en derecho financiero argentino
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Presentación ante inversores lista para el mercado local
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ── Mentors ── */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-10"
          >
            Aprendé de quienes{' '}
            <span className="text-secondary">entienden la regulación argentina</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mentor 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/40 transition-all h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center text-xl font-bold text-primary shrink-0">
                      MC
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Miguel Caballero</h4>
                      <p className="text-sm text-primary font-medium">CEO de Tutellus</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                    Inversor · Especialista en tokenización
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Te guiará en la estructuración de proyectos compliant, adaptados al marco que
                    propone la CNV para la tokenización en Argentina.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mentor 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-secondary/40 transition-all h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <Briefcase className="h-7 w-7 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Especialista CNV</h4>
                      <p className="text-sm text-secondary font-medium">Derecho financiero · Criptoactivos</p>
                    </div>
                  </div>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs">
                    Regulación CNV · Normativa Argentina
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Te acompañará en el diseño de tu token y en la adaptación a las normativas
                    locales, asegurando que cumplas con los requisitos de la Comisión Nacional de Valores.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* ── Benefits ── */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-10"
          >
            Lo que obtenés al completar{' '}
            <span className="text-primary">NEXUS TOK</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center hover:border-primary/40 transition-all group h-full">
                  <CardContent className="p-6 space-y-4 flex flex-col items-center">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Closing CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/10" />
          <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
          <div className="relative p-10 md:p-14 text-center space-y-6">
            <GraduationCap className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl md:text-4xl font-bold">
              Solo{' '}
              <span className="text-secondary">10 personas en Argentina</span>
              <br />
              hicieron NEXUS TOK antes que vos
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Y eso es exactamente lo que lo hace valioso: acceso directo, mentores disponibles,
              comunidad cercana.
              <br />
              <span className="text-foreground font-semibold">El siguiente podés ser vos.</span>
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 gap-2 h-14 px-10 shadow-lg shadow-primary/30 text-base font-bold"
            >
              QUIERO LANZAR MI PROYECTO WEB3
              <Rocket className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
