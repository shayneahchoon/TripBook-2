const defaultLoader = ({ request }) => {
    const searchString = new URL(request.url).searchParams;
    
    return {
      location: searchString.getAll("location"),
      flight: searchString.getAll("flight"),
      date: searchString.getAll("date"),
      time: searchString.getAll("time"),
    };
  };
  
  export default defaultLoader;