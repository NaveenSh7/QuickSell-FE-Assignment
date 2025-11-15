const generateCustomerRecords = (count) => {
  let name = ['Naveen' , 'Jayesh' , 'Rishi' , 'Raja' , 'Devesh' ,'Atharva','Jayesh' ,'Vivek' , 'Rohit' , 'Naveen'];
  let add = ['Rishi' , 'Captain' , 'Sparrow' , 'Raja' , 'Jayesh' ,'Jayesh','Jayesh' ,'Jayesh' , 'Naveen','Tutu'];
   let email = ['tutu@gmail.com' , 'yas@gmail.com' , 'sparrow@hotmail.com' , 'tutu@gmail.com'];
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: i,
      name: name[i%10],
      email: email[i%4],
      phone: '+911234567890',
      last_message: `July 12, 2024, 12:45pm`,
      addby: add[i%10],
    });
  }
  return records;
};
export default generateCustomerRecords;