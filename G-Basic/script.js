var tl = gsap.timeline()
tl.from('#logo', {
  y: -30,
  duration: 1,
  opacity: 0,
})
tl.from('li', {
  y: -30,
  duration: 0.3,
  opacity: 0,
  stagger: 0.3,
})
tl.from('#hero-welcome', {
  opacity: 0,
  duration: 1,
})
tl.from('#hero-description', {
  x: 1000,
  duration: 1,
  opacity: 0,
})

gsap.to('#scroll-text', {
  x: -4000,
  duration: 4,
  scrollTrigger: {
    trigger: '#page-2',
    scroller: 'body',
    start: 'top 0%',
    pin: true,
    scrub: 2,
  },
})
