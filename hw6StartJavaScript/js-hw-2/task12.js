// Функция возвращает имя и возраст пользователей, разделенных запятой, которые старше 18 лет. //

const users = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
  ];



  function adultMoment(users) {
    return moment(users).isBefore(moment().subtract(18, `years`));
  }

  console.log(adultMoment(users));
// function adultMoment(birthday) {
//   return moment(birthday).isBefore(moment().subtract(18, `years`));
// }


// console.log( adultMoment(`1990-01-01`) );
// console.log( adultMoment(`2002-01-01`) );

  // function getAdultNames(users) {
  //   let res = [];
  
  //   for (let i = 0; i < users.length; i++) {
  //     let dateNow = new Date();			
  //     let userBirthday = Math.ceil(((dateNow - new Date(users[i].birthday)) / 31536000000));						
  //     if (userBirthday > 18) {			
  //       res.push(users[i].name + ',', userBirthday);
  //     }	
  //   }
  //   return res.join(' ');
  // };
  // console.log(getAdultNames(users)); 
  




// function adultPeople(users) {
//   let result = [];

//   for (i = 0; i < users.length; i++) {
//     let dateNow = new Date(users);
//     let minDate = new Date();
//     minDate.setFullYear(minDate.getFullYear() - 18);
//     if (users.birthday > minDate) {
//       result.push(users[i].name + `,`, minDate);
//     }
//   }

//   return result.join(` `);
// }

// console.log(adultPeople(users));




  // const updatedUsers = users.filter(people => people.birthday < `2001-01-01`);
  // console.log(updatedUsers);


  // пример 12-го задания с практики //

// function adult(birthday) {
//   birthday = new Date(birthday);
//   // console.log(`birthday: `, birthday);
  // let minDate = new Date();
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