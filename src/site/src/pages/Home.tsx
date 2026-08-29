import { Link } from 'react-router-dom'
import { PersonCard } from '../components'
import { orgs, peopleSorted } from '../data/people'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h2>量潮组织中心</h2>
        <p>公开披露组织管理档案的组织信息，包括组织架构、部门设置、岗位体系与治理架构。</p>
      </div>

      <div className="org-grid">
        {orgs.map(org => (
          <Link key={org.id} to={org.path} className="org-card">
            <div className="org-card-icon">{org.icon}</div>
            <h3>{org.name}</h3>
            <p>{org.tagline}</p>
          </Link>
        ))}
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
