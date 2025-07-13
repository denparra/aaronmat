# Suma Interactiva con Llevada (Local)

Este proyecto es una aplicación web didáctica e interactiva para enseñar la **suma con llevada** a un niño de 9 años con TEA, diseñada para ejecutarse **de manera local**.

---

## 📝 Descripción del Proyecto

La herramienta guía al niño paso a paso en el proceso de sumar dos números (hasta 4 dígitos), mostrando visualmente el valor posicional, el token de "llevar" y ofreciendo refuerzos positivos y feedback inmediato.

### Características Principales

- **Entrada de problema**: campo para ingresar sumandos y lectura en voz alta.
- **Área de valor posicional**: columnas de unidades, decenas, centenas y miles con fichas arrastrables.
- **Proceso guiado**: suma columna a columna, con token de llevar arrastrable.
- **Feedback multisensorial**: texto + voz, iconos ✔️/❌, refuerzos positivos.
- **Gamificación**: puntos, estrellas, insignias desbloqueables.
- **Adaptaciones TEA**: interfaz limpia, control de animaciones, ritmo personalizable.

---

## 🚀 Flujo de Trabajo (6 Fases)

1. **Definición y Planificación**

   - Requisitos funcionales y de accesibilidad (TEA).
   - Documento de especificaciones.

2. **Diseño UX/UI y Prototipado**

   - Wireframes y mockups en alta fidelidad.
   - Prototipo interactivo (Figma/Adobe XD).

3. **Arquitectura Técnica**

   - Estructura de carpetas y elección de tech stack.
   - Diagrama de componentes clave.

4. **Desarrollo Iterativo**

   - Sprints de 1–2 semanas para cada módulo: | Sprint | Objetivo                              | | ------ | ------------------------------------- | | 1      | Entrada y validación de sumandos      | | 2      | Área de valor posicional              | | 3      | Lógica de suma + carry visual         | | 4      | Feedback y refuerzos                  | | 5      | Gamificación y progreso               | | 6      | Personalización y ajustes TEA         |

5. **Pruebas y Validación**

   - Testing con usuarios (niño + adulto).
   - Métricas de usabilidad y ajustes.

6. **Despliegue y Mantenimiento**

   - Deploy local para pruebas.
   - Documentación para padres.
   - Plan de actualización (resta, multiplicación).

---

## 💻 Tecnologías y Herramientas

- **Frontend**: React + Tailwind CSS
- **Interactividad**: React DnD o HTML5 Drag & Drop
- **Voz**: Web Speech API
- **Almacenamiento**: LocalStorage
- **Entorno de desarrollo**: Node.js, npm/yarn

---

## ⚙️ Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd suma-interactiva-llevada
   ```
2. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```
4. Abrir en el navegador: `http://localhost:3000`

---

## 📁 Estructura de Carpetas

```
├── public/                # Archivos estáticos (icons, audios)
├── src/
│   ├── components/        # Componentes React reutilizables
│   ├── pages/             # Páginas y rutas
│   ├── styles/            # Archivos CSS/Tailwind
│   ├── utils/             # Funciones auxiliares (voz, validaciones)
│   └── index.js           # Punto de entrada
├── README.md              # Este archivo
└── package.json
```

---

## 🤝 Contribución

1. Crea un *branch* con tu feature:
   ```bash
   git checkout -b feature/nombre
   ```
2. Haz commmits claros y descriptivos.
3. Envía un *pull request* para revisión.

---

¡Listo! Con este README ya tienes toda la información necesaria para comenzar localmente. 🎉

