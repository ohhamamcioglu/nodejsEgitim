import ogrenciler from "../db/models/ogrenciler.js";

export const getOgrenciler = async () => {
  const data = await ogrenciler.find();
  return data;
};

export const getOgrenci = async (id) => {
  const data = await ogrenciler.findById(id);
  return data;
};


