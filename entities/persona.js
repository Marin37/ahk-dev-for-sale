export class Persona {
    nombre;
    apellido;
    dni;

    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    getNombreCompleto() {
        return this.nombre + this.apellido;
    }
    getDNI() {
        return this.dni;
    }
}
