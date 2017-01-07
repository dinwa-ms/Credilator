


//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
app.controller('CustomersController', function ($scope, $http, customersService, $rootScope) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below

    $http.get('app/customerData/customerData.json').success(function(data) {
        if (typeof($scope.customers)=="undefined") {
          $scope.customers = data;
          $scope.total = 0;
        };
        if (typeof($rootScope.globalVar)=="undefined") {
          $rootScope.globalVar = $scope.customers;
        };
    }).error(function(){alert("error")});

    $scope.insertCustomer = function () {
        var Side = $scope.newCustomer.Side;
        var Name = $scope.newCustomer.Name;
        var Credits = $scope.newCustomer.Credits;

        var data = $scope.customers;

        $rootScope.globalVar = customersService.insertCustomer(Side, Name, Credits, data);
        $scope.newCustomer.Side = '';
        $scope.newCustomer.Name = '';
        $scope.newCustomer.Credits = '';
    };

    $scope.updateCustomer = function (id) {
        
        var Side = $scope.newCustomer.Side;
        var Name = $scope.newCustomer.Name;
        var Credits = $scope.newCustomer.Credits;

        var data = $scope.customers;

        customersService.updateCustomer(id, Side, Name, Credits, data);
        
        $scope.newCustomer.Side = '';
        $scope.newCustomer.Name = '';
        $scope.newCustomer.Credits = '';
    };

    $scope.deleteCustomer = function (id) {
        var data = $scope.customers;
        customersService.deleteCustomer(id, data);
    };

    $scope.doneSomething = function (done, id) { 
        var data = $scope.customers;
        var total = $scope.total;
        $scope.total = customersService.doneSomething(id, data, total, done);
        alert($scope.total);
    };

    $scope.todoSomething = function (id) { 
        var data = $scope.customers;
        var total = $scope.total;
        var res = customersService.todoSomething(id, data, total);
        if (res == 1) {
          alert("Yes, you can.");
        } else {
          alert("Sorry, you can't.");
        }
    };
});