// Menú Hamburguesa (Responsive)
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Cerrar menú al hacer clic en un link (opcional)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
});
// Cargar el header en las páginas
 fetch('header.html')
          .then(res => res.text())
          .then(data => {
              document.getElementById('header-container').innerHTML = data;
          });
