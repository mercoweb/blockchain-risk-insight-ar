# Enhanced Vite React TypeScript Template

This template includes built-in detection for missing CSS variables between your Tailwind config and CSS files.

## Features

- **CSS Variable Detection**: Automatically detects if CSS variables referenced in `tailwind.config.cjs` are defined in `src/index.css`
- **Enhanced Linting**: Includes ESLint, Stylelint, and custom CSS variable validation
- **Shadcn/ui**: Pre-configured with all Shadcn components
- **Modern Stack**: Vite + React + TypeScript + Tailwind CSS

## Available Scripts

```bash
# Run all linting (includes CSS variable check)
npm run lint

# Check only CSS variables
npm run check:css-vars

# Individual linting
npm run lint:js    # ESLint
npm run lint:css   # Stylelint
```

## CSS Variable Detection

The template includes a custom script that:

1. **Parses `tailwind.config.cjs`** to find all `var(--variable)` references
2. **Parses `src/index.css`** to find all defined CSS variables (`--variable:`)
3. **Cross-references** them to find missing definitions
4. **Reports undefined variables** with clear error messages

### Example Output

When CSS variables are missing:
```
❌ Undefined CSS variables found in tailwind.config.cjs:
   --sidebar-background
   --sidebar-foreground
   --sidebar-primary

Add these variables to src/index.css
```

When all variables are defined:
```
✅ All CSS variables in tailwind.config.cjs are defined
```

## How It Works

The detection happens during the `npm run lint` command, which will:
- Exit with error code 1 if undefined variables are found
- Show exactly which variables need to be added to your CSS file
- Integrate seamlessly with your development workflow

This prevents runtime CSS issues where Tailwind classes reference undefined CSS variables.
# 🌊 Atlantis Launchpad
### Tokenización de startups tecnológicas con base en ingresos reales

> **Un protocolo descentralizado para financiar el ecosistema tecnológico latinoamericano — sin inversores tradicionales, sin dilución accionaria, con respaldo en productos reales.**

---

## ¿Qué es Atlantis?

Atlantis es un **launchpad de tokenización** diseñado para startups tecnológicas en etapa de MVP. En lugar de depender de capital de riesgo tradicional o rondas de inversión convencionales, Atlantis permite que una startup financie su crecimiento emitiendo tokens respaldados por sus propios ingresos de servicio.

El modelo funciona en tres pasos:

1. **Selección** — Una startup con MVP funcional y primeros ingresos aplica al protocolo
2. **Tokenización** — Se emite un token de utilidad vinculado al flujo de ingresos del servicio
3. **Lanzamiento** — El token se ofrece a la comunidad, que accede a beneficios del servicio y participa del crecimiento

---

## El Problema que Resolvemos

El ecosistema de startups tecnológicas en LATAM enfrenta una brecha crítica de financiamiento:

- **+90%** de las startups en etapa temprana no acceden a capital institucional
- Los fondos de VC tradicionales priorizan mercados más maduros (EEUU, Europa)
- Las opciones de deuda bancaria son inaccesibles para proyectos sin historial
- Los fundadores pierden control accionario demasiado pronto

**Resultado**: proyectos viables mueren por falta de capital, no por falta de producto.

---

## Nuestra Solución

### Revenue-Backed Tokenization (RBT)

Un modelo donde el token **no representa acciones ni deuda** — representa acceso preferencial al servicio de la startup, con una estructura de beneficios vinculada al crecimiento de sus ingresos.

```
Startup con MVP → Ingresos verificados → Token de utilidad → Comunidad de holders
       ↑                                                              ↓
  Crece con capital                                    Accede al servicio + upside
```

### ¿Por qué no es un Security?

La clasificación legal es clave. Los tokens de Atlantis están diseñados como **utility tokens** bajo los siguientes principios:

- El token otorga acceso a funcionalidades del servicio (no promete retorno financiero)
- El revenue sharing es una consecuencia del uso, no una promesa de inversión
- La documentación, marketing y estructura contractual evitan explícitamente el lenguaje de instrumento financiero
- La emisión se realiza bajo jurisdicciones con marcos crypto favorables

---

## Estructura del Protocolo

### Para las Startups

| Etapa | Requisito | Beneficio |
|-------|-----------|-----------|
| Aplicación | MVP funcional + 3 meses de ingresos | Evaluación gratuita |
| Due Diligence | Métricas verificables | Acceso al launchpad |
| Token Design | Colaboración con el equipo Atlantis | Estructura legal incluida |
| Lanzamiento | Aprobación del protocolo | Acceso a comunidad global |

