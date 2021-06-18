const dogsContainer = document.querySelector("#dogs-container");
const form = document.querySelector("form");

const baseURL = `http://localhost:4000/api/dogs`;

const dogsCallback = ({ data: dogs }) => displayDogs(dogs);
const errCallback = (err) => console.log(err);

const getAllDogs = () =>
  axios.get(baseURL).then(dogsCallback).catch(errCallback);
const createDog = (body) =>
  axios.post(baseURL, body).then(dogsCallback).catch(errCallback);
const updateDog = (id, type) =>
  axios.put(`${baseURL}/${id}`, { type }).then(dogsCallback).catch(errCallback);

function submitHandler(e) {
  e.preventDefault();

  let name = document.querySelector("#name");
  let cuteness = document.querySelector("#cuteness");
  let imageURL = document.querySelector("#img");

  let bodyObj = {
    name: name.value,
    cuteness: cuteness.value,
    imageURL: imageURL.value,
  };

  createDog(bodyObj);

  name.value = "";
  cuteness.value = "";
  imageURL.value = "";
}

function createDogCard(dogs) {
  const dogCard = document.createElement("div");
  dogCard.classList.add("dog-card");

  dogCard.innerHTML = `<img alt='dog cover image' src=${dogs.imageURL} class="dog-cover-image"/>
    <div class="btns-container">
        <button onclick="updateDog(${dogs.id}, 'minus')">-</button>
        <p class="dog-cuteness">${dogs.cuteness}</p>
        <button onclick="updateDog(${dogs.id}, 'plus')">+</button>
    </div>
    `;

  dogsContainer.appendChild(dogCard);
}

function displayDogs(arr) {
  dogsContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createDogCard(arr[i]);
  }
}

form.addEventListener("submit", submitHandler);

getAllDogs();