import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h2>组织概览</h2>
      <p>量潮组织中心公开披露组织管理档案的组织信息，包括组织架构、部门设置、岗位体系与治理架构。</p>
      
      <h3>组织体系</h3>
      <div className="org-cards">
        <Link to="/qttech" className="org-card">
          <h4>量潮科技</h4>
          <p>现行经营主体</p>
        </Link>
        <Link to="/qtacademy" className="org-card">
          <h4>量潮实训基地</h4>
          <p>人才培养枢纽</p>
        </Link>
        <Link to="/qtalliance" className="org-card">
          <h4>量潮创新联盟</h4>
          <p>盟友生态载体</p>
        </Link>
      </div>
      
      <h3>量潮组织模式特色</h3>
      <ol>
        <li>治理三分离，两院制兜底</li>
        <li>秘书制度是管理中枢与人才孵化器</li>
        <li>业务纵向自治，职能横向共享</li>
        <li>组织数据化，结构即真实</li>
        <li>训练型组织，人从真实产出中生长</li>
        <li>演进导向：从创始人驱动到制度驱动</li>
      </ol>
    </section>
  )
}