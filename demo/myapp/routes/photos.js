var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  Photo.find({},function(err,photos){
      if(err) return next(err);
      /*res.render('photos',{
      	title:'相册',
      	photos:photos
      });*/
      res.send({data: photos});
  });
});
router.get('/upload', function(req, res, next) {
  res.render('upload',{
		title:'上传照片',
	});
});
//文件上传路由
var multer  = require('multer');
var fs = require("fs");
var upload = multer({ dest: '/tmp/' })
var Photo = require("../models/Photo");
router.post('/upload', upload.array('image'), function(req, res, next) {

    console.log(req.files[0]);  // 上传的文件信息

    if(undefined == req.files[0]){
        res.json(['failed', {msg:"没有选择要上传的文件！"}]);
        return -1;
    }

    var des_file = "../public/photos/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
                res.json(['failed', {msg:err}]);
            }else{
                response = {
                    msg:'File uploaded successfully', 
                    filename:req.files[0].originalname,
                };
                console.log( response );
                res.json(['success', response]);
                var path = "/photos/"+req.files[0].originalname;
                var name = req.body.name;
                Photo.create({
                	name:name,
                	path:path
                });
            }
        });
    });
});
router.get('/del',function(req, res, next){
    Photo.remove({_id:req.query._id},function(err){
        if(err){
        	console.log(err);
        }else{
        	console.log("删除成功");
        }
    });
    res.redirect('/');	
});
//编辑照片路由
router.get('/edit',function(req,res,next){
  res.render('edit',{
    title:'编辑',
  });
});
module.exports = router;
