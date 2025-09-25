const truths = [
  "Apa rahasia terbesarmu yang belum pernah kamu ceritakan ke siapa pun?",
  "Siapa orang yang paling sering kamu stalk di media sosial?",
  "Pernah suka sama teman sendiri? Siapa?",
  "Hal paling malu yang pernah kamu lakukan di sekolah?",
  "Siapa gebetan pertamamu?",
  "Pernah bohong ke orang tua? Tentang apa?",
  "Apa kebiasaan aneh yang kamu punya?",
  "Siapa orang yang kamu anggap paling keren di kelas?",
  "Pernah ngirim chat ke orang yang salah? Ceritain dong!",
  "Apa mimpi teraneh yang pernah kamu alami?",
  "Siapa teman yang paling sering bikin kamu kesel?",
  "Pernah nyontek pas ujian? Gimana caranya?",
  "Siapa teman yang paling kamu percaya?",
  "Pernah suka sama guru sendiri?",
  "Apa ketakutan terbesarmu?",
  "Pernah ketahuan bohong sama temen? Ceritain!",
  "Apa username sosmed paling cringe yang pernah kamu pakai?",
  "Siapa yang paling kamu kangenin saat ini?",
  "Pernah nangis gara-gara film? Film apa?",
  "Apa kebiasaan unik keluargamu di rumah?",
  "Pernah suka sama pacar temen sendiri?",
  "Apa hal paling random yang pernah kamu lakukan?",
  "Siapa orang yang pernah bikin kamu baper banget?",
  "Kalau bisa jadi siapa aja sehari, mau jadi siapa?",
  "Pernah mimpi buruk sampai ketakutan sendiri?",
  "Apa makanan terenak menurutmu tapi nggak banyak orang suka?",
  "Pernah dighosting? Sama siapa?",
  "Siapa teman lawan jenis yang paling dekat sama kamu?",
  "Apa lagu yang sering kamu dengerin waktu galau?",
  "Apa penyesalan terbesar dalam hidupmu?",
  "Pernah ketahuan suka sama seseorang?",
  "Siapa seleb yang paling kamu suka?",
  "Apa hal paling aneh di HP-mu sekarang?",
  "Pernah stalking mantan?",
  "Apa chat terakhir di WhatsApp?",
  "Siapa orang yang selalu bikin kamu ketawa?",
  "Apa kebiasaan paling ngeselin temenmu?",
  "Pernah ketiduran pas lagi chat sama siapa?",
  "Apa nickname panggilan yang paling kamu suka?",
  "Apa jurusan/kerja impianmu di masa depan?",
  "Pernah ngaku-ngaku sakit biar nggak sekolah?",
  "Apa meme favoritmu?",
  "Kalau bisa pergi ke mana aja sekarang, mau ke mana?",
  "Siapa yang terakhir kali kamu chat?",
  "Pernah pura-pura ngerti padahal nggak?",
  "Apa hal paling random yang pernah ada di history browser-mu?",
  "Pernah suka sama dua orang sekaligus?",
  "Apa skill tersembunyi yang orang lain nggak tahu?",
  "Apa hal paling konyol yang pernah kamu percayai waktu kecil?",
  "Siapa teman yang paling kamu rindukan sekarang?"
];
const dares = [
  "Upload foto jelekmu ke story selama 5 menit!",
  "Coba ngomong pakai bahasa planet selama 1 menit.",
  "Chat mantan dengan salam random.",
  "Tiru suara hewan pilihan teman.",
  "Ganti nama kontak teman jadi 'Crush' selama sehari.",
  "Telepon orang tua dan bilang 'Aku kangen'.",
  "Bikin video TikTok joget viral sekarang juga!",
  "Bicara tanpa huruf 'a' selama 1 menit.",
  "Baca chat terakhir di WhatsApp dengan suara keras.",
  "Selfie dengan ekspresi paling aneh dan kirim ke grup.",
  "Ucapkan 'Aku suka kamu' ke orang random di chat.",
  "Jadi admin grup selama sehari.",
  "Buat pantun spontan tentang salah satu teman.",
  "Ceritakan mimpi teraneh yang pernah kamu alami.",
  "Tiru gaya jalan seleb favoritmu.",
  "Update status WA 'Aku lagi baper banget'.",
  "Minta pulsa ke teman lewat chat.",
  "Nyanyikan lagu favoritmu sekarang.",
  "Ganti foto profil jadi foto kartun selama 1 hari.",
  "Bikin story fake cry 10 detik.",
  "Bicara dengan emoticon aja selama 10 menit.",
  "Tulis puisi tentang makanan favoritmu.",
  "Kasih compliment ke 3 teman di chat.",
  "Ceritain pengalaman paling memalukan di sekolah.",
  "DM selebgram dan bilang 'semangat ya kak!'",
  "Jadi background Zoom/Google Meet paling absurd.",
  "Bicara dengan logat daerah selama 2 menit.",
  "Selfie dengan benda warna ungu dan upload.",
  "Bikin video tutorial random (misal: cara makan kerupuk).",
  "Jadi MC dadakan di grup selama 15 menit.",
  "Tulis status 'Aku suka kamu' tanpa konteks.",
  "Ganti ringtone HP jadi suara sendiri.",
  "Nyanyi lagu anak-anak dengan suara keras.",
  "Chat orang random: 'Aku mimpiin kamu semalam'.",
  "Ucapkan kata 'uwu' di setiap kalimat selama 5 menit.",
  "Tiru gaya bicara guru favoritmu.",
  "Story 'Aku lagi nyari jodoh, ada yang mau?'",
  "Bikin caption IG random tanpa makna.",
  "Tiru ekspresi emoji favoritmu.",
  "Tulis surat cinta untuk makanan.",
  "Pura-pura jadi YouTuber selama 1 menit.",
  "Selfie dengan gaya duck face lalu upload.",
  "Cerita horor random ke grup.",
  "Tulis pantun gombal di chat teman.",
  "Tiru suara alarm HP.",
  "Ganti status WA jadi 'Ngantuk banget'.",
  "Buat video lipsync lagu pilihan teman.",
  "Tulis di grup: 'Ada yang kangen aku nggak?'",
  "Cerita pengalaman lucu masa kecil."
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("truthBtn").onclick = function() {
  showOutput(randomFrom(truths));
};
document.getElementById("dareBtn").onclick = function() {
  showOutput(randomFrom(dares));
};

function showOutput(text) {
  const out = document.getElementById('output');
  out.style.opacity = 0;
  setTimeout(() => {
    out.innerHTML = text;
    out.style.opacity = 1;
  }, 300);
}
