import {createSlice} from '@reduxjs/toolkit';
import {StoreConstants} from '../../constants/appConst';
import {RootState} from '../store';
import {IChatStateType} from '../../types/reducerTypes/chatStoreType';

const initialState: IChatStateType = {
  connectionStatus: 'unknown',
  conversationList: [],
  messagesList: [],
};

const ChatSlice = createSlice({
  name: StoreConstants.CHAT_STORE,
  initialState,
  reducers: {
    onConnectionStatusChange: (state, action) => {
      state.connectionStatus = action.payload;
    },
    updateConversationList: (state, action) => {
      state.conversationList = [...state.conversationList, ...action.payload];
    },
    updateMessageList: (state, action) => {
      state.messagesList = [...state.messagesList, ...action.payload];
    },
    clearAllMessages: state => {
      state.messagesList = [];
    },
  },
});

export const {
  onConnectionStatusChange,
  updateConversationList,
  clearAllMessages,
  updateMessageList,
} = ChatSlice.actions;
export default ChatSlice.reducer;
export const chatState = (state: RootState) => state.chat;
