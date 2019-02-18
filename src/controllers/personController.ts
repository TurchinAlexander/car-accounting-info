import * as express from "express";
import { Person } from "../models/Person";
import { Car } from "../models/Car";
import { reduce } from "bluebird";

const router = express.Router();

router.get('/', (req, res) => {
    Person.findAll()
    .then(persons => {
        res.render('person/list', {list: persons});
    })
    .catch(err => res.send(err));
});

router.get("/new", (req, res) => {
    res.render("person/newOrEdit");
});

router.post("/new", (req, res) => {
    Person.create(req.body)
    .then(() => res.redirect('/persons'))
    .catch(err => res.send(err));
});

router.get("/:id/edit", (req, res) => {
    Person.findById(req.params.id)
    .then((person) => res.render("person/newOrEdit", {viewTitle: "Update Person", person}))
    .catch(err => res.send(err));
});

router.post("/:id/edit", (req, res) => {
    Person.update(req.body, {where: { id: req.params.id }})
    .then(() => res.redirect("/persons"))
    .catch(err => res.send(err));
})

router.get("/:id/delete", (req, res) => {
    Person.destroy({where: {id: req.params.id}})
    .then(() => res.redirect('/persons'));
})

router.get("/:id/cars", (req, res) => {
    Car.findAll({where: {personId: req.params.id}})
    .then((cars) => res.render('car/list', {fromPerson:req.params.id, list: cars}))
    .catch(err => res.send(err));
})

router.get("/:id/cars/new", (req, res) => {
    res.render('car/newOrEdit', {personId: req.params.id});
})

router.post("/:id/cars/new", (req, res) => {
    Car.create(req.body)
    .then(() => res.redirect(`/persons/${req.params.id}/cars`))
    .catch(err => res.send(err));
})


export default router;