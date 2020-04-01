const getDates = () => {
    let dateTime = new Date(Date.now()),
        prevDateTime = new Date(Date.now());
    dateTime.setDate(dateTime.getDate() - 1);
    prevDateTime.setDate(prevDateTime.getDate() - 2);

    const date = ((dateTime.getMonth() + 1) + '/' + dateTime.getDate() + '/' + dateTime.getFullYear().toString().substr(2, 2)).toString();
    const prevDate = ((prevDateTime.getMonth() + 1) + '/' + prevDateTime.getDate() + '/' + prevDateTime.getFullYear().toString().substr(2, 2)).toString();

    return {
        date,
        prevDate
    };
};

module.exports = getDates;