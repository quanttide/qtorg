interface OrgNode {
  name: string
  type: 'root' | 'department' | 'office' | 'unit'
  children?: OrgNode[]
}

interface OrgTreeProps {
  root: OrgNode
}

function TreeNode({ node, depth = 0 }: { node: OrgNode; depth?: number }) {
  const typeClass = `org-node-${node.type}`
  
  return (
    <li>
      <div className={`org-node ${typeClass}`}>{node.name}</div>
      {node.children && node.children.length > 0 && (
        <ul>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function OrgTree({ root }: OrgTreeProps) {
  return (
    <div className="org-tree-container">
      <ul className="org-tree">
        <TreeNode node={root} />
      </ul>
    </div>
  )
}