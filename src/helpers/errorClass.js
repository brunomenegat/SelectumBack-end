
class errorFomart extends Error{

    constructor (err, status = 500, mesagem = 'Internal Server Error') {
        super(err)
        this.mensagem = mesagem;
        this.status = status;
        this.erroObject = `idiota`
        Error.captureStackTrace(this, this.constructor)
    }
} ;


class validationError extends errorFomart{
    constructor(err) {
        super(err, 422)
        this.erroObject = 'érro maluco'
    }
} ;



module.exports = { errorFomart, validationError };