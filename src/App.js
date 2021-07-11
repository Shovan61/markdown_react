import React from 'react';
import MarkDown from './MarkDown';

function App() {
    return (
        <div>
            <h1
                style={{
                    textAlign: 'center',
                    fontWeight: '300',
                    letterSpacing: '3px',
                    color: '#555',
                }}>
                Markdown
            </h1>
            <MarkDown />
        </div>
    );
}

export default App;
