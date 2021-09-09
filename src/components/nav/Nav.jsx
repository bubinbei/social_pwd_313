import React from 'react';

function Nav(props) {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
        <a href="#qwe" class="brand-logo">Social</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Contacts</a></li>
        <li><a href="sass.html">Mesage</a></li>
        <li><a href="badges.html">Photos</a></li>
        <li><a href="collapsible.html">Setings</a></li>
      </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
