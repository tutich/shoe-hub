import Input from '../../components/Input';
import './Category.css'


// function Category({handleChange, value, title, name}) {
//     return (
//         <div>
//             <h2 className="title">Category</h2>
//             <div >
//                 <label className='adidas'>
//                     <span></span>
//                     All
//                     <input className='small' onChange={handleChange}  value=""  type="radio" name="test" />
//                 </label>

//                 <label className="adidas">
//                     <span></span>
//                     Adidas
//                     <input onChange={handleChange} className='small' type="radio" name="text" />
//                 </label>

//                 <label className='adidas'>
//                     <span></span>
//                     Jordans
//                     <input onChange={handleChange} className='small' type="radio" name="text" />
//                 </label>

//                 <label className="adidas">
//                     <span></span>
//                     Louis Vuiton
//                     <input onChange={handleChange} className='small' type="radio" name="text" />
//                 </label>

//                 <label className="adidas">
//                     <span></span>
//                     Nike
//                     <input onChange={handleChange} className='small' type="radio" name="text" />
//                 </label>

//                 <label className="adidas">
//                     <span></span>North Star
                    
//                     <input onChange={handleChange} className='small' type="radio" name="text" />
//                 </label>
                
//                 <label className="adidas">
//                     <span></span>
//                     Puma
//                     <input onChange={handleChange} value="" className='small' type="radio" name="text" />
//                 </label>

            
//             </div>
//         </div>
//     )
// }

// export default Category;


function Category({ handleChange }) {
    return (
      <div>
        <h2 className="sidebar-title">Category</h2>
  
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="canvas"
            title="canvas"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="slip-on"
            title="Slip-on"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="Deck"
            title="Deck"
            name="test"
          />
        </div>
      </div>
    );
  }
  
  export default Category;