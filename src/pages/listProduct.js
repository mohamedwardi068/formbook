import React, { useState } from 'react';
import Modal from 'react-modal';
import { useApi } from '../context/apicontext';
import Product from '../components/product';
import Detailsbook from '../components/detailsbook';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '80%',
    height: '80%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

function ListProduct() {
  const { newBooks } = useApi();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  function openModal(product) {
    setSelectedProduct(product);
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
    setSelectedProduct(null);
  }

  return (
    <div className='bg-[#EBEEF6] ml-[5%] mr-[2%] mb-[2%] md:ml-[5%] mt-[2%]'>
      <h1 className='font-bold text-3xl ml-2 mt-6 mb-3 text-center sm:text-left'>
        Best Weekly Deals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newBooks.length !== 0 ? (
          newBooks.map((product) => (
            <div 
              key={product._id} 
              onClick={() => openModal(product)}
              className="cursor-pointer"
            >
              <Product
                _id={product._id}
                bookName={product.bookName}
                price={product.price}
                coverImg={product.coverImg}
                originalPrice={product.originalPrice}
                rating={product.rating}
                isPreOrder={product.isPreOrder}
                isTopRated={product.isTopRated}
                isBestSeller={product.isBestSeller}
                sold={product.sold}
                totalStock={product.totalStock}
              />
            </div>
          ))
        ) : (
          <div>Error: No products available</div>
        )}
      </div>

      <div className="flex justify-center mt-2 mb-6">
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 mb-6">
          See All Products (63)
        </button>
      </div>

   
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedProduct && (
          <Detailsbook
            title={selectedProduct.bookName}
            price={selectedProduct.price}
            description={selectedProduct.description}
            image={selectedProduct.coverImg}
            genre={selectedProduct.genre} // Assuming genre is a property in your product
            author={selectedProduct.author} // Assuming author is a property in your product
          />
        )}
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </Modal>
    </div>
  );
}

export default ListProduct;
