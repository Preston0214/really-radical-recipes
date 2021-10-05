var recipeId = localStorage.getItem('recipeId');
var recipeImage = $('#recipe-image');
var recipeTitle = $('#recipe-title');
var recipeIngredients = $('#recipe-ingredients');
var recipeLink = $('#recipe-link');
var recipeSummary = $('#recipe-summary');

function getFullInfo(){
    fetch('https://api.spoonacular.com/recipes/'+recipeId+'/information?apiKey=f6afd4ae0a8c4afc84874cd3960737aa')
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
recipeLink.onclick = function () {
    location.href = data.sourceUrl
}
  }