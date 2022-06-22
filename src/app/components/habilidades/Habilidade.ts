export class Habilidade {
  private _nome: string;
  private _porcentagem: string;

  constructor(nome:string,porcentagem:string){
    this._nome = nome;
    this._porcentagem = porcentagem;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get porcentagem(): string {
    return this._porcentagem;
  }
  public set porcentagem(value: string) {
    this._porcentagem = value;
  }
}
