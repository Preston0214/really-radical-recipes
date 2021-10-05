let searchBtn = $("#searchBtn");
let userInput = $('#userSearch');
var recipeBtn = $('.recipeButton');
// var recipeId = localStorage.getItem('recipeId');
// console.log(recipeId);

const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
const apikey = '&apiKey=f6afd4ae0a8c4afc84874cd3960737aa';


function fetchRecepies(userIngredients){
  fetch(apiUrl + userIngredients + apikey)
  .then(function (res){
    if(res.ok){
      res.json().then( function (data){
        console.log(data);
        $('#carouselExampleCaptions').css('visibility', 'visible');
        populateCards(data);
        //collect data in variables
        //send to function to populate results page
      })
    }else {
      alert('problem occured' + res.statusText)
    }
  })
  .catch(function (error){
    alert('unable to connect')
    console.log(error)
  })
}


function collectUserData (event) {
  event.preventDefault();
  let userIngredients = userInput.val();
  //collect more than one incredient into a string with no spaces
  //thinking gif

  fetchRecepies(userIngredients); 
}

searchBtn.on('click', collectUserData)


function populateCards (data) {
  for (var i = 0; i < 10; i++) {
    console.log(i);
    var listItem = $("#resultsList").children().eq(i);
    listItem.find("img").attr('src', data[i].image);
    listItem.find("span").text(data[i].title);
    listItem.find('a').attr('data-id', data[i].id)
    
  }
}


recipeBtn.on('click',function(){
  recipeId = $(this).data().id;
  console.log(recipeId);
  console.log('clicked')
  localStorage.setItem('recipeId', recipeId)
})




//user fills out search field
//call the api based on user input
//brings you to results page
//results page shows a few results recipes from the api
//user can scroll through the results 
//user selects results of thier choice
//user is brought to recipe page 
//recipe page is populated by JS with data for selected result

