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

  
