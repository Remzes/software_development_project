const passport = require('passport');
const Admin = require('../models/Admin')

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
};