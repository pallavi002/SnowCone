import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Header from "../header";

interface IProduct {
  id: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
}

export default function ProductsDisplay() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showFullDescriptions, setShowFullDescriptions] = useState<boolean[]>(
    []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Set the maximum length for the description
  const maxLength = 100;

  const quantityOptions = [1, 2, 3, 4, 5];

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  function PaginationControls() {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-gray-200"
        >
          Previous
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mr-2 px-4 py-2 ${
              currentPage === page ? " bg-slate-700 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-2 px-4 py-2 bg-gray-200"
        >
          Next
        </button>
      </div>
    );
  }

  // Function to fetch data from the API and cache it in localStorage
async function fetchData(page: number) {
  try {
    setIsLoading(true); // Set loading state to true

    // Check if data is already cached in localStorage
    const cachedData = localStorage.getItem("productsData");
    const parsedData = cachedData ? JSON.parse(cachedData) : {};

    if (parsedData[page]) {
      // If data for the current page is available in localStorage, use it
      setProducts(parsedData[page]);
      setTotalPages(parsedData.totalPages);
      setIsLoading(false); // Set loading state to false
    } else {
      console.log("Called");
      
      // If data for the current page is not available, fetch new data from the API
      const apiUrl = `http://localhost:1234/products?page=${page}&perPage=6`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { data, total } = await response.json();

      // Update the data in localStorage with the new products
      parsedData[page] = data;
      parsedData.totalPages = Math.ceil(total / 6);

      localStorage.setItem("productsData", JSON.stringify(parsedData));

      setProducts(data);
      setTotalPages(parsedData.totalPages); // Assuming 'total' is the total number of products
      setIsLoading(false); // Set loading state to false when data is fetched
    }
  } catch (err) {
    console.error("Error Fetching Data: ", err);
    setIsLoading(false); // Set loading state to false on error
  }
}

useEffect(() => {
  fetchData(currentPage);
}, [currentPage]);



  const toggleDescription = (index: number) => {
    // Create a new array and toggle the value at the specified index
    const updatedShowFullDescriptions = [...showFullDescriptions];
    updatedShowFullDescriptions[index] = !updatedShowFullDescriptions[index];
    setShowFullDescriptions(updatedShowFullDescriptions);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl mt-16">
          <h2
            className="mb-6 text-3xl font-bold font-cursive tracking-tight font-extrabold"
            style={{ color: "rgba(147,189,203,255)" }}
          >
            {products.length} yummy ice creams found... only for you!!
          </h2>
          {/* card */}
          <div className="grid grid-cols-3 gap-4">
            {isLoading ? (
              // Show loading indicator while fetching data
              <p>Loading...</p>
            ) : (
              // Map through the products data
              products.map((product: IProduct, index) => {
                const description = product.productDescription;

                // Truncate the description if it exceeds the maximum length
                const truncatedDescription = showFullDescriptions[index]
                  ? description
                  : description.slice(0, maxLength);

                return (
                  <div
                    className="p-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    key={index}
                  >
                    <a href="#!">
                      <img
                        className="rounded-t-lg min-h-96 max-h-96 mx-auto min-w-fit"
                        src={product.productImage}
                        alt=""
                      />
                    </a>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-slate-500 dark:text-neutral-50">
                        {product?.productName}
                      </h5>
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {truncatedDescription}
                        {description.length > maxLength &&
                          !showFullDescriptions[index] && (
                            <span>
                              {/* Display "Read More" button */}
                              <button
                                className=" cursor-pointer ml-1"
                                onClick={() => toggleDescription(index)}
                              >
                                ....
                              </button>
                            </span>
                          )}
                      </p>

                      <p
                        className="text-l font-bold mb-4"
                        style={{ color: "#68929F" }}
                      >
                        {" "}
                        Price: <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                        {product?.productPrice}
                      </p>
                      <div className="flex">
                        <div className="flex items-center">
                          {/* Step 4: Create the quantity dropdown */}
                          <select
                            className="border border-gray-300 rounded py-2 px-4 mr-3"
                            value={selectedQuantity}
                            onChange={(e) => handleQuantityChange(e)}
                          >
                            {quantityOptions.map((quantity) => (
                              <option key={quantity} value={quantity}>
                                {quantity}
                              </option>
                            ))}
                          </select>
                        </div>

                        <button className=" text-white bg-slate-400 font-bold py-2 px-4 rounded mr-3">
                          Add To Cart
                        </button>
                        <button
                          className=" text-white font-bold py-2 px-4 rounded"
                          style={{ backgroundColor: "#93BDCB" }}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <PaginationControls />
        </div>
      </section>
    </>
  );
}
