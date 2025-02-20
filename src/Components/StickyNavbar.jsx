import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Navbar, Typography, Button, IconButton, Collapse } from "@material-tailwind/react";

function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "Blog", "Service", "About", "Contact"].map((item, index) => (
        <Typography key={index} as="li" variant="small" className="p-1 text-white">
          <Link to={`/${item.toLowerCase()}`} className="flex items-center" onClick={() => {
            if (window.innerWidth <= 960) {
              setOpenNav(!openNav);
            }
          }}>
            {item}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="fixed top-3 left-1/2 transform -translate-x-1/2 z-[1000] bg-transparent  my-3 px-5 py-3 text-center w-[90%] rounded shadow-lg">
      <div className="flex items-center justify-between text-blue-gray-900 py-auto">
        {/* Logo */}
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium text-white">
          Cyberweep
        </Typography>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {navList}
          <Button variant="text" size="sm" className="bg-violet-600 text-white hover:border-0">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6 text-white " viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Navigation */}
      <Collapse open={openNav}>
        <div className="flex flex-col items-center gap-2">{navList}</div>
        <Button fullWidth variant="text" size="sm" className="bg-violet-600 px-4 py-2 text-white">
          Free Consultation
        </Button>
      </Collapse>
    </Navbar>
  );
}

export default StickyNavbar;
