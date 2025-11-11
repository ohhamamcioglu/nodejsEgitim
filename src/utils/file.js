//import path from 'path';
//import fs from 'fs';   //senkron islem yaparken kullanilir fs.readFileSync()
import fsp from 'node:fs/promises'; //async işlemler için promises modülünü kullanilir await fs.readFile()

/*console.log(path.resolve());*/

//asenkron dosya icerigi okuma "node:fs/promises ile"
/*const data = await fsp.readFile('data.txt', 'utf-8');
console.log(data); */

// Senkron dosya icerigi okuma

/* fs.readFile('data.txt', 'utf-8', (err,data) => {
  console.log(data);
} ); */


// Dosya ismi degistirme
/* await fsp.rename('data.txt' , 'yeni-data.txt'); */


// Dosyalarin isimlerini klasorun icinde ne var ne yok onu verir/
/*
const dosyalar = await fsp.readdir('./');
console.log(dosyalar);
*/

const DATABASE_FILE = 'src/data/data.json';

export async function dosyaOku(){
  try {
    const data = await fsp.readFile(DATABASE_FILE, 'utf-8');
    return JSON.parse(data);

  } catch (error) {
    console.log('error:', error);
  }
}

export async function ogrenciEkle(yeniOgrenci){
  try {
    await fsp.writeFile(DATABASE_FILE, JSON.stringify(yeniOgrenci),null,2);

  } catch (error) {
    console.log('error:', error);

  }
}

const yeniOgrenciData = {
  id: 2,
  isim: "Mehmet",
  puan: "86",
  ders: "İng"
};

async function main() {
  const tümOgrenciler = await dosyaOku();
  tümOgrenciler.push(yeniOgrenciData);
  await ogrencıEkle(tümOgrenciler);

}


