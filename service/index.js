const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./db.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 3000;


// Middleware
app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));


// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);


// CreateAuth token for createUser
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});


// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    await DB.updateUserRemoveAuth(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetScores
apiRouter.get('/scores', verifyAuth, async (req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, async (req, res) => {
  const scores = await updateScores(req.body);
  res.send(scores);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// updateScores considers a new score for inclusion in the high scores.
async function updateScores(newScore) {
  await DB.addScore(newScore);
  return DB.getHighScores();
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




// const {userCollection, scoreCollection} = require('./db');


// //Middleware
// app.use(express.json());
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));


// app.use(`/api`, apiRouter);

// // CreateAuth a new user
// apiRouter.post('/auth/create', async (req, res) => {
//   console.log("begin of create");

//   if (await findUser('email', req.body.email)) {
//     res.status(409).send({ msg: 'Existing user' });
//   } else {
//     console.log("in the middle");

//     const user = await createUser(req.body.email, req.body.password);

//     setAuthCookie(res, user.token);
//     res.send({ email: user.email });
//   }
//     console.log("end of create");
// });

// // GetAuth login an existing user
// apiRouter.post('/auth/login', async (req, res) => {
//   console.log("begin of login");
//   const user = await findUser('email', req.body.email);
//   if (user) {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       user.token = uuid.v4();
//       setAuthCookie(res, user.token);
//       res.send({ email: user.email });
//       return;
//     }
//   }
//   res.status(401).send({ msg: 'Unauthorized' });
//   console.log("end of login");

// });

// // DeleteAuth logout a user
// apiRouter.delete('/auth/logout', async (req, res) => {
//   const user = await findUser('token', req.cookies[authCookieName]);
//   if (user) {
//     delete user.token;
//   }
//   res.clearCookie(authCookieName);
//   res.status(204).end();//Complete but no content
// });



// // GetScores
// apiRouter.get('/scores', verifyAuth, async (_req, res) => {
//   const scores = await scoreCollection
//   .find()
//   .sort({score: -1})
//   .limit(10)
//   .toArray();

//   res.send(scores);
// });

// // SubmitScore
// apiRouter.post('/score', verifyAuth, async(req, res) => {
//   const {name} = req.body;

//   const existing = await scoreCollection.findOne({name});

//   if(existing){
//     await scoreCollection.updateOne(
//       {name},
//       {$inc:{score:1}}
//     );
//   }
//   else{
//     await scoreCollection.insertOne({name, score:1});
//   }

//   const scores = await scoreCollection
//   .find()
//   .sort({score:-1})
//   .limit(10)
//   .toArray();
//   res.send(scores);

// });

// async function createUser(email, password) {
//   const passwordHash = await bcrypt.hash(password, 10);

//   const user = {
//     email: email,
//     password: passwordHash,
//     token: uuid.v4(),
//   };
//   await userCollection.insertOne(user);

//   return user;
// }

// async function findUser(field, value) {
//   if (!value) return null;

//   return await userCollection.findOne({[field]:value});
// }

// // setAuthCookie in the HTTP response
// function setAuthCookie(res, authToken) {
//   res.cookie(authCookieName, authToken, {
//     maxAge: 1000 * 60 * 60 * 24 * 365,
//     secure: false,
//     httpOnly: true,
//     sameSite: 'lax',
//   });
// }

// // Default error handler
// app.use(function (err, req, res, next) {
//   res.status(500).send({ type: err.name, message: err.message });
// });

// app.use((_req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// });