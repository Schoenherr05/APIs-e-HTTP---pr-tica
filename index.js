class Carro {
    Marca
    Modelo
    Categoria
    Ano
    Quilometragem
    Valor
    constructor(Marca,Modelo,Categoria,Ano,Quilometragem,Valor){
        Marca = this.Marca
        Modelo = this.Modelo
        Categoria = this.Categoria
        Ano = this.Ano
        Quilometragem = this.Quilometragem
        Valor = this.Valor
    }
}

function Get() {

    return fetch('COLOQUE A URL AQUI!!')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }