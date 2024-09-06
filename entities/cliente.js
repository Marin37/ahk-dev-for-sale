import Persona from "./persona.js";

export class Cliente extends Persona {
    constructor(nombre, apellido, dni) {
        super(nombre, apellido, dni);
    }
}
