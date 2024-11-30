# **LearnHorizon** - Plataforma de Gestión de Modelos 3D

**LearnHorizon** es una plataforma interactiva para gestionar modelos 3D a través de un sistema de artículos. Los usuarios pueden registrarse, crear, editar, cargar, eliminar artículos y subir modelos 3D en formato `.gltf`. El sistema permite la visualización de modelos 3D y un manejo completo de artículos, brindando la posibilidad de modificar y eliminar contenido relacionado.

## Características principales
- **Registro y Autenticación de Usuarios**: Los usuarios pueden registrarse y iniciar sesión en la plataforma utilizando un sistema de autenticación.
- **CRUD Completo de Artículos**: Los usuarios pueden crear, leer, actualizar y eliminar artículos.
- **Gestión de Modelos 3D**: Los artículos pueden contener modelos 3D que los usuarios pueden cargar y modificar.
- **Interfaz de usuario interactiva**: El frontend permite editar artículos y visualizar modelos 3D directamente en la plataforma.
- **Backend robusto**: El backend se encarga del almacenamiento seguro de los artículos, modelos 3D y la gestión de usuarios.

## Flujo de Trabajo

1. **Registro de Usuario**: Los usuarios pueden crear una cuenta ingresando su nombre, correo electrónico y contraseña. Los datos se almacenan de forma segura en el backend.

2. **Inicio de sesión**: Los usuarios registrados pueden iniciar sesión con su correo y contraseña. El backend genera un JWT (JSON Web Token) que se almacena en el navegador para autenticar futuras peticiones.

3. **Gestión de Artículos**:
   - **Crear Artículos**: Los usuarios pueden crear artículos con un título, descripción y cargar un archivo `.gltf` (modelo 3D).
   - **Editar Artículos**: Los usuarios pueden editar los detalles de los artículos creados (título, descripción, o cargar un nuevo archivo de modelo 3D).
   - **Eliminar Artículos**: Los usuarios pueden eliminar artículos que ya no deseen mostrar en la plataforma.

4. **Visualización de Modelos 3D**: Los usuarios pueden ver sus modelos 3D cargados directamente en el artículo a través de un visor 3D embebido en el frontend.

## Tecnologías utilizadas

1. **Frontend**:
   - **[Next.js](https://nextjs.org/)**: Framework para aplicaciones web basadas en React, que permite renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
   - **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipado estático opcional, mejorando la seguridad y el desarrollo de aplicaciones a gran escala.
   - **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario que facilita la creación de interfaces de usuario personalizadas y estilizadas sin necesidad de escribir clases CSS adicionales.
   - **[ShadCN](https://github.com/shadcn/ui)**: Librería de componentes de UI para React, diseñada para crear interfaces accesibles y consistentes con un enfoque en la facilidad de uso.
   - **[Three.js](https://threejs.org/)**: Librería de JavaScript para la creación y visualización de gráficos 3D en el navegador, utilizada para renderizar modelos 3D en la plataforma.
   - **[Zustand](https://github.com/pmndrs/zustand)**: Librería ligera de gestión de estado para React, fácil de usar y de integrar, que permite un flujo de datos más sencillo y eficiente.
   - **[Axios](https://axios-http.com/)**: Librería para hacer solicitudes HTTP, basada en promesas, que facilita la comunicación entre el frontend y el backend.

2. **Backend**:
   - **[NestJS](https://nestjs.com/)**: Framework de Node.js para construir aplicaciones eficientes, escalables y de fácil mantenimiento, utilizando TypeScript de manera nativa y con un enfoque basado en módulos.
   - **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipado estático opcional, mejorando la seguridad y el desarrollo de aplicaciones a gran escala.
   - **[Mongoose](https://mongoosejs.com/)**: Librería de modelado de datos para MongoDB en Node.js, que proporciona una solución sencilla para trabajar con bases de datos MongoDB usando un enfoque basado en esquemas.
   - **[MongoDB](https://www.mongodb.com/)**: Base de datos NoSQL que almacena datos en formato JSON, adecuada para aplicaciones con grandes volúmenes de datos no estructurados, utilizada como gestor de base de datos en el backend.

---

## **Trabajo Futuro**

En las próximas etapas del proyecto, se enfocarán las siguientes mejoras y funcionalidades:

1. **Implementación de `.zip` en el almacenaje de modelos 3D**:
   - Incorporar la capacidad de cargar y almacenar archivos de modelos 3D comprimidos en formato `.zip`. Esto permitirá a los usuarios subir múltiples archivos y modelos relacionados en un solo paquete comprimido, optimizando la gestión de datos y el almacenamiento en el backend.

2. **Autenticación por JWT en las peticiones restringidas al backend**:
   - Implementar un sistema de autenticación basado en JWT (JSON Web Token) para asegurar que las peticiones a las rutas restringidas del backend estén protegidas y solo accesibles para usuarios autenticados. Esto mejorará la seguridad en el proceso de inicio de sesión y registro de usuarios.

3. **Mejoras en la implementación de Swagger**:
   - Organizar y optimizar la implementación de Swagger para generar documentación más clara y estructurada de la API del backend. Esto facilitará la comprensión y el uso de las rutas de la API tanto para los desarrolladores como para los usuarios finales.

4. **Diseño de una interfaz de usuario más amigable**:
   - Rediseñar la interfaz de usuario para hacerla más intuitiva, atractiva y fácil de usar. Esto incluirá mejoras en la experiencia de usuario (UX) y en la disposición de los elementos para facilitar la interacción con la plataforma.

5. **Desarrollo de una paleta de colores personalizada**:
   - Diseñar y aplicar una paleta de colores coherente y accesible que no solo mejore la estética de la plataforma, sino también la legibilidad y la facilidad de uso en toda la interfaz.

6. **Implementación de más funcionalidades para la transformación del modelo 3D**:
   - Agregar herramientas avanzadas para la transformación de modelos 3D, como escalado, rotación, traslación, y edición de texturas. Esto permitirá a los usuarios manipular los modelos 3D de forma más precisa y detallada dentro de la plataforma.

7. **Mejorar el framework para la renderización de modelos 3D**:
   - Optimizar el rendimiento y la calidad de la renderización de los modelos 3D tanto en modo de visualización como en modo de edición. Esto incluirá mejoras en la eficiencia del rendering, la iluminación, los efectos visuales y la interacción con los modelos en tiempo real.
