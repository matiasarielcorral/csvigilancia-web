// Menú Hamburguesa (Responsive)

// Cargar el header en las páginas
 fetch('header.html')
          .then(res => res.text())
          .then(data => {
              document.getElementById('header-container').innerHTML = data;
          });
