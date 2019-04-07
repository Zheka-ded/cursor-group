// Функция возвращает имя и возраст пользователей, разделенных запятой, которые старше 18 лет. //

const users = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
  ];


  
function adult(users) {
  users = new Date(users);
  // console.log(`birthday: `, birthday);
  let minDate = new Date();
  // console.log(`minDate: `, minDate);
  minDate.setFullYear(minDate.getFullYear() - 18);
  return users.birthday < minDate;
}

console.log(adult(users));






  // const updatedUsers = users.filter(people => people.birthday < `2001-01-01`);
  // console.log(updatedUsers);


  // пример 12-го задания с практики //

// function adult(birthday) {
//   birthday = new Date(birthday);
//   // console.log(`birthday: `, birthday);
//   let minDate = new Date();
//   // console.log(`minDate: `, minDate);
//   minDate.setFullYear(minDate.getFullYear() - 18);
//   return birthday < minDate;
// }

// console.log( adult(`1990-01-01`) );
// console.log( adult(`2002-01-01`) );




// function adultMoment(birthday) {
//   return moment(birthday).isBefore(moment().subtract(18, `years`));
// }


// console.log( adultMoment(`1990-01-01`) );
// console.log( adultMoment(`2002-01-01`) );