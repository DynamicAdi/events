import {DM_Sans, Poppins, Montserrat} from "next/font/google"

export const Main = DM_Sans({
    subsets: ["latin"],
    weight: ['200', "300", "400", "500", "700", "800", "900"],
    variable: "--font-main",
    
})

export const Secondary = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-pop",
})

export const Mon = Montserrat({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
   variable: "--font-mont",
})