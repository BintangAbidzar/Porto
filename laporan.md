# 📝 Laporan Proyek Website Pribadi

**Nama:** Bintang Abidzar  
**NIM:** [Masukkan NIM]  
**Mata Kuliah:** [Nama Mata Kuliah]  
**Dosen Pengampu:** [Nama Dosen]  
**Tanggal:** Mei 2025

---

## 1. Deskripsi Proyek

Proyek ini merupakan pembuatan website pribadi statis yang bertujuan sebagai media portofolio online. Website ini dibuat menggunakan **HTML5**, **CSS3**, dan **JavaScript** vanilla tanpa framework tambahan.

Website terdiri dari 3 halaman utama:
- **Beranda (index.html)** — Halaman utama berisi perkenalan, tentang saya, dan daftar skill.
- **Portfolio (portfolio.html)** — Menampilkan proyek-proyek dan pengalaman.
- **Kontak (contact.html)** — Form kontak untuk mengirim pesan.

---

## 2. Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|-----------|
| HTML5 | Struktur halaman web dengan tag semantik |
| CSS3 | Styling dengan file eksternal, flexbox, grid, dan media queries |
| JavaScript | Interaksi sederhana (hamburger menu, animasi scroll, form handler) |
| Google Fonts | Font Space Grotesk dan Inter |
| Font Awesome | Ikon sosial media dan UI |

---

## 3. Struktur Folder

```
porto/
│
├── index.html          # Halaman beranda
├── portfolio.html      # Halaman portfolio
├── contact.html        # Halaman kontak
├── laporan.md          # File laporan ini
│
├── assets/
│   ├── css/
│   │   └── style.css   # File stylesheet utama
│   │
│   ├── images/
│   │   ├── profile.jpg       # Foto profil
│   │   ├── favicon.png       # Ikon favicon
│   │   ├── project-todo.png  # Gambar proyek 1
│   │   ├── project-calculator.png  # Gambar proyek 2
│   │   └── project-weather.png    # Gambar proyek 3
│   │
│   └── js/
│       └── script.js   # File JavaScript
```

---

## 4. Fitur Website

### 4.1 Fitur HTML
- ✅ Menggunakan tag semantik (`header`, `nav`, `main`, `section`, `footer`)
- ✅ Meta tag lengkap (`charset`, `viewport`, `description`)
- ✅ Favicon
- ✅ Atribut `alt` pada semua gambar
- ✅ Navigasi antar halaman berfungsi
- ✅ Penamaan file lowercase tanpa spasi

### 4.2 Fitur CSS
- ✅ File CSS eksternal (`assets/css/style.css`)
- ✅ Menggunakan CSS Grid dan Flexbox
- ✅ Desain responsif dengan media queries (768px dan 480px)
- ✅ Google Fonts (Space Grotesk & Inter)
- ✅ Font Awesome untuk ikon
- ✅ Hover effect pada card dan tombol
- ✅ Animasi fade-in saat scroll
- ✅ CSS Variables untuk konsistensi warna dan ukuran

### 4.3 Fitur JavaScript
- ✅ Hamburger menu untuk tampilan mobile
- ✅ Animasi scroll menggunakan Intersection Observer API
- ✅ Handler form kontak dengan alert konfirmasi

### 4.4 Aksesibilitas
- ✅ Kontras warna yang baik (teks gelap di background terang)
- ✅ Navigasi bisa diakses dengan keyboard (tab)
- ✅ Label pada semua input form
- ✅ Atribut `aria-label` pada tombol hamburger dan link sosial media
- ✅ Ukuran teks yang nyaman dibaca (16px base)

---

## 5. Desain

Website ini menggunakan gaya **Neo Brutalism Soft**, yaitu:
- Border tebal (2.5px) berwarna gelap
- Shadow yang offset ke kanan-bawah (khas neo-brutalism)
- Warna pastel yang lembut (kuning, pink, biru, hijau, ungu)
- Corner radius yang rounded (12px)
- Tipografi yang modern dan bold

Pendekatan ini menghasilkan desain yang terlihat playful, modern, tapi tetap clean dan mudah dibaca.

---

## 6. Responsivitas

Website didesain responsif untuk 3 ukuran layar:

| Breakpoint | Keterangan |
|-----------|-----------|
| > 768px | Desktop - layout grid 2 kolom, navigasi horizontal |
| 481-768px | Tablet - layout 1 kolom, hamburger menu |
| ≤ 480px | Mobile - padding lebih kecil, font disesuaikan |

---

## 7. Cara Menjalankan

### Lokal
1. Download atau clone repository
2. Buka file `index.html` di browser
3. Atau gunakan Live Server di VS Code

### GitHub Pages
1. Push semua file ke repository GitHub
2. Buka **Settings > Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik Save, tunggu beberapa menit
5. Website bisa diakses di `https://[username].github.io/[repo-name]/`

---

## 8. Tantangan dan Solusi

| Tantangan | Solusi |
|-----------|-------|
| Membuat desain yang konsisten | Menggunakan CSS Variables untuk warna dan ukuran |
| Layout responsif | Menggunakan CSS Grid dan Flexbox dengan media queries |
| Navigasi mobile | Membuat hamburger menu dengan JavaScript |
| Animasi tanpa library | Menggunakan Intersection Observer API bawaan browser |

---

## 9. Kesimpulan

Proyek website pribadi ini berhasil dibuat sesuai dengan ketentuan tugas. Website menggunakan HTML5 semantik, CSS3 dengan desain responsif, dan JavaScript vanilla untuk interaktivitas. Desain neo brutalism soft memberikan tampilan yang modern dan menarik namun tetap mudah dibaca.

Melalui proyek ini, saya belajar banyak tentang:
- Penggunaan tag HTML semantik
- CSS Grid dan Flexbox untuk layout
- Media queries untuk responsivitas
- JavaScript DOM manipulation
- Deployment ke GitHub Pages

---

## 10. Referensi

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
