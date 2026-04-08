import React, { use } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const booksPromise = fetch("/booksData.json").then(res => res.json())

const BookDetails = () => {
  const navigate = useNavigate()
  const books = use(booksPromise)
  const { bookId } = useParams()

  const book = books.find(
    (item) => item.bookId === parseInt(bookId)
  )

  const addToStorage = (key, id) => {
    let stored = JSON.parse(localStorage.getItem(key)) || []

    if (!stored.includes(id)) {
      stored.push(id)
      localStorage.setItem(key, JSON.stringify(stored))
    }
  }

  const handleMarkAsRead = (id) => {
    addToStorage("readBooks", id)
    navigate("/books")
  }

  const handleWishlist = (id) => {
    addToStorage("wishlistBooks", id)
    navigate("/wishlist")
  }

  if (!book) {
    return (
      <p className="text-center mt-10 text-red-500">
        Book not found ❌
      </p>
    )
  }

  return (
    <div className="min-h-screen bg-base-200 px-3 sm:px-6 md:px-10 py-8 flex items-center justify-center">
      <div className="bg-base-100 w-full max-w-6xl rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 sm:p-6 md:p-10">
          
          <div className="flex justify-center items-center">
            <img
              src={book.image}
              alt={book.bookName}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">
                {book.bookName}
              </h2>

              <p className="text-gray-500 text-sm sm:text-base mb-3 sm:mb-4">
                ✍️ {book.author}
              </p>

              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {(book.tags || []).map((tag, i) => (
                  <span key={i} className="badge badge-success badge-outline text-xs sm:text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {book.review || "No description available."}
              </p>
            </div>

            <div className="mt-5 sm:mt-6 space-y-4">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="badge badge-outline text-xs sm:text-sm px-3 py-2">
                  📂 {book.category}
                </span>

                <span className="badge badge-primary text-white text-xs sm:text-sm px-3 py-2">
                  ⭐ {book.rating}
                </span>

                <span className="badge badge-accent text-white text-xs sm:text-sm px-3 py-2">
                  📄 {book.totalPages || "N/A"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleMarkAsRead(book.bookId)}
                  className="btn btn-primary w-full sm:w-auto rounded-full"
                >
                  Mark as Read
                </button>

                <button
                  onClick={() => handleWishlist(book.bookId)}
                  className="btn btn-secondary w-full sm:w-auto rounded-full"
                >
                  Add to Wishlist
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetails