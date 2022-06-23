import { Component, OnInit } from '@angular/core';

import { Habilidade } from './Habilidade';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidadesTecnicas:Array<Habilidade>;
  public habilidadesSofts:Array<Habilidade>;

  constructor() {
    this.habilidadesTecnicas = new Array<Habilidade>();
    this.habilidadesSofts = new Array<Habilidade>();
  }

  ngOnInit(): void {
    // adiciona as habilidades tecnicas
    this.adicionaHabilidadesTecnicas("Java","100");
    // adiciona as softSkills
    this.adicionaHabilidadessSofts("Comunicação","80");
    this.adicionaHabilidadessSofts("criatividade","80");
  }

  public adicionaHabilidadesTecnicas(nome:string,porcentagem:string):void{
    this.habilidadesTecnicas.push(new Habilidade(nome, porcentagem));
  }

  public adicionaHabilidadessSofts(nome:string,porcentagem:string):void{
    this.habilidadesSofts.push(new Habilidade(nome, porcentagem));
  }
}
