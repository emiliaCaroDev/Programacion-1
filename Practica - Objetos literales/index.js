/************************** Ejercicio 5 **************************************/

const ironMan={
    nombre: "Iron Man",
    equipo:  "Avengers",
    poderes:  ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num){
        this.energia -= 10;
        return "Poder Elegido de "+this.nombre+" : "+ this.poderes[num]+ ""+". Energía restante: "+this.energia;
    }
}

console.log(ironMan.getPoder(0));
console.log(ironMan.getPoder(1));
console.log(ironMan.getPoder(2));

const hulk ={
    nombre: "Hulk",
    equipo: "Avengers",
    poderes:  ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num){
        this.energia -= 10;
        return "Poder Elegido de "+this.nombre+" : "+ this.poderes[num]+ ""+". Energía restante: "+this.energia;
    }
}

console.log(hulk.getPoder(0));
console.log(hulk.getPoder(1));
console.log(hulk.getPoder(2));


