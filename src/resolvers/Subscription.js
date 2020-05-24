function websiteSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.website({ mutation_in: ['CREATED', 'UPDATED', 'DELETED'] }).node()
}

const website = {
    subscribe: websiteSubscribe,
    resolve: payload => {
        return payload
    },
}

function likeSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.like({ mutation_in: ['CREATED', 'UPDATED', 'DELETED'] }).node()
}

const like = {
    subscribe: likeSubscribe,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    website,
    like,
}
