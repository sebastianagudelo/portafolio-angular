import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoservicio:InfopaginaService,private route:Router) { }

  ngOnInit() {
  }

  buscarProducto(termino:string)
  {
      if(termino.length<1)
      {
        return;
      }
    this.route.navigate(['/search',termino]);

  }

}
