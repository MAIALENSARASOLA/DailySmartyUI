# DailySmarty UI

Buscador de posts hecho en React + Redux. Escribes un término, la app consulta la API de DailySmarty y muestra los posts que coinciden.

Lo hice durante el bootcamp de Full Stack (Bottega) para practicar React con Redux y el consumo de una API externa.

## Qué hace
- Barra de búsqueda (con iconos de Font Awesome).
- Pide los posts a la API con Axios y los guarda en el estado de Redux.
- Muestra los resultados y sus enlaces, con un efecto al pasar el ratón (react-animate-height).
- Se adapta al móvil con media queries.

## Con qué está hecho
React, Redux, React Router, Axios y SCSS.

## Cómo funciona
Búsqueda → acción de Redux → Axios → API de DailySmarty → reducer → los componentes muestran los resultados.

## Para arrancarlo en local

```bash
git clone https://github.com/MAIALENSARASOLA/DailySmartyUI.git
cd DailySmartyUI
npm install
npm start
```

Se abre en http://localhost:3000

Parte de una plantilla inicial de Bottega (React/Redux/Router starter).

Maialen Sarasola
