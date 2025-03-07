import express, { json } from 'express';
import { createConnection } from 'mysql2';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bmi-status'
});

app.get('/', (req, res) => {
    db.query("SELECT * FROM status", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/', (req, res) => {
    const { height, weight, bmi, date } = req.body;
    const sql = "INSERT INTO status (height,weight,bmi,date) VALUES (?,?,?,?)";
    db.query(sql, [height, weight, bmi, date], (err, results) => {
        if (err) return res.json({ error: err });
        res.json({ message: "Data inserted successfully" });
    });
});

app.listen(5173, () => console.log("Server running on port 5173"));