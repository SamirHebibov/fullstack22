// task1
// class Person{
//     constructor(name, age, country){
//         this.name = name; 
//         this.age = age; 
//         this.country = country; 
//     }
//     console(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.country);

//     }
// }
// let person1 = new Person("Albert", 18, "Bangladesh"); 
// let person2 = new Person("Klaus" , 10000, "England")
// person1.console();
// person2.console(); 



// task2 
// class Rectangle{
//     constructor(width, height){
//         this.width = width; 
//         this.height = height; 
//     }
//     perimeter(){
//         console.log(2*(this.width + this.height));
//     }
//     area(){
//         console.log(this.width * this.height);
//     }
// }
// let rectangle = new Rectangle(3, 4); 
// rectangle.perimeter(); 
// rectangle.area(); 



// task3
// class Transport{
//     constructor(marka, model, year ){
//         this.marka = marka; 
//         this.model = model; 
//         this.year = year; 
//     }
//     console(){
//         console.log(this.marka);
//         console.log(this.model);
//         console.log(this.year);
//     }
// }
// class Car extends Transport{
//     constructor(marka, model, year, door){
//         super(marka, model, year )
//         this.door= door; 
//     }
//     console(){
//         super.console();
//         console.log(this.door);
//     }
// }
// let car1 = new Car("Dodge", "Challanger" ,1969, 2);
// car1.console();




// task4
// class BankAccount{
//     constructor(id, mebleg){
//         this.id = id; 
//         this.mebleg = mebleg; 
//     }
//     add(qiymet){
//         this.mebleg = this.mebleg+qiymet; 
//         console.log(this.mebleg);
//     }
//     cixart(qiymet){
//         this.qiymet = qiymet;
//         if(qiymet >= this.mebleg){
//             console.log("hesabinizda bu qeder pul yoxdur");
//         }
//         else{
//             this.mebleg = this.mebleg - this.qiymet;
//         }
//         console.log(this.mebleg);
//     }
// }
// let account = new BankAccount(323, 500)
// account.add(300)
// account.cixart(513)


// task5
// class Shape{

// }
// class Circle extends Shape{
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }
//     areaCircle(){
//         console.log(Math.PI * Math.pow(this.radius,2));
//     }
// }

// class Triangle extends Shape{
//     constructor(side1, side2, side3){
//         super();
//         this.side1 = side1;
//         this.side2 = side2;
//         this.side3 = side3; 
//     }
//     areaTriangle(){
//         let semiPerimeter = (this.side1 + this.side2 + this.side3)/2;
//         console.log(Math.sqrt(semiPerimeter*(semiPerimeter - this.side1)*(semiPerimeter - this.side2)*(semiPerimeter - this.side3))); //heron dusturu
//     }
// }
// let circle = new Circle(4)
// circle.areaCircle();
// let triangle = new Triangle(3,4,5)
// triangle.areaTriangle(); 



// task6
// class Employee{
//     constructor(name ,salary) {
//         this.name = name; 
//         this.salary = salary; 
//     }
//     annualSalary(){
//         return this.salary*12;
//     }
// }
// class Constructor extends Employee{
//     constructor(name, salary, department) {
//         super(name, salary); 
//         this.department = department; 
//     }
//     constructorSalary(){
//         console.log(`${this.name}: ${(super.annualSalary() * 0.05) + super.annualSalary()}`);
//     }
// }
// let constructor = new Constructor("Albert Eyniseydi",5000, "dinosaur hunter");
// constructor.constructorSalary(); 
// let constructor2 = new Constructor("Ezio Auditore",6000, "assassin");
// constructor2.constructorSalary(); 



// task7
// class Book{
//     constructor(title, author, year) {
//         this.title = title; 
//         this.author = author; 
//         this.year = year; 
//     }
//     seeBook(){
//         console.log(this.title, this.author, this.year);
//     }
// }
// class eBook extends Book{
//     constructor(title , author, year , price) {
//         super(title, author, year); 
//         this.price = price; 
//     }
//     seeBook(){
//         super.seeBook(); 
//         console.log(this.price);
//     }
// }
// let book = new eBook("Crime and Punishment", "Dostoyevsky", 1866, 15 )
// book.seeBook(); 



