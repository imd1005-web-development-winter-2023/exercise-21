//
//  JS File
//

//
// Variables
//

const CHUCK_NORRIS_API = "https://api.chucknorris.io/jokes/random";
const form = document.querySelector(".form");
const jokeList = document.querySelector(".chuck-norris-joke-list");

//
// Functions
//

// Clear joke list
function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

// Load new joke
function CreateAndAddListItem(list, text) {
  const listItem = document.createElement("li");
  listItem.textContent = text;
  list.appendChild(listItem);
}

// Submit Handler
async function submitHandler(event) {
  // Prevent default submit event
  event.preventDefault();

  // Fetch data from the API
  fetch(CHUCK_NORRIS_API)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((results) => {
      // Clear the list using the clearList function
      clearList(jokeList);
      // Load new joke
      CreateAndAddListItem(jokeList, results.value);
    })
    .catch((error) => {
      console.log(error);
      // Clear the list using the clearList function
      clearList(jokeList);
      // Load error text
      CreateAndAddListItem(jokeList, error);
    });
}

// Initialise application
function inititialise() {
  if (!form) {
    console.error("Error: Form not loaded");
    return;
  }

  if (!jokeList) {
    console.error("Error: Joke List not loaded");
    return;
  }

  // Add event handler to run when form is submitted
  form.addEventListener("submit", submitHandler);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();
