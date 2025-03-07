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
            "value": 150, // Número de partículas
            "density": {
                "enable": true,
                "value_area": 800 // Área de dispersão
            }
        },
        "color": { "value": "#ffffff" }, // Cor das partículas
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
                "mode": "repulse" // Faz as partículas se afastarem do mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Adiciona mais partículas ao clicar
            }
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

// Verifica se é um dispositivo móvel
const isMobile = window.innerWidth < 768;

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": isMobile ? 60 : 150, // Menos partículas no mobile
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
            "value": isMobile ? 1.5 : 2, // Partículas menores no mobile
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": isMobile ? 100 : 150, // Linhas menores no mobile
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": isMobile ? 1 : 1.5, // Movimento mais leve no mobile
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
                "mode": isMobile ? "grab" : "repulse" // No mobile, o toque "pega" partículas
            },
            "onclick": {
                "enable": !isMobile, // Desativa clique no mobile para evitar lag
                "mode": "push"
            }
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

let lastScrollTop = 0; // Variável para armazenar a última posição de rolagem

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

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Impede que o valor se torne negativo
});


//digitação
document.addEventListener("DOMContentLoaded", function() {
    // Textos que serão digitados
    const textLines = [
      "Sou apaixonado por criar experiências digitais inovadoras.",
      "Transformo ideias em código, problemas em soluções.",
      "Vamos trabalhar juntos no seu próximo projeto?"
    ];
    
    // Selecionando elementos
    const typingLines = document.querySelectorAll('.typing-line');
    const typingContents = document.querySelectorAll('.typing-content');
    
    // Função para digitar um texto
    function typeText(element, text, i, callback) {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(function() {
          typeText(element, text, i + 1, callback);
        }, 50 + Math.random() * 30); // Velocidade variável para parecer mais natural
      } else if (callback) {
        setTimeout(callback, 1000); // Espera um pouco antes de chamar o callback
      }
    }
    
    // Inicia a sequência de digitação
    function startTyping() {
      // Ativa a primeira linha
      typingLines[0].classList.add('active');
      
      // Digita o primeiro texto
      typeText(typingContents[0], textLines[0], 0, function() {
        // Desativa a primeira linha após terminar
        typingLines[0].classList.remove('active');
        
        // Ativa a segunda linha
        typingLines[1].classList.add('active');
        
        // Digita o segundo texto
        typeText(typingContents[1], textLines[1], 0, function() {
          // Desativa a segunda linha após terminar
          typingLines[1].classList.remove('active');
          
          // Ativa a terceira linha
          typingLines[2].classList.add('active');
          
          // Digita o terceiro texto
          typeText(typingContents[2], textLines[2], 0, function() {
            // Mantém a terceira linha ativa com o cursor piscando
          });
        });
      });
    }
    
    // Inicia a digitação após um breve delay
    setTimeout(startTyping, 500);
  });

  // Idioma Ingles 

  function changeLanguage(lang) {
    const elements = document.querySelectorAll('.lang');    
  
    elements.forEach(element => {
      if (element.classList.contains(lang)) {
        element.style.display = 'block'; // Exibe o idioma selecionado
      } else {
        element.style.display = 'none'; // Esconde o outro idioma
      }
    });
  }
  