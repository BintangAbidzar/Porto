// ============================================
// SCRIPT.JS - JavaScript Sederhana
// ============================================

// --- Hamburger Menu (untuk mobile) ---
// Menampilkan/menyembunyikan menu navigasi saat tombol hamburger ditekan
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });

  // Tutup menu saat salah satu link diklik
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('show');
    });
  });
}

// --- Animasi Fade-In saat Scroll ---
// Elemen dengan class "fade-in" akan muncul perlahan saat di-scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15 // Muncul saat 15% elemen terlihat
});

fadeElements.forEach(function (el) {
  observer.observe(el);
});

// --- Form Submit Handler ---
// Mencegah form dikirim dan menampilkan pesan sukses
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Tampilkan alert sederhana
    alert('Terima kasih! Pesan kamu sudah diterima. 😊');

    // Reset form setelah submit
    contactForm.reset();
  });
}
