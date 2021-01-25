function getNextQuarter() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const nextQuarter = Math.ceil(month/3) + 1;
    return nextQuarter > 4 ? 1 : nextQuarter;
}

function getYearOfUpcommingQuarter(nextQuarter) {
    const currentYear = (new Date()).getFullYear();
    return nextQuarter === 1 ? currentYear + 1 : currentYear
}

async function getVariables(variables)  {
    const nextQuarter = getNextQuarter();
    return {
        NEXT_QUARTER: getNextQuarter(),
        YEAR: getYearOfUpcommingQuarter(nextQuarter),
        O_TEXT: encodeURIComponent(variables.OBJECTIVE),
        KR_TEXT: encodeURIComponent(variables.KEYRESULT)
    }
}

module.exports = getVariables


