var tutorial = document.getElementById('app');
tutorial.innerText = 'Tutorial Javascript';

tutorial.style.backgroundColor = 'gold';
tutorial.style.padding = '10px';

// Menambahkan element
var judul = document.createElement('h1');
judul.textContent = 'Belajar Javascriprt';
document.body.append(judul);

// Menghapus element
var h2 = document.getElementById('judul_2');
setTimeout(() => {
  h2.remove();
}, 5000);
