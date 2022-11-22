import { NextFunction, Request, Response } from "express"
import products from "./products"


const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(function(req:Request, res:Response, next:NextFunction) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(PORT, () => console.log(`Server was start on port ${PORT}`))

app.get('/products', (req:Request, res:Response) => {
    res.json(JSON.stringify(products))

})