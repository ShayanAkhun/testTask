//using Async await to fetch data

class EasyHTTP {
    // Make an HTTP GET Request 
    async getData(url) {
        const res = await fetch(url);
        const response = await res.json();
        return response;
    }

}