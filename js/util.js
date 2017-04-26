function Comget(url, paramdata, successfun, errorfun) {
//	var currentUsercode;
//	if($.cookie('loginUser')){
//		currentUsercode = $.parseJSON($.cookie('loginUser')).code;
//	}
	$.ajax(url, {
		dataType: 'json',
//		data:paramdata,
		
		data:{params : JSON.stringify(paramdata)},
		headers: {'Content-Type': 'application/json'},
//		headers: {currentUsercode:currentUsercode},
		type:'get',
		timeout: 10000,
		success: function(data) {
			if(data.flag == 0) {
				if(typeof successfun == 'function') {
					successfun(data.data)
				} else {
					alert('调用网路请求语法有误')
				}
				//console.log('参数' + data.params)
			} else {
				if(typeof errorfun == 'function') {
					errorfun(data.desc)
				} else {
					alert(data.desc);
				}
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log("type:"+type+" errorThrown:"+errorThrown);
			if(type == 'timeout') {
				alert('网络繁忙，稍后再试');
			} else {
				alert('查询失败')
			}
		}
	});
};
function Compost(url,paramdata,successfun,errorfun){
//  var currentUsercode;
//  if($.cookie('loginUser')&&$.cookie('loginUser')!='null'){
//			currentUsercode = $.parseJSON($.cookie('loginUser')).code;
//		}
    $.ajax(url, {
		dataType: 'json',
		data:{params : JSON.stringify(paramdata)},
//		headers: {currentUsercode:currentUsercode},
		headers: {'Content-Type': 'application/json'},
		type: 'post',
		timeout: 10000,
		success: function(data){
			if(data.flag == 0){
				successfun(data.data)
			}else{
				if(typeof errorfun == 'function'){
					errorfun(data.desc)
				}else{
					if($.messager){
						$.messager.alert('提示消息', data.desc, 'error');
					}else{
						alert(data.desc);
					}
				}
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log("type:"+type+" errorThrown:"+errorThrown);
			if(type =='timeout'){
				if($.messager){
					$.messager.alert('提示消息', "网络繁忙，稍后再试", 'error');
				}else{
					alert('网络繁忙，稍后再试');
				}
			}else{
				if($.messager){
					$.messager.alert('提示消息', "请选择要修改的数据", 'error');
				}else{
					alert('查询失败');
				}
			}
		}
	});
};
function unique(arr,key) {
	var result = [], hash = {};
	for (var i = 0, elem; (elem = arr[i]) != undefined; i++) {
	    if (!hash[elem[key]]) {
	        result.push(elem);
	        hash[elem[key]] = true;
	    }
	}
	return result;
}

function isJson(str) {
	try{
		var obj = JSON.parse(str);
	}catch(e){
		return false;
	}
	return true;
}
