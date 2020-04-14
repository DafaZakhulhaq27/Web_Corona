
class DataSource extends HTMLElement {

    connectedCallback(){
        this.render();
    }  
    render() {
        this.innerHTML = `
        <article id="data_source" class="text-center ">
            <div class="ol-xl-6 col-lg-6 col-md-6  mx-auto "> 
                <h2><strong>Data Source</strong> </h2>
                <div class="card col-xl-12 shadow-sm"id="link_data_source">
                    <div class="card-body">
                      <h2><strong>Rapid Api (Coronavirus monitor)</strong></h2>
                        <a href="https://rapidapi.com/astsiatsko/api/coronavirus-monitor" target="_blank">https://rapidapi.com/astsiatsko/api/coronavirus-monitor</a>
                      </div>
                </div>                
            </div>
        </article> `;
    }
 }

 customElements.define("data-source", DataSource);
