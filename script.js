let money,
    name,
    time,
    price = 1,
    day = 30

function start() {
	money = +prompt ('Какой ваш бюджет на месяц?', '60000'); //Какой бюджет?

	while (isNaN(money) || money == "" || money == null) { //условия бюджета 
		money = prompt ('Какой ваш бюджет на месяц?', '60000');
	}

	

    name = prompt ('Название вашего магазина?').toUpperCase();

    time = prompt ('Какое сейчас время?','21');

    while (isNaN(money) || time == "" || time == null || time > 24 || time < 1) {
		time = prompt ('Какое сейчас время?','21');
	}
}

start()

function moneyOneDay() {
		alert('Бюджет на 1 день: ' + money / 30);
	}

   moneyOneDay();

let mainList = {
	budget: money,
	shop: name,
	open: false,
    shopGoods: [],
	employers: {},
	discount: false,
}

if (mainList.discont == true) { //80% от price, если discont = true
    price = price * 0.8
} else{price = price
};

function shopGoods(){
for (let i = 0; i < 3; i++){
	let a = prompt ('Какой тип товаров будем продавать?')
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
		console.log ('Всё верно!')
		mainList.shopGoods[i] = a;
	}
};
};

shopGoods()

function employers() { //сотрудники 
	let num = 1
for (let mens = 0; mens < 4; mens++){
	let mens1 = prompt ('Ваше имя', num++)
	if ((typeof(mens1)) === 'string' && (typeof(mens1)) === null && mens1 != '' && mens1.length < 50) {
		mainList.employers[mens] = mens1;
	}
};
};

employers();



























