function stud_inst(Array) {
  for (var obj in Array) {
    console.log(Array[obj].first_name + " " + Array[obj].last_name);
  }
}

var students = [
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
];

stud_inst(students);
