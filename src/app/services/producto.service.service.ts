import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  cargando = true;
  productos: IProducto[] = [];
  productosFiltrado: IProducto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          'https://angular-portafolio-38a00.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: IProducto[]) => {
          setTimeout(() => {
            this.cargando = false;
            this.productos = resp;
            resolve();/*La promesa termino */
          }, 1000);
        });
    });
  }

  getProductoById(id: string) {
    return this.http.get(
      `https://angular-portafolio-38a00.firebaseio.com/productos/${id}.json`
    );
  }
  searchProducto(termino: string) {

         if(this.productos.length===0)
         {
           //Cargar Productos
           this.cargarProductos().then( ()=> {
             //Ejecutar despues de tener los productos
             //Aplicar Filtro


         this.filtrarProducto(termino);


           });
         }else{
           //Aplicar producto
           console.log('Filta 2');
           this.filtrarProducto(termino);

         }





  }

  private filtrarProducto(termino:string){


    this.productosFiltrado=[];

    termino=termino.toLocaleLowerCase();



    this.productos.forEach( prod  => {

      const tituloLower=prod.titulo.toLocaleLowerCase();
         if(prod.categoria.indexOf(termino ) >=0 ||   tituloLower.indexOf(termino) >=0) {

             console.log('Es la busqueda final ' + termino );
             this.productosFiltrado.push(prod);
         };
    });
    console.log(this.productosFiltrado);
      console.log(this.productosFiltrado);
  }
}
