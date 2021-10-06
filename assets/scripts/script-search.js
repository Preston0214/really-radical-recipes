let searchBtn = $("#searchBtn");
let userInput = $('#userSearch');
var recipeBtn = $('.recipeButton');
var orderedList = $(".carousel-indicators");
var resultsList = $('#resultsList');

const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
const apikey = '&apiKey=35e2ced46b6f45a28ebe311c69eebcf1';


function fetchRecepies(userIngredients){
  fetch(apiUrl + userIngredients + apikey)
  .then(function (res){
    if(res.ok){
      res.json().then( function (data){
        if(data.length ===0){
          alert('There are no results for that.')
        }
        $('#carouselExampleCaptions').css('visibility', 'visible');
        populateCards(data);
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
  fetchRecepies(userIngredients); 
}

searchBtn.on('click', collectUserData)


function populateCards (data) {
  $('.carousel-indicators').empty();
  $(".carousel-inner").empty();
  for (var i = 0; i < data.length; i++) {
    var listItem = $(`<li data-target="#carouselExampleCaptions" data-slide-to="${i+1}">`);
    

    var divItem = $('<div class="carousel-item">');
    var imgItem = $(`<img src="${data[i].image}" class="d-block w-100" alt="...">`);
    var divCaption = $('<div class="carousel-caption d-none d-md-block">');
    var headerItem = $('<h5 class="m-4">');
    var spanItem = $('<span class="p-2 carousel-span">').text(data[i].title);
    var aItem = $(`<a href="./assets/html/recipe-page.html" class="btn btn-primary recipeButton" data-id="${data[i].id}">`).text('More Info');
    console.log(data[i].id);
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
  $('.recipeButton').on('click',function(){
    recipeId = $(this).data().id;
    localStorage.setItem('recipeId', recipeId)
  })
}


