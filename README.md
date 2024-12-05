# API Workflow Builder

A React-based visual workflow builder for designing API integrations using a drag-and-drop interface. Built with React Flow and TypeScript.

## Features

- 🔄 Visual Workflow Builder
  - Drag and drop nodes to create workflows
  - Connect nodes to establish data flow
  - Interactive canvas with zoom and pan capabilities

- 🧩 Node Types
  - **API Nodes**: For HTTP endpoints and responses
  - **Connector Nodes**: Pre-built integrations with popular services
    - Salesforce
    - SAP S4Hana
    - Jira
    - Oracle
    - Slack
  - **JavaScript Nodes**: For conditional logic and data transformation

- 🎨 Modern UI Features
  - Searchable connector selection
  - Operation dropdown with descriptions
  - Keyboard navigation support
  - Responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd api-workflow-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Creating a Workflow**
   - Drag nodes from the sidebar onto the canvas
   - Connect nodes by dragging from one handle to another
   - Configure nodes by clicking on them

2. **Configuring Connectors**
   - Click on a connector node to select a service (e.g., Salesforce, SAP)
   - Choose from available operations for the selected service
   - Configure operation-specific parameters

3. **Adding Logic**
   - Use JavaScript nodes for conditions and transformations
   - Connect true/false paths for conditional branching

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ConnectorModal.tsx
│   ├── OperationModal.tsx
│   └── Sidebar.tsx
├── nodes/              # Custom node implementations
│   ├── ApiNode.tsx
│   ├── ConnectorNode.tsx
│   └── JsNode.tsx
├── App.tsx            # Main application component
└── index.css          # Global styles
```

## Technologies Used

- [React](https://reactjs.org/)
- [React Flow](https://reactflow.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.