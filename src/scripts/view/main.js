import '../components/app-bar.js';
import '../components/global-cases.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
    const globalcases = document.querySelector("global-cases");
    const countrylist = document.querySelector("#country-list");

   const load_data = async () => {
       try {
           const results = await DataSource.global_corona_cases() ;
        //    const affected = await DataSource.affected_corona_cases() ;
        //    renderResult(results,affected);
           renderResult(results);

       } catch (message) {
           fallbackResult(message)
       }
   };
   
//    const replacer = (value, defaultValue) => {
// 	if (Array.isArray(value)) return defaultValue.replace(/]$/, ',"-truncated-"]');
// 	return defaultValue;
//     }
//    const renderResult = (results,affected) => {
    const renderResult = (results) => {
    globalcases.corona_cases = results  ;
    // countrylist.country_cases = affected.affected_countries ;    
    // console.log(affected.affected_countries) ;
    };
 
const fallbackResult = message => {
    // countrylist.renderError(message);
    globalcases.renderError(message);

};

const getCountryAffected = () => {
    fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php`, {
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
        renderCountryAffected(responseJson.affected_countries);
    })
    .catch(error => {
         alert(error);
    })
};


const renderCountryAffected = (results) => {
    countrylist.innerHTML = "";

    results.forEach((result,index) => 
    {
        if(index !== 0){
            countrylist.innerHTML += `
            <div class="card col-xl-2 col-md-3 col-sm-5 col-5 shadow-sm"  >
                    <div class="card-body">
                    <h5 class="card-title"><b>${result}</b></h5>
                    </div>
                </div>
            `;
        }
    });
};




getCountryAffected() ;
load_data() ;
};
 
export default main;