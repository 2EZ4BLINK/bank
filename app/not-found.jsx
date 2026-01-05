import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <p>Page not found</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
