// function verDetalles(productoId) {
//   // Redirige a la página de detalles con el ID del producto como parámetro en la URL
//   function guardarProductosEnLocalStorage() {
//     fetch("productos.json")
//       .then((response) => response.json())
//       .then((data) => {
//         // Guardar los productos en el localStorage
//         localStorage.setItem("productos", JSON.stringify(data));
//       })
//       .catch((error) => {
//         console.error(
//           "Error al cargar los productos desde el archivo JSON",
//           error
//         );
//       });
//   }

//   guardarProductosEnLocalStorage();
//   window.location = `detalle.html?id=${productoId}`;
//   console.log(productoId);
// }

// // const holaa = document.getElementsByClassName("botonProducto")

// // console.log(hola);
// // const boton = document
// //   .querySelector("form")
// //   .addEventListener("submit", (event) => {
// //     event.preventDefault();
// //   });
// // Crear una variable que contenga todos los elementos con la clase "botonProducto"
// const botonesProducto = document.querySelectorAll(".botonProducto");

// // function verDetalles(productoId) {
// //   // Redirige a la página de detalles con el ID del producto como parámetro en la URL
// //   function guardarProductosEnLocalStorage() {
// //     fetch("productos.json")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         // Guardar los productos en el localStorage
// //         localStorage.setItem("productos", JSON.stringify(data));
// //       })
// //       .catch((error) => {
// //         console.error(
// //           "Error al cargar los productos desde el archivo JSON",
// //           error
// //         );
// //       });
// //   }

// //   guardarProductosEnLocalStorage();
// //   document.location.href = `detalle.html?id=${productoId}`;
// //   console.log(productoId);
// // }

// // // Recorrer todos los botones y agregarles un evento de clic
// botonesProducto.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     // Obtener el ID del producto desde el atributo data-id del botón
//     let productoId = boton.dataset.id;
//     // Llamar a la función verDetalles con el ID del producto
//     verDetalles(productoId);
//     // console.log(productoId);
//     // verDetalles();
//   });
// });

// Definir la función verDetalles

// fetch("productos.json")
//   .then((response) => response.json())
//   .then((json) => {
//     // console.log(json);
//     json.forEach((producto) => console.log(producto?.nombre));

//     localStorage.setItem("productos", JSON.stringify(json));
//   });

// const jsonProductos = JSON.parse(localStorage.getItem("productos"));

// const listaDeProductos = document.querySelector("#lista-de-productos");

// const productoElegido = [];

// jsonProductos.forEach((product) => {
//   let content = document.createElement("div");
//   content.className = "card";
//   content.innerHTML = `
//       <h3>${product.nombre}</h3>
//       <img class="imagen" src="${product.imagen}">
//       <p class="description">${product.descripcion}</p>
//       <p class="price">${product.precio}</p>
//   `;

//   listaDeProductos.append(content);

//   let ver = document.createElement("button");
//   ver.innerText = "Ver";
//   content.append(ver);
//   ver.className = "ver";

//   ver.addEventListener("click", () => {
//     productoElegido.push({
//       id: product.id,
//       nombre: product.nombre,
//       imagen: product.imagen,
//       descripcion: product.descripcion,
//       descripcionLarga: product.descripcionLarga,
//       precio: product.precio,
//     });

//     localStorage.setItem("producto", JSON.stringify(productoElegido));

//     console.log(productoElegido);

//     location.href = "producto.html";
//   });
// });
// Script JS

// Función para redirigir a la página de detalles del producto
// function verDetalles(productoId) {
//   document.location.href = `detalle.html?id=${productoId}`;
// }

// // Agregar evento click a los botones "Ver Detalles"

// function verDetalles(productoId) {
//   // Redirige a la página de detalles con el ID del producto como parámetro en la URL
//   function guardarProductosEnLocalStorage() {
//     fetch("productos.json")
//       .then((response) => response.json())
//       .then((data) => {
//         // Guardar los productos en el localStorage
//         localStorage.setItem("productos", JSON.stringify(data));
//       })
//       .catch((error) => {
//         console.error(
//           "Error al cargar los productos desde el archivo JSON",
//           error
//         );
//       });
//   }
//   guardarProductosEnLocalStorage();
//   document.location.href = `detalle.html?id=${productoId}`;
// }

// const adios = document.querySelectorAll(".botonProducto");

// // const hola = Array.from(adios);
// console.log(adios);
// adios.addEventListener("click", (productoId) => {
//   verDetalles(productoId);
// });
// hola.forEach((boton) => {
//   if (boton.classList === "botonProducto") {
//     boton.addEventListener("click", () => {
//       verDetalles();
//     });
//   }
// });

// const adios = document.querySelectorAll(".botonProducto");

// adios.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     const productoId = boton.dataset.productoId;
//     verDetalles(productoId);
//   });
// });

function verDetalles(productoId) {
  // Redirige a la página de detalles con el ID del producto como parámetro en la URL
  function guardarProductosEnLocalStorage() {
    fetch("productos.json")
      .then((response) => response.json())
      .then((data) => {
        // Guardar los productos en el localStorage
        localStorage.setItem("productos", JSON.stringify(data));
      })
      .catch((error) => {
        console.error(
          "Error al cargar los productos desde el archivo JSON",
          error
        );
      });
  }
  guardarProductosEnLocalStorage();
  document.location.href = `detalle.html?id=${productoId}`;
}
