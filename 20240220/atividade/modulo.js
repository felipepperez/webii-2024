const functions = {
    media: (arr) => {
        let sum = 0;
        for (element of arr) {
            sum += element;
        }
        return sum / arr.length
    },
    menor: (arr) => {
        let minor = arr[0];
        for (element of arr) {
            if (element < minor)
                minor = element;
        }
        return minor;
    },
    maior: (arr) => {
        let major = arr[0];
        for (element of arr) {
            if (element > major)
                major = element;
        }
        return major;
    }
}

module.exports = functions;