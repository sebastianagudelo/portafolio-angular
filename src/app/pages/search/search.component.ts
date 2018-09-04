import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,public productoService:ProductoService) { }

  ngOnInit() {

    this.route.params
    .subscribe( (parametro) => {
    console.log(parametro['termino']);
    this.productoService.searchProducto(parametro['termino']);
    });
  }

}
