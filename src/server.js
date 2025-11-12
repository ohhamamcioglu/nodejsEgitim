import express from 'express';
import { pinoHttp } from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { dosyaOku, ogrenciEkle } from './utils/file.js';
import { getOgrenciler } from './services/ogrenciler.js';

dotenv.config();

const PORT = process.env.PORT;

export const createServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json()); //gelen butun istekleri json alabil..

  //app.use("/ogrenci", ()=>{}); //sadece ogrenci gelen istekleri kontrol et

  //app.use("*", ()=>{}); //tum istekleri kontrol et

  //yine tum istekleri kontrol et
  /* app.use((req,res,next)=>{
  //console.log(`url: ${req.url}, method: ${req.method}, date: ${new Date()}`);//loglama sistemi paketler de kurabiliyoruz bunu yerine
  next();
}); */

  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  /* app.use((error,req,res,next)=>{
  console.log('Hata');
}); */

  app.get('/', (req, res) => {
    res.send('Anasayfa');
  });

  /*const ogrenci = {
  id: 4,
  isim: 'Aziz',
  puan: 60,
  dil: 'Turkce',
};*/

  app.get('/ogrenci', async (req, res) => {
    const data = await dosyaOku();
    res.json({
      mesaj: 'ogrenci listesi',
      datasyi: data.length,
      durum: 'basarili',
      durumkod: 200,
      data: data,
    });
  });

  app.get('/ogrenciler', async (req,res)=> {
    const data = await getOgrenciler();
    res.status(200).send({
      mesaj: 'Ogrenciler',
      data: data,
    });
  });

  app.post('/ogrenci', async (req, res) => {
    const gelendata = req.body;
    const tumData = await dosyaOku();
    tumData.push(gelendata);
    await ogrenciEkle(tumData);
    res.json({
      mesaj: 'ogrenci basariyla kaydedildi.',
      durum: 'OK',
      durumkod: 201,
      data: gelendata,
    });
  });



  app.use((req,res)=> {
    res.status(404).send({
      durum: 404,
      mesaj: 'Sayfa Bulunamadı..',
    }
    );
  });//En son da kullanılır

  app.listen(PORT, () => {
    console.log('server baslatildi...');
  });
};
