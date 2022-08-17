import { borrar_LstSimpLig } from './LstSimpLig/index.js';
import { borrar_LstCirSimpLig } from './LstCirSimpLig/index.js';
import { borrar_LstDobleLig } from './LstDobleLig/index.js';

export function LstSimpLig(){
    document.getElementById("dibujar").style.display="block";
    document.getElementById("principal").style.display="none";

    document.getElementById("LstSimpLig").style.display="block";
    document.getElementById("LstCirSimpLig").style.display="none";
    document.getElementById("LstDobLig").style.display="none";
}

export function LstCirSimpLig(){
    document.getElementById("dibujar").style.display="block";
    document.getElementById("principal").style.display="none";

    document.getElementById("LstSimpLig").style.display="none";
    document.getElementById("LstCirSimpLig").style.display="block";
    document.getElementById("LstDobLig").style.display="none";
}

export function LstDobLig(){
    document.getElementById("dibujar").style.display="block";
    document.getElementById("principal").style.display="none";

    document.getElementById("LstSimpLig").style.display="none";
    document.getElementById("LstCirSimpLig").style.display="none";
    document.getElementById("LstDobLig").style.display="block";
}

export function MenuPrincipal(){
    document.getElementById("dibujar").style.display="none";
    document.getElementById("principal").style.display="block";

    document.getElementById("LstSimpLig").style.display="none";
    document.getElementById("LstCirSimpLig").style.display="none";
    document.getElementById("LstDobLig").style.display="none";

    borrar_LstSimpLig();
    borrar_LstCirSimpLig();
    borrar_LstDobleLig();
    console.clear();
}

window.onload=function(){
    document.getElementById("LstSimpLig").style.display="none";
    document.getElementById("LstCirSimpLig").style.display="none";
    document.getElementById("LstDobLig").style.display="none";
}
