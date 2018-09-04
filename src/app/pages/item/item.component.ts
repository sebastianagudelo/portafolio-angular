import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service.service';
import {IProductoDescripcion} from '../../interfaces/IProductoDescripcion';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  producto:IProductoDescripcion;
  id:string;
  constructor(private route:ActivatedRoute,public productoService:ProductoService) { }

  ngOnInit() {

       this.route.params
       .subscribe( parametros =>{

            this.productoService.getProductoById(parametros['id'])
              .subscribe(  (producto:IProductoDescripcion)=>{
                this.id=parametros['id'];
                this.producto=producto;

              } )


       } )
  }

}
