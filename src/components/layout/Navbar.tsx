import React from 'react';
import { Button, cn } from '@blinkdotnew/ui';
import { Menu, X, Shield, Globe, Cpu } from 'lucide-react';

const navItems = [
  { name: 'Soluciones', href: '#hero' },
  { name: 'Modelos', href: '#models' },
  { name: 'Tecnología', href: '#tecnologia' },
  { name: 'Curso', href: '#curso' },
  { name: 'NEXUS TOK', href: '#nexus-tok' },
  { name: 'Atlantis', href: '#atlantis' },
  { name: 'Regulación', href: '#regulatory' },
  { name: 'Riesgos', href: '#risks' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-border/50 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-foreground">
              NEXUS <span className="text-secondary">BLOCKCHAIN</span> AR
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="shadow-lg shadow-primary/20">
              Invertir Ahora
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="w-full">
                Invertir Ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
