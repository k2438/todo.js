/**
 * Controllerクラス
 */
class TodoController {
    
    constructor(model) {
        this.model = model;
    }

    /**
     * ToDoの追加
     * @param value {string} ToDo
     */
    add(value) {
        this.model.add(value);
    }

    /**
     * ToDoの完了/未了 
     * @param element {DOM} ToDoのチェックボタン
     */
    check(element) {
        this.model.check(element);
    }

    /**
     * ToDoのカウント 
     */
    count() {
        this.model.count();
    }

    /**
     * ToDoの削除
     * @param element {DOM} ToDoの削除ボタン
     */
    remove(element) {
        this.model.remove(element);
    }

}