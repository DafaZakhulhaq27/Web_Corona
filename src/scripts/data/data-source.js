class DataSource {

    static global_corona_cases() {
        return fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php`, {
            method: "GET",
            headers: {
                   "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                   "x-rapidapi-key": "3c2a7c75a4msh683188b40e4bbffp1de69cjsn1f7c40dbcd3e"
            }        
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`Check Your Internet Connection`);
            }
        })
    }    

}

export default DataSource;
