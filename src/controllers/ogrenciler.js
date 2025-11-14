import { getOgrenci, getOgrenciler } from "../services/ogrenciler.js";

export const getOgrencilerController =  async (req, res) => {
  const data = await getOgrenciler();
  res.status(200).send({
    mesaj: 'Ogrenciler',
    data: data,
  });
};

export const getOgrenciController = async (req,res) => {
  const ogrenciId = req.params.ogrenciId;
  const data = await getOgrenci(ogrenciId);
  if(!data){
    res.status(404).send({
      mesaj:'Öğrenci Datası Yok...'
    });
  }
  res.status(200).send({
    mesaj: 'Öğrenci Datası',
    data: data
  });

};

