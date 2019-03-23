// Функция возвращает имя и возраст пользователей, разделенных запятой, которые старше 18 лет. //

const users = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
  ];
  
//   function getAdultNames(users) {
      
//   }
//   usersToString(users) // 'John 19, Luce 18'

  const updatedUsers = users.filter(people => people.birthday < `2001-01-01`);
  console.log(updatedUsers);