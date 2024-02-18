gsap.to(".image",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:2,
    stagger:2,
    repeat: -1
})

gsap.from("#img1",{
    opacity:0,
    delay:1,
    duration:1,
    y:200,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        // markers:true
       }
    
})
gsap.from("#h1",{
    opacity:0,
    delay:1,
    duration:1,
    y:200,
    scrollTrigger:{
        trigger:"#h1",
        scroller:"body",
        start:"top 60%",
        scrub:2
        // markers:true
       }
    
    
})
gsap.from("#img2",{
    opacity:0,
    delay:1,
    duration:1,
    y:-100,
    scrollTrigger:{
        trigger:"#img2",
        scroller:"body",
        start:"top 60%",
        scrub:2
        // markers:true
       }
    
})
gsap.from("#img3",{
    opacity:0,
    delay:1,
    duration:1,
    x:10,
    scrollTrigger:{
        trigger:"#img3",
        scroller:"body",
        start:"top 60%",
        scrub:2
        // markers:true
       }
    
})

gsap.from("#page2 h5, #page2 #about",{
   opacity:0,
   stagger:0.4,
   color:"blue",
   scrollTrigger:{
    trigger:"#page2 h5",
    scroller:"body",
    start:"top 60%"
    // markers:true
   }
})

gsap.from("#p3img1, #p3img2",{
    opacity:0,
    stagger:0,
    scale:0.2,
    rotate:360,
    scrollTrigger:{
     trigger:"#p3img1",
     scroller:"body",
     start:"top 50%",
     end:"top 110%",
    //  markers:true,
     scrub:2
    }
 })
 gsap.from("#p3box2 h1, #p3box2 h2, #p3box2 h4",{
    opacity:0,
    stagger: {
        amount: 1
      },
    y:300,
    
    scrollTrigger:{
     trigger:"#p3box2 h1",
     scroller:"body",
     start:"top 70%",
     end:"top 130%",
    //  markers:true,
     scrub:5
    }
 })
 gsap.from("#p3_box2 h1",{
    opacity:0,
    duration:2,
    x:-100,
    scrollTrigger:{
     trigger:"#p3_box2 h1",
     scroller:"body",
     start:"top 50%",
     end:"top 110%",
    //  markers:true,
     scrub:2
    }
 })