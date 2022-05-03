import Item from './Item/Item.js';
import './item-list.css'




const ItemList =(props) => {
const {prodListData} = props
return(

    <div className='itemList'>
       {prodListData.map((productData) => {

        return (
          <div key={productData.id}>
          
            <Item productData={productData}/>
  
          </div>
        );
      })}
      
    </div>
)

}

export default ItemList;