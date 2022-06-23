import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  private _idade: number = 0;
  private _trabalho: string = "";
  private _ondeMora: string = "";
  private _email: string = "";
  private _mesagemTitulo: string = "";
  private _mensagem: string = "";


  constructor() {}

  ngOnInit(): void {
    this.idade = 23;
    this.trabalho = "Em busca";
    this.ondeMora = "Sumé, PB, Brasil";
    this._email = "click Here";
    this._mesagemTitulo = "Olá! me chamo João Arthur";
    this._mensagem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem. Est lorem ipsum dolor sit amet consectetur adipiscing. Ultrices vitae auctor eu augue ut lectus. Nunc eget lorem dolor sed viverra ipsum nunc.";
  }

  public get idade(): number {
    return this._idade;
  }
  public set idade(value: number) {
    this._idade = value;
  }
  public get trabalho(): string {
    return this._trabalho;
  }
  public set trabalho(value: string) {
    this._trabalho = value;
  }
  public get ondeMora(): string {
    return this._ondeMora;
  }
  public set ondeMora(value: string) {
    this._ondeMora = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get mesagemTitulo(): string {
    return this._mesagemTitulo;
  }
  public set mesagemTitulo(value: string) {
    this._mesagemTitulo = value;
  }
  public get mensagem(): string {
    return this._mensagem;
  }
  public set mensagem(value: string) {
    this._mensagem = value;
  }
}
