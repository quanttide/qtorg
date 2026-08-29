import { Link } from 'react-router-dom'
import { PersonCard } from '../components'
import { peopleSorted } from '../data/people'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h2>量潮组织中心</h2>
        <p>公开披露组织管理档案的组织信息，包括组织架构、部门设置、岗位体系与治理架构。</p>
      </div>

      <div className="home-links">
        <Link to="/orgs" className="home-link-card">
          <div className="home-link-icon">🏢</div>
          <h3>组织</h3>
          <p>联盟、公司、实训基地</p>
        </Link>
        <Link to="/people" className="home-link-card">
          <div className="home-link-icon">👥</div>
          <h3>人物</h3>
          <p>核心人物与团队</p>
        </Link>
      </div>

      <div className="home-people">
        <div className="home-people-header">
          <h3>核心人物</h3>
          <Link to="/people" className="home-people-more">全部人物 →</Link>
        </div>
        <div className="team-grid">
          {peopleSorted.slice(0, 5).map(p => (
            <PersonCard
              key={p.id}
              id={p.id}
              name={p.name}
              title={p.primary}
              orgs={[...new Set(p.titles.map(t => t.org))]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}