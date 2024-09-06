import Zonas from "./zonas.js";

export class Inmueble {
    // direccion; // fuera de la consigna
    precio;
    tamanio;
    cantAmbientes;
    tipo; // casa, depto, ph, local
    zona;
    estado;

    constructor(precio, tamanio, cantAmbientes, tipo, zona) {
        this.precio = precio;
        this.tamanio = tamanio;
        this.cantAmbientes = cantAmbientes;
        this.tipo = tipo;
        this.zona = zona;
        estado = "en venta";
    }

    reservar() {
        this.setEstado("reservado");
    }
    alquilar() {
        this.setEstado("alquilado");
    }
    vender() {
        if ((this.tipo = "local")) {
            return "no se puede vender local";
        } else {
            this.setEstado("vendido");
        }
    }
    setEstado(valor) {
        this.estado = valor;
    }
    getExtraPorZona() {
        return 1 + zonas.g;
    }
}
