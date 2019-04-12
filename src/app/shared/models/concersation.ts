import { Message } from "./message";


export class Conversation {
  id: string;
  createUsername: string;
  participants: [string];
  messages: [Message];
  title: string;
  other_participant: string;
  last_message_date: string;
}