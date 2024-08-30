// pages/api/shoes.js

import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.resolve("src/app/mydatabase.db");

export default function handler(req, res) {
  const db = new sqlite3.Database(dbPath);

  db.all("SELECT * FROM shoe", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Failed to retrieve data" });
      return;
    }

    res.status(200).json(rows);
  });

  db.close();
}
