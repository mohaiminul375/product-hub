export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 border-b-2 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          
        </div>
        <h2 className="btn btn-ghost text-2xl font-semibold text-[#1E99F5]">Product Hub</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        
      </div>
      <div className="navbar-end">
        
      </div>
    </nav>
  );
}
