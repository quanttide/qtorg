interface DepartmentCardProps {
  name: string
  description: string
  icon?: string
  details?: { label: string; value: string }[]
}

export default function DepartmentCard({ name, description, icon, details }: DepartmentCardProps) {
  return (
    <div className="department-card">
      {icon && <div className="department-card-icon">{icon}</div>}
      <h4>{name}</h4>
      <p>{description}</p>
      {details && details.length > 0 && (
        <ul className="department-details">
          {details.map((detail, index) => (
            <li key={index}>
              <strong>{detail.label}：</strong>{detail.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}