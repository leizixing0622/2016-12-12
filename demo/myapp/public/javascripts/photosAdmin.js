$(function(){
var OL_Action_Root = "http://localhost:3000/photos";
    $("#photos").dataTable({
    	"ajax":{
	    	"url":OL_Action_Root+"/getAll"
	    }
    });
});