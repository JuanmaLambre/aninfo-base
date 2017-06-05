package fiuba;

import java.util.LinkedList;
import java.util.List;
import java.util.Collection;


public class Tarea {

    private List<Empleado> asignados;
    private Estado estado;

    
    public Tarea(Estado estado) {
        this.estado = estado;
        this.asignados = new LinkedList<>();
    }

    public void asignar(Collection<Empleado> empleados) {
        asignados.clear();
        asignados.addAll(empleados);
    }

    public void cambiarEstado(Estado nuevoEstado, Empleado quien) {
        if (asignados.contains(quien))
            this.estado = nuevoEstado;
    }

    public Estado getEstado() {
        return estado;
    }

}
