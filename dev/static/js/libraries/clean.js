function clean(node){
  for(var n=0; n<node.childNodes.length; n++){
    var child=node.childNodes[n];
    8===child.nodeType || 3===child.nodeType&&!/\S/.test(child.nodeValue)?
    (node.removeChild(child), n--)
    :1===child.nodeType&&clean(child)}}


//Función para limpiar strings
function getCleanedString(cadena){
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

  // Los eliminamos todos
  for (var i = 0; i < specialChars.length; i++) {
      cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
  }   

  // Lo queremos devolver limpio en minusculas
  cadena = cadena.toLowerCase();

  // Quitamos espacios
  cadena = cadena.replace(/ /g,"");

  // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
  cadena = cadena.replace(/á/gi,"a");
  cadena = cadena.replace(/é/gi,"e");
  cadena = cadena.replace(/í/gi,"i");
  cadena = cadena.replace(/ó/gi,"o");
  cadena = cadena.replace(/ú/gi,"u");
  cadena = cadena.replace(/ñ/gi,"n");
  return cadena;
}
