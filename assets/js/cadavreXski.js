document.addEventListener("DOMContentLoaded", function(){
    var inPhrase = document.getElementById("inPhrase");
    var btnSubmitPhrase = document.getElementById("btnSubmitPhrase");
    var btnRefresh = document.getElementById("btnRefresh")

    inPhrase.focus();
    inPhrase.select();

    btnSubmitPhrase.addEventListener("click", function(){
        addPhrase(inPhrase.value);
        inPhrase.value = "";
        inPhrase.focus();
        inPhrase.select();
    })

    btnRefresh.addEventListener("click", function(){
        refreshPhrases();
    })
})

function addPhrase(phrase){
    document.getElementById("divPhrases").textContent += phrase + " ";
}

function refreshPhrases(){
    document.getElementById("divPhrases").textContent = "";
}
