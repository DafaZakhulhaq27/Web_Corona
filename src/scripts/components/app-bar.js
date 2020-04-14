
class AppBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }  
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light .bg-gradient-light
        fixed-top shadow-sm p-3 mb-5 bg-white" id="navbarspy">
            <a class="navbar-brand" href="#"><h3>WEB COVID-19</h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse shadow-sm" id="navbarSupportedContent" >
              <ul class="navbar-nav mr-auto ">
              </ul>
              <ul class="navbar-nav mr-right ">
                <li class="nav-item active">
                  <a class="nav-link" href="#global_cases">Global Cases <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#cases_per_country">Cases per Country</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#data_source">Data Source</a>
                </li>         
                <li class="nav-item active">
                  <a class="nav-link" href="#about_me">About Me</a>
                </li>                           
              </ul>
            </div>
          </nav>`;
    }
 }

 customElements.define("app-bar", AppBar);
