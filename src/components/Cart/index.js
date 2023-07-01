import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartContext from '../../context/CartContext'
import CartListView from '../CartListView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, deleteAllItems} = value
      const cartEmpty = cartList.length === 0
      const onClickRemoveAll = () => {
        deleteAllItems()
      }
      return (
        <>
          <Header />
          {cartEmpty ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <div className="remove-all-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    onClick={onClickRemoveAll}
                    type="button"
                    className="remove-all-button"
                  >
                    Remove all
                  </button>
                </div>
                <CartListView />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
