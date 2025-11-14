import { Router } from 'express';
import { getOgrenciController, getOgrencilerController, } from '../controllers/ogrenciler.js';

const ogrenciRouter = Router();

ogrenciRouter.get('/', getOgrencilerController);

ogrenciRouter.get('/:ogrenciId', getOgrenciController);


export default ogrenciRouter;
