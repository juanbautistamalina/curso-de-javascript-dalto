class Celular{
    constructor(color, peso, resolucion_pantalla, resolucion_camara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucion_pantalla = resolucion_pantalla;
        this.resolucion_camara = resolucion_camara;
        this.ram = ram;
        this.encendido = false;
    }

    presionar_boton_encendido(){
        if(this.encendido == false){
            console.log("celular prendido");
            this.encendido = true;
        }else{
            console.log("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            console.log("reiniciando celular");
        }else{
            console.log("El celular está apagado");
        }
    }

    tomar_foto(){
        console.log("Foto tomada en una resolución de: " + this.resolucion_camara);
    }

    grabar(){
        console.log("Video grabado en una resolución de: " + this.resolucion_camara);
    }

    get_informacion(){
        return `
        Color: ${this.color}
        Peso: ${this.peso}
        Resolución de Pantalla: ${this.resolucion_pantalla}
        Resolución de Cámara: ${this.resolucion_camara}
        RAM: ${this.ram}`
    }
}


class CelularAltaGama extends Celular{
    constructor(color, peso, resolucion_pantalla, resolucion_camara, ram, resolucion_camara_extra){
        super(color, peso, resolucion_pantalla, resolucion_camara, ram);
        this.resolucion_camara_extra = resolucion_camara_extra;
    }

    grabar_camara_lenta(){
        console.log("Estas grabando en cámara lenta");
    }

    reconocimiento_facial(){
        console.log("Iniciando reconocimiento facial");
    }

    get_informacion_alta_gama(){
        return this.get_informacion() + `
        Resolución de Cámara Trasera: ${this.resolucion_camara_extra}`
    }
}

console.log("Celulares: ")
const celular1 = new Celular("rojo", "150g", "5'", "hd", "1GB");
const celular2 = new Celular("negro", "155g", "5.4'", "full hd", "2GB");
const celular3 = new Celular("blanco", "148g", "5.9'", "full hd", "2GB");

// celular1.presionar_boton_encendido();
// celular1.tomar_foto();
// celular1.grabar();
// celular1.reiniciar();
// celular1.presionar_boton_encendido();

console.log(`
${celular1.get_informacion()}
${celular2.get_informacion()}
${celular3.get_informacion()}
`);

console.log("Celulares de Alta Gama: ")

const celular_alta_gama_1 = new CelularAltaGama("rojo", "130g", "5.2'", "4K", "3GB", "FULL HD");
const celular_alta_gama_2 = new CelularAltaGama("negro", "142g", "5.2'", "4K", "4GB", "HD");

console.log(`
${celular_alta_gama_1.get_informacion_alta_gama()}
${celular_alta_gama_2.get_informacion_alta_gama()}`);
