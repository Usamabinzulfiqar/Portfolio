const menubtns=document.querySelectorAll('.menu-btn');

menubtns.forEach(btn =>{
    btn.addEventListener('click',function(e) {
        e.preventDefault();
        const targetid=this.getAttribute('href');
        
        const targetSection= document.querySelector(targetid);
     
        targetSection.scrollIntoView({
            top:top,
            behavior:'smooth'
        });
    });
});
 
    