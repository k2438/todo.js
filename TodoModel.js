/**
 * Modelクラス
 */
class TodoModel extends Observer {

    constructor() {
        super();
    }

    /**
     * ToDoの追加
     * @param value {string} ToDo
     */
    add(value) {
        this.trigger({type : 'add', value : value});
    }

    /**
     * ToDoの完了/未了 
     * @param element {DOM} ToDoのチェックボタン
     */
    check(element) {
        this.trigger({type : 'check', element : element});
    }

    /**
     * ToDoのカウント 
     */
    count() {
        this.trigger({type : 'count'});
    }

    /**
     * ToDoの削除
     * @param value {number} Todoの行番号
     */
    remove(element) {
        this.trigger({type : 'remove', element : element});
    }

}