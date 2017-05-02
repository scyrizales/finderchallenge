/*

  SE ESTA UTILIZANDO JQUERY, TODO ESTO SE PUEDE PASAR A PURO JS O A OTRO FRAMEWORK DE JS

*/


var input = document.getElementById("search-input");
new Awesomplete(input, {
	list: ["Poema de Gilgamesh", "Las mil y una noches", "Todo se desmorona", "Cuentos infantiles", "Divina Comedia", "Orgullo y prejuicio", "Viaje al fin de la noche"],
	minChars: 3,
	maxItems: 7,
});


document.addEventListener('DOMContentLoaded', function(){
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');
    searchButton.disabled = true;
    searchInput.addEventListener('keyup', function(e) {
        if(e.target.value.length > 1)
            searchButton.disabled = false;
        else
            searchButton.disabled = true;
    });
}, false);