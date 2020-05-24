async function websites(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contains: args.filter },
            { url_contains: args.filter },
        ]
    } : {}

    const websites = await context.prisma.websites({
        where,
        skip: args.skip,
        first: args.first,
        last: args.last,
        orderBy: args.orderBy,
        before: args.before,
        after: args.after,
    })

    return websites
}

module.exports = {
    websites,
}
