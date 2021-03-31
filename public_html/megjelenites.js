window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
}
//var kepek=["","kepek/kep2.jpg","kepek/kep3.jpg"];
//var cim=["","Nyuszi és cica","Nyuszi és cica"]

var kep1 ={
        eleresiut:"kepek/kep1.jpg",
        cim:"Nyuszi",
        leiras:"1.kép leírása"
    };
var kep2 ={
        eleresiut:"kepek/kep2.jpg",
        cim:"Nyuszi és cica",
        leiras:"2.kép leírása"
    };
var kep3 ={
        eleresiut:"kepek/kep3.jpg",
        cim:"Nyuszi és cica",
        leiras:"3.kép leírása"
    };
    
var kepTomb=[kep1,kep2,kep3];

function init(){
    for (var i = 0; i < kepTomb.length; i++) {
    var elem='<div><h3></h3><img src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML+=elem;
    }

    console.log(kepTomb);
    for (var i = 0; i < $("article img").length; i++) {
        $("article img")[i].src=kepTomb[i].eleresiut;
        $("article img")[i].src=kepTomb[i]["eleresiut"];
        $("article h3")[i].innerHTML=kepTomb[i].cim;
        $("article p")[i].innerHTML=kepTomb[i].leiras;
    }
    for (var i = 0; i < kepTomb.length; i++) {
//        console.log(kepTomb[i].eleresiut);
        $("article div img")[i].addEventListener("click",betolt);
        
    }
    
    
    
    
    
function betolt(){
    var index =this.id;
    console.log(kepTomb[index].eleresiut);
    console.log(kepTomb[index].cim);
    console.log(kepTomb[index].leiras);
    console.log(index);
    
    $("section div img")[0].src= kepTomb[index].eleresiut;
    $("section div h3")[0].innerHTML= kepTomb[index].cim;
    $("section div h3")[0].innerHTML= kepTomb[index].leiras;
}
}
//        $("article img")[i].innerHTML=cim[i];
        
//    $("article img")[0].src="kepek/kep1.jpg";
//    $("article img")[1].src="kepek/kep2.jpg";
//    $("article img")[2].src="kepek/kep3.jpg";

