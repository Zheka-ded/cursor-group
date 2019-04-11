// Функция принимает массив пользователей и возвращает объект пользователей, где ключом является идентификатор пользователя и значение пользовательских данных.
const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

console.log(users);

// function usersToObject(users) {
//     let result = {};

// }
// usersToObject(users);
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };


// function usersToObject(users) {
// 	let obj = {};
// 	users.forEach(function (user) {
// 		obj[user.id] = user;
// 	});
// 	console.log(obj);
// }
// // usersToObject(user_s)