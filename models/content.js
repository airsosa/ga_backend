"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: {type: String, required: ture},
    summary: String,
    body: String,
    type: String,
    path: String,
    image: String,
    user: { type: 'ObjectId', ref: 'User', default: null },
    meta: {
        published: Boolean,
    },
}, {timestamps: { createdAt: 'created' , updatedAt: 'updated'}});

const Content = mongoose.model('Content', contentSchema);

module.export = Content;