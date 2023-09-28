// Función para obtener el ID del producto desde la URL
// function obtenerIdProductoDesdeURL() {
//   const queryString = document.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   console.log(queryString, urlParams);
//   return urlParams.get("id");
// }

// // Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   console.log(productoId);
//   const producto = productos.find((item) => item.id === parseInt(productoId));
//   console.log(productoId);
//   if (producto) {
//     console.log(producto);
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//     console.log(producto);
//   } else {
//     console.error("Producto no encontrado");
//   }
// }

// Llamar a la función para cargar los detalles del producto cuando se carga la página
// cargarDetallesDelProducto();
// function obtenerIdProductoDesdeURL() {
//   const queryString = document.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   console.log(queryString, urlParams);
//   return urlParams.get("id");
// }

// // Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   const producto = productos.find((item) => item.id === productoId);

//   if (producto) {
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//   } else {
//     console.error("Producto no encontrado");
//   }
// }

// // Llamar a la función para cargar los detalles del producto cuando se carga la página
// window.onload = cargarDetallesDelProducto;
// Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   const producto = productos.find((item) => item.id === parseInt(productoId));

//   if (!producto) {
//     // El producto no existe en el localStorage
//     console.error("Producto no encontrado");
//   } else {
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//   }
// }

// Llamar a la función para cargar los detalles del producto cuando se carga la página
// window.onload = cargarDetallesDelProducto;
// Función para obtener el ID del producto de la URL
// function obtenerIdProductoDesdeURL() {
//   // Obtener el parámetro `id` de la URL
//   const queryString = document.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id");

//   // Si el parámetro `id` no existe, devolver un valor undefined
//   if (!productoId) {
//     return undefined;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }
// function obtenerIdProductoDesdeURL() {
//   // Obtener el parámetro `id` de la URL
//   const queryString = document.location.href;
//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id", "1");

//   // Si el parámetro `id` no existe, devolver el valor predeterminado
//   if (!productoId) {
//     return 1;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }

// function obtenerIdProductoDesdeURL() {
//   // Obtener la cadena de consulta de la URL
//   const queryString = window.location.search;
//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id", "1");

//   // Si el parámetro `id` no existe, devolver el valor predeterminado
//   if (!productoId) {
//     return 1;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }
// function obtenerIdProductoDesdeURL() {
//   // Obtener la cadena de consulta de la URL
//   const queryString = window.location.search;
//   if (!queryString) {
//     // La URL no tiene cadena de consulta
//     return undefined;
//   }

//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id", "1");

//   // Si el parámetro `id` no existe, devolver el valor predeterminado
//   if (!productoId) {
//     return 1;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }
// function obtenerIdProductoDesdeURL() {
//   // Obtener la cadena de consulta de la URL
//   const queryString = window.location.search || "";
//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id");

//   // Si el parámetro `id` no existe, devolver el valor predeterminado
//   if (!productoId) {
//     return 1;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }

// console.log(obtenerIdProductoDesdeURL());

// // Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();
//   console.log(productoId);
//   // Si el parámetro `id` es undefined, no hacer nada
//   if (!productoId) {
//     return;
//   }

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));
//   console.log(productos);
//   // Buscar el producto por ID
//   const producto = productos.find((item) => item.id === parseInt(productoId));
//   console.log(producto);
//   if (producto) {
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//   } else {
//     // El producto no existe en el localStorage
//     console.error("Producto no encontrado");
//   }
// }

// // Llamar a la función para cargar los detalles del producto cuando se carga la página
// cargarDetallesDelProducto();

// Función para volver a la página principal
function volverAPaginaPrincipal() {
  // Redirige al usuario a la página principal (index.html)
  window.location.href = "index.html";
}

// const boton = document.querySelector("button").addEventListener("click", () => {
//   volverAPaginaPrincipal();
// });
// // Agrega esto al final de tu archivo JavaScript (script.js)
// document.addEventListener("DOMContentLoaded", () => {
//   const starRatingContainers = document.querySelectorAll(".star-rating");

//   starRatingContainers.forEach((container) => {
//     const stars = container.querySelectorAll(".fa-star");
//     let userRating = 0;

//     stars.forEach((star, index) => {
//       star.addEventListener("click", () => {
//         userRating = index + 1;
//         updateStarRating(container, userRating);
//       });
//     });

//     // Función para actualizar la calificación y aplicar estilos
//     function updateStarRating(container, rating) {
//       const stars = container.querySelectorAll(".fa-star");
//       stars.forEach((star, index) => {
//         if (index < rating) {
//           star.classList.add("checked");
//         } else {
//           star.classList.remove("checked");
//         }
//       });
//     }
//   });
// });

