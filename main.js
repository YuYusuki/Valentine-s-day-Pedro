const photo = document.getElementById('photo')
const tela = document.getElementById('tela')
const audio = document.getElementById('musica')
const title = document.getElementById('title')
const singer = document.getElementById('singer')
const cover = document.getElementById('album')
const btnPlay = document.getElementById("btn-play")
const msgTempo = document.getElementById("tempo")
const msg = document.getElementById("msg")
const entrada = document.getElementById("entrada")
const fix = document.getElementById("fix")


let i = 0

function start() {
  entrada.style.display = 'none'
  audio.play()
}

  fetch("./assets/base/db.json").then(res => res.json()).then(data => {
    setWallpaper(data.photos)
    musicPlayer(data.audio)
    time(data.infor)
    
  
})
  

function time(prop) {
  prop.map((item) => {
    setInterval(() => {
  const agora = new Date();
  const inicio = new Date(item.dtInicio);
msg.innerHTML = `Pedro e Kayani, dois corações que se encontraram para escrever a mais linda história de amor.Cada sorriso dela ilumina o mundo dele, e cada abraço dele é o lar dela.Juntos, são o motivo do próprio amor acreditar no destino. 💖`
  if (inicio > agora) {
    console.log("A data inicial é no futuro!");
    return;
  }

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();
  let minutos = agora.getMinutes() - inicio.getMinutes();
  let segundos = agora.getSeconds() - inicio.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    // pega o número de dias do mês anterior
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }
  
  
  msgTempo.innerHTML = `
  Há <span class='num'>${anos}</span> anos, <span class='num'>${meses}</span> meses, <span class='num'>${dias}</span> dias, e também  <span class='num'>${horas}</span> horas, <span class='num'>${minutos}</span> minutos e <span class='num'>${segundos}</span> segundos, amando muito você ! <span class='icon'>❤️</span>`

}, 1000)
    
  })
  
}




function setWallpaper(prop) {
  
    setInterval(() => {
      photo.src = prop[i].url
      i++
      if (i === prop.length) {
      i = 0}
    },1500)
  
}

function musicPlayer(item){
  item.map((prop) =>
    {
      audio.src = prop.url
      title.innerText = prop.title
      singer.innerText = prop.singer
      cover.src = prop.capa
    }
  )
}


btnPlay.onclick = () => {
  if (!audio.paused) {
    audio.pause()
  } else {
    audio.play()
  }
}
setInterval(() => {
  if (!audio.paused) {
    btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
</svg>`
  } else {
    btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`
  }
},100)

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * 90 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // 3-5 segundos
  heart.style.top = '0px'

  tela.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000); // Remove após 5s
}

setInterval(createHeart, 500); // Cria um coração novo a cada 300ms
