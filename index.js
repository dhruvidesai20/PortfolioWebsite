var controller= new ScrollMagic.Controller();

function scroll(){
  if(window.innerWidth> 650){

    var timeline1= new TimelineMax();
    timeline1
      .to(".pro2", 3, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".pro3", 3, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".pro1", 3, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".pro4", 3, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".pro1", 4, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".pro2", 4, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".pro3", 4, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".pro4", 4, {
        transform: "translateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })

      var scene1= new ScrollMagic.Scene({
        triggerElement: ".project_section",
        duration: "100%",
        triggerHook: 0
    })

    .setTween(timeline1)
    .setPin(".project_section")
    .addTo(controller)


    var timeline2= new TimelineMax();
    timeline2
      .to(".hob3", 3, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".hob2", 3, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".hob4", 3, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".hob1", 3, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".hob4", 4, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".hob3", 4, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".hob2", 4, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })
      .to(".hob1", 4, {
        transform: "rotateY(0) ",
        opacity: 1,
        ease: Power1.easeInOut
      })

      var scene2= new ScrollMagic.Scene({
        triggerElement: ".hobbies_section",
        duration: "100%",
        triggerHook: 0
      })

    .setTween(timeline2)
    .setPin(".hobbies_section")
    .addTo(controller)
  }
  else{
    var hobbiesContainer= document.querySelectorAll(".hobbies_container");
    var projectContainer= document.querySelectorAll(".project_container");
    for (let i = 0; i < hobbiesContainer.length; i++) {
      hobbiesContainer[i].style.opacity= "1";
      hobbiesContainer[i].style.transform= "translateY(0)"
      projectContainer[i].style.opacity= "1";
      projectContainer[i].style.transform= "rotateY(0)"
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event){
    scroll();
    document.addEventListener("scroll", function(event){
        var scrollOffset= window.scrollY;
        if (scrollOffset>=0.8*window.innerHeight) {
            document.querySelector(".aboutMe_heading").classList.add("slideIn");
            document.querySelector(".aboutMe_txt").classList.add("slideIn");
        }
    })
})

document.addEventListener("resize", scroll);

