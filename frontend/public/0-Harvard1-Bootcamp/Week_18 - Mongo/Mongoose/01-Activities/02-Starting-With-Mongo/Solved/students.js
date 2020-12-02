use students
db.students.insert(
  {
    name: 'Steve',
    row: 3,
    os: 'Mac',
    hobbies: [
      'Coding',
      'Reading',
      'Running'
    ]
  }, // status: inserted
  {
    name: "Greysi",
    row: 3,
    os: 'windows',
    hobbies: [
      'excel',
      'cooking',
      'complaining'
    ]
  }, // status: inserted
  {
    name: "VonErik",
    row: 4,
    os: 'mac',
    hobbies: [
      'coding',
      'building',
      'testing',
      'designing',
      'being awesome'
    ]
  } // status: inserted
)

db.students.insert(
  {
    name: "VonErik4",
    row: 5,
    os: 'mac',
    hobbies: [
      'coding',
      'building',
      'testing',
      'designing',
      'being awesome'
    ]
  }
)

db.students.find(
  { row: 3 }
).pretty()

// The code above is basically stating, find all of the documents that have {row:3} = true. 

db.students.find(
  { row: 3, os: 'mac' }
).pretty()

db.students.find(
  {
    "hobbies": {
      $in: ["coding"]
    }
  }
).pretty()