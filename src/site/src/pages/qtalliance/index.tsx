import { DepartmentCard, OrgTree, PersonCard } from '../../components'
import { peopleSorted } from '../../data/people'

const orgTree = {
  name: '量潮创新联盟',
  type: 'root' as const,
  children: [
    { name: '联盟理事会', type: 'department' as const },
    { name: '联盟代表大会', type: 'department' as const },
    { name: '联盟秘书处', type: 'unit' as const },
  ]
}

export default function Qtalliance() {
  return (
    <div className="page">
      <section className="page-header">
        <h2>量潮创新联盟</h2>
        <p className="subtitle">盟友生态的组织载体——被量潮介绍即被验证，联盟是盟友的信用徽章。</p>
      </section>

      <section className="page-section">
        <h3>核心目标</h3>
        <p>让盟友被看见——盟友目录化、信用背书、生态凝聚。可见性系列的收官一环：代码（qtopen）→ 产品（qtproduct）→ 服务（qtbusiness）→ 研究（qtacademics）→ 盟友（qtalliance）。</p>
      </section>

      <section className="page-section">
        <h3>组织结构</h3>
        <OrgTree root={orgTree} />
      </section>

      <section className="page-section">
        <h3>治理结构</h3>
        <div className="department-grid">
          <DepartmentCard 
            name="联盟理事会" 
            description="联盟最高决策机构"
            icon="🏛️"
          />
          <DepartmentCard 
            name="联盟代表大会" 
            description="代表联盟成员意志"
            icon="👥"
          />
          <DepartmentCard 
            name="联盟秘书处" 
            description="联盟日常运营协调"
            icon="📋"
          />
        </div>
        
        <h3>理事会成员</h3>
        <div className="team-grid">
          {peopleSorted.filter(p => p.titles.some(t => t.org === 'qtalliance' && t.title.includes('理事'))).map(p => (
            <PersonCard key={p.id} id={p.id} name={p.name} title={p.titles.find(t => t.org === 'qtalliance')!.title} />
          ))}
        </div>

        <h3>联盟秘书处</h3>
        <div className="team-grid">
          {peopleSorted.filter(p => p.titles.some(t => t.org === 'qtalliance' && t.title.includes('秘书长'))).map(p => (
            <PersonCard key={p.id} id={p.id} name={p.name} title={p.titles.find(t => t.org === 'qtalliance')!.title} />
          ))}
        </div>
      </section>

      <section className="page-section">
        <h3>成员单位</h3>
        <p>跨主体成员构成（企业、开发者、学者、执行方），以官网为对外窗口。</p>
        <div className="member-types">
          <div className="member-type">
            <h4>企业</h4>
            <p>合作企业与生态伙伴</p>
          </div>
          <div className="member-type">
            <h4>开发者</h4>
            <p>技术开发者与贡献者</p>
          </div>
          <div className="member-type">
            <h4>学者</h4>
            <p>学术研究者与教育工作者</p>
          </div>
          <div className="member-type">
            <h4>执行方</h4>
            <p>项目执行与实施方</p>
          </div>
        </div>
      </section>
    </div>
  )
}