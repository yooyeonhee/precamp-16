menuHome = () =>{
    document.getElementById("contentFrame").setAttribute("src", "home.html");
    document.getElementById("menuHome").style = "color: black; background-color: white";
    document.getElementById("menuGame").style = "color: white; background-color: #298EB5";
    document.getElementById("menuJukebox").style = "color: white; background-color: #298EB5";
    
}

menuGame = () =>{
    document.getElementById("contentFrame").setAttribute("src", "game.html");
    document.getElementById("menuGame").style = "color: black; background-color: white";
    document.getElementById("menuHome").style = "color: white; background-color: #298EB5";
    document.getElementById("menuJukebox").style = "color: white; background-color: #298EB5";
}

menuJukebox = () =>{
    document.getElementById("contentFrame").setAttribute("src", "jukebox.html");
    document.getElementById("menuJukebox").style = "color: black; background-color: white";
    document.getElementById("menuGame").style = "color: white; background-color: #298EB5";
    document.getElementById("menuHome").style = "color: white; background-color: #298EB5";
}