import { Link } from 'react-router-dom'
import { orgs } from '../data/people'

export default function Orgs() {
  return (
    <div className="page">
      <section className="page-header">
        <h2>组织</h2>
        <p className="subtitle">量潮体系的组织架构——联盟、公司、实训基地。</p>
      </section>

      <section className="page-section">
        <div className="org-grid">
          {orgs.map(org => (
            <Link key={org.id} to={org.path} className="org-card">
              <div className="org-card-icon">{org.icon}</div>
              <h3>{org.name}</h3>
              <p>{org.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}