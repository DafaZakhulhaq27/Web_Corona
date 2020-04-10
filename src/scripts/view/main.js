import '../components/global-cases.js';;
import DataSource from '../data/data-source.js';
 
const main = () => {
    const globalcases = document.querySelector("global-cases");

   const banner = async () => {
       try {
           const result = await DataSource.corona_cases();
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
    globalcases.corona_cases = results;
};
 
const fallbackResult = message => {
    globalcases.renderError(message);
};
 banner() ;
};
 
export default main;