//NPM requirements (mySQL, console.table, and inquirer)
var mysql = require("mysql");
require("console.table");
var inquirer = require("inquirer");

//creating our connection to the database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',
    password: 'epcot',
    database: 'bamazon'
});

//main menu function
function mainMenu() {

    inquirer.prompt([
        {
            type: "list",
            message: "Hello Mr. Manager. What task would you like to complete?",
            name: "menu",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Log Off"]
        }
    ]).then(function (ans) {
        //based on what our Manager (no Mr.) selects we'll run a function
        switch (ans.menu) {
            case "View Products for Sale":
                viewProducts();
                break;

            case "View Low Inventory":
                lowInventory();
                break;

            case "Add to Inventory":
                addInventory();
                break;

            case "Add New Product":
                addProduct();
                break;

            default:
                console.log("Logging off Mr. Manager. There's always money in the banana stand.");
                //end connection with database
                connection.end();
        }
    });
};

//viewProducts function
function viewProducts() {
    //grab our products table and display it with console.table
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    });
};

//lowInventory function
function lowInventory() {
    //confirm to Mr. Manager what we're doing
    console.log("Displaying all items with stock of less than 5. Time to place a reorder!");
    //grab all products with inventory under 5
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        //display those items!
        console.table(res);
        mainMenu();
    });
};

//addInventory function
function addInventory() {
    //ask our questions
    inquirer.prompt([
        {
            message: "What is the item_id of the item you wish to add inventory to?",
            name: "id"
        },
        {
            message: "How much inventory are we adding, Mr. Manager?",
            name: "quant"
        }
    ]).then(function (ans) {
        //if both numbers are integers we continue on
        var buying = Number(ans.quant);
        var prodId = Number(ans.id);
        if (buying % 1 === 0 && prodId % 1 === 0 && buying > 0) {
            //Grabbing the row with the proper product_id and adding inventory to it
            connection.query("UPDATE products SET stock_quantity = stock_quantity + ? WHERE item_id = ?", [buying, prodId], function (err, res) {
                if (err) throw err;
                console.log("Succesfully added " + buying + " to the total quantity of item_id " + prodId + ".");
                mainMenu();
            });
        }
        //otherwise we'll let them know those are not numbers and make them try again
        else {
            console.log("One or both of the values entered are not integers. Please only use whole numbers when answering the questions. Mr. Manager, you should know better than this...");
            addInventory();
        }
    });
}


//addProduct function
function addProduct() {

};

//start by running mainMenu and connecting to database
connection.connect();
mainMenu();