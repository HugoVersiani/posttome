
        const btnMobile = document.getElementById('btn-mobile');

        function toggleMenu() {
            const nav = document.getElementById('mainNav');
            const hamb = document.getElementById('hamburguer');
            nav.classList.toggle('active');
            hamb.classList.toggle('active');

        }

        btnMobile.addEventListener('click', toggleMenu);

        function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split('')
            elemento.innerHTML = ''
            textoArray.forEach((letra, i) => {
                setTimeout(() => elemento.innerHTML += letra, 100 * i)
            })
        }

        const texto = document.querySelector('textarea');

        typeWriter(texto);

        $(window).on('load', function() {
            $('#preloader .inner').fadeOut();
            $('#preloader').delay(10).fadeOut('slow');
            $('body').delay(10).css({
                'overflow': 'visible'
            });
        })
