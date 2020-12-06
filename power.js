var buttonTranslate = document.querySelector("#trans");
var inputText = document.querySelector("#inTxt");
var outputTxt = document.querySelector("#outTxt");

var sURL = "https://api.funtranslations.com/translate/minion.json"


function gettingTranslation(input){
    return sURL + "?" + "text=" + input
}

function handError(){
    alert("Sorry we have use the max 5 inputs. Try once again approx an hour")
}

function handClick(){
    var inText = inputText.value;
    
    fetch(gettingTranslation(inText))
    .then(response => response.json())
    .then(json => {
        
        var translatedText = json.contents.translated;
        outputTxt.innerText = translatedText;
    })
    .catch(handError)
}


buttonTranslate.addEventListener("click", handClick)