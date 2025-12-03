import express from "express";
import employees from "./db/employees.js";

const app = express();

export default app;

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  let found = employees.find((employee) => {
    console.log("employee", employee);
    return randomNum === employee.id;
  });
  res.send(found);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  console.log("id", id);
  let found = employees.find((employee) => {
    console.log("employee", employee);
    return +id === employee.id; // {
    //   return employee;
    // }
  });
  console.log("found", found);
  if (!found) {
    return res.status(404).send(`There is no employee with an id #${id} .`);
  }
  res.send(found);
});
