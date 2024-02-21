import './Category.css'


function Category() {
    return (
        <div>
            <h2 className="title">Category</h2>
            <div >
                <label className='adidas'>
                    <span></span>
                    All
                    <input className='small' type="radio" name="text" />
                </label>

                <label className="adidas">
                    <span></span>
                    Adidas
                    <input className='small' type="radio" name="text" />
                </label>

                <label className='adidas'>
                    <span></span>
                    Jordans
                    <input className='small' type="radio" name="text" />
                </label>

                <label className="adidas">
                    <span></span>
                    Louis Vuiton
                    <input className='small' type="radio" name="text" />
                </label>

                <label className="adidas">
                    <span></span>
                    Nike
                    <input className='small' type="radio" name="text" />
                </label>

                <label className="adidas">
                    <span></span>North Star
                    
                    <input className='small' type="radio" name="text" />
                </label>
                
                <label className="adidas">
                    <span></span>
                    Puma
                    <input className='small' type="radio" name="text" />
                </label>
            </div>
        </div>
    )
}

export default Category;