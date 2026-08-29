import { DepartmentCard, RankTable, OrgTree } from '../../components'

const orgTree = {
  name: '量潮实训基地',
  type: 'root' as const,
  children: [
    { name: '技术部', type: 'department' as const },
    { name: '产品部', type: 'department' as const },
    { name: '市场部', type: 'department' as const },
    { name: '综合部', type: 'department' as const },
    { name: '秘书处', type: 'unit' as const },
  ]
}

const ranks = [
  { level: 'L-3', name: '课堂学员', description: '明确的课时作业' },
  { level: 'L-2', name: '实训学员', description: '基地分配的题目' },
  { level: 'L-1', name: '招聘候选人', description: '自主选题' },
  { level: 'L0', name: '准正式成员', description: '按公司制度，时薪 15' },
  { level: 'L1+', name: '正式员工', description: '按公司制度' },
]

export default function Qtacademy() {
  return (
    <div className="page">
      <section className="page-header">
        <h2>量潮实训基地</h2>
        <p className="subtitle">统一管理课堂、众包、招聘参与者的枢纽平台——实现人才递进筛选与业务交付闭环。</p>
      </section>

      <section className="page-section">
        <h3>核心目标</h3>
        <p>让人才在真实产出中被筛选和培养——招聘筛选不出有责任心的人，责任心只能通过真实协作看出。实训基地把筛选前移到训练过程：选题制（自主发现问题 → 课题申请 → 逐轮点评迭代 → 实际产出验收），固定笔试题已淘汰。</p>
      </section>

      <section className="page-section">
        <h3>组织结构</h3>
        <OrgTree root={orgTree} />
      </section>

      <section className="page-section">
        <h3>部门设置</h3>
        <div className="department-grid">
          <DepartmentCard 
            name="技术部" 
            description="研发与数据交付类任务"
            icon="💻"
            details={[
              { label: '对应公司能力', value: '技术/数据交付能力' },
              { label: '典型任务', value: '开发、测试、数据分析、基础设施维护' },
            ]}
          />
          <DepartmentCard 
            name="产品部" 
            description="需求、设计、规格类任务"
            icon="🎯"
            details={[
              { label: '对应公司能力', value: '产品设计与规划' },
              { label: '典型任务', value: '需求分析、产品设计、用户研究、规格编写' },
            ]}
          />
          <DepartmentCard 
            name="市场部" 
            description="增长、课程推广、招聘导流类任务"
            icon="📢"
            details={[
              { label: '对应公司能力', value: '市场与增长' },
              { label: '典型任务', value: '内容运营、推广执行、招聘逆向导流' },
            ]}
          />
          <DepartmentCard 
            name="综合部" 
            description="基地自身的行政人事财务支持"
            icon="🔧"
            details={[
              { label: '配置', value: '最简配置，直接使用公司共享中心能力' },
              { label: '典型任务', value: '行政协调、财务记账、人事对接' },
            ]}
          />
          <DepartmentCard 
            name="秘书处" 
            description="由公司派驻代表组成，负责基地治理"
            icon="🏛️"
            details={[
              { label: '职责', value: '治理与制度执行、训练与考核的组织、内包任务的承接对接、考核评审与转正评审' },
            ]}
          />
        </div>
      </section>

      <section className="page-section">
        <RankTable title="职级体系（L- 系列）" ranks={ranks} />
      </section>

      <section className="page-section">
        <h3>制度框架</h3>
        <div className="governance-grid">
          <div className="governance-card">
            <h4>内包关系</h4>
            <p>公司事业部向基地发包，基地部门承接——任务、验收准则、交付方式按内包约定。学员编制在基地，表现好者经转正评审进入公司编制——招聘是通道出口。</p>
          </div>
          <div className="governance-card">
            <h4>选题制考核</h4>
            <p>自主发现问题 → 课题申请 → 逐轮点评迭代 → 实际产出验收。固定笔试题已淘汰。</p>
          </div>
          <div className="governance-card">
            <h4>贡献记账</h4>
            <p>训练过程中的贡献进入记账交易系统（代金券/现金奖励），表现数据支撑筛选与激励决策。</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h3>关联</h3>
        <ul>
          <li>公司组织：qttech/（发包方的事业部与秘书处体系）</li>
          <li>职级体系：qtacademy/institution/rank.md</li>
        </ul>
      </section>
    </div>
  )
}