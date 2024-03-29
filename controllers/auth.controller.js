const authServices =require('./../services/auth.service'),
    Constants = require("./../helpers/Constants");

exports.login = async (req, res, next) => {

    try{
        let data = await authServices.login(req.body)
        res.status(200).json(data)
    }catch (e) {
        next(Constants.errors.server)
    }

}

exports.register = async (req, res, next) => {
    let data = await authServices.register(req.body)
    res.status(200).json(data)
    try{

    }catch (e){
        next(Constants.errors.server)
    }

}

exports.list = async (req, res, next) => {

    try{
        let data = await authServices.list(req.params.type)
        res.status(200).json(data)
    }catch (e){
        next(Constants.errors.server)
    }


}