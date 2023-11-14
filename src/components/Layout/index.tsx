import { Fragment } from "react"
import Header from "./Header"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default Layout
