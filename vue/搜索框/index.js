var test_items = [
	'高级程序设计'
	,'语言精粹'
	,'vue项目实战'
	,'Java编程实战'
	,'dom编程艺术'
	,'你不了解的css'
]

var app= new Vue(
		{
			el: "#app"
			,data: {
				items: [] //候选列表
				,inputValue: '' //输入框的值
				,isClick: false //记录输入框值的改变是不是点击事件引起的
			}
			,watch: {
				//监控输入框的值，更新候选列表
				inputValue(newValue,oldValue){
					//值为空的时候显示所有的数据
					if(newValue === '')
						this.items = test_items;
					else {
						if(!this.isClick) //如果不是点击而引起的输入框的值改变，那么要过滤一下候选列表
							this.items = test_items.filter(function(value){
								return value.indexOf(newValue) > -1;
							});
						else { //如果是点击事件引起的输入框的值变化，那么就把候选列表
							this.items = [];
						}
						this.isClick = false;
					}
				}
			}
			,methods: {
				liClick: function(item){
					//点击事件
					this.inputValue = item;
					this.items = [];
					this.isClick = true;
				}
			}
			,mounted: function(){
				//mounted阶段
				this.items = test_items;
			}
		}
	);