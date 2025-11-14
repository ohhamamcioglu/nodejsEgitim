import { HttpError } from 'http-errors';


export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).send({
      mesaj: err.message,
      durum: err.status,
    });
  }
  res.status(500).send({
    mesaj: 'Sunucu Hatası..',
    durum: 500,
  });
};
