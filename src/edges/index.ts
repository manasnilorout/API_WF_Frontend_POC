import { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  // Main flow path
  { 
    id: 'request-to-sf1', 
    source: 'request', 
    target: 'salesforce1',
    animated: true 
  },
  { 
    id: 'sf1-to-sf2', 
    source: 'salesforce1', 
    target: 'salesforce2',
    animated: true 
  },
  { 
    id: 'sf2-to-sap1', 
    source: 'salesforce2', 
    target: 'sap1',
    animated: true 
  },
  { 
    id: 'sap1-to-condition', 
    source: 'sap1', 
    target: 'condition',
    animated: true 
  },
  
  // True path from condition
  { 
    id: 'condition-to-response1', 
    source: 'condition', 
    target: 'response1',
    sourceHandle: 'true',
    animated: true,
    style: { stroke: '#22c55e' } // Green color for success path
  },
  
  // False path from condition
  { 
    id: 'condition-to-sap2', 
    source: 'condition', 
    target: 'sap2',
    sourceHandle: 'false',
    animated: true,
    style: { stroke: '#3b82f6' } // Blue color for alternate path
  },
  { 
    id: 'sap2-to-response2', 
    source: 'sap2', 
    target: 'response2',
    animated: true,
    style: { stroke: '#3b82f6' }
  },
  
  // Error path
  { 
    id: 'sf1-to-error', 
    source: 'salesforce1', 
    target: 'error',
    animated: true,
    style: { stroke: '#ef4444' } // Red color for error path
  }
];

// Custom edge types if needed
export const edgeTypes = {} satisfies EdgeTypes;