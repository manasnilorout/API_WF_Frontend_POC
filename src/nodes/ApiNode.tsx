import { Handle, Position } from '@xyflow/react';

interface ApiNodeProps {
  data: {
    label: string;
    method?: string;
    endpoint?: string;
    response?: string;
  };
}

export function ApiNode({ data }: ApiNodeProps) {
  return (
    <div className="api-node node">
      <div className="node-header">
        <img 
          src="https://www.svgrepo.com/download/147094/api.svg"
          alt="API"
          className="node-icon"
        />
        <div className="node-title">{data.label}</div>
      </div>
      {data.method && data.endpoint && (
        <div className="node-content">
          <span className="method">{data.method}</span>
          <span className="endpoint">{data.endpoint}</span>
        </div>
      )}
      {data.response && (
        <div className="node-response">{data.response}</div>
      )}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}