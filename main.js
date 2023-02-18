// Nullish coalescing Operator => ??
// Usado como se fosse um 'ou' ou '||' sendo que o '||' não interpreta o zero com um valor

const idade1 = null
document.body.innerHTML =
  "<h2>Sua idade é: " + (idade1 ?? "Não informado") + "</h2>"

//Objetos => Estrutura de dados onde se consegue armazenar conjutos de chaves e valor
const user = {
  name: "Edson",
  idade: 27,
  address: {
    street: "Rua teste",
    number: 176,
  },
}
document.body.innerHTML += "<h2>" + ("name" in user) + "</h2>" //verifica se dentro de 'user' existe 'name' e retorna 'true' ou 'false'

document.body.innerHTML += "<h2>" + Object.keys(user) + "</h2>" //retorna um vetor com todas as chaves do objeto

document.body.innerHTML +=
  "<h2>" + JSON.stringify(Object.values(user)) + "</h2>" //retorna um vetor com todas os dados dos objetos

document.body.innerHTML +=
  "<h2>" + JSON.stringify(Object.entries(user)) + "</h2><hr>" //retorna um vetor com vários vetores dentro, cada um dos subvetores tem duas informações: a chave do objeto e o valor

/////////////////////////////////////////////////////////////////////
//Desestruturação - remover parte do objeto para uma varável à parte.
const address1 = user.address
document.body.innerHTML +=
  "<h2>Desestruturação <br>" + JSON.stringify(address1) + "</h2>"

const { address, idade: age } = user // faz o mesmo efeito da linha 29, isto é válido quando eu uso o mesmo nome de variável que a chave do objeto. Aqui tb foi renomeada a variável 'idade' para 'age'
document.body.innerHTML += "<h2>" + JSON.stringify({ address, age }) + "</h2>"

const { nickname = "Gomes" } = user
document.body.innerHTML += "<h2>" + JSON.stringify({ nickname }) + "</h2>" //nesse caso 'nickname' não existe no objeto e foi setado com um valor default. Se 'nickname' existir no objeto será considerado o valor que estiver nele.

function mostraIdade(user) {
  return user.idade
}
document.body.innerHTML += "<h2>" + mostraIdade(user) + "</h2>"
//nesse caso foi passado o valor dentro de uma função usando o objeto como parâmetro

function mostraIdade2({ idade }) {
  return idade
}
document.body.innerHTML += "<h2>" + mostraIdade2(user) + "</h2><hr>"
//nesse caso foi passado a chave do objeto dentro de uma função como parâmetro, isso faz o mesmo efeito que a linha 38

///////////////////////////////////////////////////////////////////
//REST OPERATOR
const { name, idade, ...rest } = user
document.body.innerHTML +=
  "<h2>REST OPERATOR <br>" + JSON.stringify(rest) + "</h2>"
//nesse caso foi passado as chaves 'name' e 'idade' e o que sobrou 'o resto' fica separado.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [first, second, ...rest2] = array
document.body.innerHTML +=
  "<h2>" + JSON.stringify({ first, second, rest2 }) + "</h2>" //mesmo caso da linha 53, agora com array.
const [prim, , terc, ...rest3] = array
document.body.innerHTML +=
  "<h2>" + JSON.stringify({ prim, terc, rest3 }) + "</h2><hr>"
//neste caso foi 'pulado' o segundo elemento do array.

//////////////////////////////////////////////////////////////
//SHORT SYNTAX - sintaxe curta
const name1 = "Edson"
const age1 = 61

const user1 = {
  name1: name1,
  age1: age1,
}

//usando o short syntax a const user1 acima fica assimn:
const user2 = {
  //usei user2 por não ser possível redeclarar a variável
  name1,
  age1,
}
document.body.innerHTML +=
  "<h2>SHORT SYNTAX<br>" + JSON.stringify(user2) + "</h2><hr>"

