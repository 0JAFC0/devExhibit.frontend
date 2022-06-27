export class Projeto {

  private _name: string;
  private _description: string;
  private _category: string;
  private _image: string;
  private _urlGithub: string;

  constructor(nome:string,descricao:string,categoria:string,image:string,urlGithub:string){
    this._name = nome;
    this._description = descricao;
    this._category = categoria;
    this._image = image;
    this._urlGithub = urlGithub;
  }

  public get descricao(): string {
    return this._description;
  }
  public set descricao(value: string) {
    this._description = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }
  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }
  public get urlGithub(): string {
    return this._urlGithub;
  }
  public set urlGithub(value: string) {
    this._urlGithub = value;
  }
}
