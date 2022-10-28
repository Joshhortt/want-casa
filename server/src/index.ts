import express from "express";
const app = express();
const port = 9000;

// Testing types
const one = 1;
const two = 2;
// const three: boolean = false;
// const four: string = "one";
// const five: null = null;
// const six: undefined = undefined;
// const seven: any = {};

app.get('/', (_req, res) => res.send(`1 + 2 = ${one + two}`));
app.listen(port);

console.log(`[app] : http://localhost:${port}`);