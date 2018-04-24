CKEDITOR.plugins.add( 'html5img', {
    icons: 'html5img',
    init: function( editor ) {
    	editor.addCommand( 'insertHtml5img', {
            exec: function( editor ) {
            	$("input#cke_plgin_html5img_file").click();
            	
				///////
            }
        });
        editor.ui.addButton( 'Html5img', {
            label: '插入图片',
            command: 'insertHtml5img',
            toolbar: 'insert,10'
        });
        
        $("body").append(" <input id='cke_plgin_html5img_file' type='file' style='display:none;'>");
        
        $("input#cke_plgin_html5img_file").change(function(){
            var fileInfo = $("input#cke_plgin_html5img_file")[0].files[0];
            if(fileInfo.size > 1048576){
            	alert("图片文件过大！");
            	return;
            }
            //alert(fileInfo.type);
			if (/^image\//.test(fileInfo.type)) {
				$.when(readFileIntoDataUrl(fileInfo)).done(function (dataUrl) {
	                var imageElement = editor.document.createElement( 'img' );  
	                imageElement.setAttribute( 'alt', '' );  
	                imageElement.setAttribute( 'style', 'width:100%;' );  
	                imageElement.setAttribute( 'src', dataUrl );  
	                editor.insertElement( imageElement );  
					//execCommand('insertimage', dataUrl);
				});
			}else{
				alert("请选择图片文件！");
			}
            $("input#cke_plgin_html5img_file").val(null);
          });
    },
});

function readFileIntoDataUrl(fileInfo) {
	var loader = $.Deferred(),
		fReader = new FileReader();
		fReader.onload = function (e) {
		loader.resolve(e.target.result);
	};
	fReader.onerror = loader.reject;
	fReader.onprogress = loader.notify;
	fReader.readAsDataURL(fileInfo);
	return loader.promise();
};