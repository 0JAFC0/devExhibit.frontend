export class RedeSocial{
  private nome:string;
  private nomeIcone:string;
  private link:string;

  constructor(nome:string,nomeIcone:string,link:string){
    this.nome = nome;
    this.nomeIcone = nomeIcone;
    this.link = link;
  }

  getNome():string{
    return this.nome;
  }
  getNomeIcone():string{
    return this.nomeIcone;
  }
  getLink():string{
    return this.link;
  }
  setNome(nome:string){
    this.nome = nome;
  }
  setNomeIcone(nomeIcone:string){
    this.nomeIcone = nomeIcone;
  }
  setLink(link:string){
    this.link = link;
  }
}
