// scroll menu
window.onscroll = function() {scrollFunction()};

const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;

function scrollFunction() {
    // bila scroll lebih dari 100, maka width dan ukuran teks diubah, bila tidak maka kembali normal
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("#logo").style.width = "144px";
        document.querySelector(".text").style.fontSize = "12px";
    } else {
        document.querySelector("#logo").style.width = "160px";
        document.querySelector(".text").style.fontSize = "14px";
    }

    // bila navbar mencapai paling atas web, maka tambahkan sticky, bila tidak di paling atas web sticky dihilangkan
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("diam");
    } else {
        navbar.classList.remove("diam");
    }
}

// dibuat fixed pada saat kueri 768px
const a = window.matchMedia("(max-width: 768px)");
const atas = document.querySelector(".atas")

function responsive(a) {
    if(a.matches) {
        window.onscroll = null;
        atas.classList.add("diam");
    } else {
        window.onscroll.scrollFunction;
        atas.classList.remove("diam");
    }
}

a.addEventListener("change", responsive);
responsive(a);

// submenu produk dan solusi
const menuProduk = document.querySelector("#menuProduk");
const menuSolusi = document.querySelector("#menuSolusi");
const produk = document.querySelector("#produk");
const solusi = document.querySelector("#solusi");
const dropProduk = document.querySelector("#drop_produk");
const dropSolusi = document.querySelector("#drop_solusi");

// saat klik menu produk
document.querySelector("#menuProduk").onclick = () => {
    dropProduk.classList.toggle('active');

    // bila diklik, maka tanda panah ke atas dan sebaliknya
    if(dropProduk.classList.contains("active")) {
        produk.classList.remove('fa-chevron-down');
        produk.classList.add('fa-chevron-up');
    } else {
        produk.classList.remove('fa-chevron-up');
        produk.classList.add('fa-chevron-down');
    }

// bila menu solusi ditampilkan, maka isi menu solusi dihilangkan dan tanda diubah ke bawah
    if(solusi.classList.contains('fa-chevron-up')) {
        dropSolusi.classList.remove('active');
        solusi.classList.remove('fa-chevron-up');
        solusi.classList.add('fa-chevron-down');
    }
}

// saat klik menu solusi
document.querySelector("#menuSolusi").onclick = () => {
    dropSolusi.classList.toggle('active');

    // bila diklik, maka tanda panah ke atas dan sebaliknya
    if(dropSolusi.classList.contains("active")) {
        solusi.classList.remove('fa-chevron-down');
        solusi.classList.add('fa-chevron-up');
    } else {
        solusi.classList.remove('fa-chevron-up');
        solusi.classList.add('fa-chevron-down');
    }

// bila menu produk ditampilkan, maka isi menu produk dihilangkan dan tanda diubah ke bawah
    if(produk.classList.contains('fa-chevron-up')) {
        dropProduk.classList.remove('active');
        produk.classList.remove('fa-chevron-up');
        produk.classList.add('fa-chevron-down');
    }
}

//tombol menu diklik muncul menu-menu
const header = document.querySelector(".header");
const menu = document.querySelector(".text");
const btnPenjual = document.querySelector("#btnPenjual");

document.querySelector("#btnMenu").onclick = () => {
    if(menu.classList.contains("max-md:hidden")) {
        menu.classList.remove("max-md:hidden");
        menu.classList.add("max-md:block");
        header.classList.remove("max-md:hidden");
        header.classList.add("max-md:flex");
        btnPenjual.classList.add("max-md:hidden");
    } else {
        menu.classList.add("max-md:hidden");
        menu.classList.remove("max-md:block");
        header.classList.add("max-md:hidden");
        header.classList.remove("max-md:flex");
        btnPenjual.classList.remove("max-md:hidden");
    }
}