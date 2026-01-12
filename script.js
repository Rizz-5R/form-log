// Tempat menyimpan data user (sementara)
let savedUser = {};


// FUNGSI SIGN UP
function signUp(event) {
event.preventDefault(); // Mencegah reload halaman


// Ambil nilai dari input
const username = document.getElementById('su-username').value;
const email = document.getElementById('su-email').value;
const password = document.getElementById('su-pass').value;


// Validasi input
if (!username || !email || !password) {
document.getElementById('signup-msg').innerText = "Semua field harus diisi!";
return;
}


// Simpan ke object
savedUser = {
username: username,
email: email,
password: password
};


// Tampilkan pesan sukses
alert("Sign Up berhasil");
}


// FUNGSI LOGIN
function login(event) {
event.preventDefault(); // Mencegah reload


// Ambil input login
const email = document.getElementById('lg-email').value;
const password = document.getElementById('lg-pass').value;


// Validasi input
if (!email || !password) {
document.getElementById('login-msg').innerText = "Email dan password harus diisi!";
return;
}


// Cek apakah data cocok
if (email === savedUser.email && password === savedUser.password) {
alert("Login berhasil!");
} else {
alert("Email atau password salah");
}
}

