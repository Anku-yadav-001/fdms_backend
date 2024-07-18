const path   = require('path'),
	multer   = require("multer"),
		storage = multer.diskStorage({ destination: function (req, file, cb) { 
			cb(null, path.resolve(__dirname, "../upload/")); 
		},
		filename: function (req, file, cb) { 
			cb(null, Date.now() + file.originalname); 
		}
	});

module.exports = { upload: multer({ storage: storage }) };
