import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { dataProjects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Allnimal" },
    { name: "description", content: "All in many apps." },
  ];
};

export async function loader() {
  return json({ projects: dataProjects });
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>🐾 Allnimal</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h2>
              {project.emoji} {project.name}
            </h2>
            <p>
              <a href={project.url}>{project.url}</a>
            </p>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
