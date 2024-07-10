export async function postFirebaseCrashLogsapi(model, url, method) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(model),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  return data;
}
