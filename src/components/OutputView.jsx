import React, { useState, useMemo } from 'react';

const OutputView = ({ generatedCode }) => {
    const [activeTab, setActiveTab] = useState('preview');

    const iframeSrcDoc = useMemo(() => `
        <html>
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                <style>
                    body { 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        height: 100vh;
                        background-color: #1f2937; /* bg-gray-800 */
                        color: white;
                        font-family: sans-serif;
                    }
                    ${generatedCode.css}
                </style>
            </head>
            <body>
                <div id="root"></div>
                <script type="text/babel">
                    ${generatedCode.jsx}
                    const container = document.getElementById('root');
                    const root = ReactDOM.createRoot(container);
                    // This line is a placeholder. A robust solution would parse the JSX 
                    // to find the actual component name to render.
                    root.render(<LoginForm />); 
                </script>
            </body>
        </html>
    `, [generatedCode.jsx, generatedCode.css]);

    return (
        <div className="h-2/5 border-t-2 border-gray-700 flex flex-col">
            <div className="flex border-b border-gray-700 bg-[#202123]">
                <button onClick={() => setActiveTab('preview')} className={`py-2 px-4 ${activeTab === 'preview' ? 'bg-gray-700' : ''}`}>Live Preview</button>
                <button onClick={() => setActiveTab('jsx')} className={`py-2 px-4 ${activeTab === 'jsx' ? 'bg-gray-700' : ''}`}>JSX</button>
                <button onClick={() => setActiveTab('css')} className={`py-2 px-4 ${activeTab === 'css' ? 'bg-gray-700' : ''}`}>CSS</button>
            </div>
            <div className="flex-grow bg-gray-900 overflow-hidden">
                {activeTab === 'preview' && (
                    <div className="h-full">
                        <iframe srcDoc={iframeSrcDoc} className="w-full h-full border-0" title="Live Preview" />
                    </div>
                )}
                {activeTab === 'jsx' && (
                    <pre className="h-full overflow-auto p-4 text-sm"><code className="language-jsx">{generatedCode.jsx}</code></pre>
                )}
                {activeTab === 'css' && (
                    <pre className="h-full overflow-auto p-4 text-sm"><code className="language-css">{generatedCode.css}</code></pre>
                )}
            </div>
        </div>
    );
};

export default OutputView;