// const person: {
//   name: string;
//   age: number;
// }
var person = {
    name: "Ashan",
    age: 26,
    hobbies: ["DIY Projects", "Cooking", "Travelling"],
    role: [2, "Developer"]
};
// person.role.push('admin');
// person.role[1] = 10;
var favouriteActivities;
favouriteActivities = ["DIY Projects"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
