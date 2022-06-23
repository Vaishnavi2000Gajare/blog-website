function Title() {
    let title = document.getElementById("title").value;
    if (title.length < 3) {
        document.getElementById("title").style.border = "2px solid red";
        document.getElementById("para1").style.display = "block";
        document.getElementById("para1").style.color = "red";

        return false;
    }
    if (!isNaN(title)) {
        document.getElementById('title').innerHTML = "**Only character are allowed";
        return false;
    }
    else {
        document.getElementById("title").style.border = "2px solid green";
        document.getElementById("para1").style.display = "none";
        return true;
    }
}


function Description() {
    let description = document.getElementById("description").value;
    if (description.length < 20) {
        document.getElementById("description").style.border = "2px solid red";
        document.getElementById("para2").style.display = "block";
        document.getElementById("para2").style.color = "red";
        return false;
    }
    if (!isNaN(description)) {
        document.getElementById('description').innerHTML = "**Only character are allowed";
        return false;
    }
    else {
        document.getElementById("description").style.border = "2px solid green";
        document.getElementById("para2").style.display = "none";
        return true;
    }
}


function AuthorName() {
    let name = document.getElementById("name").value;
    if (name.length < 4) {
        document.getElementById("name").style.border = "2px solid red";
        document.getElementById("para3").style.display = "block";
        document.getElementById("para3").style.color = "red";
        return false;
    }
    else {
        document.getElementById("name").style.border = "2px solid green";
        document.getElementById("para3").style.display = "none";
        return true;
    }
}

var image = '';
document.getElementById("file").addEventListener("change", readFile);

function readFile() {
    if (!this.files || !this.files[0]) return;
    const FR = new FileReader();
    FR.addEventListener("load", function (evt) {
        image = evt.target.result;
        console.log(image)
        // document.getElementById("img").src = evt.target.result;
        // document.getElementById("b64").innerHTML = evt.target.result;
    });
    FR.readAsDataURL(this.files[0]);
}
 function someFunction(){
    var arr=JSON.parse(localStorage.getItem("blogs"));
    console.log(arr)
    var date=document.getElementById("date").value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let name = document.getElementById("name").value;
     if(Title() && Description() && AuthorName() ){
        arr.push({ title: title, description: description, name: name, date: date, image: image });
        localStorage.setItem("blogs", JSON.stringify(arr));
        window.location.href="home.html";
        return true;

     }else{
         Title()
         Description()
         AuthorName()
         onDate()
         return false;
     }

 }
 



var arr=JSON.parse(localStorage.getItem("user"))!== null ? JSON.parse(localStorage.getItem("user")):[];

var newUniqueArr = arr;
function login() {

    var title = document.getElementById("title").value
    var description = document.getElementById("description").value
    var name = document.getElementById("name").value
    var date = document.getElementById("date").value
    var image = document.getElementById("image").value
    if (Title() && Description() && AuthorName() && onDate() ) {

        newUniqueArr.push({ title: title, description: description, name: name, date: date, image: image });
        // output();

    }                
  
    else {
        Title();
        Description();
        AuthorName();
         DateT();
        return false;
    }
}

// function callvalue(){
//     var title = document.getElementById("title").value;
//     var description = document.getElementById("description").value;
//     var name = document.getElementById("name").value; 
//     var date = document.getElementById("date").value; 
//     var image = document.getElementById("image").value;
//     document.writeln(title);
//     document.writeln(description);
//     document.writeln(name);
//     document.writeln(date);
//     document.writeln(image);

//     let user_records=new Array();
// user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
// if(user_records.some((v)=>{return v.title==title}))
// {
//   alert("duplicate data");
// }
// else
// {
//   user_records.push({
//   "title":title,
//   "description":description,
//   "name":name,
//   "date":date,
//   "image":image
// })
// localStorage.setItem("users",JSON.stringify(user_records));
// window.location.href="home.html"
// }
// }

