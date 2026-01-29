import { createContext, useContext, useState } from "react";

const Mycontext = createContext();

const MydataProvider = ({children})=>{
    
    const [formData, setFormData]=useState({
        name: "",
        brand: "",
        image: "",
        description: "",
        price: "",
      })

    const [product, setProduct] = useState({});

    const [itemdata,setItemdata]=useState([])

    const value = {formData,setFormData,product,setProduct,itemdata,setItemdata}

    return(
        <Mycontext.Provider value={value}>
            {children}
        </Mycontext.Provider>
    );
};

const UseMycontext = ()=>{
    return useContext(Mycontext);
};

export {MydataProvider, UseMycontext};