// Obtener el archivo JSON desde una URL o un servidor local
// fetch("productos.json")
//   .then((response) => {
//     // Convertir el objeto Response en un objeto JavaScript
//     return response.json();
//   })
//   .then((data) => {
//     // Obtener el elemento HTML donde mostrar los productos
//     let productos = document.getElementById("detallesProducto");
//     // Recorrer el array de productos del objeto JavaScript
//     for (let producto of data.productos) {
//       // Crear un elemento div para cada producto
//       let div = document.createElement("div");
//       // Crear un elemento img para la imagen del producto
//       let img = document.createElement("img");
//       // Asignar el atributo src con la ruta de la imagen
//       img.src = producto.imagen;
//       // Añadir el elemento img al elemento div
//       div.appendChild(img);
//       // Crear un elemento p para el nombre del producto
//       let pNombre = document.createElement("p");
//       // Asignar el contenido del elemento p con el nombre del producto
//       pNombre.textContent = producto.nombre;
//       // Añadir el elemento p al elemento div
//       div.appendChild(pNombre);
//       // Crear un elemento p para el precio del producto
//       let pPrecio = document.createElement("p");
//       // Asignar el contenido del elemento p con el precio del producto
//       pPrecio.textContent = producto.precio;
//       // Añadir el elemento p al elemento div
//       div.appendChild(pPrecio);
//       // Crear un elemento p para la descripción del producto
//       let pDescripcion = document.createElement("p");
//       // Asignar el contenido del elemento p con la descripción del producto
//       pDescripcion.textContent = producto.descripcion;
//       // Añadir el elemento p al elemento div
//       div.appendChild(pDescripcion);
//       // Crear un elemento a para el enlace del producto
//       let a = document.createElement("a");
//       // Asignar el atributo href con el enlace del producto
//       a.href = producto.enlace;
//       // Asignar el contenido del elemento a con el texto "Comprar"
//       a.textContent = "Comprar";
//       // Añadir el elemento a al elemento div
//       div.appendChild(a);
//       // Añadir el elemento div al elemento productos
//       productos.appendChild(div);
//     }
//   })
//   .catch((error) => {
//     // Mostrar el error en la consola si ocurre algún problema
//     console.error(error);
//   });
// const destacado = JSON.parse(localStorage.getItem("producto"));

// const mostrarProducto = document.querySelector("#producto-elegido");

// destacado.forEach((product) => {
//   let content = document.createElement("div");
//   content.className = "card2";
//   content.innerHTML = `
//         <div>
//             <h3 class="name">${product.nombre}</h3> </div>
//         <div class="imagen-descripcion">
//             <img class="imagen" src="${product.imagen}">
//             <p class="descriptionLarge">${product.descripcionLarga}</p>
//         </div>
//         <div>
//             <p class="price-product">${product.precio}</p>
//         </div>
//     `;

//   mostrarProducto.append(content);
// });
// Función para obtener el ID del producto desde la URL
// function obtenerIdProductoDesdeURL() {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   return urlParams.get("id");
// }

// // Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   const producto = productos.find((item) => item.id === parseInt(productoId));

//   if (producto) {
//     // Mostrar los detalles del producto en la página
//     document.querySelector("#imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.querySelector("#nombreProducto").textContent = producto.nombre;
//     document.querySelector(
//       "#descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.querySelector(
//       "#precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//   } else {
//     console.error("Producto no encontrado");
//   }
// }

// // Función para volver a la página principal
// function volverAPaginaPrincipal() {
//   // Redirige al usuario a la página principal (index.html)
//   window.location.href = "index.html";
// }

// // Función para actualizar la calificación y aplicar estilos
// function updateStarRating(container, rating) {
//   const stars = container.querySelectorAll(".fa-star");
//   stars.forEach((star, index) => {
//     if (index < rating) {
//       star.classList.add("checked");
//     } else {
//       star.classList.remove("checked");
//     }
//   });
// }

// // Llamar a la función para cargar los detalles del producto cuando se carga la página
// document.addEventListener("DOMContentLoaded", cargarDetallesDelProducto);

// // Agrega esto al final de tu archivo JavaScript (script.js)
// document.addEventListener("DOMContentLoaded", () => {
//   const starRatingContainers = document.querySelectorAll(".star-rating");

//   starRatingContainers.forEach((container) => {
//     const stars = container.querySelectorAll(".fa-star");
//     let userRating = 0;

//     stars.forEach((star, index) => {
//       star.addEventListener("click", () => {
//         userRating = index + 1;
//         updateStarRating(container, userRating);
//       });
//     });
//   });
// });
// function obtenerIdProductoDesdeURL() {
//   const queryString = window.location.search;
//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   console.log(urlParams);
//   const id = urlParams.get("id");
//   console.log(id);

//   if (id === undefined || isNaN(id)) {
//     return null;
//   } else {
//     return parseInt(id);
//   }
// }
// // Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   const producto = productos.find((item) => item.id === productoId);

//   if (producto) {
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//   } else {
//     console.error("Producto no encontrado");
//   }
// }
// Función para obtener el ID del producto desde la URL
function obtenerIdProductoDesdeURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

// Función para cargar los detalles del producto desde el localStorage
function cargarDetallesDelProducto() {
  // Obtener el ID del producto de la URL
  const productoId = obtenerIdProductoDesdeURL();

  // Obtener los productos del localStorage
  const productos = JSON.parse(localStorage.getItem("productos"));

  // Buscar el producto por ID
  const producto = productos.find((item) => item.id === parseInt(productoId));

  if (producto) {
    // Mostrar los detalles del producto en la página
    document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
    document.getElementById("nombreProducto").textContent = producto.nombre;
    document.getElementById(
      "descripcionProducto"
    ).textContent = `Descripción: ${producto.descripcion}`;
    document.getElementById(
      "precioProducto"
    ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
  } else {
    console.error("Producto no encontrado");
  }
}

// Llamar a la función para cargar los detalles del producto cuando se carga la página
cargarDetallesDelProducto();

// Función para volver a la página principal
function volverAPaginaPrincipal() {
  // Redirige al usuario a la página principal (index.html)
  window.location.href = "index.html";
}
// Agrega esto al final de tu archivo JavaScript (script.js)
document.addEventListener("DOMContentLoaded", () => {
  const starRatingContainers = document.querySelectorAll(".star-rating");

  starRatingContainers.forEach((container) => {
    const stars = container.querySelectorAll(".fa-star");
    let userRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        userRating = index + 1;
        updateStarRating(container, userRating);
      });
    });

    // Función para actualizar la calificación y aplicar estilos
    function updateStarRating(container, rating) {
      const stars = container.querySelectorAll(".fa-star");
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add("checked");
        } else {
          star.classList.remove("checked");
        }
      });
    }
  });
});
