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

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err); 
        }
        res.json(contact);
    })
}
export const updateContactById = (req, res) => {
    Contact.findByIdAndUpdate(req.params.contactId, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err); 
        }
        res.json(contact);
    })
}

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err); 
        }
        res.json({ message: 'Successfully deleted contact!'});
    })
}