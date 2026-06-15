import { HeatmapUI } from "./heatmap";

async function fetchHeatmapData() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/k4rtikay?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json.contributions ?? [];
  } catch {
    return [];
  }
}

export async function Activity() {
  const data = await fetchHeatmapData();

  return <HeatmapUI data={data} />;
}