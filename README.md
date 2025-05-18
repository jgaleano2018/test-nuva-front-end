# Documento Entrega 

La solución para crear la aplicación del Front End se desarrollo con los principios SOLID, Clean Arqhitecture, Clean Code, Design Patterns y se utilizaron los lenguajes de programación y tecnologías correspondientes en el apartadoo de **Technology**:

# Technology

  - React JS
  - Next JS

# Install Depedendecies

  - npx create-next-app@latest
  - npm install next react react-dom
  - npm run dev

# Paths Executable

  - GET http://locahost:8081/components/task/task
  - POST http://locahost:8081/components/task/add
  - UDPATE http://locahost:8081/components/task/update/:id

# Decisiones Técnicas

Para el desarrollo de la solución en la parte del servicio se decidio utilizar la base de datos Firebase Database (RealTime Database) por las sigueientes razones:

- Es una base de datos que trabaja en onCloude o en la Nuve.
- El servicio tiene disponibilidad aunque el usuario no tenga buena conexión o pierda la conexión.
- Se pueden manejar multiples sesiones del lado del cliente al acceder a la aplicación web desde Google Chrome.
- Firebase Database es compatible con Python y React JS.

En la parte del front se trabajo con React JS ya que se pueda trabajar en una arquitectura por modulos, componentes y se peude aplicar beunas practicas de desarrollo en la app construida de gestión de tareas.