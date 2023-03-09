document.addEventListener("DOMContentLoaded", function(){
    var inPhrase = document.getElementById("inPhrase");
    var btnSubmitPhrase = document.getElementById("btnSubmitPhrase");
    var btnRefresh = document.getElementById("btnRefresh")
    var btnEn = document.getElementById("btnEn");
    var btnFr = document.getElementById("btnFr");
    var btnDe = document.getElementById("btnDe");

    let language = navigator.language || navigator.userLanguage;
    translate(language.substr(0, 2));

    inPhrase.focus();
    inPhrase.select();

    btnEn.addEventListener("click", function(){
        translate("en");
    });

    btnFr.addEventListener("click", function(){
        translate("fr");
    });

    btnDe.addEventListener("click", function(){
        translate("de");
    });

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

function translate(lang){
    var langFile = "assets/lang/" + lang + ".json";
    var defaultLangFile = "assets/lang/en.json";
    var langData = null;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", langFile, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            langData = JSON.parse(xhr.responseText);
            document.getElementById("btnSubmitPhrase").textContent = langData.submit;
            document.getElementById("btnRefresh").textContent = langData.refresh;
            document.getElementById("lblPhrase").textContent = langData.labelPhrase;
            document.getElementById("pAuthors").textContent = langData.title;
            document.getElementById("inPhrase").placeholder = langData.input;
            document.getElementById("lblInsertedPhrases").textContent = langData.labelInserted;
            document.getElementById("pCopyright").textContent = langData.labelCopyright;
    }else if (xhr.readyState == 4 && xhr.status == 404) {
            xhr.open("GET", defaultLangFile, true);
            xhr.send();
        }
    }
    xhr.send();
}

