const downloadBtn = document.getElementById('btn-download');

downloadBtn.addEventListener('click', function() {
  const pdfUrl = '../../assets/pdf/mi_cv.pdf'; // Reemplaza con la ruta de tu archivo PDF
  const fileName = 'cv_rojas.pdf'; // Reemplaza con el nombre que quieras darle a tu archivo PDF

  const xhr = new XMLHttpRequest();
  xhr.open('GET', pdfUrl, true);
  xhr.responseType = 'blob';

  xhr.onload = function() {
    if (this.status === 200) {
      const blob = new Blob([this.response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
  };
  xhr.send();
});


const moon = document.querySelector('.moon');
moon.addEventListener('click', function() {
  this.style.backgroundColor = '#87CEFA';
});


const homeLink = document.getElementById("home-link");

if (homeLink.href === window.location.href) {
    homeLink.style.color = "red";
}
