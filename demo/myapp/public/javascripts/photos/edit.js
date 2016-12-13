$("#image").change(function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
        $("#nowImage").attr("src", this.result);
        $(".file_image").val(this.result);
    };
});
var OL_Action_Root = "http://localhost:3000/photos";
function Req_ajax()
{ 
            var formData = new FormData($("#imagelist")[0]);
                $.ajax({
                    url: OL_Action_Root+'/edit',
                    type: 'POST',
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(data){
                        var res = data;
                        if(res[0] == 'success')
                        {

                            document.getElementById("status").innerHTML = "<span style='color:green'>文件上传成功！<br>文件名为："+res[1].filename+"</span>";
                            alert("修改成功");
                            history.go(0);    
                        }
                        else
                        {
                            document.getElementById("status").innerHTML = "<span style='color:#EF0000'>文件上传失败！<br>原因是："+res[1].msg+"</span>";
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        document.getElementById("status").innerHTML = "<span style='color:#EF0000'>连接不到服务器，请检查网络！</span>";
                    }
                });
        }