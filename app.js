// const person: {
//   name: string;
//   age: number;
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["DEVELOPER"] = 2] = "DEVELOPER";
})(Role || (Role = {}));
var person = {
    name: "Ashan",
    age: 26,
    hobbies: ["DIY Projects", "Cooking", "Travelling"],
    role: Role.DEVELOPER
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
if (person.role === Role.DEVELOPER) {
    console.log(person.name + " is a Developer");
}
