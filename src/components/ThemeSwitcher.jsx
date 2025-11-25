import React from 'react'
export default function ThemeSwitcher({ setTheme }){
  return (
    <div className="theme-switcher" aria-hidden>
      <button onClick={() => setTheme('theme-blue')} className="theme-btn blue" title="Blue theme" />
      <button onClick={() => setTheme('theme-pink')} className="theme-btn pink" title="Pink theme" />
      <button onClick={() => setTheme('theme-orange')} className="theme-btn orange" title="Orange theme" />
    </div>
  )
}
