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

// Youtube 01:03:49 dan devam et

