function websites(parent, args, context) {
    return context.prisma.user({ id: parent.id }).websites()
}

function likes(parent, args, context) {
    return context.prisma.user({ id: parent.id }).likes()
}

module.exports = {
    websites,
    likes,
}
