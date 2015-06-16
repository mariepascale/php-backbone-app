var ShopModel = Backbone.Model.extend({
    urlRoot : '../api/shop.php',
    defaults: {
        brand: "Default Brand",
        category: "Default Category",
        price: "Default Price"
    }
});

var ShopView = Backbone.View.extend({

    template:_.template($('#backbone-template').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

var ShopRouter = Backbone.Router.extend({
    routes:{
        "": "displayShop"
    },
    displayShop: function() {
        var shopModel = new ShopModel();

        var shopView = new ShopView({model:shopModel});
        shopModel.fetch({
            success: function () {
                $('#container').html(shopView.render().el);
            }
        });
    }
});

var shopRouter  = new ShopRouter();
Backbone.history.start();