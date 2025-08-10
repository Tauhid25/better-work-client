import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const DropdownMenu = () => {
  const { user } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close dropdown after click
  };

  return (
    <div className="relative">
      <div
        tabIndex={0}
        role="button"
        className="m-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="w-12 rounded-full"
          src={user.photoURL}
          alt={user.displayName}
        />
      </div>

      {isOpen && (
        <ul className="absolute right-0 dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm dark:bg-gray-800 dark:text-white">
          <li>
            <Link to="/create-event" onClick={handleLinkClick}>
              Create Event
            </Link>
          </li>
          <li>
            <Link to="/joined-events" onClick={handleLinkClick}>
              Joined Events
            </Link>
          </li>
          <li>
            <Link to="/manage-events" onClick={handleLinkClick}>
              Manage Events
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
