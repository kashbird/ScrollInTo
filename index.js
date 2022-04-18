// let home = document.querySelector('.home');

const btnHome = document.querySelector('.home');
const sectionHome = document.querySelector('#home');
  btnHome.addEventListener('click', function() {
      sectionHome.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

const btnAbout = document.querySelector('.about');
const sectionAbout = document.querySelector('#about');
  btnAbout.addEventListener('click', function() {
      sectionAbout.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

const btnSkills = document.querySelector('.skills');
const sectionSkills = document.querySelector('#skills');
  btnSkills.addEventListener('click', function() {
      sectionSkills.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

const btnWorks = document.querySelector('.works');
const sectionWorks = document.querySelector('#works');
  btnWorks.addEventListener('click', function() {
      sectionWorks.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

const btnContact = document.querySelector('.contact');
const sectionContact = document.querySelector('#contact');
  btnContact.addEventListener('click', function() {
      sectionContact.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

// const btnArrow = document.querySelector('.arrow-up');

// btnArrow.addEventListener('click', function(){
//     sectionHome.scrollIntoView({behavior:"smooth", block:"center"});
// });

document.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btnArrow.classList.add('show');
    } else {
        btnArrow.classList.remove('show');
    }
});

const container = document.querySelector('.container');

document.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        container.classList.add('show');
    } else {
        container.classList.remove('show');
    }
});



const toggle = document.querySelector('#toggle');
const button = document.querySelector('.button');

toggle.addEventListener('click', ()=>{
  button.classList.toggle('active');
  // console.log('hi');
})


const overlay = document.querySelector('#overlay');

toggle.addEventListener('click', ()=>{
  overlay.classList.toggle('show');
})


// gsap home 효과
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  })
})

// 페이지 스크롤
