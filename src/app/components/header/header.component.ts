import { RedeSocial } from './RedeSocial';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  private nome: string;
  private cargo: string;
  private imageAvatar: string;
  private redesSociais:Array<RedeSocial>;

  constructor() {
    this.nome = "João Arthur";
    this.cargo = "Desenvolvedor Fullstack";
    this.imageAvatar = "";
    this.redesSociais = new Array<RedeSocial>();
  }

  ngOnInit(): void {
    this.adicionarBotao(new RedeSocial("instagram","fa-instagram","https://www.instagram.com/0jafc0/"));
    this.adicionarBotao(new RedeSocial("linkedin","fa-linkedin-in","https://www.linkedin.com/in/ja-fc/"));
    this.adicionarBotao(new RedeSocial("github","fa-github","https://github.com/0JAFC0"));
    this.adicionarBotao(new RedeSocial("#","#","#"));
    this.adicionarBotao(new RedeSocial("#","#","#"));
  }

  public openLink(link:string){
    window.open(link,'_blank')
  }

  public adicionarBotao(redeSocial:RedeSocial){
    this.redesSociais.push(redeSocial);
  }

  public getNome():string{
    return this.nome;
  }

  public getCargo():string{
    return this.cargo;
  }

  public getImageAvatar():string{
    return this.imageAvatar;
  }

  public getRedesSociais():Array<RedeSocial>{
    return this.redesSociais;
  }
}
