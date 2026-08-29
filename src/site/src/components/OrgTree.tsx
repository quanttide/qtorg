interface OrgNode {
  name: string
  type: 'root' | 'department' | 'office' | 'unit'
  children?: OrgNode[]
}

interface OrgTreeProps {
  root: OrgNode
}

const typeColors: Record<string, { bg: string; border: string; text: string }> = {
  root: { bg: '#1e293b', border: '#1e293b', text: '#ffffff' },
  department: { bg: '#eff6ff', border: '#2563eb', text: '#1e40af' },
  office: { bg: '#ecfdf5', border: '#059669', text: '#065f46' },
  unit: { bg: '#f5f3ff', border: '#7c3aed', text: '#5b21b6' },
}

function TreeNode({ node }: { node: OrgNode }) {
  const colors = typeColors[node.type] || typeColors.unit
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className="tree-node-wrapper">
      <div 
        className="tree-node"
        style={{ 
          background: colors.bg, 
          borderColor: colors.border,
          color: colors.text 
        }}
      >
        {node.name}
      </div>
      {hasChildren && (
        <>
          <div className="tree-connector" />
          <div className="tree-children">
            {node.children!.map((child, index) => (
              <div key={index} className="tree-child-wrapper">
                <div className="tree-child-connector" />
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function OrgTree({ root }: OrgTreeProps) {
  return (
    <div className="org-tree-new">
      <TreeNode node={root} />
    </div>
  )
}