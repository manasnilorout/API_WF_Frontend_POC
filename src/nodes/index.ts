import { Node, NodeTypes } from '@xyflow/react';
import { ApiNode } from './ApiNode';
import { ConnectorNode } from './ConnectorNode';
import { JsNode } from './JsNode';

// Define connector metadata
const connectors = {
  salesforce: {
    name: 'Salesforce',
    iconUrl: 'https://www.svgrepo.com/show/303235/salesforce-2-logo.svg'
  },
  sap: {
    name: 'SAP S4Hana',
    iconUrl: 'https://www.svgrepo.com/download/331567/sap.svg'
  }
} as const;

export const nodeTypes = {
  api: ApiNode,
  connector: ConnectorNode,
  js: JsNode,
} satisfies NodeTypes;

export const initialNodes: Node[] = [
  {
    id: 'request',
    type: 'api',
    position: { x: 250, y: 0 },
    data: { 
      label: 'FindOrCreateCustomer',
      method: 'GET',
      endpoint: '/FindOrCreateCustomer'
    },
  },
  {
    id: 'salesforce1',
    type: 'connector',
    position: { x: 250, y: 100 },
    data: { 
      operation: 'Get Order',
      connector: connectors.salesforce
    },
  },
  {
    id: 'salesforce2',
    type: 'connector',
    position: { x: 250, y: 200 },
    data: { 
      operation: 'Get Account',
      connector: connectors.salesforce
    },
  },
  {
    id: 'sap1',
    type: 'connector',
    position: { x: 250, y: 300 },
    data: { 
      operation: 'Find Customer',
      connector: connectors.sap
    },
  },
  {
    id: 'condition',
    type: 'js',
    position: { x: 250, y: 400 },
    data: { label: 'JS' },
  },
  {
    id: 'sap2',
    type: 'connector',
    position: { x: 400, y: 450 },
    data: { 
      operation: 'Create Customer',
      connector: connectors.sap
    },
  },
  {
    id: 'response1',
    type: 'api',
    position: { x: 250, y: 500 },
    data: { 
      label: 'Response',
      response: '200 OK'
    },
  },
  {
    id: 'response2',
    type: 'api',
    position: { x: 400, y: 550 },
    data: { 
      label: 'Response',
      response: '201 Customer Created'
    },
  },
  {
    id: 'error',
    type: 'api',
    position: { x: 400, y: 150 },
    data: { 
      label: 'Response',
      response: '404 Not Found'
    },
  },
];