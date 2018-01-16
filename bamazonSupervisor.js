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

//setting our mainMenu function to run us through choices for the supervisor
function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do, Supervisor?",
            choices: ["View Product Sales By Department", "Create New Department", "Log Off"],
            name: "choice"
        }
    ]).then(function (ans) {
        switch (ans.choice) {
            case "View Product Sales By Department":
                console.log("Grabbing sales data now...");
                viewSales();
                break;

            case "Create New Department":
                createDept();
                break;

            default:
                console.log("Logging off. Until next time, Supervisor.");
                connection.end();
        }
    })
};

function viewSales() {
    connection.query("SELECT departments.department_id, departments.department_name, departments.over_head_costs ,IFNULL(SUM(products.product_sales), 0) - departments.over_head_costs AS total_profit FROM departments LEFT JOIN products ON (departments.department_name = products.department_name) GROUP BY department_name ORDER BY departments.department_id", function (err, res) {
        console.table(res);
        mainMenu();
    });
};

function createDept() {
    inquirer.prompt([
        {
            message: "What would you like to call this new department?",
            name: "name"
        },
        {
            message: "What is the overhead cost of this new department?",
            name: "overhead"
        }
    ]).then(function(ans){
        console.log("Creating the " + ans.name + " department now.");
        connection.query("INSERT INTO departments (department_name, over_head_costs) VALUES (?,?)", [ans.name, ans.overhead], function(err, res){
            if (err) throw err;
            console.log(ans.name + " sucessfully added!");
            mainMenu();
        })
    });
};

//connect and launch our mainMenu function
connection.connect();
mainMenu();