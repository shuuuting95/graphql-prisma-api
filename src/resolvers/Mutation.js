const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function createWebsite(parent, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createWebsite({
        url: args.data.url,
        description: args.data.description,
        postedBy: { connect: { id: userId } },
    })
}

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({ ...args, password })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({ email: args.email })
    if (!user) {
        throw new Error('IDかパスワードが違います。')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('IDかパスワードが違います。')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function createLike(parent, args, context, info) {
    const userId = getUserId(context)

    const likeExists = await context.prisma.$exists.like({
        user: { id: userId },
        website: { id: args.data.websiteId },
    })
    if (likeExists) {
        throw new Error(`いいね済です。: ${args.data.websiteId}`)
    }

    return context.prisma.createLike({
        user: { connect: { id: userId } },
        website: { connect: { id: args.data.websiteId } },
    })
}

module.exports = {
    createWebsite,
    signup,
    login,
    createLike,
}
