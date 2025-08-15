let rightside =document.querySelector(".rightside");
 let leftside =document.querySelector(".leftside");
 let innercircle1= document.querySelector(".innercircle1");
  let innercircle2= document.querySelector(".innercircle2");
   let innercircle3= document.querySelector(".innercircle3")
      let c1text= document.querySelector(".c1text")


let container1 = document.querySelector(".container1")
let bigc1t1 = document.querySelector(".bigc1t1");
let bigc1t2 = document.querySelector(".bigc1t2");
let bigc1t3 = document.querySelector(".bigc1t3");




let image= 1;

rightside.addEventListener("click",slideimagefunction=()=>{
    if(image===1){
        image=2;
         container1.classList.add("container1i2");
          container1.classList.remove("container1");
           container1.classList.remove("container1i3");
            innercircle1.classList.remove("white");
           innercircle2.classList.add("white");
           innercircle3.classList.remove("white");
           innercircle2.classList.add("white");
              bigc1t1.classList.add("hide");
               bigc1t2.classList.remove("hide");



          

          console.log("image2");

    }else if (image===2) {
        image=3;
          container1.classList.remove("container1i2");
           container1.classList.add("container1i3");
          container1.classList.remove("container1");
           innercircle1.classList.remove("white");
           innercircle2.classList.remove("white");
           innercircle3.classList.add("white");
             bigc1t2.classList.add("hide");
               bigc1t3.classList.remove("hide");
         


          console.log("image3");

    }else if (image===3) {
         image=1;
          container1.classList.remove("container1i2");
           container1.classList.remove("container1i3");
          container1.classList.add("container1");
           innercircle1.classList.add("white")
           innercircle2.classList.remove("white")
           innercircle3.classList.remove("white")
            bigc1t3.classList.add("hide");
               bigc1t1.classList.remove("hide");
         
         
          console.log("image1");

    }





}
)









leftside.addEventListener("click",()=>{
    if(image===1){
        image=3;
         container1.classList.remove("container1i2");
          container1.classList.remove("container1");
           container1.classList.add("container1i3");
            innercircle1.classList.remove("white");
           innercircle2.classList.remove("white");
           innercircle3.classList.add("white");
         

          console.log("image2");

    }else if (image===3) {
        image=2;
          container1.classList.add("container1i2");
           container1.classList.remove("container1i3");
          container1.classList.remove("container1");
           innercircle1.classList.remove("white");
           innercircle2.classList.add("white");
           innercircle3.classList.remove("white");
          
          console.log("image3");

    }else if (image===2) {
         image=1;
          container1.classList.remove("container1i2");
           container1.classList.remove("container1i3");
          container1.classList.add("container1");
          innercircle1.classList.add("white")
           innercircle2.classList.remove("white")
           innercircle3.classList.remove("white")
         
          console.log("image1");

    }





}
)




let contactbutton =document.querySelector(".contactbutton");
let formprint=document.querySelector(".formprint");

let click = 1;





contactbutton.addEventListener("click",formcomefunction=()=>{
    if(click===1){
        click=2;
       formprint.classList.remove("formprint2");
        callpopup.classList.remove("printcallpopup");
        callclick=1;
       
      
        console.log("print from");

    }else if(click===2){
        click=1;
      formprint.classList.add("formprint2");
     
         console.log(" no print from");

    }

        
})

let formbutton=document.querySelector(".formbutton");
let clickformbutton = 1;
formbutton.addEventListener("click",hideformfunction=()=>{

   if(clickformbutton===1){
    click=1;
     formprint.classList.add("formprint2");
     console.log("hide")
     

   }
})




let formcut=document.querySelector(".formcut");
formcut.addEventListener("click",hideformfunction);



let burger =document.querySelector(".burger");
 let inburger =document.querySelector(".inburger");
  let outburger =document.querySelector(".outburger");
 let formobileburger = document.querySelector(".formobileburger");
 let body = document.querySelector("body");
let burgerclick = 1;


burger.addEventListener("click",()=>{
    if(burgerclick===1){
        burgerclick=0;
        formobileburger.classList.add("nohide")
         outburger.classList.add("nohide")
        inburger.classList.add("burgerhide")
        body.style.position="fixed"
      
      
         
    
        console.log("printhomelist");
       


    }else {
        burgerclick=1;
    
        formobileburger.classList.remove("nohide")
         outburger.classList.remove("nohide")
          inburger.classList.remove("burgerhide")
           body.style.position="relative"

      



        console.log("noprinthomelist");
        
    }

})





let bc2 =document.querySelector(".bc2");
bc2.addEventListener("click",formcomefunction);

setInterval(slideimagefunction,3000);




let callpopup = document.querySelector(".callpopup");
let  popupprint = document.querySelector(".popupprint");
let  callclick=1;
popupprint.addEventListener("click",()=>{
    if(callclick===1){
        callclick=0;
        callpopup.classList.add("printcallpopup");
        console.log("printpopup");
     }
})

let cancelbutton  = document.querySelector(".cancelbutton");
cancelbutton .addEventListener("click",()=>{
    if(callclick===0){
        callclick=1;
        callpopup.classList.remove("printcallpopup");
         console.log("noprintpopup");

    }
})

