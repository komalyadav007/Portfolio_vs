function randomPos(event){
    var h = $(window).height()-100;
    var w = $(window).width()-100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    $("#main").animate({top:nh,left:nw},".5")
}
function win(event){
    $('#main').css('background-color', 'crimson');
   
    setTimeout(() => {if(!alert('You win')){window.location.reload();}});
}
document.getElementById("main").addEventListener("mouseover",randomPos);
document.getElementById("main").addEventListener("mouseup",win);