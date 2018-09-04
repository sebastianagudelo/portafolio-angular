import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


   anio:number;
  constructor(public _infoservicio: InfopaginaService) {
    this.anio=new Date().getFullYear();
  }

  ngOnInit() {
  }

}
