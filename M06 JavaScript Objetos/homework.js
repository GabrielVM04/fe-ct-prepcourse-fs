/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   const gato = {
      nombre: nombre,
      edad: edad,
      meow: function() {
          return "Meow!";
      }
  };

  // Retornar el objeto gato.
  return gato;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   const usuario = {
      nombre: nombre,
      email: email,
      password: password
  };

  // Retornar el objeto usuario.
  return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;

   // Retornar el objeto modificado.
   return objeto;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   // Verificar si el objeto tiene una propiedad con el nombre del método.
   if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === 'function') {
      // Invocar el método dentro del objeto.
      objeto[metodo]();
  }
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   // Verificar si el objeto tiene la propiedad "numeroMisterioso".
   if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
      // Acceder a la propiedad y multiplicar por 5.
      const resultado = objetoMisterioso.numeroMisterioso * 5;
      return resultado;
  } else {
      // En caso de que la propiedad no exista, puedes retornar un valor por defecto o manejar el caso de otra manera.
      return "La propiedad 'numeroMisterioso' no se encuentra en el objeto.";
  }
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   // Verificar si la propiedad existe en el objeto antes de intentar eliminarla.
   if (objeto.hasOwnProperty(propiedad)) {
      delete objeto[propiedad];
  }

  // Retornar el objeto modificado.
  return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si la propiedad "email" tiene un valor definido.
   if (objetoUsuario.email !== undefined && objetoUsuario.email !== null) {
      return true;
  } else {
      return false;
  }
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:ç
    // Verificar si la propiedad existe en el objeto utilizando el operador 'in'.
    if (propiedad in objeto) {
      return true;
  } else {
      return false;
  }
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si la propiedad "password" coincide con el parámetro "password".
   if (objetoUsuario.password === password) {
      return true;
  } else {
      return false;
  }
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   // Asignar la nueva contraseña a la propiedad "password" del objetoUsuario.
   objetoUsuario.password = nuevaPassword;

   // Retornar el objetoUsuario modificado.
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   // Verificar si la propiedad "amigos" es un arreglo.
   if (Array.isArray(objetoUsuario.amigos)) {
      // Agregar el nuevo amigo al final del arreglo de amigos.
      objetoUsuario.amigos.push(nuevoAmigo);
  }

  // Retornar el objetoUsuario modificado.
  return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   // Recorrer el arreglo de usuarios y actualizar la propiedad "esPremium" en cada usuario.
   for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true;
  }

  // Retornar el arreglo de usuarios modificado.
  return objetoMuchosUsuarios;

}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let totalLikes = 0;

   // Verificar si la propiedad "posts" es un arreglo y si cada post tiene la propiedad "likes".
   if (Array.isArray(objetoUsuario.posts)) {
       for (let i = 0; i < objetoUsuario.posts.length; i++) {
           if (objetoUsuario.posts[i].hasOwnProperty("likes")) {
               totalLikes += objetoUsuario.posts[i].likes;
           }
       }
   }

   return totalLikes;
}


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   // Verificar si el objetoProducto tiene las propiedades necesarias.
   if (objetoProducto.hasOwnProperty("precio") && objetoProducto.hasOwnProperty("porcentajeDeDescuento")) {
      // Agregar la propiedad "calcularPrecioDescuento" como una función.
      objetoProducto.calcularPrecioDescuento = function() {
          // Calcular el precio con descuento.
          const descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
          const precioConDescuento = objetoProducto.precio - descuento;
          return precioConDescuento;
      };
      // Retornar el objetoProducto con la propiedad "calcularPrecioDescuento" agregada.
      return objetoProducto;
  } else {
      // Si el objeto no tiene las propiedades necesarias, retornar un mensaje de error.
      return "El objeto no tiene las propiedades necesarias para calcular el descuento.";
  }
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
