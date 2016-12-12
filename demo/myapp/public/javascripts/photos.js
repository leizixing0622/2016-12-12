var OL_Action_Root = "http://localhost:3000/photos";
$(".del").on('click',function(){
	var _id = $(this).find("input").val();
	if(confirm("确定要删除吗？")){
		$.get( OL_Action_Root+'/del?_id='+_id, function(data){
		    history.go(0) ;
		});	
	}
})
$(".edit").on('click',function(){
	var _id = $(this).find("input").val();
	modalAdd("myModal",OL_Action_Root+"/edit?_id="+_id);
})
function modalAdd(id,url){
	$("#"+id).modal();
	$(".modal-content").load(url);
}