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

  //
  // MODIFY THE FOLLOWING TO FETCH
  // STATEMENT SO THAT YOU
  // MAKE A CALL TO THE API
  // AND THEN UNPACK THE RESPONSE
  // AND THEN USE THE JSON DATA
  // WITH THE CREATEANDADDLISTITEM FUNCTION
  // TO DRAW THE JOKE ONTO THE PAGE
  // ALSO CATCH ANY ERROR SITUATIONS
  //
  // FINISH THE FOLLOWING LINES OF CODE:
  fetch(CHUCK_NORRIS_API).then().then().catch();
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
