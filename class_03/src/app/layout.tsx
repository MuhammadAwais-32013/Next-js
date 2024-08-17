
import React from 'react'

import Button from "@/components/Button";

// export default function layout(props:any)
export default function Layout({ children }: any) {
  return (
    <html>
      <body>
        <h1>Root Layout</h1>
        {children}
      </body>
    </html>
  );
}

