'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

schema.pre('save', function (next) {
    this.active = true;

    next();
});

module.exports = mongoose.model('Notification', schema);