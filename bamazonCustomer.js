var mysql = require('mysql');
var prompt = require('prompt');

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
            console.log('\n', "ITEM ID: " + res[i].item_id);
            console.log("------------");
            console.log("PRODUCT: " + res[i].product_name);
            console.log("DEPARTMENT: " + res[i].department_name);
            console.log("PRICE: $" + res[i].price);
            console.log("STOCK: " + res[i].stock_quantity, '\n');

        }
        userDesire();
    });
};

function userDesire() {
    
};