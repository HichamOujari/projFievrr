setInterval(()=>{
    //document.location.reload();
},2000)

var indexCurrentpict =0;
var listSujet = [
    {
      title: "first pict",
      pic: "./assets/img/photo.jpg",
      filt: "bic",
    },
    {
      title: "second pict",
      pic: "./assets/img/pic.jpeg",
      filt: "kahla",
    },
    {
      title: "third pict",
      pic: "./assets/img/photo.jpg",
      filt: "bic",
    },
    {
      title: "5 pict",
      pic: "./assets/img/pic.jpeg",
      filt: "bic",
    },
    {
      title: "6 PICT",
      pic: "./assets/img/photo.jpg",
      filt: "kahla",
    },
];

var listTitlte = ["all","bic","kahla"];


function closeShowDetail(){
    document.getElementById("showDetailID").style.display="none";
}

function showShowDetail(index){
    indexCurrentpict = index;
    document.getElementById("currentImageID").src=listSujet[index]['pic'];
    document.getElementById("showDetailID").style.display="flex";
}

function nextPic(){
    indexCurrentpict = (indexCurrentpict+1)%listSujet.length;
    document.getElementById("currentImageID").src=listSujet[indexCurrentpict]['pic']
}
function previousPic(){
    indexCurrentpict = (indexCurrentpict-1)%listSujet.length;
    document.getElementById("currentImageID").src=listSujet[indexCurrentpict]['pic']
}


function setFilter(type){
    for(var j=0;j<listTitlte.length;j++){
        document.getElementById('id'+listTitlte[j]).className="";   
    }

    document.getElementById('id'+type).className="active_filter";
    var container = document.getElementById("containerID");
    container.innerHTML="";
    for(var j=0;j<listSujet.length;j++){
        if(type=='all' || listSujet[j]['filt']==type){
            container.innerHTML+=`
            <div onclick="showShowDetail(`+j+`)" class="item">
                <img src="`+listSujet[j]['pic']+`" alt="">
                <div class="detail">
                    <p class="title">`+listSujet[j]['title']+`</p>
                    <p class="plus">+</p>
                </div>
            </div>
            `
        }
    }
}

setFilter('all')