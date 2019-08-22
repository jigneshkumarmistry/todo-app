const validator = require('@hapi/joi');

function registerValidation(data) {
    const schema = {
        firstName: validator.string().min(3).required(),
        lastName: validator.string().min(3).required(),
        email: validator.string().email({ minDomainSegments: 2 }),
        password: validator.string().min(5).required(),
        isAdmin: validator.boolean().required()
    };

    return validator.validate(data, schema);
}

function loginValidation(data) {
    const schema = {
        email: validator.string().email({ minDomainSegments: 2 }),
        password: validator.string().min(5).required()
    };

    return validator.validate(data, schema);
}

export {
    registerValidation,
    loginValidation
}