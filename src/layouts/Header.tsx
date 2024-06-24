import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useAuthStore, login, logout } from "@/store/authStore";

export default function Header() {
  const { isLogin, user } = useAuthStore();

  const handleLogin = () => {
    login("user", "user@naver.com");
  };

  return (
    <header className="shadow sticky flex top-0 justify-between px-5 pt-1.5">
      <NavLink to={"/"}>
        <img src="/brand.svg" alt="brand" className="h-6 w-auto"></img>
      </NavLink>
      <nav>
        <Menu>
          <MenuButton>
            <img src="/user.svg" alt="user" className="h-6 w-auto"></img>
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
                    <button type="button" onClick={logout}>
                      로그아웃
                    </button>
                  </div>
                </MenuItem>
              </>
            ) : (
              <MenuItem>
                <div className="px-1 py-1">
                  <button type="button" onClick={handleLogin}>
                    로그인
                  </button>
                </div>
              </MenuItem>
            )}
          </MenuItems>
        </Menu>
      </nav>
    </header>
  );
}
