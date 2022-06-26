export class Experiencia {
  private _nomeEmpresa: string;
  private _cargo: string;
  private _descricao: string;
  private _duracao: string;

  constructor(nomeEmpresa:string,cargo:string,descricao:string,duracao:string){
    this._nomeEmpresa = nomeEmpresa;
    this._cargo = cargo;
    this._descricao = descricao;
    this._duracao = duracao;
  }

  public get duracao(): string {
    return this._duracao;
  }
  public set duracao(value: string) {
    this._duracao = value;
  }
  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(value: string) {
    this._descricao = value;
  }
  public get cargo(): string {
    return this._cargo;
  }
  public set cargo(value: string) {
    this._cargo = value;
  }

  public get nomeEmpresa(): string {
    return this._nomeEmpresa;
  }
  public set nomeEmpresa(value: string) {
    this._nomeEmpresa = value;
  }
}
