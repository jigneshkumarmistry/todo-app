const validator = require('@hapi/joi');

function storeValidation(data) 
{
    const schema = {
        title: validator.string().min(3).required(),
        isActive: validator.boolean().required()
    };

    return validator.validate(data, schema);
}

export {
    storeValidation
}