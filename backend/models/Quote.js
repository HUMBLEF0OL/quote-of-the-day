const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true,
        auto: true,
        index: true
    },
    author: String,
    content: String,
    tags: [String],
    authorSlug: String,
    length: Number,
    dateAdded: Date,
    DateModified: Date
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;