import { ReactNode } from "react";

export default async function RootElement({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-black">{children}</body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
