import people from './people.json' assert { type: 'json' };

people.forEach(function (person) {
  const {
    name,
    email,
    phone
  } = person;
  const names = name.split(' ');
  const firstName = names[0];
  const lastName = names[1];
  console.log(`${firstName} \n${lastName} \n${email} \n${phone} \n`);
}
)
