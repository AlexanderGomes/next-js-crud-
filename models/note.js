const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: [true, 'please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'description cannot be more than 40 characters']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', noteSchema);