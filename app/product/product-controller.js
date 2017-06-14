'use strict';

angular.module('markupChallenge.product', [])



.controller('productCtrl', ['$scope', function($scope) {
    var model = $scope.model = {
        selectedProduct: {},
        productList: [{
            name: "Williams-Sonoma Classic Apron, French Blue",
            id: "WSCA01",
            price: "19.95",
            smallProductPath: "assets/small/product-small-a.jpg",
            largeProductPath: "assets/large/product-large-a.jpg"
        }, {
            name: "Williams-Sonoma Classic Apron, Stripped Grey",
            id: "WSCA02",
            price: "20.95",
            smallProductPath: "assets/small/product-small-b.jpg",
            largeProductPath: "assets/large/product-large-b.jpg"
        }, {
            name: "Williams-Sonoma Classic Apron, Stripped Green",
            id: "WSCA03",
            price: "19.05",
            smallProductPath: "assets/small/product-small-c.jpg",
            largeProductPath: "assets/large/product-large-c.jpg"
        }, {
            name: "Williams-Sonoma Classic Apron, French Stripped Red",
            id: "WSCA04",
            price: "21.95",
            smallProductPath: "assets/small/product-small-d.jpg",
            largeProductPath: "assets/large/product-large-d.jpg"
        }],
        quantity: 1,
        price: ""
    };

    function init() {
        model.selectedProduct = model.productList[0];
        model.price = parseFloat(model.selectedProduct.price) * model.quantity;
        setTimeout(function() {
            angular.element(document.querySelectorAll('#' + model.selectedProduct.id)).addClass("product-items-img-active");
        }, 200);

        $("#accordion").accordion();
        
    }

    $scope.selectProductItem = function(productList) {
        model.selectedProduct = productList;
        model.price = parseFloat(model.selectedProduct.price) * model.quantity;
        angular.forEach(model.productList, function(item) {
            if(item.id === productList.id) {
                angular.element(document.querySelectorAll('#' + item.id)).addClass("product-items-img-active");
            } else {
                angular.element(document.querySelectorAll('#' + item.id)).removeClass("product-items-img-active");
            }
             
            
        }, this);
    };

    $scope.updatePrice = function() {
        model.price = parseFloat(model.selectedProduct.price) * model.quantity;
    };

    $scope.updateCart = function() {

    };

    init();

}]);