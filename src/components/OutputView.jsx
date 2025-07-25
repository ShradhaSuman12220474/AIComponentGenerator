
    import { Sandpack } from "@codesandbox/sandpack-react";


const OutputView = ({ generatedCode }) => {

    return <>
        <Sandpack
            template="react"
            files={{
                "/App.js": generatedCode.jsx,
                "/styles.css": generatedCode.css || '',
            }}
            customSetup={{
                dependencies: {
                "react": "18.2.0",
                "react-dom": "18.2.0"
                }
            }}
            options={{
                showTabs: true,
                showLineNumbers: true,
                wrapContent: true,
            }}
        />
    </>

};

export default OutputView;








