import { Router } from 'express';
import { dosyaOku, ogrenciEkle } from '../utils/file.js';
import { getOgrenciler } from '../services/ogrenciler.js';

const ogrenciRouter = Router();

ogrenciRouter.get('/ogrenci', async (req, res) => {
  const data = await dosyaOku;
  res.json({
    mesaj: 'ogrenci listesi',
    datasyi: data.length,
    durum: 'basarili',
    durumkod: 200,
    data: data,
  });
});

ogrenciRouter.get('/ogrenciler', async (req, res) => {
  const data = await getOgrenciler();
  res.status(200).send({
    mesaj: 'Ogrenciler',
    data: data,
  });
});

ogrenciRouter.post('/ogrenci', async (req, res) => {
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

export default ogrenciRouter;
