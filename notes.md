# Proyecto

## HTML

4. Inclusión de CSS

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
```

Importa la hoja de estilos de Bootstrap desde un CDN.
```html
<link rel="stylesheet" href="./styles.css">
```

Vincula una hoja de estilos CSS local.

5. Título de la Página
```html
<title>Mi portafolio</title>
```

Define el título de la página web.

6. Estructura del Cuerpo ()

6.1. Encabezado con Barra de Navegación
```html
<header class="navbar navbar-expand-lg navbar-dark bg-dark">
```

Define el encabezado con una barra de navegación oscura.
```html
<a class="navbar-brand" href="#">YB</a>
```

Agrega el logo o nombre en la barra de navegación.
```html
<ul class="navbar-nav">
  <li class="nav-item"><a href="#about" class="nav-link">Acerca de</a></li>
  <li class="nav-item"><a href="#projects" class="nav-link">Proyectos</a></li>
  <li class="nav-item"><a href="#contact" class="nav-link">Contacto</a></li>
</ul>
```

Lista de enlaces para la navegación interna de la página.

6.2. Sección "Acerca de Mí"
```html
<section id="about" class="container my-5">
```

Sección que describe la información personal y habilidades del autor.
```html
<p class="lead">
  Hola, soy <span class="fw-bold text-primary">Yeison Betancur</span> y soy un <span class="fw-bold text-primary">Desarrollador Backend</span>, con experiencia en tecnologías como .NET, PHP con Laravel y NestJS.
</p>
```

Parrafo con formato destacado, presentando el perfil del desarrollador.

6.3. Sección "Proyectos"
```html
<section id="projects" class="container my-5">
```

Define una sección con una lista de proyectos.

Cada proyecto está estructurado en una tarjeta de Bootstrap:
```html
<div class="card project-card">
  <div class="card-body">
    <h5 class="card-title">Proyecto 1</h5>
    <p class="card-text description">Descripción breve del proyecto.</p>
    <p class="card-text more-info" style="display: none;">Esta es la descripción completa del Proyecto 1.</p>
  </div>
</div>
```

6.4. Sección "Contacto"

```html
<section id="contact" class="container my-5">
```

Define la sección de contacto con un formulario.

Campos del formulario:
```html
<input type="email" class="form-control" id="email" placeholder="janedoe@example.com" required>
<input type="text" class="form-control" id="name" placeholder="Jane Doe" required>
<textarea class="form-control" id="message" rows="3" required></textarea>
```

Botón de envío:
```html
<button type="button" id="submitButton" class="btn btn-primary">Enviar</button>
```

6.5. Pie de Página
```html
<footer class="bg-dark text-white text-center py-4">
```

Define el pie de página con enlaces a redes sociales.
```html
<a href="https://www.linkedin.com/in/yeison-betancur" target="_blank" class="text-white mx-2">LinkedIn</a>
<a href="https://github.com/yeisonbetancur" target="_blank" class="text-white mx-2">GitHub</a>
```

7. Inclusión de Scripts

jQuery
```html
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
```

Carga jQuery desde un CDN.

Bootstrap JS
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

Incluye los scripts de Bootstrap.

Scripts Locales
```html
<script src="./cards.js"></script>
<script src="./validation.js"></script>
```

Carga scripts locales para funcionalidades adicionales.

## CSS

## JS
