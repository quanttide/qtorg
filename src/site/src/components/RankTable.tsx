interface Rank {
  level: string
  name: string
  description: string
}

interface RankTableProps {
  title: string
  ranks: Rank[]
}

export default function RankTable({ title, ranks }: RankTableProps) {
  return (
    <div className="rank-section">
      <h3>{title}</h3>
      <table className="rank-table">
        <thead>
          <tr>
            <th>等级</th>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map((rank, index) => (
            <tr key={index}>
              <td><span className="rank-badge">{rank.level}</span></td>
              <td>{rank.name}</td>
              <td>{rank.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}