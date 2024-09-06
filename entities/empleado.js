import Persona from "./persona.js";

export class Empleado extends Persona {
    constructor(nombre, apellido, dni) {
        super(nombre, apellido, dni);
    }

    getOperaciones() {}
    getOperacionesCerradas() {}
    getOperacionesReservas() {}
    getTotalComisiones() {}
    habraProblemas(otroEmpleado) {}
}
