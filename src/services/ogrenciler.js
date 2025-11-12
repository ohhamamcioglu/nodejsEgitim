import ogrenciler from "../db/models/ogrenciler.js";

const getOgrenciler = async () => {
  const data = await ogrenciler.find();
  return data;
};

export {getOgrenciler};
