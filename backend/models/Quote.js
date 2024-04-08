const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    author: String,
    content: String,
    tags: [String],
    authorSlug: String,
    length: Number,
    dateAdded: Date,
    dateModified: Date
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;