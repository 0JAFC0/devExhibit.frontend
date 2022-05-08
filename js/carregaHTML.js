// função para carregar arquivos html, funciona como se fosse componentes
function includeHTML(arquivo,id) {
  let file = document.getElementById(id); 
  if(file){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4){
        if(this.status == 200){
          file.innerHTML = this.responseText;
        }else if(this.status == 404){
          file.innerHTML = "Arquivo não encontrado.";
        }  
      }
      
    };
    xhttp.open("GET",arquivo,true);
    xhttp.send();
    return;
  }else{
    console.log("não encontrou o arquivo");
  }
}