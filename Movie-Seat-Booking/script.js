
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');  //querySelectorAll puts all these into an array
// here seats r those which r not occupied , can include available seats, selected seats
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value; //by adding + ticketPrice is changed to number type

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  //to store in local storage: gotta store array of selected indexes not div elements
  //copy by spread operator which copies all selected seats and put it in array
  //map through array
  //return a new array indexes

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    //map() method creates a new array with the results of calling a function for every array element.
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    //key-value pair is stored, and array is stored in form of string
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); //selectedSeats are converted back from string to array

  if (selectedSeats !== null && selectedSeats.length > 0) { //selectedSeats must b there in local storage and array shouldnt b empty
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {   //means it should b present in local storage
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}



// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;  //wherver im clicking, its value is stored in ticketPrice
  setMovieData(e.target.selectedIndex, e.target.value);  //selectedIndex is a dom property which gives html element index
  updateSelectedCount();
});

// alternative: take forEach seats, addEventListener on it
// Seat click event
container.addEventListener('click', e => {
  if (  //classList property returns the name of the classes in the form of an array.
    e.target.classList.contains('seat') &&  //wherever i click in container, if tht element has className 'seat'
    !e.target.classList.contains('occupied')  // but doesnt not contain occupied
  ) {
    e.target.classList.toggle('selected');  //add a class of selected
//used for toggling the specified class names of an element.
    // It means on one click the specified class gets added and on another click the class gets removed.
    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();
