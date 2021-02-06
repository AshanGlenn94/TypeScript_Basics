// const person: {
//   name: string;
//   age: number;
// }
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ashan",
  age: 26,
  hobbies: ["DIY Projects", "Cooking", "Travelling"],
  role: [2, "Developer"],
};

// person.role.push('admin');
// person.role[1] = 10;

let favouriteActivities: string[];
favouriteActivities = ["DIY Projects"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
