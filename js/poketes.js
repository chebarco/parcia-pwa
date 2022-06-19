let iconos = [];
let selecciones = [];

generarTablero();

function cargarIconos() {
  iconos = [
    '<img  class="imgcard"  src="../img/memotest/1.jpg" width="100%"  height: "100%">',
    '<img  clas=" imgcard"  src="../img/memotest/2.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/3.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/4.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/5.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/6.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/7.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/8.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/9.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/10.jpg" width="100%" height: "100%">',
    '<img  class=" imgcard" src="../img/memotest/11.jpg" width="100%" height: 100%">',
    '<img  class=" imgcard" src="../img/memotest/12.jpg" width="100%" height: "100%">',
  ];
}

function generarTablero() {
  cargarIconos();
  let len = iconos.length;
  selecciones = [];
  let tablero = document.getElementById("tablero");
  let tarjetas = [];

  for (let i = 0; i < len * 2; i++) {
    tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                        <img src="../img/memotest/pokemon-23.svg" width="100%" height: "100%">
                        </div>
                    </div>
                </div>        
                `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join(" ");
}

function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta" + i);
  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)";
    selecciones.push(i);
  }
  if (selecciones.length == 2) {
    deseleccionar(selecciones);
    selecciones = [];
  }
}

function deseleccionar(selecciones) {
  setTimeout(() => {
    let trasera1 = document.getElementById("trasera" + selecciones[0]);
    let trasera2 = document.getElementById("trasera" + selecciones[1]);
    if (trasera1.innerHTML != trasera2.innerHTML) {
      let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
      tarjeta1.style.transform = "rotateY(0deg)";
      tarjeta2.style.transform = "rotateY(0deg)";
    } else {
      trasera1.style.background = "plum";
      trasera2.style.background = "plum";
    }
  }, 1000);
}
