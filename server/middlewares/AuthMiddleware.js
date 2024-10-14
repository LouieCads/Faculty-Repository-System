const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");  // Extract the accessToken from the request headers

  if(!accessToken) return res.json({ error: 'User not logged in' });

  try  {
    const validToken = verify(accessToken, "importantSecret"); // validToken will contain the decoded token payload
    // The accessToken is like a special lock that contains information
    // "importantSecret" is the key that can open this lock and rel the informationvea

    if(validToken) {
      return next(); // If the token is valid, call the next middleware or route handler
    }
  } catch(error) {
    return res.json({ error: error });
  }
};

module.exports = { validateToken };