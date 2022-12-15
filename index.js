let noticiaNaTela = document.querySelector(".noticia-com-imagens");
let noticiaNaTelaTexto = document.querySelector(".noticias-texto");
let noticiaCaixaMaior = document.querySelector(".esporte");
let noticiaCaixaLaranja = document.querySelector(".fofoca");


const dadosPrincipais = [
  {
    link: "https://www.globo.com/",
    img: "./img/alem-do-presidente.jpeg",
    tema: "Além do presidente",
    titulo: "CPI deve pedir indiciamento de filhos de Bolsonaro",
    textinho: "A evangélicos, Bolsonaro diz ‘chorar sozinho em casa’",
  },
  {
    link: "https://www.globo.com/",
    img: "./img/crimes-na-fronteira.jpeg",
    tema: "Crimes na fronteira",
    titulo: "Triângulo amoroso vira chave em linha de investigação",
    textinho: "1ª de 7 mortes entre Brasil e Paraguai faz 1 semana",
  },
  {
    link: "https://www.globo.com/",
    img: "./img/reino-unido.jpeg",
    tema: "Reino Unido",
    titulo: "Parlamentar inglês é esfaqueado e morto em igreja",
    textinho: "Homem de 25 anos foi preso no local, diz polícia",
  },
];
//-------------------------------------------------------------------------------------------------------------------------------------------

const noticiasEmTextos = [
  {
    link: "https://www.globo.com/",
    tema: "Sabatina de Mendonça",
    titulo: "PGR é consultada sobre investigação contra Alcolumbre",
    textinho: "Aliados dizem que situação de Alcolumbre ‘está feia’",
  },
  {
    link: "https://www.globo.com/",
    tema: "Negócio de R$ 5,2 bi",
    titulo: "Pão de Açúcar vende 71 pontos do Extra para o Assaí",
    textinho: "Lembre fusões e aquisições bilionárias recentes no país",
  },
  {
    link: "https://www.globo.com/",
    tema: "Elo com caminhoneiros",
    titulo: "Podcast: ministro liga empresários a atos de 7/9; ouça",
    textinho: "Neto de Jango critica veto de Bolsonaro a tributo",
  },
];
//-------------------------------------------------------------------------------------------------------------------------------------------

const noticiasVerde = [
  {
  link: "https://www.globo.com/",
  img: "./img/espiao-estatistico.jpeg",
  tema: "Espião estatístico",
  titulo: "Classificação do returno tem Palmeiras em último; veja as posições",
  textinho: "Crespo almoça com diretoria e deve se despedir no CT",
  
},
{
  link: "https://www.globo.com/",
  img: "./img/greve-segue-na-raposa.jpeg",
  tema: "Greve segue na Raposa",
  titulo: "Cruzeiro não viabiliza recurso para quitar atrasados",
  textinho: "",
 
},
{
  link: "https://www.globo.com/",
  img: "./img/campeonato-frances.jpeg",
  tema: "Campeonato francês",
  titulo: "Desfalcado, PSG recebe o Angers, 4º colocado",
  textinho: "",
  
},
]

//-------------------------------------------------------------------------------------------------------------------------------------------

const noticiasLaranja = [
  {
  link: "https://www.globo.com/",
  img: "./img/ferias-e-jh.jpeg",
  tema: "Férias e JH",
  titulo: "César Tralli se emociona na despedida do SP1",
  textinho: "",
  text2:"",
},
{
  link: "https://www.globo.com/",
  img: "./img/verdades-secretas-2.jpeg",
  tema: "Verdades Sceretas 2",
  titulo: "Angel cruza a passarela poderosa; reveja desfiles",
  textinho: "Blanche terá dois relacionamentos",
  text2:"Gabriel viverá sadomasoquista",
},
{
  link: "https://www.globo.com/",
  img: "./img/nos-tempos-do-imperador.jpeg",
  tema: "Nos Tempos do Imperador",
  titulo: "Lota vai cair em golpe",
  textinho: "Teresa toma decisão radical",
  text2:"",
},
]
//-------------------------------------------------------------------------------------------------------------------------------------------


let noticiasPrincipais = ``;

for (let i = 0; i < dadosPrincipais.length; i++) {
  noticiasPrincipais += `
        <a href="${dadosPrincipais[i].link}">
          <div class="card-principal">
            <div class="noticia-e-foto">
              <div class="foto">
                <img src="${dadosPrincipais[i].img}" />
              </div>
              <div class="titulo-da-foto">
                <p>${dadosPrincipais[i].tema}</p>
                <h3>${dadosPrincipais[i].titulo}</h3>
              </div>
            </div>
            <div class="texto-underphoto">
              <p>${dadosPrincipais[i].textinho}</p>
            </div>
          </div>
        </a>
`;
}

noticiaNaTela.innerHTML += noticiasPrincipais;

let noticiaTextoNaTela = ``;

for (let i = 0; i < noticiasEmTextos.length; i++) {
  noticiaTextoNaTela += `
    <a href="${noticiasEmTextos[i].link}">
      <div class="bloco-texto">
        <p class="tema">${noticiasEmTextos[i].tema}</p>
        <h3>${noticiasEmTextos[i].titulo}</h3>
          <div class="texto-underphoto">
            ${noticiasEmTextos[i].textinho}
          </div>
      </div>
    </a>
`;
}

noticiaNaTelaTexto.innerHTML += noticiaTextoNaTela;

let blocoMaior = ``;

for (let i = 0; i < noticiasEmTextos.length; i++) {
  blocoMaior += `
    <a href = "${noticiasVerde[i].link}"<div class="caixa-fofoca">
      <div class="block-text-img">
        <div class="imgnews-maior">
          <img src="${noticiasVerde[i].img}">
        </div>
        <div class="titulo-da-foto">
          <p>${noticiasVerde[i].tema}</p>
        ${noticiasVerde[i].titulo}
        </div>
      </div>
      <div class="texto-underphoto">
        ${noticiasVerde[i].textinho}
      </div>
      </div>
    </a>
  `;
}
noticiaCaixaMaior.innerHTML += blocoMaior;

let newLaranja = ``;

for (let i = 0; i < noticiasLaranja.length; i++) {
  newLaranja += `
  <a href="${noticiasLaranja[i].link}">
    <div class="caixa-fofoca">
      <div class="block-text-img">
        <div class="imgnews-maior">
            <img src="${noticiasLaranja[i].img}">
          </div>
          <div class="titulo-da-foto">
            <p>${noticiasLaranja[i].tema}</p>
            ${noticiasLaranja[i].titulo}
          </div>
      </div>
      <div class="texto-underphoto">
        <p>${noticiasLaranja[i].textinho}</p>
        <p>${noticiasLaranja[i].text2}</p>
      </div>
    </div>
  </a>
`          
};
noticiaCaixaLaranja.innerHTML += newLaranja;