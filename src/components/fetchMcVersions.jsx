export async function fetchVersions() {
  const jsonLink =
    "https://raw.githubusercontent.com/SimplyFellas/SimplyFellasVersions/3d0cef8635920faffa89e1059c88ad8a8402ca24/Versions/meta.json";
  try {
    const response = await fetch(jsonLink, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
