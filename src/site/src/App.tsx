import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>量潮组织中心</h1>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/company">公司</Link>
          <Link to="/training-base">实训基地</Link>
          <Link to="/alliance">联盟</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2026 量潮 · 组织管理档案公开披露</footer>
    </div>
  )
}
