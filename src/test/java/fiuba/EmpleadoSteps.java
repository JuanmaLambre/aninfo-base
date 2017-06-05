package fiuba;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

import java.util.LinkedList;


public class EmpleadoSteps {

    private Empleado empleado;
    private Tarea tarea;

    private final Estado ESTADO_INIT = Estado.TODO;
    private final Estado ESTADO_FIN = Estado.HECHO;


    @Dado("^un empleado y una tarea asignada$")
    public void un_empleado_y_una_tarea_asignado() throws Throwable {
        this.empleado = new Empleado();
        LinkedList<Empleado> empleados = new LinkedList<>();
        empleados.add(this.empleado);
        this.tarea = new Tarea(ESTADO_INIT);
        tarea.asignar(empleados);
    }

    @Cuando("^el empleado cambia el estado de la tarea$")
    public void el_empleado_cambia_el_estado_de_la_tarea() throws Throwable {
        empleado.cambiarEstado(tarea, ESTADO_FIN);
    }

    @Entonces("^la tarea queda con el estado actualizado$")
    public void la_tarea_queda_con_el_estado_actualizado() throws Throwable {
        assertEquals(tarea.getEstado(), ESTADO_FIN);
    }

    @Dado("^un empleado y una tarea que no le pertenece$")
    public void un_empleado_y_una_tarea_que_no_le_pertenece() throws Throwable {
        this.empleado = new Empleado();
        this.tarea = new Tarea(ESTADO_INIT);
    }

    @Entonces("^la tarea queda con el estado anterior$")
    public void la_tarea_queda_con_el_estado_anterior() throws Throwable {
        assertEquals(tarea.getEstado(), ESTADO_INIT);
    }

}
