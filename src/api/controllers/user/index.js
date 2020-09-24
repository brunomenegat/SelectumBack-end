const UserDomain = require('../../../domains/user');
const userDomain = new UserDomain()

const getAllUsers = async (req, res, next) => {
    users = await userDomain.listarUsers();
    res.json(users);
    res.end;
}

const postUser = async (req, res, next) => {
    try{
        user = await userDomain.criarUser(req.body)
        res.json(user);
        res.end;
    }
    catch(err) { next(err) }
}

module.exports = {
    getAllUsers,
    postUser
}