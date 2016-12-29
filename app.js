
document.addEventListener('DOMContentLoaded', function() {

    var todo = new Todo();

    /*
    * Todoの追加
    */
    document.getElementById('button').addEventListener('click', function() {
        var text = document.getElementById('text');
        if (!text.value) return;
        todo.add(text.value);
        todo.count();
        todo.change();
        text.value = '';
    }, false);

    /*
    * Todoのチェック
    */
    new Array().forEach.call(document.getElementsByClassName("checkbox"), function(e) {
        e.addEventListener('click', function(self) {
            todo.check(self);
            todo.count();
            todo.change();
        }, false);
     });

    /*
    * Todoの削除
    */
    new Array().forEach.call(document.getElementsByClassName("remove"), function(e) {
        e.addEventListener('click', function(self) {
            todo.remove(self);
            todo.count();
        }, false);
     });

    /*
    * 表示切り替え
    */
    new Array().forEach.call(document.querySelectorAll(('#btn-group button')), function(e) {
        e.addEventListener('click', function() {
            var current = document.getElementsByClassName('active')[0];
            current.classList.remove('active');
            this.classList.add('active');
            todo.change();
        }, false);
    });

}, false);