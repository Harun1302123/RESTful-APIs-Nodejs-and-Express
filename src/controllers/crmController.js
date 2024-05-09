import mongoose from "mongoose";
import { contactSchema } from "../models/crmModel.js";

const Contact = mongoose.model('Contact', contactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);

    })
}
