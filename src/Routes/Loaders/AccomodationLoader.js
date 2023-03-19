const accomodationLoader = ({ request }) => {
    const search = new URL(request.url).searchParams;
    return {
        address1: search.get('address_line_1'),
        postCode: search.get('post_code'),
        title: search.get('title'),
        checkIn: search.get('check_in'),
        checkOut: search.get('check_out'),
    }
}

export default accomodationLoader;