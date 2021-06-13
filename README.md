# ToDoList
Este repositorio corresponde al primer trabajo individual de la asignatura de diseño de aplicaciones web 2. 
La aplicación cuenta con las sisguientes características técnicas:
- Una pantalla principal en la que el usuario puede ver sus taras pendientes y en proceso. Desde esta pantalla, las tareas podrán mostrarse por tipo, es decir, solo las completadas, 
solo las que están en proceso, o todas, que es la opción por defecto. Este botón emplea el elemento de Angular Material <mat-button-toggle>.
Esta pantalla también dejará la opción de ordenar las tareas de 6 maneras: Alfabético (asc y desc), por fecha( reciente- antigüo) o prioridad (asc y desc).
- Las tareas tienen un icono con un color asignado en función de su estado: <br>
rojo --> pendiente <br>
amarillo --> en progreso <br>
azul --> completado (solo en histórico)
- En las pantallas principales de la aplicación podremos acceder en la esquina superior izquierda a un menú desplegable para navegar entre ellas, siendo estas la principal (tareas 
pendientes y en progreso) y el histórico (completadas)
- Al pulsar en una tarea, nos llevará a una pantalla de información de ésta, donde se mostrará en una tarjeta el nombre, la descripción y la fecha en la que se creó.
Además, podemos ver y modificar su estado a través de un <mat-radio-button>. Dentro de la pantalla de información de la tarea, tendremos la opción en la esquina superior derecha
de borrar la tarea, lo que nos responderá con una alerta buscando confirmación de la acción.
- En la esquina inferior derecha de la pantalla principal podemos acceder a través de un botón flotante a la pantalla de añadir una nueva tarea, en la que solo tendremos que 
rellenar un simple formulario, que emplea inputs de angular material, en los que proporcionaremos un nombre y una descripción para la tarea.

