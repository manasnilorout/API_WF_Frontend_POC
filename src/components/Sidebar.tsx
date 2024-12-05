import { DragEvent } from 'react';

const nodeTypes = [
  {
    type: 'api',
    label: 'API Node',
    category: 'endpoint',
    iconUrl: 'https://www.svgrepo.com/download/147094/api.svg',
    defaults: {
      method: 'GET',
      endpoint: '/api'
    }
  },
  {
    type: 'connector',
    label: 'Connector',
    category: 'connector',
    iconUrl: 'https://www.svgrepo.com/download/445958/plug-connect.svg',
    defaults: {
      operation: 'Operation'
    }
  },
  {
    type: 'js',
    label: 'JavaScript',
    category: 'logic',
    iconUrl: 'https://www.svgrepo.com/download/29753/javascript.svg',
    defaults: {
      label: 'JS'
    }
  }
];

export function Sidebar() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-title">API workflow node types</div>
      <div className="node-palette">
        {nodeTypes.map((node, index) => (
          <div
            key={`${node.type}-${index}`}
            className="draggable-node"
            draggable
            onDragStart={(e) => onDragStart(e, node)}
          >
            <div className="draggable-node-inner">
              <img 
                src={node.iconUrl}
                alt={node.label} 
                className="node-icon"
              />
              <span>{node.label}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}