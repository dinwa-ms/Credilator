//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };

    this.insertCustomer = function (Side, Name, Credits, data) {
        var topID = data.length + 1;
        data.push({
            id: topID,
            Side: Side,
            Name: Name,
            Credits: Credits
        });
        return data;
    };

    this.deleteCustomer = function (id, data) {
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i].id === id) {
                data.splice(i, 1);
                break;
            }
        }
    };

    this.doneSomething = function (id, data, total, done) {
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i].id === id) {
                if (!done) {
                    total = total + data[i].Credits;
                } else {
                    total = total - data[i].Credits;
                }
                break;
            }
        }
        return total;
    };

    this.todoSomething = function (id, data, total) {
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i].id === id) {
                if (total > data[i].Credits) {
                    res = 1;
                } else {
                    res = 0;
                }
                break;
            }
        }
        return res;
    };

    this.updateCustomer = function (id, Side, Name, Credits, data) {
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i].id === id) {
                var ori_data = data[i];
                data.splice(i, 1);
                break;
            }
        }
        if (!Side) {
            Side = ori_data.Side;
        }
        if (!Name) {
            Name = ori_data.Name;
        }
        if (!Credits) {
            Credits = ori_data.Credits;
        }


        data.push({
            id: id,
            Side: Side,
            Name: Name,
            Credits: Credits,
        });

    };

    this.getCustomer = function (id, data) {
        var topID = data.length + 1;
        alert(6);
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return data[i];
            }
        }
        return null;
    };

});