interface Conversation {
  sid: string;
  friendlyName: string | null;
  dateUpdated: Date | null;
  lastReadMessageIndex: number | null;
  lastMessage?: {
    index?: number;
    dateCreated?: Date;
  };
}

export interface IChatStateType {
  connectionStatus: string;
  conversationList: Array<Conversation>;
  messagesList: Array<any>;
}
