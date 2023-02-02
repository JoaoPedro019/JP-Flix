var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
    "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
  ];
  
  // listaFilmes[0] =
  //   "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg";
  // listaFilmes[1] =
  //   "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg";
  // listaFilmes[2] =
  //   "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg";
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  var listaFilmes = ['https://cinearaujo.com.br/filmes/filme3232_cp.jpg', 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg', 'https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F39690.jpg%3Ft%3D20221028001250', 'https://www.cafecomfilme.com.br/media/k2/items/cache/a6fe0e439a9ff4e304e0b6ff30992141_M.jpg?t=20221003_140055', 'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/7460/filme_7460.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPVSOxy9ErufIMMmDaoYcNkLVLi-ZDg2kVA&usqp=CAU', 'https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXmCcJQbpKBI6DDYorFC9dvb49gEoWe90ZVRBOsixMuKitNe-xStDkaIbSvTmCoPGpxc&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrIRYne-29Obj9xiX7XjwNzwHLb-UtE2SAM3aUBmdePsKBjIdvANLEFwbs8ZikFqnPIc&usqp=CAU'];

var titulosFilmes = ['Avatar O Caminho da Agua', 'Thor Amor e Trovão', 'Adão Negro', 'Wakanda Para Sempre', 'Jumanji Bem-Vindo à Selva', 'The Witcher', 'The Last Of Us', 'The Flash', 'Suits' ];

document.write('<h2 class=tituloCategoria>Filmes e Séries disponíveis</h2>')

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(
    "<span><img src=" + listaFilmes[i] + "><strong>" + titulosFilmes[i] + "</strong></span>"
  );
}

var urlImg = document.querySelector("#urlImg");
var animeNome = document.querySelector("#filmeNome");
var tituloAnime = document.querySelector("#tituloFilme");

function addNovoFilme() {
  var imagem = String(urlImg.value);
  var titulo = String(filmeNome.value);
  if (listaFilmes.indexOf(imagem) !== -1) {
    alert("O Filme ou Série que você tentou fazer upload, já está disponível!");
  } else {
    listaFilmes.push(imagem);
    titulosFilmes.push(titulo);
    tituloFilme.innerHTML += `<p id="final"><img src="${listaFilmes[i]}"> ${titulosFilmes[i]}</p>`;
  }
}