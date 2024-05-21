import React, { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext();



const WishlistProvider = ({ children }) => {

    const [wishId, setWishId] = useState([]);


    const addToWishlist = (id) => {
        if (wishId.includes(id)) {
            setWishId((oldData) => {
                return oldData.filter((val) => {
                    return val !== id;
                })
            })
        } else {
            setWishId((oldData) => {
                return [id, ...oldData]
            })
        }
    }

    const deleteWishlistSingleData = (id) => {
        setWishId((oldData) => {
            return oldData.filter((val) => {
                return val !== id;
            }
            )
        })
    }

    return (
        <wishlistContext.Provider value={{ wishId, setWishId, addToWishlist, deleteWishlistSingleData }}>
            {children}
        </wishlistContext.Provider>

    )
}

const useGlobalWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalWishlist };