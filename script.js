function getNextQuarter() {
    const today = new Date();
    const month = today.getMonth() + 1;
    return Math.ceil(month/4) + 1;
}

function getCurrentYear() {
    const today = new Date();
    return today.getFullYear();
}

module.exports = async function(variables) {
    return {
        NEXT_QUARTER: getNextQuarter(),
        CURRENT_YEAR: getCurrentYear(),
        O_TEXT: encodeURIComponent(variables.OBJECTIVE),
        KR_TEXT: encodeURIComponent(variables.KEYRESULT)
    }
}
