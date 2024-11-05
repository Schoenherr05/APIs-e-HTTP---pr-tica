class Carro {
    Marca
    Modelo
    Categoria
    Ano
    Quilometragem
    Valor
    constructor(marca, modelo, categoria, ano, quilometragem, valor){
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

let carro = new Carro("Chevrolet", "Cruze", 1.6, 2020, 3000, 80000)

function Get() {

    return fetch('https://apigenerator.dronahq.com/api/gz63izp5/CARROS')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }

  function GetById() {

    return fetch('https://apigenerator.dronahq.com/api/gz63izp5/CARROS/6')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }

  async function postData(url = 'https://apigenerator.dronahq.com/api/gz63izp5/CARROS', data = {}) {

    const response = await fetch(url, {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }

  async function putData(url = 'https://apigenerator.dronahq.com/api/gz63izp5/CARROS/1', data = {}) {

    const response = await fetch(url, {
  
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }

  async function deleteData(url = 'https://apigenerator.dronahq.com/api/gz63izp5/CARROS/1', data = {}) {

    const response = await fetch(url, {
  
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  
  putData('https://apigenerator.dronahq.com/api/gz63izp5/CARROS/1', carro /* OBJETO A SER USADO */)
  
    .then((data) => {
  
      console.log(data);  
  
  });

  GetById()