// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var obj;
(function (obj) {
    obj[obj["sleeping"] = 0] = "sleeping";
    obj[obj["meeting"] = 1] = "meeting";
    obj[obj["connecting"] = 2] = "connecting";
})(obj || (obj = {}));
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: obj.sleeping
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === obj.sleeping) {
    console.log('is author');
}
console.log("체크", obj.sleeping, obj.meeting, obj.connecting);
