function showData(){
    var peopleList;
    if(localStorage.getItem("peoplelist") == null ){
        peopleList = [];
    }else{
        peopleList = JSON.parse(localStorage.getItem('peoplelist'));
    }

    var html = "";
    peopleList.forEach(function(element,index){
        html += "<tr>";
        html += "<tr>" + element.tipo + "</td>";
        html += "<tr>" + element.tiempo + "</td>";
        html += "<tr>" + element.precio + "</td>";
        html += "<tr>" + element.imagen + "</td>";
    });

    document.querySelector("#modalGift  dbody").innerHTML = html;

}

document.onload = showData();


function AddData(){
    var tipo = document.getElementById("tipo").value;
    var tiempo = document.getElementById("tiempo").value;
    var precio = document.getElementById("precio").value;
    var imagen = document.getElementById("imagen").value;

    var peopleList;
    if(localStorage.getItem("peoplelist") == null ){
    peopleList = [];
    } else{
        peopleList = JSON.parse(localStorage.getItem('peoplelist'));
    };

    peopleList.push({
        "tipo": tipo,
        "tiempo": tiempo,
        "precio": precio,
        "imagen": imagen,
    })

    localStorage.setItem("peoplelist",JSON.stringify(peopleList));
    showData();
    document.getElementById("tipo").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("imagen").value = "";

}

