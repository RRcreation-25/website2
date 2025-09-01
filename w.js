

var t = gsap.timeline()

t.from("nav h1",{
    y:-30,
    opacity:0,
    delay:0.3,
    duration:1,
     stagger:0.2
})

t.from("nav h4,nav button",{
    y:-30,
    opacity:0,
   
    duration:0.5,
    stagger:0.15
})
t.from(".cp1 h1",{
    x:-200,
    opacity:0,
    duration:0.6,
}
)

t.from(".cp1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
}
)

t.from(".cp1 button",{
    
    opacity:0,
    duration:0.4,
    y:20,
}
)

t.from(".cp2 img",{
   
    opacity:0,
    duration:0.6,
    x:200,
},"-=0.5"
)


gsap.from(".sb img",{
      opacity:0,
    y:30,
    stagger:0.2,
    duration:0.6,
     scrollTrigger:{
        trigger:".sb img",
        scroller:"body",
       
       start:"top 50%"
    }
})

const s = gsap.timeline({
    scrollTrigger:{
    trigger:".s2",
    scroller:"body",

start:"top 50%",
scrub:2,
}})


gsap.from(".ser ",{
    y:30,
    opacity:0,
    duration:0.5,
     scrollTrigger:{
    trigger:".s2",
    scroller:"body",

start:"top 70%",
end:"top 10%",
scrub:2,
}
  
})

gsap.from(".box.line1.left",{
   x:-300,
   opacity:0,
duration:1,
 scrollTrigger:{
    trigger:".box.line1.left",
    scroller:"body",
scrub:1,
start:"top 50%",
end:"top 30%",

}
})


gsap.from(".box.line1.right",{
   x:300,
   opacity:0,
duration:1,
 scrollTrigger:{
    trigger:".box.line1.left",
    scroller:"body",
scrub:1,
start:"top 50%",
end:"top 30%",


}
})

gsap.from(".box.line2.left",{
   x:-300,
   opacity:0,
duration:1,
 scrollTrigger:{
    trigger:".box.line1.left",
    scroller:"body",
end:"top 20%",
start:"top 35%",
scrub:1,
}
})


gsap.from(".box.line2.right",{
   x:300,
   opacity:0,
duration:1,
 scrollTrigger:{
    trigger:".box.line1.left",
    scroller:"body",

start:"top 35%",
end:"top 20%",
scrub:1,

}
})

