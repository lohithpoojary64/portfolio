
function valueSet(){
  gsap.set("#nav a",{
    y:"-100%",
    opacity:0,
  });
  gsap.set(".home span .child",{
    y:"100%",
  })
}



function animateHome(){


  var t1 = gsap.timeline();
  t1.to("#nav a",{
    y:0,
    opacity:1,
    stagger:.05,
    ease:Expo.easeInOut,
  })

  t1.to(".home .parent .child",{
    y:0,
    duration:1,
    stagger:.05,
    ease:Expo.easeInOut,
  })
};


function design(){
document.querySelectorAll(".reveal")
.forEach(function(ele){
  var parent = document.createElement("span");
  var child = document.createElement("span");
  
 parent.classList.add("parent");
 child.classList.add("child");

 child.innerHTML = ele.innerHTML;
 parent.appendChild(child);

 ele.innerHTML = "";
 ele.appendChild(parent);

});
};
design();
valueSet();








      function animate(){
        var t1 = gsap.timeline();
    
        
        t1.from(".loader .child span",{
          x:530,
          duration:2,
          stagger:.2,
          delay:1,
          ease:Power3.easeInOut,
        });
        t1.to(".loader .parent .child",{
                y:"-120%",
                duration:1,
                delay:1,
                ease:Circ.easeInOut,
              
              });

              t1.to(".loader",{
                height:0,
                duration:2,
                delay:1,
                ease:Expo.easeInout,  
              });
              
              t1.to(".green",{
                  height:"100%",
                  top:0,
                  duration:1,
                  delay:-.8,
                  ease:Expo.easeInout, 
                  
              });
              t1.to(".green",{
                height:"0",
                duration:1,
                delay:-.5,
                ease:Expo.easeInout, 
                onComplete:function(){
                  animateHome();
                }
            });
            //   t1.to(".home",{
            //     height:"100%",
            //     duration:2,
            //     delay:-1,
            //     ease:Expo.easeInout,  
            // });
      
      };
        
    
    animate();

 function locoInitialize(){
  const scroll = new LocomotiveScroll({
    el : document.querySelector('.main'),
    smooth: true
  });
 }

 locoInitialize();


 function locomove(){
  document.querySelectorAll('.cnt1')
  .forEach(function(cnt){
    var showimage;
    cnt.addEventListener("mousemove",function(dets){
     document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      // document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      showimage = dets.target;
      showimage.style.filter = "grayscale(1)"
      document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
    })
    

    cnt.addEventListener("mouseleave",function(dets){
      document.querySelector("#cursor").children[showimage.dataset.index].style.opacity = 0;
      showimage.style.filter = "grayscale(0)"
      document.querySelector("#work").style.backgroundColor = "#fff";
       // document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      //  document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
     })
  })

 }
 locomove();

 function locomove1(){
  document.querySelectorAll('.cnt3')
  .forEach(function(cnts){
    var showimages;
    cnts.addEventListener("mousemove",function(dets){
     document.querySelector("#cursor1").children[dets.target.dataset.index].style.opacity = 1;
      // document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      showimages = dets.target;
      showimages.style.filter = "grayscale(1)"
      document.querySelector("#cursor1").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      document.querySelector("#work1").style.backgroundColor = "#" + dets.target.dataset.color;
    })
    

    cnts.addEventListener("mouseleave",function(dets){
      document.querySelector("#cursor1").children[showimages.dataset.index].style.opacity = 0;
      showimages.style.filter = "grayscale(0)"
      document.querySelector("#work1").style.backgroundColor = "#fff";
       // document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      //  document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
     })
  })

 }
 locomove1();




 function locomove2(){
  document.querySelectorAll('.cnt5')
  .forEach(function(cnts){
    var showimagess;
    cnts.addEventListener("mousemove",function(dets){
     document.querySelector("#cursor2").children[dets.target.dataset.index].style.opacity = 1;
      // document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      showimagess = dets.target;
      showimagess.style.filter = "grayscale(1)"
      document.querySelector("#cursor2").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      document.querySelector("#work2").style.backgroundColor = "#" + dets.target.dataset.color;
    })
    

    cnts.addEventListener("mouseleave",function(dets){
      document.querySelector("#cursor2").children[showimagess.dataset.index].style.opacity = 0;
      showimagess.style.filter = "grayscale(0)"
      document.querySelector("#work2").style.backgroundColor = "#fff";
       // document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      //  document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
     })
  })

 }
 locomove2();