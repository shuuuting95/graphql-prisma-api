function website(parent, args, context) {
    return context.prisma.like({ id: parent.id }).website()
}

module.exports = {
    website,
}
