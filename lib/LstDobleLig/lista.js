class Nodo {
    info = 0;
    ligaDer = null;
    ligaIzq = null;
}

export class ListaDobleLigada {
    INICIO = null;
    FIN = null;
    canvas = null;

    constructor(canvas) {
        this.canvas = canvas;
    }

    inserta_inicio(DATO) {
        if(this.INICIO == null){ //Algoritmo Jorge
            let Q = new Nodo();
            Q.info = DATO;
            this.INICIO = Q;
            this.FIN = Q;
        }
        else{ //Algoritmo cairo
            let P = this.INICIO;
            let Q = new Nodo();
            Q.info = DATO;
            Q.ligaDer = P;
            P.ligaIzq = Q;
            Q.ligaIzq = null; // Opcional no es necesario
            P = Q;
            this.INICIO = P;
           // this.FIN = Q; el fin no cambia
        }
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_final(DATO) {
        let F = this.FIN;
        let Q = new Nodo();
        Q.info = DATO;
        F.ligaDer = Q;
        Q.ligaIzq = F;
        Q.ligaDer = null; // Opcional no necesario
        F = Q;

        this.FIN = F;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_antes_X(DATO, X){
        if(this.INICIO == null){
            throw new Error("Error, no implementado");
        }
        let P = this.INICIO;
        let Q = P;

        while(Q.ligaDer != null && Q.info != X){
            Q = Q.ligaDer;
        }

        if(Q.info = X){
            let T = new Nodo();
            T.info = DATO;
            T.ligaDer = Q;
            let R = Q.ligaIzq;
            Q.ligaIzq = T;

            if(P == Q){
                P = T;
                T.ligaIzq = null;
            }
            else{
                R.ligaDer = T;
                T.ligaIzq = R;
            }
        }
        else{
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");
        }
        this.INICIO=P;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_despues_X(DATO, x){
        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;
        let BAND = 1;

        while ( Q.info != x && BAND == 1 ){
            if(Q.ligaDer != null){
                Q = Q.ligaDer;
            }
            else{
                BAND = 0;
            }
        }
        if(BAND == 1){
            let T = new Nodo();
            T.info = DATO;
            T.ligaDer = Q.ligaDer;
            Q.ligaDer = T;
            T.ligaIzq = Q;
            if(Q == F){ // ULTIMO NODO
                F = T;
            }
            else{
                T.ligaDer.ligaIzq = T;
            }
        }
        else{
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");
        }
        this.INICIO = P;
        this.FIN = F;   //this.FIN = P;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    elimina_inicio(){
        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;

        if(Q.ligaDer != null){
            P = Q.ligaDer;
            P.ligaIzq = null;
        }
        else{
            P = null;
            F = null;
        }
        Q = null;

        this.INICIO = P;
        this.FIN = F;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_ultimo(){
        let P = this.INICIO;
        let F = this.FIN;
        let Q = F;

        if(Q.ligaIzq != null){
            F = F.ligaIzq; F.ligaDer = null;
        }
        else{
            F = null; P = null;
        }
        Q = null;

        this.INICIO = P;
        this.FIN = F;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_X(x){
        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;
        let T;
        let R;

        while(Q.ligaDer != null && Q.info != x){
            Q = Q.ligaDer;
        }

        if(Q.info == x){
            if(Q == P && Q == F){ // La lista tiene un solo elemento
                P = null;
                F = null;
            }
            else{
                if(Q == P){ // Es el primero
                    P = Q.ligaDer;
                    P.ligaIzq = null;
                }
                else{
                    if(Q == F){ // Es el ultimo
                        F = Q.ligaIzq;
                        F.ligaDer = null;
                    }
                    else{ // Es un nodo intermedio
                        T = Q.ligaIzq;
                        R = Q.ligaDer;
                        T.ligaDer = R;
                        R.ligaIzq = T;
                    }
                }
            }
            Q = null;
        }
        else{
            throw new Error("EL ELEMENTO CON INFORMACION " + x + " NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
        this.FIN = F;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_antes_X(x){
        let P = this.INICIO;
        let Q = P;
        let T;
        let R;
        while(Q.ligaDer != null && Q.info != x){ // Recorre hacia la Derecha
            Q = Q.ligaDer;
        }
        if(Q.info == x){
            if(P == Q){
                throw new Error("No existe un nodo anterior al nodo: " + x);
            }
            else{
                T = Q.ligaIzq;
                if(P == T){ // Primer nodo de la lista
                    P = Q;
                    P.ligaIzq = null;
                }
                else{
                    R = T.ligaIzq;
                    Q.ligaIzq = R;
                    R.ligaDer = Q;
                }
                T = null;
            }
        }
        else{
            throw new Error("EL ELEMENTO CON INFORMACION " + x + " NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_despues_X(x){
        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;
        let T = null;
        let R = null;

        while(Q.ligaDer != null && Q.info != x){
            Q = Q.ligaDer;
        }

        if(Q.info == x){
            if(F == Q){
                throw new Error("No existe un nodo posterior al nodo: " + x);
            }
            else{
                T = Q.ligaDer;

                if(F == T){// X esta en el penultimo nodo de la lista
                    F = Q;
                    F.ligaDer = null;
                    this.FIN = F;
                }
                else{
                    R = T.ligaDer;
                    Q.ligaDer = R;
                    R.ligaIzq = Q;
                }
                T = null;
            }
        }
        else{
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");
        }
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    buscar(DATO){
        var encontrado=false;
        var	tmp=this.INICIO;
        while(tmp!=null){
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.ligaDer;
        }
        return encontrado;
    }

    isVacio(){
        if(this.INICIO==null)
            return true;
        else
            return false;
    }

    dibujarNodosLog() {
        // valores hacia la derecha
        let P = this.INICIO;
        let cad = "Derecha:";
        while(P != null){
            cad += P.info + "=>";
            P = P.ligaDer;
        }
        cad += "null";
        console.log(cad);

        // valores hacia la izquierda
        let P2 = this.FIN;
        let cad2 = "Izquierda:";
        cad2 += "null";
        while(P2 != null){
            cad2 += "<=" + P2.info ;
            P2 = P2.ligaIzq;
        }
        console.log(cad2);
    }
}
