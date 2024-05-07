window.onload = function(){
    var thumbLinks = document.querySelectorAll('.thumb a');
    for(var i = 0; i<thumbLinks.length; i++){
        thumbLinks[i].addEventListener('click',function(e){
            e.preventDefault();
            var imgSrc = this.getAttribute('href');
            var imgBoxImg = document.querySelector('.imgBox img');
            imgBoxImg.setAttribute('src',imgSrc);
        })
    }
}
