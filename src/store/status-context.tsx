import {createContext, useState} from "react";

interface StatusContextType {
    light: string;
    setLight: React.Dispatch<React.SetStateAction<string>>;
}

const StatusContext = createContext<StatusContextType>({
    light:"",
    setLight:()=>{},
});

export function StatusProvider({children}:any){
    const [light, setLight] = useState<string>("off");

    return <StatusContext.Provider value={{
            light, setLight,
        }}>
        {children}
    </StatusContext.Provider>
}

export default StatusContext;