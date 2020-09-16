

//first animation container
//sending email
let Email = lottie.loadAnimation({
  container: document.getElementById('sendingemail'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'sending-email.json'
})


//robot-playing
let robot = lottie.loadAnimation({
  container: document.getElementById('robot-computer'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'robot-playing-computer.json'
})


//icons
let icons = lottie.loadAnimation({
  container: document.getElementById('icons'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'icons-animation.json'
})

//second animation container
//error
let error = lottie.loadAnimation({
  container: document.getElementById('error'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'error-404.json'
})


//data
let data = lottie.loadAnimation({
  container: document.getElementById('data'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'


})


//icons
let work = lottie.loadAnimation({
  container: document.getElementById('work'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'work.json'

})

//text animation

let text = lottie.loadAnimation({
  container: document.getElementById('text'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'text.json'

})


function functionUpdate() {

  let button = document.getElementById('button');


  button.addEventListener('click',()=>{

let input = document.getElementById('ins').value;

    const animElement = text.renderer.elements[0];
    console.log(text.renderer.elements[0])

    animElement.updateDocumentData({t:input});

	});


    }


functionUpdate();
