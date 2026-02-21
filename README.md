# Web Remake (Next.js)

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

> **Nota:** Este proyecto es un rediseño moderno (2026) con fines puramente educativos. Es una evolución de mi [Proyecto Integrador 01 para NUCBA (2022)](#contexto-y-proyecto-original), pasando de un maquetado clásico con HTML/Bootstrap a un ecosistema moderno con Next.js y Tailwind CSS.

Este repositorio contiene **únicamente el maquetado frontend**. No incluye integración con bases de datos ni lógica de backend; su propósito principal es la experimentación con UI/UX avanzado, componentes de React y diseño *responsive*.

🤖 *El desarrollo y refactorización de este código contó con la asistencia de Gemini 3.1*

---

## Rediseño

El sitio fue reconstruido desde cero manteniendo la esencia de los requisitos originales, pero elevando la calidad visual y técnica:

* **Hero:** Sección principal con efectos de mezcla de color y tipografías de alto impacto.
* **Diseño:** La sección de noticias utiliza una estructura de grilla asimétrica (Bento) moderna e interactiva.
* **Responsive:** Adaptación fluida desde dispositivos móviles hasta pantallas anchas, incluyendo un menú hamburguesa.
* **Personalizado:** Configuración extendida de Tailwind (`globals.css`) con la paleta de colores del sitio original (Rojo, Dorado, Oscuro).
* **Componentización:** Arquitectura limpia separando componentes.

## Stack 

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Íconos:** [Bootstrap Icons](https://icons.getbootstrap.com/)

---

## Cómo correr el proyecto

Para explorar el maquetado en tu entorno local, sigue estos pasos:

1. **Clona el repositorio:**
   ```git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)```


2. **Navega al directorio del proyecto:**
```cd nombre-del-repo```


3. **Instala las dependencias:**
```npm install```


4. **Inicia el servidor de desarrollo:**
```npm run dev```


5. **Abrir navegador:**
Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

---

## Contexto y Proyecto Original

Este proyecto nació originalmente como el primer [integrador del bootcamp de NUCBA](https://github.com/kevinvillabona/nucba-integrador01-html-css).

**Requisitos originales cumplidos y mejorados en esta versión:**

* [x] Contiene un navbar que navega las diversas secciones.
* [x] Portada alusiva a la temática (Hero section).
* [x] Sección de imágenes / grilla de actualidad.
* [x] Footer integrado.
* [x] Rutas preparadas para Login/Registro (`/registro`, `/portalsocios`).
* [x] 100% Responsive Design.
* [x] Listo para ser deployado en plataformas modernas (Vercel).
