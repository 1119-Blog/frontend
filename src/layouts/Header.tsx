import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "@/store/store";

export default function Header() {
  const { isLogin, user, login, logout } = useAuthStore();

  const handleLogin = () => {
    login("user", "user@naver.com");
  };

  return (
    <header className="shadow sticky top-0">
      <nav className="flex items-center justify-between px-6 py-1">
        <NavLink to={"/"}>
          <img src="/brand.svg" alt="brand" className="h-7 w-auto"></img>
        </NavLink>

        <Menu>
          <MenuButton>
            <img src="/user.svg" alt="user" className="h-7 w-auto"></img>
          </MenuButton>

          {/* 프로필 바 dropdown menu */}
          <MenuItems
            anchor="bottom end"
            className="bg-Stroke w-30 origin-top-right rounded-md border border-Main mt-2 text-xs text-TextRegular"
          >
            {isLogin ? (
              <>
                <div className="truncate bg-white w-full p-1">
                  <div>{user?.nickname}</div>
                  <div>{user?.email}</div>
                </div>
                <MenuItem>
                  <div className="px-1 pt-1">
                    <NavLink to={"/blog"}>블로그</NavLink>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="px-1">
                    <NavLink to={"/settings"}>설정</NavLink>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="px-1 pb-1">
                    <div onClick={logout}>로그아웃</div>
                  </div>
                </MenuItem>
              </>
            ) : (
              <MenuItem>
                <div className="px-1 py-1">
                  {/* <NavLink to={"/login"}>로그인</NavLink> */}
                  <div onClick={handleLogin}>로그인</div>
                </div>
              </MenuItem>
            )}
          </MenuItems>
        </Menu>
      </nav>
    </header>
  );
}
