import { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { ConnectorModal } from '../components/ConnectorModal';
import { OperationModal } from '../components/OperationModal';

interface ConnectorNodeProps {
  data: {
    connector?: {
      id: string;
      name: string;
      iconUrl: string;
    };
    operation: string;
  };
}

export function ConnectorNode({ data }: ConnectorNodeProps) {
  const [isConnectorModalOpen, setIsConnectorModalOpen] = useState(false);
  const [isOperationModalOpen, setIsOperationModalOpen] = useState(false);

  const handleConnectorSelect = (connector: any) => {
    data.connector = connector;
    setIsConnectorModalOpen(false);
  };

  const handleOperationSelect = (operation: string) => {
    data.operation = operation;
    setIsOperationModalOpen(false);
  };

  return (
    <>
      <div className="connector-node node">
        <div 
          className="node-header"
          onClick={() => {
            if (!data.connector) {
              setIsConnectorModalOpen(true);
            }
          }}
        >
          {data.connector ? (
            <>
              <img 
                src={data.connector.iconUrl} 
                alt={data.connector.name} 
                className="connector-icon"
              />
              <div className="node-title">{data.connector.name}</div>
            </>
          ) : (
            <>
              <img 
                src="https://www.svgrepo.com/download/445958/plug-connect.svg" 
                alt="Select Connector" 
                className="connector-icon"
              />
              <div className="node-title">Select Connector</div>
            </>
          )}
        </div>
        {data.connector && (
          <div 
            className="node-content"
            onClick={() => setIsOperationModalOpen(true)}
          >
            <div className="operation-selector">
              <span className="operation">
                {data.operation === 'Operation' ? 'Select Operation' : data.operation}
              </span>
              <svg 
                className="dropdown-icon" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24"
              >
                <path 
                  d="M7 10l5 5 5-5z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        )}
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
      </div>
      
      <ConnectorModal 
        isOpen={isConnectorModalOpen}
        onClose={() => setIsConnectorModalOpen(false)}
        onSelect={handleConnectorSelect}
      />

      {data.connector && (
        <OperationModal 
          isOpen={isOperationModalOpen}
          onClose={() => setIsOperationModalOpen(false)}
          onSelect={handleOperationSelect}
          connectorId={data.connector.id}
        />
      )}
    </>
  );
}