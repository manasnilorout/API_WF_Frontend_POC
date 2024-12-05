import { useState, useEffect, useRef } from 'react';

interface Operation {
    name: string;
    description: string;
}

const operationsByConnector: Record<string, Operation[]> = {
    salesforce: [
        {
            name: 'Get Opportunity',
            description: 'Retrieve the information of an opportunity'
        },
        {
            name: 'Get Object Fields',
            description: 'Retrieve all the field names of an object. These fields can be used in other Salesforce actions'
        },
        {
            name: 'Get Record',
            description: 'Retrieve a record in Salesforce'
        },
        {
            name: 'Download Unprocessed Records of Bulk Upload',
            description: 'Download all the unprocessed records of a bulk upload'
        },
        {
            name: 'Add File to Record',
            description: 'Add an uploaded file to a record in Salesforce'
        },
        {
            name: 'Download SOQL Bulk Job Results',
            description: 'Download all the records of a bulk SOQL job'
        },
        {
            name: 'Insert Record',
            description: 'Create a new record in Salesforce'
        }
    ],
    sap: [
        {
            name: 'Find Customer',
            description: 'Find a customer in SAP'
        },
        {
            name: 'Create Customer',
            description: 'Create a customer in SAP'
        }
    ],
    oracle: [
        {
            name: 'Get Invoice',
            description: 'Retrieve the information of an invoice'
        },
        {
            name: 'Create Invoice',
            description: 'Create a new invoice in Oracle'
        }
    ],
    jira: [
        {
            name: 'Get Issue',
            description: 'Retrieve the information of an issue'
        },
        {
            name: 'Update Issue',
            description: 'Update an existing issue in Jira'
        },
        {
            name: 'Add Comment to Issue',
            description: 'Add a comment to an issue in Jira'
        },
        {
            name: 'Update Comment on Issue',
            description: 'Update a comment on an issue in Jira'
        }
    ],
    slack: [
        {
            name: 'Send Message to Channel',
            description: 'Send a message to a channel in Slack'
        },
        {
            name: 'Send Message to User',
            description: 'Send a message to a user in Slack'
        },
        {
            name: 'Send Message to Channel with File',
            description: 'Send a message to a channel in Slack with a file'
        },
        {
            name: 'Send Message to Channel with Image',
            description: 'Send a message to a channel in Slack with an image'
        },
        {
            name: 'Send Message to Channel with Link',
            description: 'Send a message to a channel in Slack with a link'
        }
    ]
};

interface OperationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (operation: string) => void;
    connectorId: string;
}

export function OperationModal({ isOpen, onClose, onSelect, connectorId }: OperationModalProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOperations, setFilteredOperations] = useState<Operation[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setSearchTerm('');
            setHighlightedIndex(0);
            searchInputRef.current?.focus();
            setFilteredOperations(operationsByConnector[connectorId] || []);
        }
    }, [isOpen, connectorId]);

    useEffect(() => {
        const filtered = (operationsByConnector[connectorId] || []).filter(operation =>
            operation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            operation.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOperations(filtered);
        setHighlightedIndex(0);
    }, [searchTerm, connectorId]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(i =>
                    i < filteredOperations.length - 1 ? i + 1 : i
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(i => i > 0 ? i - 1 : i);
                break;
            case 'Enter':
                if (filteredOperations[highlightedIndex]) {
                    onSelect(filteredOperations[highlightedIndex].name);
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
            <div className="operation-select" onClick={e => e.stopPropagation()}>
                <div className="operation-select-search">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search operations..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="operation-select-options">
                    {filteredOperations.map((operation, index) => (
                        <div
                            key={operation.name}
                            className={`operation-select-option ${index === highlightedIndex ? 'highlighted' : ''}`}
                            onClick={() => onSelect(operation.name)}
                            onMouseEnter={() => setHighlightedIndex(index)}
                        >
                            <div className="operation-name">{operation.name}</div>
                            <div className="operation-description">{operation.description}</div>
                        </div>
                    ))}
                    {filteredOperations.length === 0 && (
                        <div className="operation-select-no-results">
                            No operations found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}