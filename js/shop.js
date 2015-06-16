var MessageModel = Backbone.Model.extend({
    urlRoot : '../api/shop.php',
    defaults: {
        brand: "Default Brand",
        category: "Default Category",
        price: "Default Price"
    }
});

var MessageView = Backbone.View.extend({

    template:_.template($('#backbone-template').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

var MessageRouter = Backbone.Router.extend({
    routes:{
        "": "displayMessage"
    },
    displayMessage: function() {
        var messageModel = new MessageModel();

        var messageView = new MessageView({model:messageModel});
        messageModel.fetch({
            success: function () {
                $('#container').html(messageView.render().el);
            }
        });
    }
});

var messageRouter  = new MessageRouter();
Backbone.history.start();