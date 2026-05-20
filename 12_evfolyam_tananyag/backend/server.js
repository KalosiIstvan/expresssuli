const express = require('express')
const mysql = require('mysql2/promise')
require('dotenv').config();
const cors = require('cors')
const { exec } = require('child_process');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3307;

const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})