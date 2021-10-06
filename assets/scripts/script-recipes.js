var recipeId = localStorage.getItem('recipeId');
var recipeImage = $('#recipe-image');
var recipeTitle = $('#recipe-title');
var recipeIngredients = $('#recipe-ingredients');
var recipeLink = $('#recipe-link');
var recipeSummary = $('#recipe-summary');

function getFullInfo(){
    fetch('https://api.spoonacular.com/recipes/'+recipeId+'/information?apiKey=e31330a3bd494aaa8323e1a4293b775d')
    .then(function (res){
      if(res.ok){
        res.json().then(function(data){
          console.log(data)
          populatePage(data)
        })
      }
    })
  }
  getFullInfo()

  function populatePage(data){
    recipeImage.attr('src', data.image)
    recipeTitle.text(data.title)
    recipeSummary.html(data.summary)
    var ingredientsArray = data.extendedIngredients;
    for(var i=0; i<ingredientsArray.length; i++){
        var listItem = $('<li>').text(ingredientsArray[i].name)
        recipeIngredients.append(listItem)
        console.log(listItem)
    }
    recipeLink.attr('href', data.sourceUrl)
  }