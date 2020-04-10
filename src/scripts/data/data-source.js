class DataSource {

    static corona_cases() {
        return fetch(`https://api.covid19api.com/summary`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Global) {
                return Promise.resolve(responseJson.Global);
            } else {
                return Promise.reject(`Check Your Internet Connection`);
            }
        })
    }    
}

export default DataSource;
