import NavbarComponent from './NavbarComponent';

export const Layout = ({children}) => {
    return (
        <div className={"container-fluid"}>
            <div className={"row test"}>
                <NavbarComponent/>
            </div>
            {children}
        </div>
    )
}

export default Layout;