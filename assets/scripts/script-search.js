let searchBtn = $("#searchBtn");
let userInput = $('#userSearch');

const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
const apikey = '&apiKey=e31330a3bd494aaa8323e1a4293b775d';
'apples'


function fetchRecepies(userIngredients){

  fetch(apiUrl + userIngredients + apikey)
  .then(function (res){
    if(res.ok){
      res.json().then( function (data){
        console.log(data)
        //collect data in variables
        //send to function to populate results page
      })
    }else {
      alert('problem occured' + res.statusText)
    }
  })
  .catch(function (error){
    alert('unable to connect')
  })
}

function collectUserData (event) {
  event.preventDefault();
  let userIngredients = userInput.val();
  //move user to next page
  
  //collect more than one incredient into a string with no spaces
  //thinking gif

  fetchRecepies(userIngredients);

}

searchBtn.on('click', collectUserData)

//user fills out search field
//call the api based on user input
//brings you to results page
//results page shows a few results recipes from the api
//user can scroll through the results 
//user selects results of thier choice
//user is brought to recipe page 
//recipe page is populated by JS with data for selected result