/////////////////////////////////////////////////////////////
//OPTIONAL CHAINING - usa '?' como se fosse um 'if' ou seja, se não existir a informação retorna algo predefinido
const user3 = {
  name: "Edson",
  idade: 27,
  address: {
    street: "Rua teste",
    number: 176,
    // zip:{
    //   code: '39830000',
    //   city: 'Itambacuri',
    // }
  },
}
document.body.innerHTML += "<h2>OPTIONAL CHAINING<br>"
//No objeto user3, acima,  a chave zip foi comentada para que a linha abaixo retorne o tratamento do erro, ou seja, 'Não informado'
document.body.innerHTML += user3.address?.zip?.code ?? "Não informado"

//////////////////////////////////////////////////////////////
//METODOS DE ARRAY
document.body.innerHTML += "<hr><h2>MÉTODOS DE ARRAY<br> for i"
const array1 = [1, 2, 3, 4, 5]
for (const i of array1) {
  document.body.innerHTML += i
}
document.body.innerHTML += "<hr><h2>forEach"

array1.forEach((item) => {
  document.body.innerHTML += item
})

document.body.innerHTML += "<hr><h2>MAP"
const novoArray = array1.map((item) => {
  //sempre retorna um array com o mesmo tamanho do array original, pode fazer alterações no original mas o retorno será sempre do mesmo tamanho
  return item * 2
})
document.body.innerHTML += novoArray

document.body.innerHTML += "<hr><h2>Filter"
const novoArray2 = array1
  .filter((item) => item % 2 === 0) //filtra mas não modifica.
  .map((item) => item * 10) //percorre o resultado ja filtrado e multiplica por 10
document.body.innerHTML += JSON.stringify(novoArray2)

document.body.innerHTML += "<hr><h2>Every" // retorna true ou false, true se TODOS os itens satisfizerem a uma condição.
const todosItensSaoNumeros = array1.every((item) => {
  return typeof item === "number"
})
document.body.innerHTML += JSON.stringify(todosItensSaoNumeros)

document.body.innerHTML += "<hr><h2>Some" // retorna true ou false, true se pelo menos um dos itens satisfizerem a uma condição.
const peloMenosUmItemNaoEUmNumero = array1.some((item) => {
  return typeof item !== "number"
})
document.body.innerHTML += JSON.stringify(peloMenosUmItemNaoEUmNumero)

document.body.innerHTML += "<hr><h2>Find" //Encontrar um item que satisfaça à condição. Pega o primeira que encontrar.
const par = array1.find((item) => item % 2 === 0)
document.body.innerHTML += JSON.stringify(par)

document.body.innerHTML += "<hr><h2>FindIndex" //retorno o índice do primeiro item que satisfaça a condição.
const indice = array1.findIndex((item) => item % 4 === 0)
document.body.innerHTML += JSON.stringify(indice)

document.body.innerHTML += "<hr><h2>Reduce" //cria uma nova estrutura de dados com base em um array
const soma = array1.reduce((acumulator, item) => {
  document.body.innerHTML += acumulator + "," + item + "...."
  return acumulator + item
}, 0) //'zero' é o segundo parâmetro do reduce, neste caso. É onde ela iniciará a soma. Daí pra frente o "acumulator" vai sendo incrementado.
document.body.innerHTML += "<br>" + JSON.stringify(soma)

document.body.innerHTML += "<hr><h2>Promises"
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

somaDoisNumeros(1, 3)
  .then((soma) => {
    document.body.innerHTML += soma
  })
  .catch((err) => {
    console.log(err)
  })

setTimeout(() => {
  //usado aqui apenas para esperar a promise anterior.
  document.body.innerHTML += "<hr><h2>Promises/fetch em API"
  fetch("https://api.github.com/users/diego3g")
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      console.log(body)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      console.log("É executado independente do resultado.")
    })
}, 3000)

//usado aqui apenas para esperar a promise anterior.
setTimeout(() => {
  document.body.innerHTML += "<hr><h2>Async e await"
  async function buscaDadosNoGithub() {
    try {
      const response = await fetch("https://api.github.com/users/diego3g")
      const body = await response.json()
      console.log(body)
      return body.name
    } catch (err) {
      console.log(err)
    } finally {
      console.log("É executado independente do resultado.")
    }
  }
  buscaDadosNoGithub().then((name) => {
    document.body.innerHTML += name
  })
}, 4000)
