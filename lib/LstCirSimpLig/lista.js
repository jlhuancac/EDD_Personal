class Nodo {
    info = 0;
    liga = null;
}

export class ListaCircularSimpleLigada {
    INICIO = null;
    canvas = null;

    constructor(canvas) {
        this.canvas = canvas;
    }

    inserta_inicio(DATO) {
        if(this.INICIO == null){ //vacio
            let P = this.INICIO;
            let Q = new Nodo();
            Q.info = DATO;
            Q.liga = Q;
            P = Q;

            this.INICIO = P;
        }
        else{ //no vacio
            let P = this.INICIO;
            let Q = new Nodo();
            Q.info = DATO;
            let F = P;//buscar el ultimo

            while(F.liga != P){
                F = F.liga;
            }

            F.liga = Q;
            Q.liga = P;
            P = Q;

            this.INICIO = P;
        }
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_final(DATO) {
        if(this.INICIO == null){
            let P = this.INICIO;
            let Q = new Nodo();
            Q.info = DATO;
            Q.liga = Q;
            P = Q;

            this.INICIO = P;
        }
        else{
            let P = this.INICIO;
            let T = P;
            while(T.liga != P){ //ultimo nodo
                T = T.liga;
            }
            let Q = new Nodo();
            Q.info = DATO;
            Q.liga = null; //no es necesario
            T.liga = Q;
            Q.liga = P;

            this.INICIO = P;
        }
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_antes_X(DATO, X){
        let P = this.INICIO;
        let Q = P;
        let BAND = 1;
        let T;

        while ( Q.info != X && BAND == 1){
            if(Q.liga != P){ //<-------OJO
                T = Q;
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }

        if(BAND == 1){
            let X1 = new Nodo();
            X1.info = DATO;
            if(P == Q){
                ///
                let U = P;
                while(U.liga != P){ //llegar al ultimo;
                    U = U.liga;
                }
                ///
                X1.liga = P;
                P = X1;
                ///
                U.liga = P;
                ///
            }
            else{
                T.liga = X1;
                X1.liga = Q;
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
        let Q = P;
        let BAND = 1;

        while (Q.info != x && BAND == 1){
            if(Q.liga != P){ //<-------OJO
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }

        if(BAND == 1){
            let T = new Nodo();
            T.info = DATO;
            T.liga = Q.liga;
            Q.liga = T;
        }
        else{
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");
        }
        this.INICIO=P;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    elimina_inicio(){
        let P = this.INICIO;
        let Q = P;
        P = Q.liga;
        let U = Q;
        if(P.liga == P){ // eliminar si queda 1
            P = null;
        }
        else{
            while(U.liga != Q){ //llegar al ultimo
                U = U.liga;
            }

            U.liga = P;
            //this.INICIO = P;
            Q = null;
        }
        this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_ultimo(){
        let P = this.INICIO;
        let Q = P;
        let T;
        if(P.liga == P)
            P = null;
        else{
            while(Q.liga != P){
                T = Q;
                Q = Q.liga;
            }
            T.liga = P;
        }
        Q = null;

        this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_X(x){
        let P = this.INICIO;
        let Q = P;
        let T;
        let BAND = 1;

        while(Q.info != x && BAND == 1){
            if(Q.liga != P){
                T = Q;
                Q = Q.liga;
            }
            else
                BAND = 0;
        }

        if(BAND == 0)
            throw new Error("EL ELEMENTO CON INFORMACION " + x + " NO SE ENCUENTRA EN LA LISTA");
        else if(P == Q){ // igual a inicio
            P = Q.liga;
            let U = Q;
            while(U.liga != Q){ //llegar al ultimo
                U = U.liga;
            }
            U.liga = P;
            this.INICIO = P;
        }
        else{
            T.liga = Q.liga;
        }
        Q = null;
        //this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_antes_X(x){
        let P = this.INICIO;
        let Q;
        let T;
        let R;
        let BAND;
        if(P.info == x){
            throw new Error("No existe un nodo anterior al nodo: " + x);
        }
        else{
            Q = P;
            T = P;
            BAND = 1;
            while(Q.info != x && BAND == 1){
                if(Q.liga != P){
                    R = T;
                    T = Q;
                    Q = Q.liga;
                }
                else
                    BAND = 0;
            }
            if(BAND == 0)
                throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            else if(P.liga == Q){ // igual a inicio
                // reemplazar inicio
                let QQ = P; // INTERCAMBIO
                // reemplazar final
                P = Q; // INTERCAMBIO

                P = QQ.liga;
                let U = QQ;
                while(U.liga != QQ){ //llegar al ultimo
                    U = U.liga;
                }
                U.liga = P;
                QQ = null;
                this.INICIO = P;
            }
            else{
                R.liga = Q;
            }
            T = null;
        }
        //this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_despues_X(x){
        let P = this.INICIO;
        let Q = P;
        let T;
        let BAND = 1;
        while(Q.info != x && BAND == 1){
            if(Q.liga != P){
                Q = Q.liga;
            }
            else BAND = 0;
        }
        if (BAND == 1){
            if(Q.liga == P)
                throw new Error("No existe un nodo posterior al nodo: " + x);
            else {
                T = Q.liga;
                Q.liga = T.liga;
                T = null;
            }
        }
        else
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");

        //this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    buscar(DATO){
        var encontrado = false;
        var	tmp = this.INICIO;
        if(tmp != null){
            while(tmp.info != DATO && tmp.liga != this.INICIO){
                tmp = tmp.liga;
            }
            if(tmp.info == DATO) encontrado =true;
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
        let P = this.INICIO;
        let cad = "";
        if(P != null){
            let F = P;
            if(F.liga == P){//1
                cad += P.info + "::";
                P = P.liga.info;
            }
            else{//2 o mas
                while(F.liga != P){
                    cad += F.info + "::";
                    F = F.liga;
                }
                cad += F.info + "::";
                F = F.liga.info;
            }
        }
        console.log(cad);
    }
}
