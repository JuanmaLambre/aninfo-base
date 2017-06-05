# language: es
Característica: Empleado

  Escenario: Un empleado cambia el estado de una tarea
    Dado un empleado y una tarea asignada
    Cuando el empleado cambia el estado de la tarea
    Entonces la tarea queda con el estado actualizado

  Escenario: Un empleado intenta cambiar el estado de una tarea que no le pertenece
    Dado un empleado y una tarea que no le pertenece
    Cuando el empleado cambia el estado de la tarea
    Entonces la tarea queda con el estado anterior

