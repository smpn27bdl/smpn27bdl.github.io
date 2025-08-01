// Ambil nama file foto dari parameter URL (?foto=foto1.jpg)
function getFotoFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('foto');
}

// Setelah halaman selesai dimuat, jalankan viewer
document.addEventListener('DOMContentLoaded', function () {
  const foto = getFotoFromURL();
  if (!foto) {
    console.error('Foto 360 tidak ditemukan di URL.');
    return;
  }

  const viewer = new PhotoSphereViewer.Viewer({
    container: document.getElementById('viewer'),
    panorama: 'images/panoramas/' + foto,
    defaultLong: Math.PI,
    touchmoveTwoFingers: true
  });
});
