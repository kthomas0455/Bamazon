var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
	host: "localhost",
	port: 3308,
	user: 'root',
	password: 'root',
	database: "bamazon_db"
})

console.log("Welcome to Boujie Amazon!");

connection.connect(function(err){
	if (err) throw err;
	console.log("connect as " + connection.threadId);
	start();
})

var start = function (){
	inquirer.prompt(
	{
		name: "welcome",
		type: "list",
		message: "Hey there, would you like to purchase one of our products?",
		choices: ["YES", "NO"]
	}).then(function(answer) {
		if (answer.welcome.toUpperCase() == "YES"){
			ourProducts();
		}
		else {
			console.log("Goodbye");
			return;
		}
	})
};

var ourProducts = function (){
connection.query('SELECT * FROM products', function(err, res) {
    for (var i = 0; i < res.length; i++) {

        console.log(res[i].itemID + " | " + res[i].productName + " | " + res[i].departmentName + " | " + "$" + res[i].price);
    }
    console.log("-----------------------------------");

    setTimeout(function() {nextAsk();}, 3000);
})
};

var nextAsk = function (){
	inquirer.prompt([
	{
		name: "productid",
		type: "list",
		message: "Choose the ID of the product you wish to purchase:",
		choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
	},	
	{
		name: "productunits",
		type: "input",
		message: "How many of this product would you like to puchase?",
		validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
	}]).then(function(answer) {
		console.log("-----------CHECK OUT------------------------");
			checkQuantity(answer);
	})
};

var checkQuantity = function(answer) {
	console.log("Checking my stock");
	var query = 'SELECT stockQuantity, price FROM products WHERE itemID =?';
	var params = answer.productid;

		connection.query(query, params, function(err, res) {
			if ( res[0].stockQuantity < answer.productunits) {
				console.log("Insufficient quantity");
				nextAsk(1);
			}
			else {

				var total = answer.productunits * res[0].price;
				var newQuantity = res[0].stockQuantity-answer.quantity;			
				console.log("Total Cost: $" + total);
				connection.query("UPDATE `products` SET stockQuantity = (stockQuantity - ?) WHERE id = ?;", [answer.productunits, answer.productid], function(err, res){
					
						console.log("Your order had been processed at $" + total);
					});				
				}
		});
			setTimeout(function(){
				console.log("Thanks for shopping with us!");
			},3000);

};


	

	






