import React from "react";

export function renderMarkdown(content: string) {
  return content
    .split("\n\n")
    .map((block, index) => {
      // Code block
      if (block.startsWith("```") && block.endsWith("```")) {
        const lines = block.split("\n");
        const language = lines[0].replace("```", "").trim() || "text";
        const code = lines.slice(1, -1).join("\n");

        return (
          <div key={index} className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 text-sm font-medium capitalize border-b border-gray-200 dark:border-gray-700">
              {language}
            </div>
            <pre className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 overflow-x-auto">
              <code className="text-sm leading-relaxed">{code}</code>
            </pre>
          </div>
        );
      }

      // Headings
      if (block.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">
            {block.replace("### ", "")}
          </h3>
        );
      }

      if (block.startsWith("## ")) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-10 mb-6 text-gray-900 dark:text-gray-100">
            {block.replace("## ", "")}
          </h2>
        );
      }

      if (block.startsWith("# ")) {
        return (
          <h1 key={index} className="text-4xl font-bold mt-12 mb-8 text-gray-900 dark:text-gray-100">
            {block.replace("# ", "")}
          </h1>
        );
      }

      // Unordered list
      if (block.includes("\n- ") || block.startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((line) => line.startsWith("- "))
          .map((line, idx) => (
            <li key={idx} className="my-2 text-gray-700 dark:text-gray-300">
              {line.replace("- ", "")}
            </li>
          ));

        return (
          <ul key={index} className="list-disc pl-6 my-6 space-y-1">
            {items}
          </ul>
        );
      }

      // Ordered list
      if (block.match(/^\d+\. /)) {
        const items = block
          .split("\n")
          .filter((line) => line.match(/^\d+\. /))
          .map((line, idx) => (
            <li key={idx} className="my-2 text-gray-700 dark:text-gray-300">
              {line.replace(/^\d+\. /, "")}
            </li>
          ));

        return (
          <ol key={index} className="list-decimal pl-6 my-6 space-y-1">
            {items}
          </ol>
        );
      }

      // Blockquotes
      if (block.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 dark:bg-blue-900/20 italic text-gray-700 dark:text-gray-300"
          >
            {block.replace("> ", "")}
          </blockquote>
        );
      }

      // Inline formatting
      const formatInlineElements = (text: string) => {
        const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);

        return parts.map((part, idx) => {
          if (part.startsWith("`") && part.endsWith("`")) {
            return (
              <code
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded text-sm font-mono"
              >
                {part.slice(1, -1)}
              </code>
            );
          }
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={idx}>{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith("*") && part.endsWith("*")) {
            return <em key={idx}>{part.slice(1, -1)}</em>;
          }
          return part;
        });
      };

      return (
        <p key={index} className="my-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {formatInlineElements(block)}
        </p>
      );
    });
}
