import { createContext } from "react";

interface ContextValue {
    mode: string;
    setmode:(data:string)=>void
}
const MyContext = createContext<ContextValue | null>(null);

export default MyContext;