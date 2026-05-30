import React from 'react';
import { Button, Input, Separator } from '@blinkdotnew/ui';
import { Cpu, Globe, Code, Briefcase, Mail, MessageSquare, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 group">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-foreground">
                NEXUS <span className="text-secondary">BLOCKCHAIN</span> AR
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La plataforma líder en tokenización de activos reales en Argentina. 
              Puente digital entre el mercado de capitales tradicional y la eficiencia blockchain.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                <Globe className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                <Briefcase className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                <Code className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#models" className="hover:text-primary transition-colors">Proyectos Activos</a></li>
              <li><a href="#atlantis" className="hover:text-primary transition-colors">Nexus Atlantis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nexus Token (NXT)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gobernanza</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1">Explorer <ExternalLink className="h-3 w-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal & Soporte</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Auditorías</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold">Suscríbete al Newsletter</h4>
            <p className="text-muted-foreground text-sm">
              Recibe las últimas oportunidades de inversión y noticias del ecosistema.
            </p>
            <div className="flex gap-2">
              <Input placeholder="tu@email.com" className="bg-card/30 border-border/50" />
              <Button variant="default">Unirme</Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
              <Mail className="h-4 w-4" /> contacto@nexusblockchain.ar
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" /> Soporte vía Telegram
            </div>
          </div>
        </div>

        <Separator className="bg-border/50 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexus Blockchain AR. Todos los derechos reservados. 
            Registrado como PSAV ante la CNV (Exp. 2024-001).
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">Status: <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Operativo</span>
            <span>Network: Ethereum Mainnet / Polygon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
