const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3308;

app.use(express.json());
app.use(cors());

const db = require('./models');

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

const thesesRouter = require('./routes/Theses');
app.use("/theses", thesesRouter);

db.sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});