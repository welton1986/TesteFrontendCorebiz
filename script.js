

function btn(){
    var news = document.getElementById("news");
    var cadastro = document.getElementById("cadastro");


    if(news.style.display === "block") {
        news.style.display = "none";
        cadastro.style.display = "block";

    }else {
        news.style.display = "block";
        cadastro.style.display = "none";
    }

}



function btnNovo(){
    var news = document.getElementById("news");
    var cadastro = document.getElementById("cadastro");


    if(cadastro.style.display === "block") {
        cadastro.style.display = "none";
        news.style.display = "block";

    }else {
        cadastro.style.display = "block";
        news.style.display = "none";
    }

}
