const getPersonas = (url) => {
    //fetch(url).then().catch()
    fetch(url) //primer promesa
        .then((resolve) => resolve.json())//Aqui esta la resolucion con la generamos promesa 2 de conventir datos JSON a objetos 
        .then((personas) => {
            console.log(personas.data);
            tablita.innerHTML = insertarUsuarios(personas.data);
        })
        .catch(error => console.log("error de la segunda promesa", error))
        .catch((error) => console.log(error))

}

getPersonas("https://reqres.in/api/users?delay=3"); //url de la api

const tablita = document.getElementById("data");

const insertarUsuarios = (personas) => {

    const filas = personas.map(personas => `
        <tr>
        <td>${personas.id}</td>
        <td>${personas.first_name}</td>
        <td>${personas.last_name}</td>
        <td>${personas.email}</td>
     
     <td>   <img src="${personas.avatar}" class="card-img-top" style="width: 100px; height: 100px;" alt=${personas.name}></td>
        </tr>

        `);

    return filas.join("");
}


window.addEventListener("DOMContentLoaded", () => {
    showLoader();
  })
  
  window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
      }, 3000);
  })
  
  
  const loader = document.getElementById("loaderPagina");
  const showLoader = () => {
   loader.classList.add("show_loader");
  }
  const hideLoader = () => {
    loader.classList.remove("show_loader");
  }
  