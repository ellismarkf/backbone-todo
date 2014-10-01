// defining the backbone model

var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
 	}
});

// instantiating the Todo model with a title attribute. completed attributed defaults to false

var myTodo = new Todo({
	title: 'learn everything about Backbone'
});

// define the backbone view
var TodoView = Backbone.View.extend({
	tagname: 'li',

	todoTmpl: _.template($('#item-template'))
})

