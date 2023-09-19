// Definisi kelas Gempa
class Gempa {
  // Konstruktor dengan dua parameter: lokasi dan skala
  constructor(lokasi, skala) {
      this.lokasi = lokasi; // Variabel untuk menyimpan lokasi gempa
      this.skala = skala;   // Variabel untuk menyimpan skala gempa
  }

  // Metode untuk menentukan status gempa berdasarkan skala
  statusGempa() {
      if (this.skala < 2) {
          return "Tidak Terasa";
      } else if (this.skala >= 2 && this.skala < 4) {
          return "Bangunan Retak2";
      } else if (this.skala >= 4 && this.skala <= 6) {
          return "Bangunan Roboh";
      } else {
          return "Bangunan Roboh & berpotensi tsunami";
      }
  }
}

// Membuat 8 objek dari kelas Gempa dengan berbagai lokasi dan skala yang berbeda
const gempa1 = new Gempa("Lokasi A", 1.5);
const gempa2 = new Gempa("Lokasi A", 2);
const gempa3 = new Gempa("Lokasi A", 1.5);
const gempa4 = new Gempa("Lokasi A", 2);
const gempa5 = new Gempa("Lokasi A", 5.5);
const gempa6 = new Gempa("Lokasi A", 7);
const gempa7 = new Gempa("Lokasi A", 5.5);
const gempa8 = new Gempa("Lokasi A", 7);

// Menggunakan metode statusGempa untuk masing-masing objek dan mencetak hasilnya
console.log("Status Gempa 1 (Lokasi A, Skala 1.5):", gempa1.statusGempa());
console.log("Status Gempa 1 (Lokasi A, Skala 2):", gempa2.statusGempa());
console.log("Status Gempa 1 (Lokasi A, Skala 1.5):", gempa3.statusGempa());
console.log("Status Gempa 1 (Lokasi A, Skala 2):", gempa4.statusGempa());
console.log("Status Gempa 1 (Lokasi A, Skala 5.5):", gempa5.statusGempa());
console.log("Status Gempa 1 (Lokasi A, Skala 7):", gempa6.statusGempa());
console.log("Status Gempa 1 (Lokasi A, Skala 5.5):", gempa7.statusGempa());
console.log("Status Gempa 1 (Lokasi A, Skala 7):", gempa8.statusGempa());