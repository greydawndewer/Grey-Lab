import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const SAY_COMMAND = {
  name: 'say',
  description: 'Make the bot repeat what you say!',
  type: 1,
  options: [
    {
      name: 'message', // argument name
      description: 'The message you want the bot to say',
      type: 3, // 3 = STRING
      required: true,
    },
  ],
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};


const ALL_COMMANDS = [TEST_COMMAND, SAY_COMMAND];
InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);

