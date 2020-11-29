const User = require('./../models/User'),
      { ErrorHandler } = require("./../helpers/Error"),
        jwt = require("jsonwebtoken"),
        Constants = require("./../helpers/Constants");


exports.login = async (data) => {

    let { userName, password, userType } = data;

    let login = await User.findOne({
        where: {
            userName: userName.trim(),
            password: password.trim(),
            userType: userType
        }
    })
    if (!login){
        throw new ErrorHandler(Constants.errors.unAuthorized)
    }

    let token =  jwt.sign({ userId: login._id }, process.env.CLIENT_SECRET)

    let user = {};
    user.token = token;
    user.id = login._id
    user.fullName = login.fullName

    return user;

}

exports.register = async (data) => {

    let { fullName, userName, password, userType } = data;
    let userExist = await User.findOne({
        where: {
            userName: userName,
            password: password,
            userType: userType
        }
    })

    if (userExist){
        throw new ErrorHandler(Constants.errors.duplicateCall)
    }

    let userCreate = await User.create({
        userName: userName,
        password: password,
        fullName: fullName,
        userType: userType
    })
/*
    let token =  jwt.sign({ userId: userCreate._id }, process.env.CLIENT_SECRET)

    let user = {};
    user.token = token;
    user.id = userCreate._id
*/

    return {
        status: !!userCreate
    };

}
