class GrafoDual { 
    constructor(dirigido = false){
        this.nodos = [];   //* lista de nodos, cada uno tiene un id y un nombre
        this.listaAdyacente = {};  //* lista de adyacencia: objeto donde cada clave es un nodo y su valor es un array de nodos adyacentes
        this.matriz = [];    //* Matriz de adyacencia: array de arrays donde cada fila y columna representa un nodo y el valor indica si hay una arista entre ellos
        this.dirigido = dirigido;   //* Indica si el grafo es dirigido o no.
 }
    agregarNodo(nodo){
        if(!this.nodos.includes(nodo)){    //* Verifica si el nodo ya existe
            this.nodos.push(nodo);     //* Agrega el nodo a la lista de nodos
            this.listaAdyacente[nodo] = [];   //* Crea una entrada en la lista de adyacencia para el nuevo nodo
            this.matriz.forEach(fila => fila.push(0));   //* Añade una nueva columna con ceros a cada fila existente
            this.matriz.push(new Array(this.nodos.length).fill(0));   //* Añade una nueva fila con ceros a la matriz de adyacencia
        }
    }   


    //* Agrega una arista entre dos nodos
  agregarArista(nodo1,nodo2){
        //*Verifica y busca los índices de los nodos en la lista
        const i = this.nodos.indexOf(nodo1);
        const j = this.nodos.indexOf(nodo2);   

       //*Verifica que ambos nodos existan en la lista
        if(i !== -1 && j !== -1){
           //*Verifica y actualiza la lsita 
            this.listaAdyacente[nodo1].push(nodo2);
            //* Actualiza la matriz de adyacencia
            this.matriz[i][j] = 1;
            
            if (!this.dirigido){
            this.listaAdyacente[nodo2].push(nodo1);  //* Añade la arista en sentido contrario si el grafo no es dirigido
            this.matriz[j][i] = 1;  //* Actualiza la matriz de adyacencia en sentido contrario
            }          
          }
        }

  
         mostrarLista(){   
        console.log(this.dirigido ? "\n LISTA DE ADYACENCIA DIRIGIDA: ": "\n LISTA DE ADYACENCIA NO DIRIGIDA: ")

        //* Recorre cada nodo en la lista de adyacencia y lo imprime junto con sus nodos adyacentes
        for (let nodo in this.listaAdyacente){
           console.log(nodo, " -> ", this.listaAdyacente[nodo].join(", ")); 
          }
        }
        //* Muestra la matriz de adyacencia en la consola
        mostrarMatriz(){
            console.log(this.dirigido ? "\n MATRIZ DE ADYACENCIA DIRIGIDA" : "\n MATRIZ DE ADYACENCIA NO DIRIGIDA");

            //* Imprime los encabezados de la matriz (nodos)
            console.log(" ", this.nodos.join(" "));

            // Recorre cada fila de la matriz y la imprime con su nodo correspondiente
            for (let i = 0; i<this.matriz.length; i++){  //* Recorre cada fila de la matriz
                console.log(this.nodos[i]+" "+this.matriz[i].join(" ")); 
            }
        }
    }

    //* Use
const grafoDirigido = new GrafoDual(true);  //* Crea una instancia del grafo dirigido
["0", "1", "2", "3", "4", "5"].forEach(n => grafoDirigido.agregarNodo(n));  //* Agrega nodos al grafo

//* Agrega aristas entre los nodos
grafoDirigido.agregarArista("0","1");
grafoDirigido.agregarArista("3","1");
grafoDirigido.agregarArista("3","2");
grafoDirigido.agregarArista("3","4");
grafoDirigido.agregarArista("4","2");
grafoDirigido.agregarArista("5","0");

grafoDirigido.mostrarLista();
grafoDirigido.mostrarMatriz();

//* Use
//* Crea una instancia del grafo no dirigido
const grafoNoDirigido = new GrafoDual();
["0", "1", "2", "3", "4", "5", "6"].forEach(n => grafoNoDirigido.agregarNodo(n));

grafoNoDirigido.agregarArista("0","1");
grafoNoDirigido.agregarArista("0","2"); 
grafoNoDirigido.agregarArista("1","2");
grafoNoDirigido.agregarArista("1","3");
grafoNoDirigido.agregarArista("2","4");
grafoNoDirigido.agregarArista("3","4");
grafoNoDirigido.agregarArista("4","5");
grafoNoDirigido.agregarArista("5","6");

grafoNoDirigido.mostrarLista();
grafoNoDirigido.mostrarMatriz();