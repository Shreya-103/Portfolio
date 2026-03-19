const sidebar = document.querySelector("#sidebar");


function toggleSidebar(){
    sidebar.classList.toggle("active");
}

const body = document.body;
body.addEventListener('click', (e)=>{
    if(!sidebar.contains(e.target)){
        sidebar.classList.remove("active");
    }
});