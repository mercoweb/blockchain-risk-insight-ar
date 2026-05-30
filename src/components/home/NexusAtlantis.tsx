import React from 'react';
import { Badge, Button, Card, CardContent } from '@blinkdotnew/ui';
import { Waves, Rocket, GraduationCap, Users2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const atlantisFeatures = [
  {
    title: "Escala tu Proyecto",
    description: "Gracias a la tokenización: capta inversión, multiplica ingresos y abre nuevas oportunidades de negocio.",
    icon: Rocket,
    color: "text-violet",
    bg: "bg-violet/10"
  },
  {
    title: "Especialízate en Web3",
    description: "Domina una de las profesiones más demandadas del ecosistema cripto con un aprendizaje 100% práctico.",
    icon: GraduationCap,
    color: "text-cyan",
    bg: "bg-cyan/10"
  },
  {
    title: "Comunidad Nexus Atlantis",
    description: "Conéctate con más de 15.000 emprendedores, inversores y builders del mundo hispano.",
    icon: Users2,
    color: "text-magenta",
    bg: "bg-magenta/10"
  }
];

export function NexusAtlantis() {
  return (
    <section id="atlantis" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Badge variant="outline" className="text-secondary border-secondary/30 bg-secondary/5 px-4 py-1">
                Ecosistema de Crecimiento
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
                NEXUS <span className="text-secondary">Atlantis</span>
              </h2>
              <p className="text-xl text-foreground font-medium leading-relaxed italic border-l-4 border-secondary pl-6 py-2">
                "La posibilidad de tokenizar en un oceano de potenciales inversiones."
              </p>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Nexus Atlantis es el corazón de nuestra red de colaboración, donde el talento Web3 y el capital se encuentran para escalar activos reales al siguiente nivel.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 h-14 px-8">
                Unirme a Atlantis <Waves className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border/50 h-14 px-8">
                Ver Roadshow
              </Button>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-6">
            {atlantisFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/40 border-border/50 backdrop-blur-md hover:border-secondary/50 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-start gap-6">
                    <div className={`shrink-0 h-14 w-14 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
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
