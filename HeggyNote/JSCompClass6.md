Date: 7/31

How many ways to create Obj:
1. Constructor function  >> Inheritance requ/ mult. obj needed with sam blueprint
2. obj literal >> Simple Obj definition created on the fly
3. Factory Pattern >> Messaging needs to be done before creating the obj.
4. Obj constructor >> Simple Obj def. created on the fly
  - var obj = new Object();
5. Obj create >> Usu. for the inheritance purposes

---
Obj create demo

let personProto = {
    calculateAge: function () {
        return 2017 - this.dob;
    }
}

let john = Object.create(personProto);

john.name = "John";
john.dob = 1985;
john.job = "Software Arch";

console.log(john.calculateAge());