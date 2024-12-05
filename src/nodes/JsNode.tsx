import { Handle, Position } from '@xyflow/react';

interface JsNodeProps {
  data: {
    label: string;
  };
}

export function JsNode({ data }: JsNodeProps) {
  return (
    <div className="js-node node">
      <div className="node-header">
        <div className="node-title">JS</div>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} id="true" />
      <Handle 
        type="source" 
        position={Position.Right} 
        id="false"
        style={{ top: '50%' }}
      />
    </div>
  );
}