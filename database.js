const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./mydatabase.db"); // This will create a file named mydatabase.db

db.serialize(() => {
  // Create a table
  db.run(
    "CREATE TABLE if not exists shoe (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price TEXT, description TEXT, imageUrl TEXT, brand TEXT)"
  );

  // Insert a new user
  const stmt = db.prepare(
    "INSERT INTO shoe (name, price, description, imageUrl, brand) VALUES (?, ?, ?, ?, ?)"
  );
  stmt.run(
    "Bobcat Home",
    "499.99",
    "big steppers for big steppers",
    "/release/bobcat3home.png",
    "Retro 3 Jordan"
  );
  stmt.finalize();

  // Query the table
  db.each("SELECT id, name, price, description FROM shoe", (err, row) => {
    if (err) {
      console.error(err);
    }
    console.log(`${row.id}: ${row.name} - ${row.price} - ${row.description}`);
  });
});

db.close();
