class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];

    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const id = this.activities.length + 1;
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
        return newActivity;
    }


    deleteActivity(id) {
        this.activities = this.activities.filter(act => act.id !== id)
    }
}

//Creamos la instancia
const misActividades = new Repository();

//Capturemos los inputs del formulario
const titleInput = document.getElementById("titulo");
const descriptionInput = document.getElementById("descripcion");
const imgInput = document.getElementById("img");

//capturemos el formulario 
const form = document.getElementById("activity-form");

//funcion para pasar de objeto a HTML
function buildActivity(act) {
    //act ->{id,title,description,imgUrl}
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const img = document.createElement("img")

    //para asignarle al h2 el titulo uso innerHTML, innerText, textContent
    h2.innerHTML = act.title
    p.innerText = act.description
    img.src = act.imgUrl
    img.alt = 'image of ${act.title}}'
        //img.setAttibute("src", act.imgUrl)

    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(p);

    return div
}

//crear la actividad 


function handleSubmit(e) {
    e.preventDefault();
    misActividades.createActivity(titleInput.value, descriptionInput.value, imgInput.value);


    //actividades ->[{id,titulo,descripcion,url}]
    //crear el flujo para pasar de
    //actividadesHTML ->[<div><h1></h1><p></p><img/></div>]


}

form.addEventListener("submit", handleSubmit);





/* const repository = new Repository();


document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById("titulo").value;
    const description = document.getElementById("descripcion").value;
    const imgUrl = document.getElementById("img").value;

    if (!title || !description || !imgUrl) {
        alert("Completa todos los campos");
        return;
    }

    const newActivity = repository.createActivity(title, description, imgUrl);

    const nuevaActividad = document.createElement('div');
    nuevaActividad.classList.add('actividad');
    nuevaActividad.dataset.id = newActivity.id;

    nuevaActividad.innerHTML = `
    <h3>${newActivity.title}</h3>
    <p>${newActivity.description}</p>
    <img src ="${newActivity.imgUrl}" alt="${newActivity.title}">
    <button class="deleteImage">X</button>`

    document.getElementById("actividades-globales").appendChild(nuevaActividad);

    nuevaActividad.querySelector('.deleteImage').addEventListener('click', function() {
        const activityId = parseInt(nuevaActividad.dataset.id);
        repository.deleteActivity(activityId);
        nuevaActividad.remove();
    });



}); */