"use client";

const isAdminView = false;
const isAuthUser = true;
const user = {
  role: "admin",
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-white w-full">
        <div className="flex justify-between max-w-screen-xl items-center mx-auto">
          <div className="flex items-center">
            <span className="self-center font-semibold text-2xl text-black">
              E-Commerce
            </span>
          </div>
          <div className="text-black flex gap-2">
            {!isAdminView && isAuthUser ? (
              <>
                <button>Account</button>
                <button>Cart</button>
              </>
            ) : null}
            {user.role == 'admin' ?isAdminView?<button>Client View</button>:<button>Admin View</button>:null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
