import * as express from "express";
import * as exphbs from "express-handlebars";
import * as bodyParser from "body-parser";
import db from "./config/database";
import PersonController from "./controllers/personController";
import CarController from "./controllers/carController";

const app = express();

//Connect to database.
db.authenticate()
    .then(() => console.log("Successful connection"))
    .catch(err => console.log(err));

app.set('views', `${__dirname}/views`);
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/layout`,
    partialsDir: `${__dirname}/views/partials`
}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Use routeHandlers.
app.use("/persons", PersonController);
app.use("/cars", CarController);

export default app;