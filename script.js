document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('particles-js').style.pointerEvents = 'none';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
});

// Ativar partículas
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": { "value": "#ffffff" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": { "value": 0.5 },
        "size": { "value": 2, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 0.8
        },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        }
    },
    "retina_detect": true
});

// Suavizar rolagem ao clicar no menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Garantir que partículas não cubram elementos interativos
document.getElementById('particles-js').style.pointerEvents = 'none';

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 150, 
            "density": {
                "enable": true,
                "value_area": 800 
            }
        },
        "color": { "value": "#ffffff" }, 
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 2,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" 
            },
            "onclick": {
                "enable": true,
                "mode": "push" 
            }
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

// verifica se é dispositivo móvel
const isMobile = window.innerWidth < 768;

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": isMobile ? 60 : 150, 
            "density": {
                "enable": true,
                "value_area": isMobile ? 500 : 800
            }
        },
        "color": { "value": "#ffffff" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": {
            "value": 0.4,
            "random": false
        },
        "size": {
            "value": isMobile ? 1.5 : 2, 
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": isMobile ? 100 : 150, 
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": isMobile ? 1 : 1.5, 
            "direction": "none",
            "random": false,
            "straight": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": isMobile ? "grab" : "repulse"
            },
            "onclick": {
                "enable": !isMobile, 
                "mode": "push"
            }
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

let lastScrollTop = 0; 

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    // Rolagem para baixo, mostra a navbar
    document.querySelector('header').style.top = '0';
  } else if (currentScroll < lastScrollTop && currentScroll > 50) {
    // Rolagem para cima, mostra a navbar
    document.querySelector('header').style.top = '0';
  } else {
    // Se não houver rolagem (no topo), pode esconder a navbar
    document.querySelector('header').style.top = '-50px';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

// Digitação automática
document.addEventListener("DOMContentLoaded", function () {
    const textLines = [
      "Sou apaixonado por criar experiências digitais inovadoras.",
      "Transformo ideias em código, problemas em soluções.",
      "Vamos trabalhar juntos no seu próximo projeto?",
    ];
  
    const typingLines = document.querySelectorAll(".typing-line");
    const typingContents = document.querySelectorAll(".typing-content");
  

    function typeText(element, text, i = 0, callback) {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeText(element, text, i + 1, callback), 50 + Math.random() * 30);
      } else if (callback) {
        setTimeout(callback, 1000);
      }
    }
  
    // Inicia a sequência de digitação em todas as linhas
    function startTyping(index = 0) {
      if (index < textLines.length) {
        typingLines[index].classList.add("active");
        typeText(typingContents[index], textLines[index], 0, () => {
          typingLines[index].classList.remove("active");
          startTyping(index + 1); 
        });
      }
    }
  
    setTimeout(startTyping, 500);
  });
  
  function changeLanguage(lang) {
    document.querySelectorAll(".lang").forEach(element => {
      element.style.display = element.classList.contains(lang) ? "block" : "none";
    });
  }
  