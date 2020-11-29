let multer = require('multer');

let userImageUploadStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');

    },
    filename: function (req, file, cb) {

        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        let fileName =  file.fieldname + '-' + Date.now()+ '.' +extension

        req[file.fieldname] = fileName;
        cb(null, fileName);
    }
})

exports.ImageUpload = multer({ storage: userImageUploadStorage });


