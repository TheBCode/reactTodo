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
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        //Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });


        //Sort todos with non-completed 1st
        filteredTodos.sort((a, b) => {
           if (!a.completed && b.completed) {
               return -1;
           } else if (a.completed && !b.completed) {
               return 1;
           } else {
               return 0;
           }
        });

        return filteredTodos;
    }
};