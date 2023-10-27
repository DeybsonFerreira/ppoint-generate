const pptxgen = require("pptxgenjs");
const fs = require("fs");

var nomeMusica = "Confie !";
// Letra da música
// use ; para pular página
//ao final execute "node index"
const letra = `
Se você se sente incapaz
Se a tormenta ronda o seu lar;
Não se esqueça
Deus traz refúgio e paz;

Se o coração está em dor
Se a tristeza traz solidão;
Existe solução
O nome é Jesus;

Confie no Senhor
Pois os montes Ele moverá;
A vitória já é certa
Jesus Cristo não falhará;

Se a esperança acabou
E desilusões são normais;
Amigo tenha fé
Deus vai te amparar;

Se no vale da escuridão
É onde sua vida está;
Segura as mãos do Pai
Ele te erguerá;

Confie no Senhor
Pois os montes Ele moverá;
A vitória já é certa
Jesus Cristo não falhará;

Confie no Senhor
Pois os montes Ele moverá;
A vitória já é certa
Jesus Cristo não falhará;
`;

// Dividir a letra em linhas e criar objetos de slide
const linhas = letra.split(";").map((linha) => {
  return {
    text: linha.trim(),
    options: {
      align: "center",
      fontFace: "Arial",
      fontSize: 32,
      color: "ffffff", // cor da letra
      fill: "000000", // cor do fundo
      autofit: true, // centralizar verticalmente
      x: 0,
      y: 3,
      w: "100%",
      margin: { left: "15%", right: "15%" }, // adiciona margens laterais de 10%
    },
  };
});

// Criar uma apresentação de slides em branco
const pptx = new pptxgen();

// Adicionar um slide para cada linha da letra
linhas.forEach((linha) => {
  const slide = pptx.addSlide();
  slide.background = { fill: "000000" }; // cor de fundo do slide
  slide.addText(linha.text, linha.options);
});

// Salvar a apresentação de slides em um arquivo
pptx.writeFile(`${nomeMusica}.pptx`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Apresentação de slides gerada com sucesso!");
  }
});
