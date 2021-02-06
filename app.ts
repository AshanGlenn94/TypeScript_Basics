// const person: {
//   name: string;
//   age: number;
// }
enum Role {
  ADMIN,
  READ_ONLY,
  DEVELOPER,
}
const person = {
  name: "Ashan",
  age: 26,
  hobbies: ["DIY Projects", "Cooking", "Travelling"],
  role: Role.DEVELOPER,
};

// person.role.push('admin');
// person.role[1] = 10;

let favouriteActivities: string[];
favouriteActivities = ["DIY Projects"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.DEVELOPER) {
  console.log(`${person.name} is a Developer`);
}
