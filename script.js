// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(ScrollTrigger)
// });

gsap.defaults({
  ease: "linear",
  yoyo:true,

});

// Main Banner section Gsap

const main_banner = gsap.timeline({scrollTrigger:{
    trigger:".main-banner",
    start:"-37% top",
    end:"bottom bottom",
}})
    .to(".girl-shadow1",{opacity:0,duration:.01})
    .from("#yellow",{y:-1000,duration:2})
    .from("#yellow2",{opacity:0,duration:.5})
    .from("#green1",{opacity:0,duration:.5})
    .from("#green2",{opacity:0,duration:.5})
    .from("#Girl",{opacity:0,duration:.5})
    .from('#left-leaf',{scale:0,transformOrigin: '100% 100%'})
    .from('#big-leaf-right1',{scale:0,transformOrigin: '0% 100%'})
    .from('#branch-right',{scale:0,transformOrigin: '0% 100%'})
    .from('#branch-trans',{scale:0,transformOrigin: '0% 100%'})
    .from('#branch-left',{scale:0,transformOrigin: '100% 100%'})
    .from('#leaft-right-light-green',{scale:0,transformOrigin: '0% 100%'})
    .from('#big-leaf-left1',{scale:0,transformOrigin: '100% 100%'})
    .from('#leaf-behind',{scale:0,transformOrigin: '100% 100%'})
    .from('#big-leaf-right-last',{scale:0,transformOrigin: '0% 100%'})
    .from("#leftside-bg rect",{scale:0})
    .from("#grass_green-left-leaf-bg-left-bg",{scale:0})
    .from('#left-bg-leaf-rotate',{scale:0,transformOrigin: '100% 100%'})



function main_banner_girl(){
    const t2 = gsap.timeline({repeat:-1,yoyo:true})
    .to("#Girl", { y: 10 ,duration:1.5})
    .fromTo(".girl-shadow1", {opacity:0}, { opacity:1},'-=.5')
    return t2
}

function main_banner_leaf(){
    const t3 = gsap.timeline({repeat:-1,yoyo:true})
    .to('#left-leaf',{rotate:3,transformOrigin: '50% 0%',duration:2})
    .to('#branch-right',{rotate:4,transformOrigin: '100% 100%',duration:2},"<")
    .to('#branch-trans',{rotate:2,transformOrigin: '100% 100%',duration:2},"<")
    .to('#branch-left',{rotate:2,transformOrigin: '100% 100%',duration:2},"<")
    .to('#leaft-right-light-green',{rotate:2,transformOrigin: '100% 100%',duration:2},"<")
    .to('#big-leaf-right1',{rotate:2,transformOrigin: '0% 100%',duration:2},"<")
    .to('#big-leaf-left1',{rotate:2,transformOrigin: '0% 100%',duration:2},"<")
    .to('#leaf-behind',{rotate:2,transformOrigin: '0% 0%',duration:2},"<")
    .to('#big-leaf-right-last',{rotate:2,transformOrigin: '0% 0%',duration:2},"<")
    .to('#left-bg-leaf-rotate',{rotate:2,transformOrigin: '100% 100%',duration:2},"<")
    return t3
}

main_banner.add(main_banner_girl())
main_banner.add(main_banner_leaf())


// Detail Section

const detail_section = gsap.timeline({scrollTrigger:{
    trigger:".experience-lunchin-section-on-scroll",
    start:"-10% 70%",
    end:"bottom bottom"
}})
    .from(".experience-text-box",{opacity:0})
    .from("#brinjal1-float-home-transform",{opacity:0})
    .from("#lemon-float-home-transform",{opacity:0})
    .from("#carrot-float-home-transform",{opacity:0})
    .from("#vfill-float-home-transform",{opacity:0})
    .from("#cabbg-float-home-transform",{opacity:0})
    .from("#vfill1-float-home-transform",{opacity:0})
    .from("#tomato-float-home-transform",{opacity:0})
    .from("#mango-float-home-transform",{opacity:0})
    .from("#cucu-float-home-transform",{opacity:0})
    .from(".experience-blob",{opacity:0})


const detail_section_movement = gsap.timeline({repeat:-1, yoyo:true})
    .to(".lemon-float-home",{x:-20, duration:2},"<")
    .to(".carrot-float-home",{y:-10,duration:2},"<")
    .to(".vfill-float-home",{x:-20,y:10, duration:2},"<")
    .to(".cabbg-float-home",{y:-10,rotate:2,duration:2},"<")
    .to(".vfill1-float-home",{x:-20, duration:2},"<")
    .to(".brinjal1-float-home",{x:-20,duration:3},"<")
    .to(".tomato-float-home",{x:-20,y:10, duration:2},"<")
    .to(".mango-float-home",{x:-10,duration:2},"<")
    .to(".cucu-float-home",{x:-10,duration:2},"<")

// How It WOrks Section
    
