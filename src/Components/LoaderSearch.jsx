import React from "react";
import "./loader.css";

export default function LoaderSearch() {
  return (
    <div className="loader-wrap" role="status" aria-live="polite" aria-label="Loading">
      <div className="cook-plate" aria-hidden="true">
        <span className="steam s1" />
        <span className="steam s2" />
        <span className="steam s3" />
        <div className="plate-shadow" />
      </div>

      <div className="dots" aria-hidden="true">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>

      <span className="visually-hidden">Loading…</span>
    </div>
  );
}
