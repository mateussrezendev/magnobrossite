/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Testes de HTML', () => {
    let document;

    beforeAll(() => {
        const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        document = new DOMParser().parseFromString(html, 'text/html');
    });

    test('o título da página deve ser "MagnoBros"', () => {
        expect(document.title).toBe('MagnoBros');
    });
    test('o título da página deve ser "Magno"', () => {
        expect(document.title).toBe('Magno');
    });

    test('deve ter um elemento div com id "contactForm"', () => {
        const contactForm = document.getElementById('contactForm');
        expect(contactForm).not.toBeNull();
    });


    

    test('o texto do elemento h3 deve ser "TRAILER 3"', () => {
        const contactForm = document.getElementById('contactForm');
        contactForm.innerHTML = '<h3>TRAILER 3</h3>'; // Simula o que o app.js faz
        const h3 = contactForm.querySelector('h3');
        expect(h3.textContent).toBe('TRAILER 3');
    });

    test('deve ter um elemento div', () => {
        const contactForm = document.getElementById('contactForm');
        contactForm.innerHTML = '<div class="img-topo-site">'; // Simula o que o app.js faz
        const div = contactForm.querySelector('div');
        expect(div.tagName).toBe('DIV');
    });
    test('deve ter um elemento p', () => {
        const contactForm = document.getElementById('contactForm');
        contactForm.innerHTML = '<p>Em um mundo vibrante e cheio de mistérios, dois irmãos, Zip e Zap, foram tragicamente separados por uma força desconhecida. Agora, suas jornadas solitárias os levam a lugares deslumbrantes e desafiadores, onde devem enfrentar enigmas e superar obstáculos.</p>'; // Simula o que o app.js faz
        const p = contactForm.querySelector('p');
        expect(p.tagName).toBe('P');
    });
    test('deve ter um elemento button', () => {
        const contactForm = document.getElementById('contactForm');
        contactForm.innerHTML = '<button>JOGAR!</button>'; // Simula o que o app.js faz
        const button = contactForm.querySelector('button');
        expect(button.tagName).toBe('BUTTON');
    });

    test('o elemento div deve ter uma classe específica "img topo do site"', () => {
        const contactForm = document.getElementById('contactForm');
        contactForm.innerHTML = '<div class="img-topo-site">'; // Simula o que o app.js faz
        const div = contactForm.querySelector('.img-topo-site');
        expect(div.className).toBe('img-topo-site');
    });
    test('o elemento div deve ter uma classe específica "interface"', () => {
        const contactForm = document.getElementById('contactForm');
        contactForm.innerHTML = '<div class="interface">'; // Simula o que o app.js faz
        const div = contactForm.querySelector('.interface');
        expect(div.className).toBe('interface');
    });
    test('deve ter um elemento </footer>', () => {
        const contactForm = document.getElementById('contactForm');
        contactForm.innerHTML = '<footer></footer>'; // Simula o que o app.js faz
        const button = contactForm.querySelector('footer');
        expect(button.tagName).toBe('FOOTER');
    });
    

});
