import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../redux/actions/actionTypes';
import Button from '@mui/material/Button';
import './products.css'

const Products = (props) => {
  
  return (
    <div>
      <div className='book-list'>
        <span>Kitap Listesi</span>
        <Link to='/cart'>Sepetim</Link>
      </div>
      {props.bookList.map((book) => (
        <div className='book-map' key={book.id}>
          <div className='book-list-map'>
            <img src={book.image} alt={book.name} />
            <div className='book-name'>
              <h4>{book.name}</h4>
              <p>{book.author}</p>
              <p>₺{book.price}</p>
              <div className='button'>
                <Button variant="contained" onClick={() => props.addCart(book)}>Sepete Ekle</Button>
              </div>
            </div>
          </div>
        </div>))}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

export default connect(
  mapStateToProps,
  { addCart }
)(Products)