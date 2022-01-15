const usernameValidation = (req, res, next) => {
  const { username } = req.body;

  if (!(username.length > 3)) return res.status(400).json({ "message": "invalid username" });

  next();
}

const emailValidation = (req, res, next) => {
  const { email } = req.body;

  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (!(regex.test(email) === true)) return res.status(400).json({ "message": "invalid email" });

  next();
}

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const regex = /^[0-9]*$/;

  if (!(password.length >= 4 || password.length <= 8 || regex.test(password) === true)) return res.status(400).json({ "message": "invalid password" });

  next();
}

module.exports = { usernameValidation, emailValidation, passwordValidation };
