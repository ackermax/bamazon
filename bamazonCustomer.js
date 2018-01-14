//NPM requirements (mySQL, console.table, and inquirer)
var mysql = require("mysql");
require("console.table");
var inquirer = require("inquirer");

//creating our connection to the database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    multipleStatements: true,
    user: 'root',
    password: 'epcot',
    database: 'bamazon'
});

//buiding the function to run when we run this JS file...
function custStart() {
    //connect to bamazon database
    connection.connect();
    //grab our products table and display it with console.table
    connection.query("CREATE TEMPORARY TABLE temp_products SELECT * FROM products; ALTER TABLE temp_products DROP product_sales; SELECT * FROM temp_products;", function (err, res) {
        if (err) throw err;
        console.table(res[2]);
        buyProduct();
    });
};

function buyProduct() {
    //ask our questions
    inquirer.prompt([
        {
            message: "What is the item_id of the item you wish to buy?",
            name: "id"
        },
        {
            message: "How many of the item do you wish to buy?",
            name: "quant"
        }
    ]).then(function (ans) {
        //if both numbers are integers we continue on
        var buying = Number(ans.quant);
        var prodId = Number(ans.id);
        if (buying % 1 === 0 && prodId % 1 === 0 && buying > 0) {
            //Grabbing the row with the proper product_id
            connection.query("SELECT * FROM products WHERE item_id= ?",
                [prodId],
                function (err, res) {
                    if (err) throw err;
                    //grab the stock quantity
                    var inStock = res[0].stock_quantity;
                    var price = Number(res[0].price);
                    var productName = res[0].product_name;
                    console.log("Checking stock of " + productName + " now!");
                    //compare the stock quantity with the quantity entered. If the quantity purchased was too high we say it is too high and end the transaction.
                    if (inStock < ans.quant) {
                        console.log("Sorry, but we have an insufficent quantity of that item compared to the quantity you tried to purchase. Back orders are coming in a future update.");
                        connection.end();
                    }
                    //otherwise we take their quantity 
                    else {
                        console.log("Subtracting " + buying + " from our stock and adding it to your cart.");
                        console.log("Your total for these " + buying + " items comes to $" + (buying * price) + ".");
                        connection.query("UPDATE products SET stock_quantity = stock_quantity - ?, product_sales = product_sales + ? WHERE item_id = ?", [buying, buying * price ,prodId], function (err, res) {
                            if (err) throw err;
                            console.log("Your purchase has been logged. Thank you for shopping at Bamazon!");
                            connection.end();
                        });
                    }

                });
        }
        //if they made the quantity a random number, we'll tell them off
        else if (buying < 0) {
            console.log("You cannot pick a negative quantity. We don't allow returns or trade-ins, thank you.");
            connection.end();
        }
        //otherwise we'll let them know those are not numbers and make them try again
        else {
            console.log("One or both of the values entered are not integers. Please only use whole numbers when answering the questions.");
            buyProduct();
        }
    });
};

console.log("Welcome to Bamazon! Loading our stock for you to peruse...")
custStart();