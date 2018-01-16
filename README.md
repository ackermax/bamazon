# Bamazon - The Command Line Shopping App!

With Bamazon you can create, manage, purchase, and supervise over your own command line shopping system! Customers can view and purchase items. Managers can view sales, add inventory, and add items. Supervisors can view department sales and even add new departments! It's for you! It's for me! It's even for little Timmy! It's for everyone! 

## Getting Started

After cloning down the repository, use the included schema.sql to create your own database. Then make sure bamazonCustomer.js, bamazonManager.js, and bamazonSupervisor.js are connected to your mySQL server. Run the js files in node and watch the magic happen!

### Prerequisites

1) Node.JS
2) Please make sure to install the required npm packages with an "npm install" command in the cloned down directory!


## Example Functionality

### bamazonCustomer.js
![Alt text](/readme-images/customer.gif "Customer Demo")
Customers upon loading the file will be shown a list of all items in the store, and then asked which item they would like to purchase and the quantity they would like to obtain. They will then be told how much money they owe as those contents are removed from the database and the profit is added to the table that will not be shown to them.

### bamazonManager.js
![Alt text](/readme-images/manager.gif "Manager Demo")
Managers can see the entire table of products (including profit made per item), see which items need to be restocked, add inventory to previously created items, and add new items to departments that have been set by the Supervisor.

### bamazonSupervisor.js
![Alt text](/readme-images/supervisor.gif "Supervisor Demo")
Supervisors can view profits (or losses) by department, and add a department with an operating budget. Try not to break the bank, though. You still have to answer to the owners, after all...

## Author

* **Max Ackerman**

## Acknowledgments

* Thanks to the UCF Coding Boot Camp for an exciting project!

