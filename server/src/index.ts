import express from "express";
const app = express();
const port = 9000;

// Testing types
const one: number = 1;
const two: number = 2;
// const three: boolean = false;
// const four: string = "one";
// const five: null = null;
// const six: undefined = undefined;
// const seven: any = {};

app.get('/', (req, res) => res.send(`1 + 2 = ${one + two}`));
app.listen(port);

console.log(`[app] : http://localhost:${port}`);