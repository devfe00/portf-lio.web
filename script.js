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

document.getElementById('particles-js').style.pointerEvents = 'none';

const isMobile = window.innerWidth < 768;

const particleConfig = {
    particles: {
        number: {
            value: isMobile ? 60 : 120,  
            density: {
                enable: true,
                value_area: isMobile ? 500 : 800
            }
        },
        color: {
            value: "#1E90FF"  
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#1E90FF"  
            }
        },
        opacity: {
            value: 0.7,  
            random: false
        },
        size: {
            value: isMobile ? 1.5 : 2.5,  
            random: true
        },
        line_linked: {
            enable: true,
            distance: isMobile ? 100 : 150,
            color: "#1E90FF",  
            width: 1
        },
        move: {
            enable: true,
            speed: isMobile ? 1.2 : 2,  
            direction: "none",
            random: true,
            straight: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: isMobile ? "grab" : "repulse"  
            },
            onclick: {
                enable: !isMobile, 
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
};

particlesJS("particles-js", particleConfig);

document.addEventListener("DOMContentLoaded", function () {
    const textLines = [
        "Transformando ideias em código e inovação.",
        "Criando experiências digitais que impressionam.",
        "Pronto para começar seu projeto? Vamos juntos!",
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

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        header.style.top = '0';  
    } else if (currentScroll < lastScrollTop && currentScroll > 50) {
        header.style.top = '0';  
    } else {
        header.style.top = '-50px';  
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
