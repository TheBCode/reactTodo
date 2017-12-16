var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            //convert array into string for local storage
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        //convert string into array for return_display
        try {
           todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        // check to see if todo is valid array
        return $.isArray(todos) ? todos : [];

    }
};