import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
function Card() {
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center" >
            <div class ="col">
                <div class="card text-white bg-primary mb-3 " styles ="max-width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card 1</h5>
                        <p class="card-text">Some quick example text to build the card title and make up the builk of the cards content </p>
                    </div>
                </div>
            </div>
            <div class ="col"> 
                <div class="card text-white bg-danger mb-3" styles ="max-width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card 2</h5>
                        <p class="card-text">Some quick example text to build the card title and make up the builk of the cards content </p>
                    </div>
                </div>
            </div> 
            <div class ="col">
                <div class="card text-white bg-success mb-3"  styles ="max-width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card 3</h5>
                        <p class="card-text">Some quick example text to build the card title and make up the builk of the cards content </p>
                    </div>
                </div> 
            </div>

        </div>  
    );
}
export default Card;