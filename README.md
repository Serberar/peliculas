# Películas · Catálogo estilo Netflix (Angular)

Catálogo de películas con aspecto **tipo Netflix** hecho con Angular. Muestra una portada con las películas más populares de la semana y la cuadrícula con todo el catálogo.

**Ver online:** https://serberar.github.io/peliculas/

## Componentes

| Componente | Qué hace |
|---|---|
| `nav` | Barra de navegación. |
| `hero` | Cabecera con «las películas más populares de la semana». |
| `films` | Cuadrícula de películas generada con `*ngFor`. |

Los datos salen de `src/app/seed/seed.ts`: 146 películas con título, año, duración, géneros, director, actores y argumento.

## Tecnologías

Angular 15, TypeScript y SCSS.

## Cómo arrancarlo

```bash
npm install
npx ng serve      # http://localhost:4200
```

## Autor

Sergio Bernabé
