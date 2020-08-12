const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jslucassf:spatial-relations@cluster0.j4qcs.mongodb.net/sr-exp?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
