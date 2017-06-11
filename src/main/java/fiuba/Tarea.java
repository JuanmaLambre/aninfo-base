package fiuba;

import java.util.LinkedList;
import java.util.List;
import java.util.Collection;


public class Tarea {

    private Empleado asignado;
    private Estado estado;

    
    public Tarea(Estado estado) {
        this.estado = estado;
    }

    public void asignar(Empleado empleado) {
        asignado = empleado;
    }

    public void cambiarEstado(Estado nuevoEstado, Empleado quien) {
        if (asignado == quien)
            this.estado = nuevoEstado;
    }

    public Estado getEstado() {
        return estado;
    }

}
