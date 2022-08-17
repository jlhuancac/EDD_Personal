export class ListaDobleLigadaCanvas{
    canvas = null;

    constructor(canvas) {
        this.canvas = canvas;
    }

    dibujarNodos(lista, valor) {
        let canvas = this.canvas;
        let elemCanvas = canvas.getContext("2d");
        let iterador = lista;

        // coordenadas de los elementos del canvas
        let ejeX = 0;
        let ejeY = 0;
        let ancho = 50;
        let alto = 20;
        let columna = 0; // indicador de columna(1, 2, 3, ...)
        let newfila = 8; // indicador de nueva fila(1, 2, 3, ...) //8
        let temp = newfila;

        // responsive
        if(window.innerWidth >= 720){
            canvas.width  = 700;
            canvas.height = 150;
        } else if(window.innerWidth < 720 && window.innerWidth >= 360){
            canvas.width  = 350;
            canvas.height = 200
            newfila = 4;
            temp = newfila;
        } else if(window.innerWidth < 360){
            canvas.width  = 260;
            canvas.height = 200;
            newfila = 3;
            temp = newfila;
        }
        //console.log(newfila);

        //limpiar el lienzo canva antes de dibujar
        elemCanvas.clearRect(0, 0, canvas.width, canvas.height);

        // si encuentra el nodo agregar efecto de dibujo
        let nodo=null;

        // dibujando elementos uno por uno
        while (iterador != null)
        {
            if(valor != undefined && iterador.info==valor){
                //Dibujar rectangulo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "blue";//blue
                elemCanvas.fillRect (ejeX, ejeY, ancho,alto);

                nodo = {};
                nodo.x = ejeX;
                nodo.y = ejeY;
                nodo.width = ancho;
                nodo.height = alto;
                nodo.info = iterador.info;
            }
            else{
                //Dibujar rectangulo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "red";
                elemCanvas.fillRect(ejeX, ejeY, ancho, alto);
            }
            //texto
            elemCanvas.fillStyle = "#ecd9d9"; //color de relleno
            elemCanvas.font = "bold 1rem serif";
            elemCanvas.textAlign = "center"; // centrar texto
            elemCanvas.fillText(iterador.info, ejeX + ancho*0.5, ejeY + alto*0.7); // centrar texto
            elemCanvas.closePath();

            //Dibujar flecha
            //cabeza de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho*1.2, ejeY + alto*0.2);
            elemCanvas.lineTo(ejeX + ancho, ejeY + alto*0.5);
            elemCanvas.lineTo(ejeX + ancho*1.2, ejeY + alto*0.8);
            elemCanvas.closePath();
            elemCanvas.fill();
            //linea de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho, ejeY + alto/2);
            elemCanvas.lineTo(ejeX + ancho*1.5, ejeY + alto/2);
            elemCanvas.closePath();
            elemCanvas.stroke();
            //cabeza de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho*1.5, ejeY + alto*0.2);
            elemCanvas.lineTo(ejeX + ancho*1.5 + alto*0.5, ejeY + alto*0.5);
            elemCanvas.lineTo(ejeX + ancho*1.5, ejeY + alto*0.8);
            elemCanvas.closePath();
            elemCanvas.fill();

            ejeX = (ancho * 1.7) * ++columna;
            iterador = iterador.ligaDer;

            // nueva fila
            temp--;
            if(temp == 0)
            {
                // linea a la nueva fila
                //abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto/2);
                elemCanvas.lineTo(ejeX, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //atras
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto*1.7);
                elemCanvas.lineTo(ancho/2, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //linea abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho/2, ejeY + alto*1.7);
                elemCanvas.lineTo(ancho/2, ejeY + alto*2.5);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //cabeza de la flecha
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho/2.5, ejeY + alto*2);
                elemCanvas.lineTo(ancho/2, ejeY + alto*2.5);
                elemCanvas.lineTo(ancho/1.6, ejeY + alto*2);
                elemCanvas.closePath();
                elemCanvas.fill();

                // nueva fila
                temp = newfila;
                ejeY += 50;
                ejeX = 0;
                columna = 0;
            }
            //console.log(temp+" "+ejeX+" "+ejeY);

            // dar color original luego del efecto de dibujo
            if(nodo!=null){

                setTimeout(function(){
                    //Dibujar rectangulo
                    elemCanvas.beginPath();
                    elemCanvas.fillStyle = "red";//ROJO
                    elemCanvas.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
                    //texto
                    elemCanvas.fillStyle = "#ecd9d9"; //color de relleno
                    elemCanvas.font = "bold 1rem serif";
                    elemCanvas.textAlign = "center"; // centrar texto
                    elemCanvas.fillText(nodo.info, nodo.x + nodo.width*0.5, nodo.y + nodo.height*0.7); // centrar texto
                    elemCanvas.closePath();
                },350);
            }
        }
    }
}