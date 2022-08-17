class Nodo {
    info = 0;
    liga = null;
}

export class ListaSimpleLigada {
    INICIO = null;
    canvas = null;

    constructor(canvas) {
        this.canvas = canvas;
    }

    inserta_inicio(DATO) {
        let P = this.INICIO;
        let Q = new Nodo();
        Q.info = DATO;
        Q.liga = P;
        P = Q;

        this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_final(DATO) {
        let P = this.INICIO;

        let T = P;
        while (T.liga != null) {
            T = T.liga;
        }
        let Q = new Nodo();
        Q.info = DATO;
        Q.liga = null;
        T.liga = Q;

        this.INICIO = P;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_antes_X(DATO, X){
        let P = this.INICIO;
        let Q = P;
        let T = null;
        let BAND = 1;

        while(Q.info != X && BAND == 1){
            if(Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            else
                BAND = 0;
        }
        if (BAND == 1){
            let X1 = new Nodo();
            X1.info = DATO;
            if(P == Q){
                X1.liga = P;
                P = X1;
            }
            else {
                T.liga = X1;
                X1.liga = Q;
            }
        }
        else
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");

        this.INICIO=P;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    inserta_despues_X(DATO, x){
        let P = this.INICIO;
        let Q=P;
        let BAND=1;
        while(Q.info!=x && BAND==1){
            if(Q.liga!=null){
                Q=Q.liga;
            }
            else    BAND=0;
        }
        if (BAND==1){
            let T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");

        this.INICIO=P;
        this.canvas.dibujarNodos(this.INICIO, DATO);
    }

    elimina_inicio(){
        let Q = this.INICIO;
        this.INICIO = Q.liga;
        Q = null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_ultimo(){
        let P = this.INICIO;
        let Q = P;
        let T;

        if(P.liga == null)
            P = null;
        else{
            while(Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            T.liga = null;
        }
        Q = null;

        this.INICIO=P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_X(x){
        let P = this.INICIO;
        let Q = P;
        let T = null;
        let  BAND = 1;
        while(Q.info != x && BAND == 1){
            if(Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            else BAND=0;
        }
        if(BAND == 0)
            throw new Error("EL ELEMENTO CON INFORMACION " + x + " NO SE ENCUENTRA EN LA LISTA");
        else if(P == Q)
            P = Q.liga;
        else
            T.liga = Q.liga;
        Q = null;
        this.INICIO=P;
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_antes_X(x){
        let P = this.INICIO;
        let Q = null;
        let T = null;
        let R = null;
        let BAND;

        if(P.info == x)
            throw new Error("No existe un nodo anterior al nodo: " + x);
        else{
            Q = P;
            T = P;
            BAND = 1;
            while(Q.info != x && BAND == 1){
                if(Q.liga != null){
                    R = T;
                    T = Q;
                    Q = Q.liga;
                }
                else
                    BAND = 0;
            }
            if(BAND == 0)
                throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            else if(P.liga == Q)
                P = Q;
            else
                R.liga = Q;

            T = null;
            this.INICIO=P;
        }
        this.canvas.dibujarNodos(this.INICIO, null);
    }

    elimina_despues_X(x){
        let P = this.INICIO;
        let Q = P;
        let T = null;
        let BAND = 1;

        while(Q.info != x && BAND == 1){
            if(Q.liga != null)
                Q = Q.liga;
            else
                BAND = 0;
        }
        if (BAND == 1){
            if(Q.liga == null)
                throw new Error("No existe un nodo posterior al nodo: " + x);
            else {
                T = Q.liga;
                Q.liga = T.liga;
                T = null;
            }
        }
        else
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");

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
            tmp=tmp.liga;
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
        let tmp = this.INICIO;
        let cad = "";
        while (tmp != null) {
        cad += tmp.info + "::";
        tmp = tmp.liga;
        }
        console.log(cad);
    }
}
