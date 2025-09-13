var tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

var string = document.querySelector('#string')
var pathElement = document.querySelector('svg path')
var originalPath = 'M 10 100 Q 500 100 990 100'

string.addEventListener('mousemove', function (e) {
  var rect = string.getBoundingClientRect()
  var relativeY = e.clientY - rect.top

  var amplifiedY = 100 + (relativeY - 100) * 1.5

  amplifiedY = Math.max(20, Math.min(amplifiedY, 180))

  var newPath = `M 10 100 Q 500 ${amplifiedY} 990 100`

  gsap.to(pathElement, {
    duration: 0.3,
    ease: 'power2.out',
    attr: { d: newPath },
  })
})

string.addEventListener('mouseleave', function () {
  gsap.to(pathElement, {
    duration: 1.3,
    ease: 'elastic.out(1, 0.2)',
    attr: { d: originalPath },
  })
})

tl.from('#logo', {
  y: -30,
  opacity: 0,
  duration: 1,
})

tl.from('li', {
  y: -20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
})

tl.from('#hero-welcome', {
  opacity: 0,
  y: 20,
  duration: 1,
})

tl.from('#hero-description', {
  x: 200,
  opacity: 0,
  duration: 1,
})

gsap.to('#scroll-text', {
  x: -8000,
  ease: 'none',
  scrollTrigger: {
    trigger: '#page-2',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    markers: false,
  },
})

gsap.to('#page-2', {
  backgroundColor: '#1a1a1a',
  ease: 'none',
  scrollTrigger: {
    trigger: '#page-2',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  },
})

gsap.from('#page-3-intro', {
  opacity: 0,
  y: -50,
  duration: 3,
  scrollTrigger: {
    trigger: '#page-3',
    scroller: 'body',
    start: 'top 40%',
    end: 'top 0%',
    scrub: true,
    markers: true,
  },
})
