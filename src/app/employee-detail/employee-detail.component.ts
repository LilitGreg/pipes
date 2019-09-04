import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

/* Service
 Principles :
 Do not repeat youself (dry) --- making copies of the same data
 Single responsibility Principle
   --our component class should have only  1 responsibilty and that is to control view's logic

   We need service
   Service
   --Service is a class with a specific purpose

   And why do we need services?

   1) share data across multiple components
    Service will be responsible for providing data to the component that ask for it.
   2) Implement application logic
   --That logic is reusable code which should be independent any individual component
   3) FOr External Interaction
   -- such as connecting to the database.

   Naming convention -.service.ts


   ---------------Dependence Injection(DI)----------

   DI is coding pattern in which a class receives its dependecies from external sources rather than creating them itself.


    var myEngine = new Engine();
    var myTires = new Tires();
    var myCar = new Car(myEngine, myTires);


   //THis way even if we add later parameters for Engine or Tires class 
   we need add it only one place and mycar object doesnot broke with it changes

    var myEngine = new Engine(parameter1);
    var myTires = new Tires(parameter2);
    var myCar = new Car(myEngine, myTires);


    /--------DI As framework needed----/
    
     But what if the car have 10 or more dependencies  we would create
     all those dependencies  before passing them as parameters.And what if those dependencies intern has 
     dependencies on something else.Then we would create those dependencies---so as the number of dependencies grow
      it becomes really difficult to manage the code.

      Example-

      var myEngine = newEngine();
      var myTires  = new Tires();
      var depA = new dependency();
      var depB = new dependency();
      var depAB = new dependency();
      var depZ  = new dependency(depAB);
      var myCar = new Car(myEngine, myTires, depA, depB, depAB, depZ );

      
   DI framework has somethign called an injector that will register all dependencies.Injector
   like a container of all the dependencies like myEngine, myTires,depA...depZ.
    Framework will manager all the dependencies.


    1) Define the EmployeService class
    2) Register with Injector
    3) Declare as dependency in EmpList and EmpDetail

    We need keep in mind that  we have hierarchical DI in angular and 
    decide where we need to register service.It is good to register in appModule.

    -----For fetch data using Http

    1.Http get request from EmpService
    2.Receive to the observable and cast it into employee array
    3.Subscribe to the observable from EmpList and EmpDetail
    4.Assign the employee array to a local variable for display in the view.


    */
@Component({
  selector: 'app-employee-detail',
  template: `
    <h2> Employee Detail </h2>
    <ul *ngFor = "let employee of employees"> 
      <li>  {{employee.id}} . {{employee.name }}  - {{employee.age}} </li>
    </ul>

  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  
  public employees = [];

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
     .subscribe(data => this.employees = data);
  }

}
