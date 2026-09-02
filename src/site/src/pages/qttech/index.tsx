import { DepartmentCard, RankTable, OrgTree, PersonCard } from '../../components'
import { peopleSorted } from '../../data/people'

const orgTree = {
  name: '量潮科技',
  type: 'root' as const,
  children: [
    {
      name: '秘书处',
      type: 'department' as const,
      children: [
        { name: 'CEO 办公室', type: 'office' as const },
        { name: 'COO 办公室', type: 'office' as const },
        { name: 'CTO 办公室', type: 'office' as const },
        { name: '秘书处办公室', type: 'office' as const },
      ]
    },
    { name: '量潮数据事业部', type: 'unit' as const },
    { name: '量潮课堂事业部', type: 'unit' as const },
    { name: '量潮云事业部', type: 'unit' as const },
    { name: '治理共享中心', type: 'unit' as const },
    { name: '增长共享中心', type: 'unit' as const },
    { name: '顾问团', type: 'unit' as const },
  ]
}

const ranks = [
  { level: 'G', name: '治理序列', description: '治理与决策岗位' },
  { level: 'P', name: '产品序列', description: '产品设计与规划岗位' },
  { level: 'F', name: '职能序列', description: '人事、财务、行政等职能岗位' },
  { level: 'T', name: '技术序列', description: '研发与数据交付岗位' },
  { level: 'M', name: '管理序列', description: '业务管理与运营岗位' },
]

export default function Qttech() {
  return (
    <div className="page">
      <section className="page-header">
        <h2>量潮科技</h2>
        <p className="subtitle">现行经营主体——数据服务与课堂业务的公司载体，以"产教融合"为核心竞争力。</p>
      </section>

      <section className="page-section">
        <h3>核心目标</h3>
        <p>创新基础设施提供商——量潮云提供生产平台，量潮课堂提供知识和经验，量潮数据提供交付能力。商业模式的核心难点在于保持经营效率，减少隐形摩擦：建立透明、开放、精细的量潮标准化体系，统一利益相关方的工作语言。</p>
      </section>

      <section className="page-section">
        <h3>组织结构</h3>
        <OrgTree root={orgTree} />
      </section>

      <section className="page-section">
        <h3>部门设置</h3>
        <div className="department-grid">
          <DepartmentCard 
            name="秘书处" 
            description="公司日常运营协调的常设部门，连接决策层与执行层"
            icon="🏛️"
            details={[
              { label: 'CEO 办公室', value: '战略决策支持' },
              { label: 'COO 办公室', value: '运营协调' },
              { label: 'CTO 办公室', value: '技术管理' },
              { label: '秘书处办公室', value: '日常行政' },
            ]}
          />
          <DepartmentCard 
            name="量潮数据事业部" 
            description="数据交付业务"
            icon="📊"
          />
          <DepartmentCard 
            name="量潮课堂事业部" 
            description="课程与培训业务"
            icon="📚"
          />
          <DepartmentCard 
            name="量潮云事业部" 
            description="云服务业务"
            icon="☁️"
          />
          <DepartmentCard 
            name="治理共享中心" 
            description="人事、财务、行政等职能支持"
            icon="⚙️"
          />
          <DepartmentCard 
            name="增长共享中心" 
            description="市场、销售、客户等增长能力"
            icon="📈"
          />
          <DepartmentCard 
            name="顾问团" 
            description="外部专家与行业资源，提供战略建议与专业指导"
            icon="👥"
          />
        </div>
      </section>

      <section className="page-section">
        <RankTable title="职级体系" ranks={ranks} />
      </section>

      <section className="page-section">
        <h3>管理团队</h3>
        <div className="team-grid">
          {peopleSorted.filter(p => p.titles.some(t => t.org === 'qttech' && !t.title.includes('顾问') && !t.title.includes('助理'))).map(p => (
            <PersonCard key={p.id} id={p.id} name={p.name} title={p.titles.find(t => t.org === 'qttech')!.title} />
          ))}
        </div>

        <h3>秘书处</h3>
        <div className="team-grid">
          {peopleSorted.filter(p => p.titles.some(t => t.org === 'qttech' && t.title.includes('助理'))).map(p => (
            <PersonCard key={p.id} id={p.id} name={p.name} title={p.titles.find(t => t.org === 'qttech')!.title} />
          ))}
        </div>

        <h3>顾问团队</h3>
        <div className="team-grid">
          {peopleSorted.filter(p => p.titles.some(t => t.org === 'qttech' && t.title.includes('顾问'))).map(p => (
            <PersonCard key={p.id} id={p.id} name={p.name} title={p.titles.find(t => t.org === 'qttech')!.title} />
          ))}
        </div>
      </section>

      <section className="page-section">
        <h3>治理架构</h3>
        <div className="governance-grid">
          <div className="governance-card">
            <h4>股东代表大会</h4>
            <p>代表股东意志行使所有权——由全体股东组成，定期会议审议重大事项。</p>
          </div>
          <div className="governance-card">
            <h4>公司代表大会</h4>
            <p>代表一线执行者行使经营权与民意表达职能——由各业务单元及职能部门代表组成，周会运转、全体表决；内设书记处（汇总提案）、执行委员会（秘书长主持）、技术委员会（CTO 助理主持）。</p>
          </div>
          <div className="governance-card">
            <h4>秘书处</h4>
            <p>连接决策层与执行层的枢纽机制，负责日常运营协调与信息流转。</p>
          </div>
        </div>
      </section>
    </div>
  )
}