import { createContext, useState } from "react";

const ModeContext = createContext({ mode: "light", toggleMode: () => {} });
export default ModeContext;

export function ModeProvider({ children }) {
    const [mode, setMode] = useState("light");
    function toggleMode() {
    setMode(function (m) { return m === "light" ? "dark" : "light"; });
}
    return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
        {children}
    </ModeContext.Provider>
    );
}
