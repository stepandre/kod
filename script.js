var money = +prompt ('Какой ваш бюджет на месяц?', '60000');
var name = prompt ('Название вашего магазина?');

mainList = {
	budget: money,
	shop: name,
	open: false,
    shopGoods: [],
	employers: {}
};

for (let i = 0; i < 1; i++){
	let a = prompt ('Какой тип товаров будем продавать?')
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
		console.log ('Всё верно!')
		mainList.shopGoods[i] = a;
	}
};

let product = prompt ('Какой тип товаров будем продавать?');
let whi = 0

while (whi < 1){
	prompt ('Какой тип товаров будем продавать?', product);
	whi++;
};

prompt ('Бюджет на 1 день', mainList.budget / 30);




