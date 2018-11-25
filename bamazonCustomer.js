var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "##UCLA##",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log('\n', "ITEM ID: " + res[i].item_id + '');
            console.log("------------" + '');
            console.log("PRODUCT: " + res[i].product_name + '');
            console.log("DEPARTMENT: " + res[i].department_name + '');
            console.log("PRICE: $" + res[i].price + '');
            console.log("STOCK: " + res[i].stock_quantity + '', '\n');

        }
        userDesire();

    });
};

function userDesire() {

    inquirer.prompt([{
            type: 'input',
            name: 'item_id',
            message: 'Please choose a product. Enter the Item ID of the product you desire.'
        },
        {
            type: 'input',
            name: 'stock_quantity',
            message: 'Ok, good choice! How many would you like to purchase?'
        }
    ]).then(function (input) {

        var item = input.item_id;
        var amount = input.stock_quantity;

        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, {
            item_id: item
        }, function (err, data) {
            if (err) throw err;

            if (data.length === 0) {
                console.log("ERROR: Invalid Item ID. Please try again.");
                connection.end();
            } else {
                var itemData = data[0];

                if (amount <= itemData.stock_quantity) {
                    console.log("Awesome, we'll go ahead and start on your order.");

                    var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (itemData.stock_quantity - amount) + ' WHERE item_id = ' + item;

                    connection.query(updateQueryStr, function (err, data) {
                        if (err) throw err;

                        console.log("Thanks! Your order has been processed. Your total payment for today is $" + itemData.price * amount);
                        console.log("\n---------------------------------------------------------------------\n");

                        connection.end();
                    })


                } else {
                    console.log("Sorry, there is not enough " + "'" + itemData.product_name + "'" + " in stock. Please reload.");
                    connection.end();
                }
            }  

            



        })

    })
}