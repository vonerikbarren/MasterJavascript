
// Data Model Example:
db.places.insert(
  {
    "continent": "Africa",
    "country": "Morocco",
    "majorcities": [
      "Casablanca",
      "Fez",
      "Marrakech"
    ]
  }
)

// My Entries:
db.places.insert(
  {
    continent: "North America",
    country: "USA",
    majorcities:
      [
        "New York",
        "Chicago",
        "Sacramento",
        "Detroit"
      ]
  }
)

db.places.find().pretty()

db.places.find(
  {
    "continent": "Africa"
  }
).pretty()

db.places.update(
  { "country": "Morocco" },
  {
    $set: {
      "majorcities": [
        "New York",
        "Chicago",
        "Sacramento",
        "Detroit",
        "Tampa",
        "Boston"
      ]
    }
  }
)

db.places.remove(
  { country: "Morocco" }
)