const how_it_works = gsap.timeline({scrollTrigger:{
    trigger:"#how-it-works",
    start:"-10% 70%",
    end:"bottom bottom"
}})
    .from(".calendaricon",{opacity:0})
    .from(".menu-box-calendar-icon",{opacity:0})
    .to(".color-change-rect-1",{fill:"#ECE9CE",duration:0.2})
    .to(".color-change-rect-2",{fill:"#ECE9CE",duration:0.2})
    .to(".color-change-rect-3",{fill:"#ECE9CE",duration:0.2})
    .from(".food-bowl-in-calendar",{opacity:0,duration:0.2})
    .from(".food-bowl-in-calendar-text",{opacity:0,duration:0.2})
    .from(".calendaricon-shadow",{opacity:0,duration:0.2})
    .from(".line-anim-1",{opacity:0,duration:0.2})
    .from(".line-anim-2",{opacity:0,duration:0.2})
    .from(".line-anim-3",{opacity:0,duration:0.2})
    .from(".line-anim-4",{opacity:0,duration:0.2})
    .from(".bowl-anim-1",{scale:0,transformOrigin:"50% 100%"})
    .from(".bowl-anim-2",{scale:0,transformOrigin:"50% 100%"})
    .from(".bowl-anim-3",{scale:0,transformOrigin:"50% 100%"})
    .from(".bowl-anim-4",{scale:0,transformOrigin:"50% 100%"})
    .from("#bowl-shadow",{opacity:0})
    .from("#days > *",{opacity:0})
    .fromTo("#two-question",{opacity:0,repeat:5},{opacity:1,repeat:6})
    .from(".line-anim-5",{opacity:0,duration:0.2},"<")
    .from(".line-anim-6",{opacity:0,duration:0.2},"<")
    .from(".line-anim-7",{opacity:0,duration:0.2},"<")
    .from(".line-anim-8",{opacity:0,duration:0.2},"<")
    .from("#Bike",{opacity:0},"<")
    .from("#Bike-shadow",{opacity:0},"<")
    .to("#grey-actual-smoke",{fill:"#777",repeat:-1,yoyo:true,duration:2},"<")

    // Subscribe Section

    const subscribe = gsap.timeline({scrollTrigger:{
        trigger:"#boy-illustration",
        start:"-10% 70%",
        end:"bottom bottom"
    }})
        .from("#af751f7e-4b5d-405e-82db-2feb99e73059",{scale:0,transformOrigin:"50% 50%"})
        .from("#b23f7707-5eb3-45fd-9ed9-727070a77a2a",{scale:0,transformOrigin:"50% 100%"})
        .from("#f74bee11-6b2b-4c78-8e08-a7eb82960891",{opacity:0})
        .from("#bottom-section-in-mintgreen-leaves3",{opacity:0})
        .from("#a898288d-693a-41ed-8465-8e1ada112ce1",{opacity:0})
        .from("#bottom-section-in-darkgreen-leaves2",{opacity:0})
        .from("#f9d56780-33a1-4b60-9ae8-e3402a9c18ab",{opacity:0})
        .from("#f0f03472-673a-4f0d-9fad-84b33a026fe3",{opacity:0})
        .from("#b6a70bcf-b341-47f3-975e-d7d63b0ec6c1",{opacity:0})
        .from("#af22e6d3-4bf3-4dd4-99f3-1678de4f47a9",{opacity:0})
        .from("#bottom-food-wiggle-part",{opacity:0})
        .to("#right-hand-bottom-guy",{rotate:1,yoyo:true,repeat:-1,transformOrigin:"0% 100%",duration:2})
        .to("#left-hand-bottom-guy",{rotate:-1,yoyo:true,repeat:-1,transformOrigin:"0% 100%",duration:2},"<")
        .to("#f67e1382-d4ed-4bdc-af3f-a0baeb3a0da2",{rotate:-6,yoyo:true,repeat:-1,transformOrigin:"0% 100%",duration:3},"<")
        .to("#f22b39ad-9111-4052-8cf0-2f2515f6789c",{rotate:-6,yoyo:true,repeat:-1,transformOrigin:"0% 100%",duration:3},"<")
        .to("#b7a318f4-f0d9-4a1e-bac9-cb5b06fc62a8",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#a60ebb43-7abf-4fe9-bb54-61c177fdbd20",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#aa34d28e-f68e-489f-8044-fea29f44aeb5",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#e1aec829-377e-4833-9412-13c8ae4a5306",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#bb51ce4a-5234-4226-a0e1-88b4406e922c",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#ec637ddb-62c7-41f3-a135-8b4d6f70b27f",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#e1e870c7-b178-4df4-8ee8-383305283c66",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#a13adac7-e026-492b-9660-e3232441414a",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        .to("#a8acb9a8-2720-4432-ad5d-2a0efdefa4b9",{opacity:0,yoyo:true,repeat:-1, duration:.5})
        

