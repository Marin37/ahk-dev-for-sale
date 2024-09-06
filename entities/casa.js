import { Inmueble } from "./inmueble";

export class Casa extends Inmueble {
    // tamaniom2, cantAmbientes, tipo, zona, precio
    constructor(precio, tamanio, cantAmbientes, zona) {
        super(this.calcularPrecio(precio), tamanio, cantAmbientes, "casa", zona);
    }

    calcularPrecio() {}
}
