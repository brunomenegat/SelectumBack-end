
class errorFomart extends Error{

    constructor (err, status = 500, message = 'Internal Server Error') {
        super(err)
        this.message = message;
        this.status = status;
        this.erroObject = `idiota`
        Error.captureStackTrace(this, this.constructor)
    }
} ;


class validationError extends errorFomart{
    constructor(err) {
        super(err, 422)
        this.erroObject = 'erro maluco'
    }
} ;


module.exports = { errorFomart, validationError };