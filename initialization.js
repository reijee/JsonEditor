// 编辑器选项
const options = {
	language: 'zh',
	mode: 'code',
	modes: ['text', 'code', 'form', 'tree', 'view'], // allowed modes
	enableSort: false,
	onError: function (err) {
		//alert(err.toString())
	},
	onModeChange: function (newMode, oldMode) {
		//console.log('Mode switched from', oldMode, 'to', newMode)
	}
}

// 创建编辑器
var editor = new JSONEditor(document.getElementById("jsonEditor"), options);

// 设置默认数据
editor.set({
	'array': [1, 2, 3],
	'boolean': true,
	'color': '#82b92c',
	'null': null,
	'number': 123,
	'object': {'a': 'b', 'c': 'd'},
	'string': 'Hello World'
});

