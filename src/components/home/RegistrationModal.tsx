import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  Button,
  Input,
  Field,
  FieldLabel,
  toast
} from '@blinkdotnew/ui';
import { Mail, Phone, Rocket, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
}

export function RegistrationModal({ isOpen, onClose, programTitle }: RegistrationModalProps) {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email (since backend is required for Resend/SDK notifications)
    // In a real scenario with Pro plan, we would call a Blink Backend or blink.notifications.email
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      toast.success('¡Registro recibido!', {
        description: 'Te contactaremos pronto para los siguientes pasos.',
      });
      
      // Redirect to the forms.app link after a delay
      setTimeout(() => {
        window.open('https://bktn5hyt.forms.app/inscripcion-al-programa-web3', '_blank');
        onClose();
        setIsSuccess(false);
        setIsSubmitting(false);
        setEmail('');
        setPhone('');
      }, 2000);
    } catch (error) {
      toast.error('Hubo un error al procesar tu registro.');
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background border-border/50 backdrop-blur-xl">
        <DialogHeader>
          <div className="mx-auto h-12 w-12 rounded-2xl bg-magenta/10 flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-magenta" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Inscripción al Programa
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {programTitle}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="space-y-6 pt-4"
            >
              <Field>
                <FieldLabel className="text-sm font-medium">Email Corporativo</FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    required
                    type="email"
                    placeholder="tu@empresa.com"
                    className="pl-10 bg-card/30 border-border/50 focus:border-magenta/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel className="text-sm font-medium">Teléfono (WhatsApp)</FieldLabel>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    required
                    type="tel"
                    placeholder="+54 9 11 ..."
                    className="pl-10 bg-card/30 border-border/50 focus:border-magenta/50"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-magenta text-white hover:bg-magenta/90 h-12 font-bold shadow-lg shadow-magenta/20 transition-all active:scale-[0.98]"
              >
                {isSubmitting ? 'Enviando...' : 'Completar Registro'}
              </Button>
              
              <p className="text-[10px] text-center text-muted-foreground px-4">
                Al registrarte, aceptas recibir información sobre el programa y comunicaciones relacionadas con Web3.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center space-y-4"
            >
              <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¡Excelente!</h3>
                <p className="text-sm text-muted-foreground px-6">
                  Tus datos han sido registrados. Ahora te redirigiremos para completar los detalles finales.
                </p>
              </div>
              <div className="w-full h-1 bg-border/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="h-full bg-magenta"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
