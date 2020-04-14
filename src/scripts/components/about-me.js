
class Aboutme extends HTMLElement {

    connectedCallback(){
        this.render();
    }  
    render() {
        this.innerHTML = `
        <article id="about_me" class="text-center " style="width: 100%;">
            <div class="col-xl-4 col-lg-6 col-md-6  mx-auto " id="searchbar"> 
                <h2><strong>About Me</strong> </h2>
                <div class="card col-xl-12 shadow-sm">
                    <img src="https://avatars0.githubusercontent.com/u/25057235?s=460&u=272c46b60fe369c47e5863bb5b03594b78cfd511&v=4" class="img-fluid" alt="Responsive image">
                    <div class="card-body">
                    <h5 class="card-title"><b>Dafa Zakhulhaq</b></h5>
                    <p>Junior Web Developer <i class="fab fa-github"></i></p>
                    </div>
                </div>                 
            </div>
            </div>       
        </article>
 `;
    }
 }

 customElements.define("about-me", Aboutme);
