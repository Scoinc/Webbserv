const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myServer', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

exports.storeElement = (element) => {
    element.save(()=> {
        console.log("Element has been saved")
    })
}
