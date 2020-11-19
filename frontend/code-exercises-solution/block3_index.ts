/* Type guards */
class Bird {
  fly() {
    console.log("fly");
  }
}

class Fish {
  swim() {
    console.log("swim");
  }
}

type Pet = Bird | Fish;

function action(pet: Pet): void {
  // Use type guard to choose the correct pet's method: pet.(swim | fly)
  if (pet instanceof Bird) {
    pet.fly();
  } else {
    pet.swim();
  }
}

/* Interface */
// Fill in the types for Employee interface
// * `level` field must have one the following values: 'Junior' || 'Middle' || 'Senior';

const enum Level {
  JUNIOR = "Junior",
  MIDDLE = "Middle",
  SENIOR = "Senior",
}

interface Employee {
  name: string;
  level: Level;
  age: number;
  skills: string[];
}

// Create a type with fields from above being all read-only
type ReadonlyEmployee = {
  readonly name: string;
  readonly level: Level;
  readonly age: number;
  readonly skills: string[];
};

// Create a CompanyEmployee class that implements ReadonlyEmployee interface
class CompanyEmployee implements ReadonlyEmployee {
  name: string;
  level: Level;
  age: number;
  skills: string[];

  constructor(name, level, age, skills) {
    this.name = name;
    this.level = level;
    this.age = age;
    this.skills = skills;
  }
}

// Say, we have an employee object of the `CompanyEmployee` class with a `level` of `Junior`:
const oldEmployee = new CompanyEmployee("John Doe", "Junior", 21, [
  "JS",
  "Node",
]);

// We want to update this employee and make his level "Senior". If we do this
// const newEmployee = new CompanyEmployee(...)
// newEmployee.level = 'Senior' // this doesn't work
//
// How do we get a `newEmployee` object with all fields from `oldEmployee`, but with `.level` set to 'Senior'?
// hint: check how spread operator applies to objects
const newEmployee = { ...oldEmployee, level: "Senior" };
console.log("Old Employee:", oldEmployee);
console.log("New Employee:", newEmployee);
