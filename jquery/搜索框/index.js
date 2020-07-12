var test_items = [
	'高级程序设计'
	,'语言精粹'
	,'vue项目实战'
	,'Java编程实战'
	,'dom编程艺术'
	,'你不了解的css'
]

$(document).ready(function(){
	var $ul = $("#app ul");
	var isClick = false;

	//加载数据，写成一个函数
	var show_items = function(items){
		//先清空li
		$ul.children().remove();
		var items_len = items.length;
		for(var i = 0; i < items_len; i++){
			var li = $("<li index='"+i+"'>"+items[i]+"</li>");
			$ul.append(li);
		}
	}

	//第一次全部展示
	show_items(test_items);

	//监控input输入
	$("#inputValue").bind("input propertychange", function(){
		//新的值
		var newValue = $(this).val();
		if(newValue === ''){
			//全部展示
			show_items(test_items);
		}else {
			if(isClick){
				//清空候选
				$ul.children().remove();
			}
			else {
				var items = test_items.filter(function(item){
					return item.indexOf(newValue) > -1;
				});
				//重新刷新候选
				show_items(items);
			}

		}
		isClick = false;
	})

	//给ul绑定一个事件
	$ul.bind("click", function(e){
		var $target = $(e.target);
		var tagName = $target.prop("tagName");
		if('li' === tagName.toLowerCase()){
			//先把li里的内容赋值给input
			$("#inputValue").val($target.text());
			//把所有的候选清空掉
			$ul.children().remove();
			isClick = true;
		}
	})	
})

