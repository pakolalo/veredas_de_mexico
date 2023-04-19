const title__mov = new SplitType('#title__mov');    
gsap.to('.char', {
    y:0,
    stagger:0.05,
    delay: 0.2,
    duration: .5,
    repeat:-1,
    repeatDelay:7.8,
    yoyo: true,
});