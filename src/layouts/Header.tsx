import React from 'react'
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex items-center justify-between text-xs px-8 py-1 shadow">
      {/* brand logo */}
      <div>
        <img src="/brand.svg" alt="brand" className="h-7 w-auto"></img>
      </div>

      {/* nav */}
      <nav className="flex text-TextRegular divide-x divide-Stroke">
        {/* 프로필, 내블로그 바로가기, 로그인(로그아웃) */}
        <NavLink to={"/profile"} className="px-2">프로필</NavLink>
        <NavLink to={"/blog"} className="px-2">블로그</NavLink>
        <NavLink to={"/login"} className="px-2">로그인</NavLink>
      </nav>

    </header>
  )
}
