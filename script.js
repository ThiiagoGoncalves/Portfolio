// TYPING //

const nameText = "Thiago Gonçalves";
        const professionText = "Desenvolvedor Web";
        const nameElement = document.querySelector(".name");
        const professionElement = document.querySelector(".profession");
        let indexName = 0;
        let indexProfession = 0;

        function typeName() {
            if (indexName < nameText.length) {
                nameElement.innerHTML += nameText.charAt(indexName);
                indexName++;
                setTimeout(typeName, 50); // Velocidade da digitação
            } else {
                setTimeout(typeProfession, 500); // Espera 500ms antes de começar a digitar a profissão
            }
        }

        function typeProfession() {
            if (indexProfession < professionText.length) {
                professionElement.innerHTML += professionText.charAt(indexProfession);
                indexProfession++;
                setTimeout(typeProfession, 50); // Velocidade da digitação
            }
        }

        typeName(); // Inicia o efeito de digitação do nome

// NAV BAR BOTÕES //

       
const navLinks = document.querySelectorAll('.nav a');

// Função para adicionar/remover a classe 'active'
function setActiveLink() {
    let currentSection = '';

    // Verifica a posição de todas as seções na página
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const rect = section.getBoundingClientRect();

        // Calcula a altura da tela
        const windowHeight = window.innerHeight;

        // Ativa a seção quando a parte superior da seção passar da metade da tela
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = link.getAttribute('href');
        }
    });

    // Remove a classe 'active' de todos os links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link correspondente à seção visível
    if (currentSection) {
        document.querySelector(`.nav a[href="${currentSection}"]`).classList.add('active');
    }
}

// Detecta o evento de rolagem
window.addEventListener('scroll', setActiveLink);

// Chama a função ao carregar a página
window.addEventListener('load', setActiveLink);



