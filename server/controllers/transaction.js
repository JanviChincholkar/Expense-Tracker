const postSignup = async (req, res) => {
    const { fullName, email, password, dob } = req.body;
  
    const user = new User({
      fullName,
      email,
      password,
      dob: new Date(dob)
    });
  
    try {
      const savedUser = await user.save();
  
      res.json({
        success: true,
        message: `Signup successful`,
        data: savedUser
      })
    }
    catch (e) {
      res.json({
        success: false,
        message: e.message,
        data: null
      })
    }
  }