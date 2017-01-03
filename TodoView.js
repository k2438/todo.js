/**
 * Viewクラス
 */
class TodoView {

    constructor(model, controller) {
        var self = this;

        this.model = model;
        this.controller = controller;

        // ToDoの内容
        this.text = document.getElementById('text');
        // ToDoリスト
        this.todos = document.getElementById('todos');

        // ToDO追加ボタン
        this.addButton = document.getElementById('button');
        this.addButton.addEventListener('click', function () {
            controller.add(self.text.value);
            controller.count();
            self.change();
        });

        // 表示切り替え
        var buttons = document.querySelectorAll('#btn-group button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                var current = document.getElementsByClassName('active')[0];
                current.classList.remove('active');
                this.classList.add('active');
                self.change();
            });
        }

        // イベントリスナを追加
        model.on('add', function (event) {
            self.add(event.value);
        });

        model.on('check', function (event) {
            self.check(event.element);
        });

        model.on('count', function () {
            self.count();
        });

        model.on('remove', function (event) {
            self.remove(event.element);
        });
  
    }

    /**
     * タスクの追加
     * @param value タスク内容
     */
    add(value) {
        var self = this;
        // 要素作成
        var li = document.createElement('li');
        li.className = 'todo remaining';
        var form = document.createElement('form');
        var label = document.createElement('label');
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'checkbox';
        input.addEventListener('change', function() {
            self.controller.check(this);
            self.controller.count();
            self.change();
        });
        var span = document.createElement('span');
        var span2 = document.createElement('span');
        span2.className = 'todo-title';
        span2.textContent = value;
        var button = document.createElement('button');      
        button.type = 'reset';
        button.className = 'btn remove bg-red';
        button.textContent = '削除';
        button.addEventListener('click', function() {
            self.controller.remove(this);
            self.controller.count();
            self.change();
        });
            
        // 構造化
        li.appendChild(form);
        form.appendChild(label);
        label.appendChild(input);
        label.appendChild(span);
        form.appendChild(span2);
        form.appendChild(button);

        // viewに追加
        this.todos.appendChild(li);

        this.text.value = '';
    }

    /**
     * ToDoの完了/未了 
     * @param element {DOM} ToDoのチェックボタン
     */
    check(element) {
        var elm = element.parentNode.parentNode.parentNode;
        var class_done = 'done';
        var class_remaining = 'remaining';
        if ((' ' + elm.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + class_done + ' ') == -1) {
            elm.classList.add(class_done);
            elm.classList.remove(class_remaining);
        } else {
            elm.classList.add(class_remaining);
            elm.classList.remove(class_done);
        }
    }

    /**
     * ToDoのカウント
     */
    count() {
        var all = document.getElementById('all');
        var done = document.getElementById('done');
        var remaining = document.getElementById('remaining');

        var allCount = document.getElementsByClassName('todo').length;
        var doneCount = document.getElementsByClassName('done').length;
        var remainingCount = allCount - doneCount;

        all.childNodes[1].innerHTML = allCount;
        done.childNodes[1].innerHTML = doneCount;
        remaining.childNodes[1].innerHTML = remainingCount;
    }

    /**
     * 表示切り替え
     */
    change() {
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
    }

    /**
     * ToDoの削除
     * @param element {DOM} ToDoの削除ボタン
     */
    remove(element) {
        var elm = element.parentNode.parentNode;
        elm.parentNode.removeChild(elm);
    }

}