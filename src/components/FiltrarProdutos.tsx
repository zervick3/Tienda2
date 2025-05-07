export interface Producto {
    id: number;
    name: string;
    categoria: string;
    image: string;
    descripcion: string;
    codigo: string;
    ficha?: string;
  }
  
  export function filtrarProducto(productos: Producto[], texto: string): Producto[] {
    return productos.filter((producto) =>
      producto.name.toLowerCase().includes(texto.toLowerCase())
    );
  }