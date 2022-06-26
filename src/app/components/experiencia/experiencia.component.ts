import { Component, OnInit } from '@angular/core';
import { Experiencia } from './Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:Array<Experiencia>;

  constructor() {
    this.experiencias = new Array<Experiencia>();
    this.experiencias.push(new Experiencia("Empresa","Cargo","Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubiquemaluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimatessapientem sed, pri zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.","2021-2022"));
  }

  ngOnInit(): void {
  }

}
