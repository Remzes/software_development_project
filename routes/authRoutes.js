const passport = require('passport');
const Admin = require('../models/Admin')
const User = require('../models/User')

module.exports = (app) => {

    //Google Authentication
    app.get('/auth/google', passport.authenticate('google', {
            scope: ["profile", "email"]
        })
    );

    //Receive data from google on particular google
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/Surveys');
        }
    );

    //Logout from app
    app.get('/api/logout', (req, res) => {
       req.logout();
       res.redirect('/');
    });

    //Current user data
    app.get('/api/current_user', (req, res) => {
       res.send(req.user);
    });

    //Login as admin
    app.post('/api/admin', async (req, res) => {
      const { username, password } = req.body
      const admin = await Admin.find({ username, password })
      admin.length > 0
        ? res.json({ success: true, message: 'You can proceed as an admin!' })
        : res.json({ success: false, message: 'You cannot proceed as an admin!' })
    })

    app.get('/api/list', async (req, res) => {
      const users = await User.find({})
      res.json({ users })
    })
};