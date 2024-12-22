let btn = document.getElementById('btntop');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 700){
        btn.style.display = 'block';
    } else{
        btn.style.display = 'none';
    }   

}

btn.addEventListener('click', function(){
    window.scrollTo({top: 0, left: 0});
})