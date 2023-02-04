import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import {} from "dotenv/config";
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});
import { loadEvents } from "./Handlers/eventHandler.js";

client.events = new Collection();
loadEvents(client);
client.login(process.env.BOT_TOKEN);
