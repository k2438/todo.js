
var Todo = function() {}

Todo.prototype = {
	
	/**
	* Todoの追加
	* @param text {string} ToDo
	*/
	add : function(text) {
		// 要素作成
		var li = document.createElement('li');
			li.className = 'todo remaining';
		var form = document.createElement('form');
		var label = document.createElement('label');
		var input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'checkbox';
			input.addEventListener('change', this.check);
			input.addEventListener('change', this.count);
			input.addEventListener('change', this.change);
		var span = document.createElement('span');
		var span2 = document.createElement('span');
			span2.className = 'todo-title';
			span2.textContent = text;
		var button = document.createElement('button');		
			button.type = 'reset';
			button.className = 'btn remove bg-red';
			button.textContent = '削除';
			button.addEventListener('click', this.remove);
			button.addEventListener('click', this.count);
			
		// 構造化
		li.appendChild(form);
		form.appendChild(label);
		label.appendChild(input);
		label.appendChild(span);
		form.appendChild(span2);
		form.appendChild(button);

		// viewに追加
		document.getElementById('todos').appendChild(li);
	},
	
	/**
	* Todoのチェック
	* @param elm {object} 要素
	*/
	check : function(elm) {
		var element = elm.target.parentNode.parentNode.parentNode;
		var class_done = 'done';
		var class_remaining = 'remaining';
		if ((' ' + element.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + class_done + ' ') == -1) {
			element.classList.add(class_done);
			element.classList.remove(class_remaining);
		} else {
			element.classList.add(class_remaining);
			element.classList.remove(class_done);
		}
	},

	/**
	* Todoの削除
	* @param elm {object} 要素
	*/
	remove : function(elm) {
		var element = elm.toElement.parentNode.parentNode;
		element.parentNode.removeChild(element);
	},

	/**
	* Todoのカウント
	*/
	count : function() {
		var all = document.getElementById('all');
		var done = document.getElementById('done');
		var remaining = document.getElementById('remaining');

		var allCount = document.getElementsByClassName('todo').length;
		var doneCount = document.getElementsByClassName('done').length;
		var remainingCount = allCount - doneCount;

		all.childNodes[1].innerHTML = allCount;
		done.childNodes[1].innerHTML = doneCount;
		remaining.childNodes[1].innerHTML = remainingCount;
	},

	/**
	* 表示切り替え
	*/
	change : function() {
		var status = document.getElementsByClassName('active')[0].id;
	    var done_todos = document.getElementsByClassName('done');
	    var remaining_todos = document.getElementsByClassName('remaining');

	    if (status == 'remaining') {
	        for (var i = 0; i < done_todos.length; i++) {
	            done_todos[i].style.display = 'none';
	        }
	        for (var i = 0; i < remaining_todos.length; i++) {
	            remaining_todos[i].style.display = 'block';
	        }
	    } else if (status == 'done') {
	        for (var i = 0; i < remaining_todos.length; i++) {
	            remaining_todos[i].style.display = 'none';
	        }
	        for (var i = 0; i < done_todos.length; i++) {
	            done_todos[i].style.display = 'block';
	        }
	    } else {
	        for (var i = 0; i < done_todos.length; i++) {
	            done_todos[i].style.display = 'block';
	        }
	        for (var i = 0; i < remaining_todos.length; i++) {
	            remaining_todos[i].style.display = 'block';
	        }
	    }
	},
};