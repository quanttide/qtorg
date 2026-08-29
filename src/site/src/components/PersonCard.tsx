import { Link } from 'react-router-dom'
import { orgMap, type OrgId } from '../data/people'
import './PersonCard.css'

interface PersonCardProps {
  id: string
  name: string
  title: string
  orgs?: OrgId[]
}

export default function PersonCard({ id, name, title, orgs = [] }: PersonCardProps) {
  return (
    <Link to={`/people/${id}`} className="person-card">
      <div className="team-photo-placeholder" />
      <h4>{name}</h4>
      <p className="team-title">{title}</p>
      {orgs.length > 0 && (
        <div className="person-card-orgs">
          {orgs.map(orgId => {
            const org = orgMap[orgId]
            return (
              <span key={orgId} className="org-badge" title={org.name}>
                {org.icon} {org.short}
              </span>
            )
          })}
        </div>
      )}
    </Link>
  )
}
