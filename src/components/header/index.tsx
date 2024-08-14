import { useMemo, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const getIconSource = useMemo(() => {
    if (!showMenu) {
      return "/icon/menu-of-three-lines.png";
    }
    return "/icon/close.png";
  }, [showMenu]);

  const menuItems = () => {
    const menuList = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ];
    return (
      <>
        {menuList.map((item) => (
          <a
            href={item.link}
            className={`hover:text-gray-500 text-base sm:pr-10 sm:text-xl`}
          >
            {item.name}
          </a>
        ))}
      </>
    );
  };

  return (
    <header className="flex items-center justify-between py-2 px-4 sm:px-20 border-b-2 rounded-b-sm bg-gray-100 sticky top-0">
      <img src="/logo/logo-circle.png" alt="Logo" className="h-28" />
      <nav className="hidden sm:flex justify-between items-center sm:gap-8">
        {menuItems()}
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 text-black">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500 hover:bg-green-200 p-1 rounded-full"
        >
          <img src={getIconSource} className="h-5" />
        </button>
        {showMenu && menuItems()}
      </nav>
    </header>
  );
};

export default Header;
