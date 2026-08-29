import { PersonCard } from '../components'
import { peopleSorted } from '../data/people'

export default function People() {
  return (
    <div className="page">
      <section className="page-header">
        <h2>人物</h2>
        <p className="subtitle">量潮体系的核心人物——同一批人在组织之间串联协作，人物是一等实体，组织因人而连。</p>
      </section>

      <section className="page-section">
        <div className="team-grid">
          {peopleSorted.map(p => (
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
