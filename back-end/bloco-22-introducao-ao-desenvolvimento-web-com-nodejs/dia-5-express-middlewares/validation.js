const usernameValidation = (req, res, next) => {
  const { username } = req.body;

  if (!(username.length > 3)) return res.status(400).json({ "message": "invalid data" });

  next();
}

const emailValidation = (req, res, next) => {
  const { email } = req.body;

  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  if (!(regex.test(email))) return res.status(400).json({ "message": "invalid data" });

  next();
}

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const regex = /^[0-9]*$/;

  if (!(password >= 4 && password <= 8 && regex.test(password))) return res.status(400).json({ "message": "invalid data" });

  next();
}

module.exports = { usernameValidation, emailValidation, passwordValidation };
