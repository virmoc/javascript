
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
var index = 0;
(function(){
    
    for (var i = 0; i < kepTomb.length; i++) {
    var elem='<div><h3></h3><img src="" alt=""/><p></p></div>';
        $("article").eq(0).append(elem);
    }

    console.log(kepTomb);
    for (var i = 0; i < $("article img").length; i++) {
        $("article img").eq(i).html(kepTomb[i].eleresiut);
        $("article img").eq(i).html(kepTomb[i]["eleresiut"]);
        $("article h3").eq(i).text(kepTomb[i].cim);
        $("article p").eq(i).text(kepTomb[i].leiras);
    }
    for (var i = 0; i < kepTomb.length; i++) {
//        console.log(kepTomb[i].eleresiut);
        $("article div img").click(betolt);
        $("#bal").click(bal);
        $("#jobb").click(jobb);
        
    });
}
function jobb(){
    $("article img").eq(i).attr(kepTomb[i]["eleresiut"]);
    $("article h3").eq(i).text(kepTomb[i].cim);
    $("article p").eq(i).text(kepTomb[i].leiras);
    
    if(index ===kepTomb.length){
        index=0;
    }
    
}
function bal(){
    $("article img").eq(i).attr(kepTomb[i]["eleresiut"]);
    $("article h3").eq(i).text(kepTomb[i].cim);
    $("article p").eq(i).text(kepTomb[i].leiras);
    
    if(index ===kepTomb.length){
        index=0;
    }  
}

function betolt(){
    var index =this.id;
    console.log(kepTomb[index].eleresiut);
    console.log(kepTomb[index].cim);
    console.log(kepTomb[index].leiras);
    console.log(index);
    
    $("section div img").eq(0).attr("src", kepTomb[index].eleresiut);
    $("section div h3").eq(0).text(kepTomb[index].cim);
    $("section div h3").eq(0).text(kepTomb[index].leiras);
}  
//        $("article img")[i].innerHTML=cim[i];
        
//    $("article img")[0].src="kepek/kep1.jpg";
//    $("article img")[1].src="kepek/kep2.jpg";
//    $("article img")[2].src="kepek/kep3.jpg";

