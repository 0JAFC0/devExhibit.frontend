import { Projeto } from './Projeto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  public projetos:Array<Projeto>;

  constructor() {
    this.projetos = new Array<Projeto>();
  }

  ngOnInit(): void {
    this.adicionarProjeto(new Projeto("Jogo Da Velha Em Python","Projetinho feito para ser apresentado na disciplina de SO","backend","../../../assets/images/MOVING-jumbo-809205717","https://github.com/0JAFC0/jogoDaVelhaEmPython"))
    this.redimensionaContentBox();
  }

  public adicionarProjeto(projeto:Projeto):void{
    this.projetos.push(projeto);
  }

  redimensionaContentBox(){
    if(document.getElementById("content-box")!.children.length>6){
      document.getElementById("content-box")!.style.overflowY = "scroll";
      document.getElementById("content-box")!.style.height = 800+"px"
    }
  }
}
