"use strict"

function scrollHeader() {
    const nav = document.querySelector(".bg-header");

    if (this.scrollY >= 200) {
        nav.classList.add("active-header");
    } else {
        nav.classList.remove("active-header");
    }
}

window.addEventListener("scroll", scrollHeader);


//scrollHeader ends



function toggleClass(selector, className) {
    const elemento = document.querySelector(selector);

    if (elemento) {
        elemento.classList.toggle(className);
    }
}

setInterval(() => toggleClass('.c1', 'c1-move'), 2500);
setInterval(() => toggleClass('.c2', 'c2-move'), 4000);
setInterval(() => toggleClass('.c3', 'c3-move'), 5000);
setInterval(() => toggleClass('.c4', 'c4-move'), 5000);

//toggleClass ends




class TextScramble {
    constructor(element) {
        this.element = element;
        this.chars = '0987654321';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.element.innerText; // retorna o texto atualmente presente no elemento.
        const totalLength = Math.max(oldText.length, newText.length); //calcula o texto mais longo entre oldText e newtext ***
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < totalLength; i++) {
            const from = oldText[i] || ''; //se i está fora dos limites da string), então from será uma string vazia.
            const to = newText[i] || ''; //se i está fora dos limites da string), então to será uma string vazia.
            const start = Math.floor(Math.random() * 40);//retorna um número inteiro aleatório entre 0 e 39.
            const end = start + Math.floor(Math.random() * 40);// é calculado adicionando outro número aleatório entre 0 e 39 a start.
            this.queue.push({ from, to, start, end })
        }

        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }

    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i] 
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.element.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }

}


const phrases = [
    'Codesec',
    'Security',
    'Safety',
    'Protection',
    'Code',
    'Hacking',
    'By',
    'Erick Weng'
]

const element = document.querySelector('.text-change');
const fx = new TextScramble(element)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000)
    })
    counter = (counter + 1) % phrases.length
}

next()

//TextScramble ends








/*


$(document).ready(function() {

    setTimeout(function() {
        var $randomnbr = $('.nbr');
        var $timer = 70;
        var $it;
        var $data = 0;
        var index;
        var change;
        var letters = ["f", "r", "o", "n", "t", "p", "u", "s", "h"];
    
        $randomnbr.each(function() {
    
        change = Math.round(Math.random()*100);
        $(this).attr('data-change', change);
    
        });
    
        function random() {
            return Math.round(Math.random()*9);
        };
    
        function select() {
            return Math.round(Math.random()*$randomnbr.length+1);
        };
    
        function value() {
            $('.nbr:nth-child('+select()+')').html(''+random()+'');
            $('.nbr:nth-child('+select()+')').attr('data-number', $data);
            $data++;
    
            $randomnbr.each(function() {
                if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                        index = $('.ltr').index(this);
                        $(this).html(letters[index]);
                        $(this).removeClass('nbr');
                }
            });
        };
    
        $it = setInterval(value, $timer);
    }, 5500);
    
});
    */


document.addEventListener("DOMContentLoaded", function() {
    const acordeonButtons = document.querySelectorAll('.acordeon__button');

    acordeonButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const acordeon = button.parentElement; // 

            button.classList.toggle('active');
            acordeon.classList.toggle('active'); // 
            if (button.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});






// Selecionar elementos
let bar = document.querySelector('.bar');

// Função para arrastar o elemento
function dragElement(elmnt) {
    let dist = 0, currentPos = 0;
    let initialPos = elmnt.getBoundingClientRect().left;

    // Definir a posição inicial no estilo para iniciar a transição
    elmnt.style.left = initialPos + "px";

    // Adicionar evento de mouse down
    elmnt.addEventListener('mousedown', dragMouseDown);

    function dragMouseDown(e) {
        e.preventDefault();
        currentPos = e.clientX;

        // Remover a transição para uma movimentação mais suave
        elmnt.style.transition = 'none';

        // Adicionar eventos de mouse up e mouse move
        document.addEventListener('mouseup', closeDragElement);
        document.addEventListener('mousemove', elementDrag);
    }

    function elementDrag(e) {
        e.preventDefault();

        dist = currentPos - e.clientX;
        currentPos = e.clientX;

        let updatedPos = elmnt.offsetLeft - dist;

        // Garantir que o elemento não saia dos limites da tela
        if (updatedPos < 0) {
            updatedPos = 0;
        } else if (updatedPos > window.innerWidth - elmnt.offsetWidth) {
            updatedPos = window.innerWidth - elmnt.offsetWidth;
        }

        elmnt.style.left = updatedPos + "px";
    }

    function closeDragElement() {
        // Remover eventos de mouse up e mouse move
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);

        // Aplicar a transição para retornar à posição inicial
        elmnt.style.transition = 'left 0.5s ease';
        elmnt.style.left = initialPos + "px";
    }
}

// Inicializar arrastar no elemento
dragElement(bar);


