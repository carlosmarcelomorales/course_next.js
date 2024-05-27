import {ReactNode} from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <nav>Category Navigation</nav>
            {children}
        </main>
    );
}

export default Layout;