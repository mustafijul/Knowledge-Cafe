import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://media.istockphoto.com/id/1493766948/photo/female-developers-using-ai-writes-the-code-for-data-analytics.jpg?s=1024x1024&w=is&k=20&c=eX7KoUYW6RidOEwxQ192WwopPGFe6V_FG_iGN0nXa7k=" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;