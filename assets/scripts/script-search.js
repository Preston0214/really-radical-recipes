let searchBtn = $("#searchBtn");
let userInput = $('#userSearch');
var recipeBtn = $('.recipeButton');
var orderedList = $(".carousel-indicators");
var resultsList = $('#resultsList');

const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
const apikey = '&apiKey=e31330a3bd494aaa8323e1a4293b775d';


function fetchRecepies(userIngredients){
  fetch(apiUrl + userIngredients + apikey)
  .then(function (res){
    if(res.ok){
      res.json().then( function (data){
        console.log(data)
        if(data.length ===0){
          alert('There are no results for that.')
        }
        $('#carouselExampleCaptions').css('visibility', 'visible');
        populateCards(data);
      })
    }else {
      alert('problem occured' + res.statusText)
      console.log(res)
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
  fetchRecepies(userIngredients); 
}

searchBtn.on('click', collectUserData)


function populateCards (data) {
  for (var i = 0; i < data.length; i++) {
    var listItem = $(`<li data-target="#carouselExampleCaptions" data-slide-to="${i+1}">`);
    

    var divItem = $('<div class="carousel-item">');
    var imgItem = $(`<img src="${data[i].image}" class="d-block w-100" alt="...">`);
    var divCaption = $('<div class="carousel-caption d-none d-md-block">');
    var headerItem = $('<h5 class="m-4">');
    var spanItem = $('<span class="p-2 carousel-span">').text(data[i].title);
    var aItem = $(`<a href="./assets/html/recipe-page.html" class="btn btn-primary recipeButton" data-id="${data[i].id}">`).text('More Info');

    headerItem.append(spanItem);
    divCaption.append(headerItem).append(aItem);
    divItem.append(imgItem).append(divCaption);

    if(i+1 === 1){
      listItem.addClass('active');
      divItem.addClass('active');

    };
    
    orderedList.append(listItem[0]);
    resultsList.append(divItem[0])
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

