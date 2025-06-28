import dynamic from "next/dynamic";
import React from "react";
import "react-quill-new/dist/quill.snow.css";

interface DynamicQuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 border rounded-md bg-gray-50 flex items-center justify-center text-gray-500">
      Carregando editor...
    </div>
  ),
});

export function DynamicQuillEditor({
  value,
  onChange,
  className,
}: DynamicQuillEditorProps) {
  return <ReactQuill value={value} onChange={onChange} className={className} />;
}