// taks8
// class Animal {
//     constructor(sound, species){
//         this.species = species; 
//         this.sound = sound; 
//     }
//     soundAnimal(){
//         console.log(this.sound);
//     }
// }
// class Dog extends Animal{
//     constructor(sound , species, color) {
//         super(sound, species); 
//         this.color = color; 
//     }
//     soundDog(){
//         super.soundAnimal(); 
//         console.log(this.color);
//     }
// }
// let dog = new Dog("Pluf pluf", "Bulldog", "brown-white"); 
// dog.soundDog(); 




// task9
// class Bank{
//     constructor(name, branch) {
//         this.name = name; 
//         this.branches = []; 
//         this.branches.push(branch)
//     }
//     addBranch(branch){
//         this.branches.push(branch); 
//     }
//     removebranch(branch){
//         if(this.branches.length===0){
//             console.log("Sobe yoxdur");
//         }
//         else{
//             if(this.branches.includes(branch)){
//                 this.branches.splice(this.branches.indexOf(branch) , 1)
//             }
//             else{
//                 console.log("bele bir sobe yoxdur");
//             }
//         }
//     }
//     showbranches(){
//         for(let i = 0; i<this.branches.length; i++){
//             console.log(this.branches[i]);
//         }
//     }
// }
// let bank = new Bank("uafhap", 1)
// bank.addBranch(2);
// bank.addBranch(3); 
// bank.showbranches(); 
// bank.removebranch(4);
// bank.showbranches(); 
// bank.removebranch(3);
// bank.showbranches(); 



// taks10  
// class Product{ 
//     constructor(id, name, price) {
//         this.id = id; 
//         this.price = price; 
//         this.name = name; 
//     }
//     totalPrice(amont){ 
//         return amont * this.price;
//     }
// }
// class PersonalCareProduct extends Product {
//     constructor(id, name , price, garantytime) {
//         super(id, name , price); 
//         this.garantytime = garantytime; 
//     }
//     totalPrice(){
//         console.log(super.totalPrice(amont)); 
//     }
// }
// let product = new PersonalCareProduct(123, "chips", 14, 5); 
// product.totalPrice(); 


// task11
// class  BankAccount{ 
//     constructor(id, name, balance) {
//         this.name = name; 
//         this.id = id; 
//         this.balance = balance; 
//     }
//     addAmount(amount){
//         this.balance += amount; 
//     }
//     withdraw(amount){
//         if(this.balance >= amount){
//             this.balance -= amount; 
//         }
//         else{
//             console.log("hesabinizda yeterli meblegde pul yoxdur!");
//         }
//     }
//     transfer(amount, account){
//         if(this.balance >= amount){
//             this.balance -= amount; 
//             account.addAmount(amount); 
//         }
//         else{
//             console.log("kocurme alinmadi!");
//         }
//     }
//     showBalance(){
//         console.log(this.balance);
//     }
// }
// let account1 = new BankAccount(123, "Albert Eyniseydi", 3000); 
// let account2 = new BankAccount(124, "Dexter Morgan", 2000); 
// account1.showBalance(); 
// account2.showBalance(); 

// account1.addAmount(500); 
// account2.withdraw(500); 
// account1.showBalance(); 
// account2.showBalance(); 

// account1.transfer(300, account2);
// account1.showBalance(); 
// account2.showBalance(); 



// taks12
class University{
    constructor(name, departments) {
        this.name = name; 
        this.departments = []; 
        this.departments.push(departments);
    }
    addDepartment(department){
        if(this.departments.includes(department)){
            console.log("bele bir deparment artig var");
        }
        else{
            this.departments.push(department);
        }
    }
    removedepartment(department){
        if(this.departments.includes(department)){
            this.departments.splice(this.departments.indexOf(department), 1)
        }
        else{
            console.log("bele bir department yoxdur");
        }
    }
    showDepartments(){
        for(let i = 0; i < this.departments.length; i++){
            console.log(this.departments[i]);
        }
    }
}
let university = new University("BDU", "tetbiq")
university.showDepartments(); 
university.addDepartment("SABAH"); 
university.addDepartment("fizika"); 
university.addDepartment("tarix"); 
university.showDepartments(); 
university.removedepartment("fizika");
university.showDepartments(); 