import { loadFiles } from "../Functions/fileLoader.js";
import ascii from "ascii-table";
import path from "path";
async function loadEvents(client) {
  const table = new ascii().setHeading("Events", "Status");

  await client.events.clear();

  const Files = await loadFiles("Events");
  for (const file of Files) {
    const event = await import(path.join("..", file).replace(/\\/g, "/"));
    const execute = (...args) => event.execute(...args, client);
    client.events.set(event.name, execute);

    if (event.rest) {
      if (event.once) client.rest.once(event.name, execute);
      else client.rest.on(event.name, execute);
    } else {
      if (event.once) client.once(event.name, execute);
      else client.on(event.name, execute);
    }
    table.addRow(event.name, "✅");
  }

  return console.log(table.toString(), "\nLoaded Events");
}

export { loadEvents };


