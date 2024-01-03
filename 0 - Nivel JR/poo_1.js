// clase
class Animal{
    // metodo constructor
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${especie}, tengo ${edad} años y soy de color ${color}`;
    }

    // metodo
    ver_info(){
        console.log(this.info);
    }
}

// Clase Perro hereda de la clase Animal
class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = raza;
    }

    ladrar(){
        console.log("¡WAW!");
    }

    // metodo estático (no necesita que se instancia un objeto perteneciente a la clase para usarse)
    static correr(){
        console.log("Corriendo...");
    }

    // Métodos Getters: Obtienen Información
    get get_nombre(){
        return this.nombre;
    }


    // Métodos Setter: Modifican o Definen valores
    set set_nombre(nombre){
        this.nombre = nombre;
    }
}


// Cuando se trabaja con objetos, es recomendable usar const
const perro = new Perro("perro", 5, "marron", "Golden retriever");
const gato = new Animal("gato", 2, "negro")
const pajaro = new Animal("pajaro", 1, "gris");

// Usando Métodos
perro.ver_info();
perro.ladrar();

// Usando Setter y Getter
perro.set_nombre = "Beto";
console.log(perro.get_nombre);

Perro.correr(); // Usando método estático

gato.ver_info();
pajaro.ver_info();