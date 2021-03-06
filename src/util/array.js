Array.prototype.groupBy = function (prop) {
    return this.reduce((groups, item) => {
        const val = item[prop]
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
    }, {})
}