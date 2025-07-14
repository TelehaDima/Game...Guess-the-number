const input = document.querySelector('#number');
const button = document.querySelector('#btnn');
const answer = Math.floor(Math.random()* 50) + 1;

button.addEventListener('click', play);

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        play();
    }
})

function play() {
    const usernumber = document.querySelector('#number').value;
    console.log(usernumber);
    if (usernumber < 1 || usernumber > 50) {
        Swal.fire({
            icon: 'error',
            title: 'Ups!!!',
            text: 'Enter a number from 1 to 50',
        })
    }
    else if (isNaN(usernumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ups!!!',
            text: 'Enter a number',
        })
    }
    else {
        if (usernumber > answer) {
           
      Swal.fire(
  'Enter a smaller number',
 'The computer is winning...',
  'question'
    )    
        }
        else if  (usernumber < answer){
            Swal.fire('Enter a larger number!', 'The computer is winning...', 'question')
        }
        else {
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'CONGRATULATIOS...YOU HAVE WON!!!',
  showConfirmButton: false,
  timer: 1500
})
        }
    }

}
let text = 'Enter a number from 1 to 50...';
// console.log(text.length);
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector('#heading').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

let secondText = 'Who wins...you or your device??';
let k = 0;
let secondSpeed = 50;

function secondType() {
    if (k < secondText.length) {
        document.querySelector('#header').textContent += secondText.charAt(k);
        k++;
        setTimeout(secondType, secondSpeed);
    }
}
secondType();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});