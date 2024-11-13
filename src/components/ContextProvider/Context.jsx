import {createContext, useState} from "react";
import data from "../data/data.js";

export const MyContext=createContext({

    /*ctxData: [],     // مقدار پیش‌فرض برای داده‌ها
    ctxHandler: () => {}  // مقدار پیش‌فرض برای تابع آپدیت*/

})


export default function ContextProvider({children}) {

    const [Data, setData] = useState(data);
    const ctxValue= {
        ctxData: Data,
        ctxHandler(newData){
            setData(newData)
        }
    }
    return (
        <MyContext.Provider value={ctxValue}>

            {children}

        </MyContext.Provider>
    )
}
