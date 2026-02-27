# FEPAST Website

Sitio web informativo para la Fundación para el Estudio y Prevención del Síndrome de Turner (FEPAST).

## Características principales
- SPA desarrollada con React, Vite y Tailwind CSS
- Diseño responsivo y moderno
- Secciones: Inicio, Acerca, Servicios, Comunidad, Miembros, Transparencia, Contacto
- Integración con WordPress para gestión de documentos y noticias
- Sección de transparencia con descargas de documentos públicos
- Slider de imágenes destacadas
- Configuración de rutas amigables para cPanel

## Estructura del proyecto
```
├── public/
│   ├── images/
│   │   └── logo/
│   └── .htaccess
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Slider.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Transparencia.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Instalación y despliegue
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Compila para producción:
   ```bash
   npm run build
   ```
3. El contenido compilado estará en la carpeta `dist/`. Empaqueta y sube al hosting.

## Configuración especial para cPanel
- El archivo `.htaccess` en `public/` permite el routing SPA en servidores Apache/cPanel.

## Documentación y mantenimiento
- Los archivos principales están documentados con comentarios para facilitar el mantenimiento.
- La integración con WordPress se realiza vía API REST para documentos públicos.

## Contacto
Para dudas o soporte, contactar a la Fundación FEPAST o al desarrollador responsable.

## 🚀 Descripción del Proyecto

**FEPAST Website** es una plataforma web moderna e informativa desarrollada para la Fundación para el Estudio y Prevención del Síndrome de Turner. Este proyecto destaca por su enfoque en la transparencia, la accesibilidad y la facilidad de gestión para el cliente.

### ¿Qué hace especial a este proyecto?
- 🎨 **Diseño personalizado y responsivo**: Adaptado a la identidad visual de la fundación, garantizando una experiencia atractiva en cualquier dispositivo.
- 📰 **Gestión de contenidos dinámica**: Integración con WordPress para que el equipo de FEPAST pueda publicar documentos y noticias sin conocimientos técnicos.
- 📂 **Transparencia real**: Sección dedicada a la descarga de documentos públicos, cumpliendo estándares de acceso a la información y confianza institucional.
- ⚡ **SPA de alto rendimiento**: Construida con React, Vite y Tailwind CSS para una navegación rápida y fluida.
- ☁️ **Despliegue optimizado**: Preparada para hosting compartido (cPanel) con rutas amigables y configuración especial para Single Page Application.

### 💡 ¿Por qué incluirlo en mi portafolio?
Este desarrollo demuestra habilidades en:
- Frontend moderno (React, Vite, Tailwind)
- Integración de APIs externas (WordPress REST API)
- Experiencia de usuario y diseño UI/UX
- Despliegue profesional y buenas prácticas de documentación

> "Un proyecto que combina tecnología, diseño y propósito social para generar impacto real."

---

> Proyecto realizado por Juanito (2026)
