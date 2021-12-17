const Car = require("../models/car.models");
const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
    try {

        const car = await Car.create(req.body);

        return res.status(201).json({ car });
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

router.get("/cars", async (req, res) => {
    try {
            const cars = await Car.find().lean().exec();
            return res.render(  "cars/carbooking",{
            cars,
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});

router.get("/cars/:id", async (req, res) => {
    try {
            const car = await Car.findById(req.params.id).lean().exec();
            return res.render( "cars/bookingSummary",{
            car,
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});

router.get("/cars/:id/checkout", async (req, res) => {
    try {
            const car = await Car.findById(req.params.id).lean().exec();
            return res.render( "cars/checkout",{
           car
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});



router.get("/:City", async (req, res) => {
    try {
            const car = await Car.find({City:req.params.City}).lean().exec();
            return res.render( "cars/carbooking",{
            car,
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});

module.exports = router;