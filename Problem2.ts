const getLength = (value: string | object) => {

    if (typeof value === 'string') {
        return value.length
    }
    if (Array.isArray(value)) {
        return value.length;
    }
}