### Para los Holders de Tokens

- Acceso anticipado o descuentos al servicio de la startup
- Participación en la gobernanza del protocolo (tokens de proyectos maduros)
- Exposición al crecimiento del ecosistema LATAM tech
- Liquidez en mercados secundarios descentralizados

---

## Modelo de Evaluación de Startups

Cada proyecto es evaluado con un **Risk Score** basado en 5 dimensiones:

```
📊 Atlantis Risk Score

┌─────────────────────────────────────┐
│  Tracción de Ingresos       (30%)   │
│  Solidez del MVP            (25%)   │
│  Mercado Direccionable      (20%)   │
│  Equipo Fundador            (15%)   │
│  Claridad Regulatoria       (10%)   │
└─────────────────────────────────────┘
```

Solo proyectos con score ≥ 70/100 acceden al launchpad.

---

## Marco Legal y Jurisdicción

Atlantis opera bajo una estructura legal dual:

### Jurisdicción de Emisión (Recomendadas)
- 🇵🇾 **Paraguay** — Ley 6822, marco crypto específico, costos operativos bajos
- 🇺🇾 **Uruguay** — Estabilidad jurídica, IRAE predecible, acceso al mercado regional
- 🇦🇪 **UAE / VARA** — Para proyectos con ambición global desde el día 1

### Estructura Operativa
- La startup opera legalmente en su país de origen
- La emisión del token ocurre bajo la jurisdicción seleccionada
- Contratos smart auditados + documentación legal completa en cada lanzamiento
- Cumplimiento AML/KYC integrado al proceso de onboarding

> **Nota importante**: Este modelo NO viola la legislación argentina vigente porque la emisión no ocurre bajo jurisdicción argentina y los tokens están estructurados como utility tokens, no como valores negociables según la definición de la CNV.

---

## Stack Tecnológico

```
Frontend:     React + TypeScript + Vite + Tailwind CSS
Contratos:    Solidity (EVM-compatible) — Polygon / Base / Arbitrum
Oráculos:     Chainlink para verificación de ingresos on-chain
Infraestructura: IPFS para documentación, The Graph para indexación
Auditoría:    OpenZeppelin standards + auditoría externa pre-launch
```

---

## Roadmap

### Fase 1 — Fundación (Q3 2025)
- [ ] Definición del modelo legal definitivo
- [ ] Selección de jurisdicción primaria
- [ ] Smart contracts v1 (auditados)
- [ ] Primer proyecto piloto identificado

### Fase 2 — Piloto (Q4 2025)
- [ ] Lanzamiento del primer token del ecosistema
- [ ] Validación del modelo con comunidad real
- [ ] Iteración del Risk Score con datos reales
- [ ] Documentación pública del protocolo (whitepaper v1)

### Fase 3 — Escala (Q1-Q2 2026)
- [ ] 5 proyectos tokenizados activos
- [ ] DAO de gobernanza del protocolo
- [ ] Expansión a México, Colombia, Brasil
- [ ] Partnerships con aceleradoras regionales

---

## ¿Por Qué Ahora?

- El ecosistema crypto LATAM creció **+40% en adopción** en los últimos 2 años
- Paraguay y Uruguay tienen marcos legales listos y subexplotados
- La generación de fundadores post-pandemia prefiere modelos sin dilución
- La infraestructura blockchain (L2s, gas fees bajos) hace viable lo que antes era caro

---

## El Equipo

| Rol | Foco |
|-----|------|
| Protocolo & Estrategia | Diseño del modelo de tokenización y estructura legal |
| Tech Lead | Smart contracts, frontend, infraestructura |
| Deal Flow | Identificación y evaluación de startups candidatas |
| Legal & Compliance | Estructuración por jurisdicción, AML/KYC |

> *Somos un equipo en construcción. Si te identificás con esta visión y tenés experiencia en blockchain, legal crypto, o ecosistema startup LATAM, queremos hablar.*

---

## Contribuir / Contacto

Este repositorio contiene el frontend del launchpad. Para propuestas de colaboración, aplicaciones de startups, o consultas sobre el protocolo:

- 📧 Contacto: [a definir]
- 🌐 Sitio: [atlantis.finance — en construcción]
- 🐦 Twitter/X: [@atlantis_latam — a definir]
- 💬 Discord: [comunidad en formación]

---

## Licencia

MIT — El código es libre. El protocolo es de todos.

---

*Atlantis Launchpad — Construido en LATAM, para el mundo.*
