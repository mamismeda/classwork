let blogArray = [
    {
        name : "shoes",
        discription:"winter nike sneakers",
        photo:"download.png",
        data:new Date(),
        category:"sport",
        active:true,
        seen: 100,
    },
    {
        name : "shoes",
        discription:"winter nike sneakers",
        photo:"",
        data:new Date(05/01/2022),
        category:"sport",
        active:true,
        seen: 150,
    }
]




blogArray.forEach(el => {
    let newTime = new Date();
    let compar = newTime.getDate() == el.data.getDate() && newTime.getFullYear() == el.data.getFullYear() && newTime.getMonth() == el.data.getMonth();
    let greeting;
    let populSeen;
    let categ = "sport"
    let image = document.getElementById("pic");



    if (image.src.match("")) {
        image.src = "download.png"
    }else {
        image.src = "place.png"
    }

    


    if (el.data = new Date()) {
       greeting = new Date();
       
    }else{
        greeting = "05/01/2022";
    }
    document.getElementById("blog").innerHTML = greeting;



    if (el.seen > 100) {
        populSeen = "პოპულარული "
    }else{
       populSeen = "Not Popular"
    }

    document.getElementById("bird").innerHTML = populSeen;


  if (el.category = "sport" && el.active == true ) {

     categ = "sport"
  }else {
      categ = "sport"
  }

  document.getElementById("cat").innerHTML = categ;

});




