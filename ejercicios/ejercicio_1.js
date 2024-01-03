let dinero_cofla = prompt("¿Cuánto dinero tenes Cofla?");
let dinero_juan = prompt("¿Cuánto dinero tenes Juan?");
let dinero_gaston = prompt("¿Cuánto dinero tenes Gastón?");

dinero_cofla = parseInt(dinero_cofla);

if(dinero_cofla >= 0.6 && dinero_cofla < 1){
    alert("Cofla, comprate el Helado de Agua");
    alert("Y te sobran: " + (dinero_cofla - 0.6));

}else if(dinero_cofla >=1 && dinero_cofla < 1.6){
    alert("Cofla, comprate el Helado de Crema");
    alert("Y te sobran: " + (dinero_cofla - 1));

}else if(dinero_cofla >= 1.6 && dinero_cofla < 1.7){
    alert("Cofla, comprate el Bombon Helado marca HeladiX");
    alert("Y te sobran: " + (dinero_cofla - 1.6));

}else if(dinero_cofla >= 1.7 && dinero_cofla < 1.8){
    alert("Cofla, comprate el Bombon Helado marca HeladiY");
    alert("Y te sobran: " + (dinero_cofla - 1.7));

}else if(dinero_cofla >= 1.8 && dinero_cofla < 2.9){
    alert("Cofla, comprate el Bombon Helado marca HeladiZ");
    alert("Y te sobran: " + (dinero_cofla - 1.8));

}else if(dinero_cofla >= 2.9){
    alert("Cofla, comprate el Potecito de Helado con confites o el Pote de 1/4kg");
    alert("Y te sobran: " + (dinero_cofla - 2.9));

}else{
    alert("No te alcanza para ningún helado.")
}



if(dinero_juan >= 0.6 && dinero_juan < 1){
    alert("Juan, comprate el Helado de Agua");

}else if(dinero_juan >=1 && dinero_juan < 1.6){
    alert("Juan, comprate el Helado de Crema");

}else if(dinero_juan >= 1.6 && dinero_juan < 1.7){
    alert("Juan, comprate el Bombon Helado marca HeladiX");

}else if(dinero_juan >= 1.7 && dinero_juan < 1.8){
    alert("Juan, comprate el Bombon Helado marca HeladiY");

}else if(dinero_juan >= 1.8 && dinero_juan < 2.9){
    alert("Juan, comprate el Bombon Helado marca HeladiZ");

}else if(dinero_juan >= 2.9){
    alert("Juan, comprate el Potecito de Helado con confites o el Pote de 1/4kg");

}else{
    alert("Juan, No te alcanza para ningún helado.");
}



if(dinero_gaston >= 0.6 && dinero_gaston < 1){
    alert("Gastón, comprate el Helado de Agua");

}else if(dinero_gaston >=1 && dinero_gaston < 1.6){
    alert("Gastón, comprate el Helado de Crema");

}else if(dinero_gaston >= 1.6 && dinero_gaston < 1.7){
    alert("Gastón, comprate el Bombon Helado marca HeladiX");

}else if(dinero_gaston >= 1.7 && dinero_gaston < 1.8){
    alert("Gastón, comprate el Bombon Helado marca HeladiY");

}else if(dinero_gaston >= 1.8 && dinero_gaston < 2.9){
    alert("Gastón, comprate el Bombon Helado marca HeladiZ");

}else if(dinero_gaston >= 2.9){
    alert("Gastón, comprate el Potecito de Helado con confites o el Pote de 1/4kg");

}else{
    alert("Gastón, No te alcanza para ningún helado.");
}