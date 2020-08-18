const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test@cluster0-z9n1g.mongodb.net/NSAUSERDETAILS?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));