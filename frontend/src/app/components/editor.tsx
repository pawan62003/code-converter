"use client"

import React from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('react-monaco-editor'), { ssr: false });

interface CodeEditorProps {
  value: string;
  language: string;
  onChange: (value: string) => void; // Ensure this is defined
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, language,onChange }) => {
  return (
    <MonacoEditor
      width="100%"
      height="600"
      onChange={onChange}
      language={'javascript'}
      theme="vs-dark"
      value={value}
      options={{
        minimap: { enabled: false },
        fontFamily: 'Fira Code, monospace',
        wordWrap: 'on',
        fontSize: 19,
      }}
    />
  );
};

export default CodeEditor;
