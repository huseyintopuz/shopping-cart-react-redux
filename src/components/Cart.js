import React from 'react'
import { connect } from 'react-redux'
import { deleteCart } from '../redux/actions/actionTypes';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = (props) => {

  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <div>
      <div>
        <span>Kitap Listesi</span>
        <span>Sepetim</span>
      </div>
      <h2>Toplam Sepet Tutarı: ₺{totalPrice}</h2>

      {props.cart.map((book, index) => (
        <div className='book-map' key={index}>
          <div className='book-list-map'>
            <img src={book.image} alt={book.name} />
            <div className='book-name'>
              <h4>{book.name}</h4>
              <p>{book.author}</p>
              <p>₺{book.price}</p>
              <div className='button-group'>
                <button>+</button>
                <div>
                  <Button className='button' variant="outlined"
                    onClick={() => props.deleteCart(book)} startIcon={<DeleteIcon />}>
                    SİL
                  </Button>
                </div>
                <button>-</button>
              </div>
            </div>
          </div>
        </div>))}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(
  mapStateToProps,
  { deleteCart }
)(Cart);