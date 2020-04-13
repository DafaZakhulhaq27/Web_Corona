
class GlobalCases extends HTMLElement {
    set corona_cases(corona_cases) {
        this._corona_cases = corona_cases;
        this.render();
    }
    renderError(message) {
        alert(`${message} ( Check Your Internet Connection / Reload Page)`) ;
    }  
    render() {
        this.innerHTML = `
        <article id="global_cases" class="d-flex justify-content-center text-center align-items-center">
            <div class="col-lg-6 col-md-8 col-sm-6 col-6">
                <h1>GLOBAL CASES</h1>
                <p>${this._corona_cases.total_cases} CASES</p>
                <div class="row">
                    <div class="col-xl-6 col-lg-12 death">
                        <h2>DEATH</h2>
                        <p>${this._corona_cases.total_deaths} CASES</p>
                        </div>
                    <div class="col-xl-6 col-lg-12  recovered">                        
                        <h2>RECOVERED</h2>
                        <p>${this._corona_cases.total_recovered} CASES</p>
                        </div>
                </div>
            </div>
        </article>
        `;
    }
 }

 customElements.define("global-cases", GlobalCases);
