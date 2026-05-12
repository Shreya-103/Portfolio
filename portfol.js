const sidebar = document.querySelector("#sidebar");
const toggleBtn = document.querySelector("#menuBtn");

function toggleSidebar(e){
    e.stopPropagation(); // 👈 prevents body click
    sidebar.classList.toggle("active");
}

const body = document.body;
body.addEventListener('click', (e)=>{
    if(!sidebar.contains(e.target)){
        sidebar.classList.remove("active");
    }
});

const mood = document.querySelector(".mood");
const aboutMe = document.querySelector('#aboutMe');

function changeMood(){
    if(mood.innerHTML === '🌙'){
            document.body.classList.add("dark");
        // document.querySelector("body").style.background = "black";
        // aboutMe.style.background = "black";
        // aboutMe.style.color = "white";
        mood.innerHTML = "🔆";
    }
    else{
            document.body.classList.remove("dark");
        // document.querySelector("body").style.background = "#ffff";
        // aboutMe.style.background = "linear-gradient(-45deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb)";
        // aboutMe.style.color = "black";
        mood.innerHTML = "🌙";

    }
}