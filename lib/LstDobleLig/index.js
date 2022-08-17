import { ListaDobleLigada } from "./lista.js";
import { ListaDobleLigadaCanvas } from "./listaCanvas.js";
import {bootbox_prompt, bootbox_alert} from '../utils/dialog.js';

var lista = null;
let listaCanvas=null;

export async function insertar_al_inicio() {
    let canvas = window.CANVAS3;
    if (lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || DATO.trim()=="")
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_al_final() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true){//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");
        }
        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || DATO.trim()=="")
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_antes_X() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO1 = await bootbox_prompt("Ingrese valor del nuevo nodo:");
        if(DATO1==null || DATO1.trim()=="")
            return;

        let DATO2 = await bootbox_prompt("Ingrese valor del nodo de referencia:");
        if(DATO2==null || DATO2.trim()=="")
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_antes_X(DATO1, DATO2);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function inserta_despues_X() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO1 = await bootbox_prompt("Ingrese el valor del nuevo nodo:");
        if(DATO1==null || DATO1.trim()=="")
            return;

        let DATO2 = await bootbox_prompt("Ingrese valor del nodo de referencia:");
        if(DATO2==null || DATO2.trim()=="")
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_despues_X(DATO1, DATO2);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_inicio() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        lista.elimina_inicio();
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_ultimo() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        lista.elimina_ultimo();
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_X() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || DATO.trim()=="")
            return;

        lista.elimina_X(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_antes_X() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || DATO.trim()=="")
            return;

        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_despues_X() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || DATO.trim()=="")
            return;

        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function borrar_LstDobleLig() {
    lista = null;
    listaCanvas = null;
    let canvas = window.CANVAS3;
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}
