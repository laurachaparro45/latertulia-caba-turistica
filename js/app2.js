let btnmenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containermenu = document.querySelector('.menu');
let activador = true;

//menu de navegacion


btnmenu.addEventListener('click',() => {
 
   
   if (activador) {
      menu.style.left = "0";
      menu.style.transition = "0.5s";

      activador=false;


   }
   else{
   	activador =false;

   	menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador=true;

   }
     

      });

  //intercalar clase active

let enlaces = document.querySelectorAll('.lists li a');
 
enlaces .forEach( (element)=> {
   
    element.addEventListener('click', (event) => {
        
        enlaces .forEach( (link) => {
        	link.classList.remove('activo');

        });

        event.target.classList.add('activo');

    });

 });

//efectos scrool

let prevscrollpos = window.pageYOffset;
let gotop = document.querySelector('.go-top')

 window.onscroll = () =>{
   let currenscrollpos = window.pageYOffset;



    //mostrar y ocultar menu

if (prevscrollpos > currenscrollpos) {
	containermenu.style.top = "0";
	containermenu.style.transition = "0.5s";
}
else{
	containermenu.style.top = "-60px";
	containermenu.style.transition = "0.5s";
}
prevscrollpos = currenscrollpos;

 //mostrar y ocultar scrool estilos

 let arriba = window.pageYOffset;

 if (arriba <= 600) {
    containermenu.style.boderBotton = "none";
    
    gotop.style.right = "-100%";


  }
  else{
  	containermenu.style.boderBotton = "2px solid #993300";
    
    gotop.style.right = "0";
    gotop.style.transition = "0.5s";
  

  }


 }

gotop.addEventListener('click', () =>{
  
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;

});




