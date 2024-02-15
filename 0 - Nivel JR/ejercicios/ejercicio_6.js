class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            console.log("App Instalada Correctamente");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            console.log("App Desinstalada Correctamente");
        }
    }
    
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            console.log("App Iniciada");
        }else{
            console.log("La app no está instalada.")
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            console.log("App Cerrada");
        }else{
            console.log("La app no está instalada.")
        }
    }

    get_app_info(){
        return `
        Descargas: ${this.descargas}
        Puntuación: ${this.puntuacion}
        Peso: ${this.peso}`;
    }

}


const app = new App("16.000", "4 estrellas", "900mb");
const app2 = new App("10.123", "4.2 estrellas", "300mb");
const app3 = new App("1.000.000", "5 estrellas", "2gb");
const app4 = new App("12.456", "3 estrellas", "1gb");
const app5 = new App("16.000", "3.6 estrellas", "900mb");
const app6 = new App("5.450", "2 estrellas", "200mb");
const app7 = new App("7.000", "2.9 estrellas", "100mb");
app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();

const apps = [app, app2, app3, app4, app5, app6, app7];

for(a of apps){
    console.log(a.get_app_info());
}