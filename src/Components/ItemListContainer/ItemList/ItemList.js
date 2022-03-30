import Item from './Item/Item.js';
import './item-list.css'

const ItemList =(props) => {
const {prodListData} = props
return(

    <div className='itemList'>
       {prodListData.map((productData) => {

        return (
          <div>
            <Item key={productData.id} productData={productData}/>
          </div>
        );
      })}
      
    </div>
)

}

export default ItemList;