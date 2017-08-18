Añadiremos una librería externa llamada sweetAlert.
Primero descargaremos los archivos y los moveremos a la carpeta de nuestro proyecto.
Copiamos los archivos dentro de /dist
Uno de los archivos .js esta minificado, eso quiere decir que está resumido
Copiamos los siguiente tags:
<script src="dist/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/sweetalert.css">
Ahora modificaremos las alert() por los swal({...})
