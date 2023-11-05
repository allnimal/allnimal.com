import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Allnimal" },
    { name: "description", content: "All in many apps." },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>🐾 Allnimal</h1>
    </div>
  );
}
