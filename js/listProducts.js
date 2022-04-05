let divNews;
let divTopSelling;
window.onload = function () {
  const newProducts = [
    {
      img: "img/produtos/miniatura1.png",
      caption: "Casaco Florido por R$ 129,90",
      link: "img/produtos/foto1-rosa.png",
    },
    {
      img: "img/produtos/miniatura2.png",
      caption: "Camisa Caveira por R$ 129,90",
      link: "img/produtos/foto2-azul.png",
    },
    {
      img: "img/produtos/miniatura3.png",
      caption: "Fuzz Cardigan por R$ 129,90",
      link: "img/produtos/foto3-verde.png",
    },
    {
      img: "img/produtos/miniatura4.png",
      caption: "Corta Vento por R$ 129,90",
      link: "img/produtos/foto4-rosa.png",
    },
    {
      img: "img/produtos/miniatura5.png",
      caption: "Camiseta Básica por R$ 129,90",
      link: "img/produtos/foto5-azul.png",
    },
    {
      img: "img/produtos/miniatura6.png",
      caption: "Camiseta longa por R$ 129,90",
      link: "img/produtos/foto6-rosa.png",
    },
  ];

  const ulNews = document.createElement("ul");
  ulNews.style.cssText = "display: inline;";

  divNews = document.getElementsByClassName("new")[0];
  divNews.appendChild(ulNews);

  newProducts.forEach((product) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = product.link;
    li.appendChild(a);

    const figure = document.createElement("div");
    figure.className = "figure";
    const img = document.createElement("img");
    img.src = product.img;
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.className = "caption";
    const caption = document.createTextNode(product.caption);
    figcaption.appendChild(caption);

    figure.appendChild(figcaption);

    a.appendChild(figure);
    ulNews.appendChild(li);
  });

  const topSellig = [
    {
      img: "img/produtos/miniatura7.png",
      caption: "Blusa Lisa por R$ 129,90",
      link: "img/produtos/foto7-verde.png",
    },
    {
      img: "img/produtos/miniatura8.png",
      caption: "Blusa Algodão por R$ 129,90",
      link: "img/produtos/foto8-verde.png",
    },
    {
      img: "img/produtos/miniatura9.png",
      caption: "Camisa Quadriculada por R$ 129,90",
      link: "img/produtos/foto9-rosa.png",
    },
    {
      img: "img/produtos/miniatura10.png",
      caption: "Camisa Longa por R$ 129,90",
      link: "img/produtos/foto10-rosa.png",
    },
    {
      img: "img/produtos/miniatura11.png",
      caption: "Short Liso por R$ 129,90",
      link: "img/produtos/foto11-verde.png",
    },
    {
      img: "img/produtos/miniatura12.png",
      caption: "Camiseta com Botões por R$ 129,90",
      link: "img/produtos/foto12-azul.png",
    },
  ];

  const ulTopSelling = document.createElement("ul");

  divTopSelling = document.getElementsByClassName("new")[1];
  divTopSelling.appendChild(ulTopSelling);

  topSellig.forEach((product) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = product.link;
    li.appendChild(a);

    const figure = document.createElement("div");
    figure.className = "figure";

    const img = document.createElement("img");
    img.src = product.img;
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.className = "caption";
    const caption = document.createTextNode(product.caption);
    figcaption.appendChild(caption);

    figure.appendChild(figcaption);

    a.appendChild(figure);
    ulTopSelling.appendChild(li);
  });
};
