const jwt = require('jsonwebtoken')
const APP_SECRET = 'Prisma-is-cool'

function getUserId(context) {
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, APP_SECRET)
        return userId
    }

    throw new Error('認証に失敗しました。')
}

module.exports = {
    APP_SECRET,
    getUserId,
}
