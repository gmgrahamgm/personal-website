import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="flex items-center justify-center h-full py-16">
      <p className="text-center text-lg">
        Opening your resume… If nothing happens,{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          click here
        </a>
        .
      </p>
    </div>
  );
}
