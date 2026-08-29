import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h2>量潮组织中心</h2>
        <p>公开披露组织管理档案的组织信息，包括组织架构、部门设置、岗位体系与治理架构。</p>
      </div>
      
      <div className="org-grid">
        <Link to="/qttech" className="org-card">
          <div className="org-card-icon">🏢</div>
          <h3>量潮科技</h3>
          <p>现行经营主体</p>
        </Link>
        <Link to="/qtacademy" className="org-card">
          <div className="org-card-icon">🎓</div>
          <h3>量潮实训基地</h3>
          <p>人才培养枢纽</p>
        </Link>
        <Link to="/qtalliance" className="org-card">
          <div className="org-card-icon">🤝</div>
          <h3>量潮创新联盟</h3>
          <p>盟友生态载体</p>
        </Link>
      </div>
    </section>
  )
}