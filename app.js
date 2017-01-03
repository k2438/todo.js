/**
 * Appクラス（Main）
 */
class App {
    constructor() {
        var model = new TodoModel();
        var controller = new TodoController(model);
        var view = new TodoView(model, controller);
    }
}