import React from 'react';
import {Link} from 'react-router-dom';
import {useApp} from '../state/AppState';

const Header = () => {
  const {setSearchQuery, searchQuery} = useApp();

  return (
    <header className="w-full py-4 shadow bg-white">
      <div className="container mx-auto flex flex-col items-center space-y-2 px-6 md:flex-row md:space-x-4 md:space-y-0 lg:px-0">
        <Link to={'/'} className="font-medium">
          Pokemon App
        </Link>
        <div>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 border-gray-200 rounded-lg p-2 "
            type="text"
            value={searchQuery}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
