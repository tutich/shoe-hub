import Shoe from '../dataimg/P-IMG-20230912-WA0047.jpg';

function Products() {
    return(
        <div>
            <div className='card-container'>
                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

            
            </div>

            <div className='card-container'>
                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

                <section className='card'>
                <img className='card-img' src={Shoe} alt="shoe" />
                </section>

            
            </div>

            
        
            
        </div>
    )
}

export default Products;