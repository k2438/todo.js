/**
 * イベント監視（Modelの監視）
 */
class Observer {
   
    constructor() {
        this.listeners = {};
    }

    /**
     * イベントリスナの追加
     * @param type イベントタイプ
     * @param callback
     */
    on(type, callback) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }

        this.listeners[type].push(callback);
    }

    /**
     * イベントリスナの削除
     * @param type イベントタイプ
     * @param callback
     */
    off(type, callback) {
        for (var i = 0; i < this.listeners[type]; i++) {
            if (this.listeners[type][i] == callback) {
                this.listeners[type].splice(i, 1);
            }
        }
    }

    /**
     * イベントの実行
     * @param event {array} イベントタイプ, [args]: 任意}
     */

    trigger(event) {
        if (this.listeners[event.type]) {
            for (var listener in this.listeners[event.type]) {
                this.listeners[event.type][listener].apply(this.listeners, arguments);
            }
        }
    }
}
