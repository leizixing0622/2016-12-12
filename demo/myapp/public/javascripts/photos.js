var OL_Action_Root = "http://localhost:3000/photos";
$("#photoAdd").on('click',function(){
	modalAdd("myModal",OL_Action_Root+"/upload");
});
$("#photoDel").on('click',function(){
	var _id = $(this).find("input").val();
	if(confirm("确定要删除吗？")){
		$.get( OL_Action_Root+'/del?_id='+_id, function(data){
		    history.go(0) ;
		});	
	}
})
$("#photoEdit").on('click',function(){
	var urls = OL_Action_Root+"/edit?_id=";
	comShowEdit(exampleTable,urls,"_id");
})
function modalAdd(id,url){
	$("#"+id).modal();
	$(".modal-content").load(url);
}
function comShowEdit(tabs,urls,strs){
	rowData = tabs.rows('.selected').data();
	if(rowData.length==0 || rowData.length>1){
		alert("请选择一条记录");
		return;
	}else{
		modalAdd("myModal",urls+eval("rowData[0]." +strs));
	}
}