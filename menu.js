document.addEventListener('DOMContentLoaded', function() {
    function registrocliente() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) {
            console.error('Form with ID contactForm not found.');
            return;
        }

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário

            // Limpa mensagens de erro anteriores
            const errorDiv = document.getElementById('error');
            errorDiv.innerHTML = '';

            // Obtém os valores dos campos
            const clinome = document.getElementById('clinome').value;
            const cliemail = document.getElementById('cliemail').value;
            const climensagem = document.getElementById('climensagem').value;

            // Verifica se os campos estão preenchidos
            if (!clinome || !cliemail || !climensagem) {
                return errorDiv.innerHTML = 'Por favor, preencha todos os campos obrigatórios.';
            }

            const requestBody = {
                clinome,
                cliemail,
                climensagem
            };

            fetch('http://localhost:8080/magno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                return response.json();
            })
            .then(data => {
                alert('Novo Cadastro Realizado!');
            })
            .catch(error => {
                console.error('Erro ao cadastrar funcionário:', error);
                alert('Erro ao cadastrar, Cadastro não realizado!');
            });
        });
    }

    // Menu Mobile
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            if (menu) {
                menu.classList.add('abrir-menu');
            }
        });
    }

    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
        });
    }

    // Inicializa a função de registro de cliente
    registrocliente();
});
