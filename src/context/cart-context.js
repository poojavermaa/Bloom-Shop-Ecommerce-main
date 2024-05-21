import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useGlobalLogin } from "./login-context";


const cartContext = createContext();

const CartProvider = ({ children }) => {


    const [cartId, setCartId] = useState([]);

    const { notifySuccess, notifyInfo, notifyWarn } = useGlobalLogin();

    const SetCartIdArray = (cartId) => {
        localStorage.setItem("CartIdArray", JSON.stringify(cartId))
    };



    useEffect(() => {
        SetCartIdArray(cartId);
    }, [cartId])


    const ourInclude = (arr, id) => {
        let flag = false;
        arr.map((cartObj) => {
            if (cartObj.id === id) {
                flag = true;
            }
        })
        return flag;
    }


    const addToCart = (id) => {

        let flag = ourInclude(cartId, id);

        if (flag === false) {
            setCartId((oldData) => {
                return (
                    [
                        {
                            id: id,
                            qnt: 1
                        },
                        ...oldData
                    ]
                )
            })
            notifySuccess("Item Added In Cart");
        } else {
            notifyWarn("Already Exists")
        }

    }

    const deleteCart = (id) => {

        setCartId((oldData) => {
            return oldData.filter((val) => {
                return val.id != id;
            })
        })
        notifyInfo("Item Deleted From Cart")
    }

    return (
        <cartContext.Provider value={{ cartId, setCartId, addToCart, deleteCart, ourInclude }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };