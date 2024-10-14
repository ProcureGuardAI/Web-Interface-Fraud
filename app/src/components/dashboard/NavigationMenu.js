import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    // const menuLinks = ["Home", "Flagged Transactions", "Vendor List", "Bidding History", "Settings"]
    const homeLinkStyle = "font-bold text-black hover:text-green-600 cursor-pointer transition-colors duration-300 p-2 rounded-lg hover:bg-green-100";
    const commonLinkStyles = "text-black hover:text-green-600 cursor-pointer transition-colors duration-300 p-2 rounded-lg hover:bg-green-100";

    const navlinks = [
      {"class": homeLinkStyle, "href": "", "name": "Home"},
      {"class": commonLinkStyles, "href": "flagged-transactions", "name": "Flagged Transactions"},
      {"class": commonLinkStyles, "href": "vendors", "name": "Vendor List"},
      {"class": commonLinkStyles, "href": "biddings", "name": "Bidding History"},
      {"class": commonLinkStyles, "href": "settings", "name": "settings"},
    ]
  return (
    <div className="w-full sm:w-1/5 bg-white h-auto sm:h-screen p-4 rounded-lg border-green-200 border-r border-b">
      <ul className="space-y-6">
      {
            navlinks.map(navlink => (<li key={navlink.name}>
              <Link className={navlink.class} to={navlink.href}>{navlink.name}</Link>
            </li>))
          }
      </ul>
    </div>
  );
}

export default NavigationMenu;
