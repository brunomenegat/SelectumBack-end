const { UserModel } = require('../../models/user')
const { validationError } = require('../../helpers/errorClass')
const User = UserModel

class UserDomain {
    criarUser = async (bodyData) => {
        const user = await User.create(bodyData)
        .catch(err => {throw( new validationError(err))})
        console.log(`saved is: ${user}`)
        return user;
    }

    listarUsers = async () => {
        const users = await User.find()
        return (users);
    }

    
}

module.exports = UserDomain;