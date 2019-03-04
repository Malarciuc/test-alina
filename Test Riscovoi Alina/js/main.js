class Worker{
	constructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
	
	 getSalary(){
		return this.hourRate * this.hours;
	}
	getName(){
	return this.name;
	}
	getSurname(){
		return this.surname;
	}
	getRate(){
		return this.hourRate;
	}
	getHours(){
		return this.hours;
	}
	increaseSalary(x){
		return this.hourRate +=x;
	}
	getSalaryI(){
		return(this.getSalary()*this.x);
	}
	setTax(x){
		return this.x=1-x/100;
	}
}





let worker = new Worker('Ion', 'Creanga',10, 176);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.hourRate);
console.log(worker.hours);
console.log(worker.getSalary()); 

console.log('===================================');
let worker1 = new Worker('Andrei', 'Popescu', 12, 160);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.hourRate);
console.log(worker1.hours);
console.log(worker1.getSalary());


console.log('===================================');
let worker2 = new Worker('Eugen', 'Andriescu', 13, 120);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.hourRate);
console.log(worker2.hours);
console.log(worker2.getSalary());


console.log('Lucratorul cu salariul mai mare');

afis(worker1,worker2);
function afis(worker1, worker2){
	if(worker1.getSalary() > worker2.getSalary()){
		console.log(worker1.name);
	}else{
		console.log(worker2.name);
	}
}
console.log('=======================sasd============');


var worker3 = new Worker('Ion', 'Creanga', 10, 176);
 console.log(worker3.getName()); 
 console.log(worker3.getSurname()); 
 console.log(worker3.getRate()); 
 console.log(worker3.getHours()); 
 worker3.increaseSalary(2);
 worker3.setTax(18);

