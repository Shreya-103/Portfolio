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