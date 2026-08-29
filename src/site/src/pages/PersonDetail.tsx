import { Link, useParams } from 'react-router-dom'
import { getPerson, orgMap, orgs, peopleSorted } from '../data/people'
import { PersonCard } from '../components'
import './PersonDetail.css'

export default function PersonDetail() {
  const { personId } = useParams<{ personId: string }>()
  const person = getPerson(personId ?? '')

  if (!person) {
    return (
      <div className="page">
        <section className="page-header">
          <h2>未找到人物</h2>
          <p className="subtitle">返回 <Link to="/people">人物</Link> 总览。</p>
        </section>
      </div>
    )
  }

  // 按组织分组职务，组织顺序按 orgs 定义
  const grouped = orgs
    .map(org => ({
      org,
      titles: person.titles.filter(t => t.org === org.id),
    }))
    .filter(g => g.titles.length > 0)

  return (
    <div className="page">
      <section className="page-header person-header">
        <div className="team-photo-placeholder person-photo" />
        <div>
          <h2>{person.name}</h2>
          <p className="subtitle">{person.primary}</p>
          <div className="person-orgs">
            {[...new Set(person.titles.map(t => t.org))].map(orgId => {
              const org = orgMap[orgId]
              return (
                <Link key={orgId} to={org.path} className="org-badge org-badge-link">
                  {org.icon} {org.name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <h3>职务</h3>
        <div className="title-list">
          {grouped.map(({ org, titles }) => (
            <div key={org.id} className="title-group">
              <div className="title-org">
                <Link to={org.path} className="title-org-link">{org.icon} {org.name}</Link>
              </div>
              <ul className="title-items">
                {titles.map((t, i) => (
                  <li key={i}>
                    <strong>{t.title}</strong>
                    {t.desc && <span className="title-desc">——{t.desc}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h3>其他人物</h3>
        <div className="team-grid">
          {peopleSorted
            .filter(p => p.id !== person.id)
            .slice(0, 8)
            .map(p => (
              <PersonCard
                key={p.id}
                id={p.id}
                name={p.name}
                title={p.primary}
                orgs={[...new Set(p.titles.map(t => t.org))]}
              />
            ))}
        </div>
      </section>
    </div>
  )
}
