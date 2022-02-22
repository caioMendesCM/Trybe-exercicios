let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

function boasVindas(name) {
  console.log("Bem vinda(o), " + name);
}

boasVindas;

info["recorrente"] = "sim";

console.log(info);

for (const key in info) {
  console.log(key);
}

for (const key in info) {
  console.log(info[key]);
}

for (const key in info) {
  if (key != "recorrente") {
    console.log(info[key] + " e " + info2[key]);
  } else {
    if (info[key] == "sim" && info2[key] == "sim") {
      console.log("Ambos recorrentes");
    } else if (info[key] == "não" && info2[key] == "não") {
      console.log("Nenhum recorrente");
    } else if (info[key] == "sim" && info2[key] == "não") {
      console.log("Somente " + info["personagem"] + " é recorrente.");
    } else {
      console.log("Somente " + info2["personagem"] + " é recorrente.");
    }
  }
}

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'."  );

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");