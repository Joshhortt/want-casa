import express from "express";
import bodyParser from "body-parser";
import { listings } from "./listings";

const app = express();
const port = 9000;

app.use(bodyParser.json());

// Add listings route
app.get("/listings", (_req, res) => {
    res.send(listings);
  });

// Add delete-listings route
app.post("/delete-listing", (req, res) => {
    const id: string = req.body.id;
  
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].id === id) {
        return res.send(listings.splice(i, 1)[0]);
      }
    }
  
    return res.send("failed to deleted listing");
  });

app.listen(port);

console.log(`[app] : http://localhost:${port}`);