const saveLoader = ({ request }) => {
  const params = new URL(request.url).searchParams;
  return {
    times: params.getAll("time_epoch"),
    flights: params.getAll("flight"),
    locations: params.getAll("location"),
    types: params.getAll("type"),
  };
};

export default saveLoader;
