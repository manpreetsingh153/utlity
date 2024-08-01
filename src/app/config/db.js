// import mysql from 'mysql';
var mysql = require("mysql");

const pool = mysql.createPool({
  host: "65.181.111.129",
  user: "mindco_utility",
  password: "1}#k^xaRRq8l",
  database: "mindco_utility",
});
export default pool;

//  const  db = mysql({
//   config: {
//     host: "65.181.111.129",
//     port: "3306",
//     database: "mindco_utility",
//     user: "mindco_utility",
//     password: "1}#k^xaRRq8l"
//   }
// });
// export default db;
// export default async function excuteQuery({ query, values }) {
//   try {
//     const results = await db.query(query, values);
//     await db.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }

// var mysql = require("mysql");

// // const pool = mysql.createPool({
// //   host: "65.181.111.129",
// //   user: "mindco_utility",
// //   password: "1}#k^xaRRq8l",
// //   database: "mindco_utility",
// // });
// const db = mysql.connect ({
//   host: "65.181.111.129",
//   user: "mindco_utility",
//   password: "1}#k^xaRRq8l",
//   database: "mindco_utility",
// });
// // pool.connect((err) => {
// //     if (err) {
// //       console.log("not connected", err);
// //     } else {
// //       console.log("connected");
// //     }
// //   });
// // const pool = mysql.createPool({
// //   host: "localhost",
// //   user: "mindco_utility",
// //   password: "1}#k^xaRRq8l",
// //   database: "mindco_utility",
// // });
// // pool.query("SELECT * FROM user", (error, results, fields) => {
// //   if (error) {
// //     console.error("Error executing query:", error);
// //     return;
// //   }
// //   console.log("Query results:", results);
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.log("not connected", err);
// //   } else {
// //     console.log("connected");
// //   }
// // });
// export default pool;
// // const pool = createPool({
// //   connectionLimit: 10,
// //   host: "127.0.0.1",
// //   user: "root",
// //   password: "",
// //   database: "utlity",
// // });
// // pool.query("SELECT * FROM users", (error, results, fields) => {
// //   if (error) {
// //     console.error("Error executing query:", error);
// //     return;
// //   }
// //   console.log("Query results:", results);
// // });

// // module.exports = pool;
