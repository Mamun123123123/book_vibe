import React, { use, useState } from 'react'
import { useParams } from 'react-router'

const booksPromise = fetch("/booksData.json").then(res => res.json())

const BookDetails = () => {

  const [storeBooks, setStoreBooks] = useState([])
  const [wishlist, setWishlist] = useState([])

  const handleMarkAsRead = (id) => {
    const newList = [...storeBooks, id]
    setStoreBooks(newList)
    console.log("Read List:", newList)
  }

  const handleWishlist = (id) => {
    const newWish = [...wishlist, id]
    setWishlist(newWish)
    console.log("Wishlist:", newWish)
  }

  const books = use(booksPromise)
  const { bookId } = useParams()

  const book = books.find(
    (item) => item.bookId === parseInt(bookId)
  )

  if (!book) {
    return <p className="text-center mt-10 text-red-500">Book not found ❌</p>
  }

  return (
    <div className="min-h-screen px-4 md:px-10 py-12 bg-base-200 flex items-center justify-center">
      
      <div className="bg-base-100 rounded-3xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 gap-8 p-6 md:p-10">

        <div className="flex justify-center items-center">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-2xl w-full max-w-sm h-80 object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-between">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {book.bookName}
            </h2>

            <p className="text-gray-500 mb-4">
              ✍️ {book.author}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {book.tags.map((tag, i) => (
                <span key={i} className="badge badge-success badge-outline">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {book.review || "No description available."}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-outline px-4 py-3">
                📂 {book.category}
              </span>
              <span className="badge badge-primary px-4 py-3 text-white">
                ⭐ {book.rating}
              </span>
              <span className="badge badge-accent px-4 py-3 text-white">
                📄 {book.totalPages || "N/A"} pages
              </span>
            </div>

            <div className='flex gap-4'>
              <button 
                onClick={() => handleMarkAsRead(book.bookId)} 
                className="btn btn-primary w-full md:w-fit rounded-full px-8"
              >
                Mark as Read
              </button>

              <button 
                onClick={() => handleWishlist(book.bookId)} 
                className="btn btn-secondary w-full md:w-fit rounded-full px-8"
              >
                Add to Wishlist
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetails