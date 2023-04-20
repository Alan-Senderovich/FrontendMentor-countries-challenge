import { ReactNode } from 'react';
import Navbar from './Navbar';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        
            <div className='w-full'>
                <Navbar />
                <main className="bg-gray-200 dark:bg-[#202d36]">{children}</main>
            </div>
        
    );
};

export default Layout;
