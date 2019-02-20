import * as express from "express";
import { Car } from "../models/Car";

const router = express.Router();

router.get('/', (req, res) => {
    Car.findAll()
    .then(cars => {
        res.render('./car/list', {list: cars});
    })
    .catch(err => res.send(err));
});

export default router;