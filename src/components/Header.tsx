import { Link } from "react-router-dom";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <nav className="bg-[#0F0F0F] w-full h-[65px] sticky top-0" aria-label="Top">

            <Link to="/">
                <h1 className="text-2xl font-bold text-white">
                    Logo
                </h1>
            </Link>
         
        </nav>
      </header>

      {children}
    </>
  );
};

export default Header;
