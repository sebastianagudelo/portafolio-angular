import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IProducto} from '../interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    cargando=true;
    productos:IProducto[]=[];
      constructor(private http:HttpClient) {

       this.cargarProductos();
    }

   cargarProductos(){
      this.http.get('https://angular-portafolio-38a00.firebaseio.com/productos_idx.json')
      .subscribe( (resp:IProducto[]) => {


         setTimeout(() => {
          this.cargando=false;
          this.productos=resp;
         }, 1000);


          console.log(resp);
      });

   }

}
