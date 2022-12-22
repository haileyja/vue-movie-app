exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify ({
            name:'Hailey',
            age:88,
            email: 'somdari0423@gmail.com'
        })
    }
}