"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <body className={`${className} dark bg-background text-foreground`}>
      {children}
    </body>
  );
}
