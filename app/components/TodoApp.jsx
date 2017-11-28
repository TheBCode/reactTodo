var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
        todos: [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Clean the yard'
            },
            {
                id: 3,
                text: 'Eat something'
            },
            {
                id:4,
                text: 'Get to bed on time'
            }
        ]
      };
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;