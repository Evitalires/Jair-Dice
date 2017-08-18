Viendo jairdice.html se puede notar que en las teclas descritas, dificilmente
podemos obtener algo de ellas. Por ello, vamos a asociar cada elemento de nuesto
teclado virtual al código que estas teclas tiene asignadas en el DOM.
Ahora vamos a escuchar el elemento 'Keydown'
  - document.addeventListener('keydown', function(ev){
    console.log(ev)
  })
  Cada vez que se toque una tecla fuera de la consola, nos describirá el objeto.
  Inspeccionando el objeto keydown, encontramos en uno de sus atributos, su código.
  Para el abecedario los codigos serán a(65) hasta => z(90)
  Ahora, si queremos saber su keyCode:
  - document.addEventListener('keydown', function(ev){
    console.log(ev.keyCode)
  })
En jairdice.html vamos a agregar un data-key = "keycode":
  - <div class="key"data-key = letra.keycode>letra</div>

Antes de crear funciones para las teclas, vamos a indicarle cuantas teclas va a
preguntar:
const niveles = 15
let teclas = generarTeclas(niveles)

Ahora, en jairdice.html en la sección de script, vamos a crear unas funciones:
//Primera generar tecla aleatoria
  function generarTeclaAleatoria(){
    const MIN = 65
    const MAX = 90
    return Math.round(Math.random() * (MAX - MIN) + MIN)
  }
//Segunda generar teclas para el juego
  function generarTeclas(niveles){
    //.fill(valor) nos sirve para rellenar el array de valores que luego el .map reemplazará
    return new Array(niveles).fill(0).map(generarTeclaAleatoria)
  }
//Tercera función que tomará un elemento deacuerdo al data-key que le pasemos
  function getElementByKeycode(keyCode){
              //función para llamar un elemento con cierto atributo
                              //.key si quiesieramos tomar toda los elementos de la clase
                              //[] para indicar que es un atributo
    return document.querySelector(`[data-key = "${keyCode}"]`)
  }
Ya escrita, llamamos a la función getElementByKeycode(67)
//Cuarte función para activar cierto elemento
  function activar(keyCode, options = {}){
    const elemento = getElementByKeycode(keycode)
    //ahora vamos a asignarle una clase de css
    elemento.classList.add('active')
    //Preguntamos si en las options nos vino success o fail
    if(options.success){
      elemento.classList.add('success')
      //comprobamos activar(65, {success: true})
    } else if (options.fail){
      elemento.classlist.add('fail')
      //comprobamos activar(65, {fail: true})
    }
    //Creamos timeout para llamar a desactivar()
    setTimeout(function (){
      desactivar(elemento)
    }, 500)
  }
//Quinta función encargada de limpiar las clases que pusimos anteriormente
  function desactivar(elemento){
    //Vamos a poner que la clase que quedará era la inicialmente escrita
    elemento.className = 'key'
  }
