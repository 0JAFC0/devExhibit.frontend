import { HistoricoEducacional } from './HistoricoEducacional';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-educacional',
  templateUrl: './historico-educacional.component.html',
  styleUrls: ['./historico-educacional.component.css']
})
export class HistoricoEducacionalComponent implements OnInit {

  public historicos:Array<HistoricoEducacional>;

  constructor() {
    this.historicos = new Array<HistoricoEducacional>();
  }

  ngOnInit(): void {
    //this.historicos.push(new HistoricoEducacional("Analise e Desenvolvimento de Sistemas","INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA - MONTEIRO","Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubiquemaluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimatessapientem sed, pri zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.","2019-2022"));
  }

}
