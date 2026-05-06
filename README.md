# 🚀 Menárguez-IA Platform — Generador de landings con IA

> Plataforma propia para generar páginas de venta con IA (inspirada en Emergent/Bolt), pensada para mi forma de trabajar y para mis clientes.

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white)
![Make](https://img.shields.io/badge/Make.com-6D00CC?style=for-the-badge&logo=make&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

---

## 📌 ¿Qué hace?

**Menárguez-IA Platform** convierte una descripción en lenguaje natural en una landing funcional en minutos:

```
Usuario describe la landing en el chat
              ↓
OpenAI genera un PageSpec JSON estructurado
              ↓
Renderer propio renderiza la página
              ↓
Landing funcional con identidad Menárguez-IA
              ↓
Lista para conectar con Make / chatbots / email
```

- Chat → JSON (PageSpec) → renderer propio
- Flujo de reservas **/book** con envío de correo (Resend)
- Estilos unificados (tema oscuro + acento), precios en EUR y secciones reutilizables

---

## 🧠 Descripción

Un constructor de páginas con IA donde el usuario describe la landing en el chat y la plataforma se encarga del resto:

1. Envía el prompt a **OpenAI**
2. Recibe una especificación **JSON fuerte (PageSpec)** con toda la estructura
3. Renderiza la página con un **renderer propio** manteniendo diseño consistente

La idea es poder pasar **de idea a landing funcional en minutos**, manteniendo siempre la identidad visual de Menárguez-IA y preparada para conectar con automatizaciones (Make, chatbots, campañas de email, etc.).

---

## ✨ ¿Qué incluye?

| Característica | Detalle |
|---|---|
| **PageSpec + renderer** | JSON determinista → mismo look & feel en todas las landings |
| **Secciones listas** | Hero, features, pricing (EUR), testimonials, custom |
| **Flujo /book** | Reservas con correo transaccional via Resend |
| **CTA embebible** | `target="_top"` para integrarse en otras webs |
| **Identidad visual** | Tema oscuro + acento Menárguez-IA |

---

## 🔧 Stack tecnológico

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)
![Make](https://img.shields.io/badge/Make.com-6D00CC?style=for-the-badge&logo=make&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white)

</div>

---

## 📁 Estructura del proyecto

```
menarguez-ia-platform/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Chat principal
│   └── book/             # Flujo de reservas
├── public/               # Assets estáticos
├── styles/               # Tema oscuro + variables CSS
├── next.config.js
├── tailwind.config.ts
└── README.md
```

---

## 🗺️ Roadmap

- [x] Chat → PageSpec JSON → renderer propio
- [x] Secciones reutilizables (hero, pricing EUR, testimonials)
- [x] Flujo /book con correo transaccional (Resend)
- [x] CTA embebible con `target="_top"`
- [ ] Mejorar UX de /book (validaciones y feedback de error)
- [ ] Secciones: FAQ, comparativas de planes, timeline de servicio
- [ ] Histórico de versiones (Supabase) + export a HTML estático
- [ ] Ajuste fino de tipografías alineado con guía Menárguez-IA

---

## 👤 Autor

**Nacho Menárguez** — [ai.menarguez-ia.com](https://ai.menarguez-ia.com) · [LinkedIn](https://www.linkedin.com/in/ignaciomenarguezfernandez/)

---

<div align="center">
<sub>Made with ❤️ by Ignacio Menárguez · Menárguez-IA Solutions · 2026</sub>
</div>
