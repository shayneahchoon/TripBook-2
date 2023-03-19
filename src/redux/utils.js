export const getAccomodations = (state) => {
    const list = Object.values(state);
    const sortedList = list.sort((a, b) => a.checkin - b.checkin);
    return sortedList;
}

export const getFlights = (state) => {
    const list = Object.values(state);
    const sortedList = list.sort((a, b) => a.timestamp - b.timestamp);
    return sortedList;
}