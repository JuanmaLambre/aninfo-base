package fiuba;

public class Empleado {

    public void cambiarEstado(Tarea tarea, Estado e) {
        tarea.cambiarEstado(e, this);
    }

}
