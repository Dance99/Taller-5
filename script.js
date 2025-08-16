class GrafoDual { 
    constructor(dirigido = false){
        this.nodos = []; //* lista de nodos, cada uno tiene un id y un nombre
        this.listaAdyacente = {}; //* lista de adyacencia: objeto donde cada clave es un nodo y su valor es un array de nodos adyacentes
        this.matriz = []; //* Matriz de adyacencia: array de arrays donde cada fila y columna representa un nodo y el valor indica si hay una arista entre ellos
        this.dirigido = dirigido; //* Indica si el grafo es dirigido o no.