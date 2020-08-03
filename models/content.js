"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: {type: String, required: true},
    summary: String,
    body: String,
    type: String,
    path: String,
    image: String,
    user: { type: 'ObjectId', ref: 'User', default: null },
    meta: {
        published: {type: Boolean, default: true },
    },
}, {timestamps: { createdAt: 'created' , updatedAt: 'updated'}});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;