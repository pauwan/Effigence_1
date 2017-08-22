


const button = document.getElementById("go");

button.addEventListener("click", event => {
  event.preventDefault();
  const input = document.getElementById("password_input").value;
  const input_id = document.getElementById("login_input").vlaue;


  if ( !(isNaN(input)) ) {
  //jeśli login jest cyfra to wysyła na serwer
    $.ajax({
      type: "post",
      data: {
        login: input_id,
        password: input
      },
      url: "https://efigence-camp.herokuapp.com/api/login",
      error: function (response) {
        console.log(response.responseText);
      },
      success: function (response) {
        console.log(response);
      }
    });
  }
  // jesli login nie jest cyfra zwraca tooltipa z inforamcja o poprawnym loginie - taka sytuacja tutaj nie pojawi się ponieważ n=input przepuszcza tylko liczby
  else {
    const tooltip_error=document.getElementById("tooltip");
    console.log(tooltip_error);
  }
});

// szczerze mówiąc trochę pogubiłam się w tooltipach - dla jakiej walidacji mają one wyskakiwać - password czy login ? jakie sa założenia walidacji ? 
// w jakim tagu ma być tekst 
// tooltipa, aby móc tam wrzućić informację zwrotną z serwera ? i jak go tam wrzucić ? 






// const input = document.getElementById("password_input").value;
// const button = document.getElementById("password_span");

// button.addEventListener("click", event =>{
//   event.preventDefault();
// console.log(input.length);  //nie działa, nie czyta danych z input 
// });
    

// //jesli jest login to niech jakos zaznaczy ze ten login jest wpisany

// const login = document.getElementById("login_input").value;

// if ( login.length > 0 ) {  //nie działa, nie czyta danych z login 
// console.log("login jest poprawny");  
// } 
// else {
// console.log("login jest równy " + login.length);  
// }




