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

	todoTmpl: _.template( $('#item-template').html() ),

	events: {
		'dblclick label': 	'edit',
		'keypress .edit': 	'updateOnEnter',
		'blur .edit': 		'close'
	},

	initialize: function() {
		this.$el = $('#todo');
	},

	render: function() {
		this.$el.html( this.todoTmpl( this.model.attributes ) );
		this.input = this.$('.edit');
		return this;
	},

	edit: function() {

	},

	close: function() {

	},

	updateOnEnter: function( event ) {

	}

});

// instantiate the backbone view

var todoView = new TodoView({ model: myTodo });

