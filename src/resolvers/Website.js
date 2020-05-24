function postedBy(parent, args, context) {
    return context.prisma.website({ id: parent.id }).postedBy()
}

function likes(parent, args, context) {
    return context.prisma.website({ id: parent.id }).likes()
}

module.exports = {
    postedBy,
    likes,
}
