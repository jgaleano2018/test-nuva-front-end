# ***Product Discovery***

El producto final es el desarrollo de un aplicación que permita gestionar las tareas mediante el acceso a una aplicación de tipo Front End (React JS + Next JS), consumo de los servicios del Back End (Rest API - Phyton) y conexión a la base de datos (Firebase Database). Mediante la metodología de trabajo Agile Scrum se realizaran entregas tempranas o incrementales del producto inicial mediante MVP.

Nuestro producto fue definido en reúnión con: Owner del Producto, Scrum Master, Product Owner, Software Architect y la etapa inicial se denominó ***Product Discovery*** y se detalló un alcance inicial **visión compartida** del entregable que se desea construir.


# **Etapas de Creación Backlog**

El backlog es un compendio de los elementos requeridos para trabajar en la construcción del producto final esperado usando la metodología Agile Scrum con los siguientes artefactos y premizas:

- Objetivos.
- Historias de Usuarios.
- Springs.
- Quiénes y Qué.
- Riesgos.
- Estimación.
- Prioridades.

# **Objetivos**

**General**: Crear una aplicación que permita gestionar las tareas de los usuarios.

**Específicos**:

- Crear base de datos que garanticé la persistencia de datos y se pueda realizar transacciónes tales como: Creación de Tareas, Actualización de Tareas, Eliminación de tareas y Consultas de Tareas.
- Desarrollar API Rest en Python para proveer los métodos y la lógica de negocio para procesar la gestión de las Tareas.
- Implementar una apliación web con React JS y Next JS con el fin de facilitar al Usuario final la gestión y operatividad de las Tareas.

**Riesgos**:

- Para aplicaciones web se pueden presentar muchos riegos de operación, seguridad. En la siguiente guía se puede consultar una guía de riesgos y mejores practicas para solucionarlos (https://nordlayer.com/blog/web-application-security/).

- En el uso constante del Rest API se pueden presentar problemas operacionales los cuales se pueden deber a (https://www.techtarget.com/searchsecurity/tip/Top-API-risks-and-how-to-mitigate-them).

- En la construcción del Rest API y al realizar entregas tempranas e inclusos MPV y se desplieguen en ambientes pre o productivos se pueden presentar riesgos de seguridad o vulnerabilades que apican de acuerdo al contexto del [TOP 10 de Owast] (https://owasp.org/API-Security/editions/2023/en/0x11-t10/), (https://www.akamai.com/es/glossary/what-are-api-security-risks).

**Quiénes y Qué**

Las persona responsables de la creación del backlog y cuyas actvidades y tareas se realizan dentro del marco metodologico de Agile Scrum son las siguientes:

- Scrum Master
- Lead Tech
- Product Owner
- Software Arqhitect
- Developers (Optional)

El objetivo de reunirse con todos los integrantes es la creación del backlog, desde la definición y levantamiento de las histrias de usuario, springs, recursos e incluso la visión de asignaciones de los developers responsables o el equipo de desarrollo y de calidad (QA) encargado de llevar a cabo la fase de desarrollo, pruebas e implantación.

**Histórias de Usuarios**

Corresponden a las definiciones de las actividades o tareas a un gran nivel que se deben ejecutar durante la fase de desarrollo, pruebas e implementación bajo el marco de trabajo de Agile Scrum.

**Estimación**

La estimación de las Historias de Usuarios corresponde a la estimación en tiempo y costos que pueda conllevar la ejecución de la solución de la Historia de Usuario o Tareas relacionadas.

**Prioridades**

Se priorizan las Historias de Usuarios de acuerdo a la necesidad del Cliente y de acuerdo al orden en que se deben desplegar en ambientes de Calidad y Pre - Producción.


# **Histórias de Usuarios**

**Front End**

--Crear App o página web en React JS + Next JS.
--Adicionar servicio para el consumo de los servicios del Rest API.


**Back End**

--Crear servicio de Rest API en Python + FastAPI.
--Realizar la conexión a la base de datos de FireBase Database (RealTime Database).
--Ejecutar pruebas funcionales.
--Documentar.

**Database**

- Crear Base de Datos en FirseBase Database (RealTime Database).
- Configurar App Hosting en FirseBase Database.
- Crear Authentication en FirseBase Database.
- Configurar Storage en FirseBase Database.





