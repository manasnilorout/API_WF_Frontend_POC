import { useState, useEffect, useRef } from 'react';

const connectorOptions = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    iconUrl: 'https://www.svgrepo.com/show/303235/salesforce-2-logo.svg'
  },
  {
    id: 'sap',
    name: 'SAP S4Hana',
    iconUrl: 'https://www.svgrepo.com/download/331567/sap.svg'
  },
  {
    id: 'jira',
    name: 'Jira',
    iconUrl: 'https://www.svgrepo.com/download/353935/jira.svg'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    iconUrl: 'https://www.svgrepo.com/download/355152/oracle.svg'
  },
  {
    id: 'slack',
    name: 'Slack',
    iconUrl: 'https://www.svgrepo.com/download/452102/slack.svg'
  }
] as const;

interface ConnectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (connector: typeof connectorOptions[number]) => void;
}

export function ConnectorModal({ isOpen, onClose, onSelect }: ConnectorModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConnectors, setFilteredConnectors] = useState([...connectorOptions]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setHighlightedIndex(0);
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const filtered = connectorOptions.filter(connector =>
      connector.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredConnectors(filtered);
    setHighlightedIndex(0);
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(i => 
          i < filteredConnectors.length - 1 ? i + 1 : i
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(i => i > 0 ? i - 1 : i);
        break;
      case 'Enter':
        if (filteredConnectors[highlightedIndex]) {
          onSelect(filteredConnectors[highlightedIndex]);
        }
        break;
      case 'Escape':
        onClose();
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="connector-select" onClick={e => e.stopPropagation()}>
        <div className="connector-select-search">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search connectors..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="connector-select-options">
          {filteredConnectors.map((connector, index) => (
            <div
              key={connector.id}
              className={`connector-select-option ${index === highlightedIndex ? 'highlighted' : ''}`}
              onClick={() => onSelect(connector)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              <img src={connector.iconUrl} alt={connector.name} />
              <span>{connector.name}</span>
            </div>
          ))}
          {filteredConnectors.length === 0 && (
            <div className="connector-select-no-results">
              No connectors found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}