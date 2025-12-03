import React, { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.fluent.blue.light.css';
import { Chat, type ChatTypes } from 'devextreme-react/chat';
import TileView from 'devextreme-react/tile-view';

interface TileData {
  emoji: string;
  text: string;
}

const tiles: TileData[] = [{
  emoji: '🗓️',
  text: 'View Available Vacation Days',
}, {
  emoji: '🎉',
  text: 'List Upcoming Holidays',
}, {
  emoji: '📄',
  text: 'Submit a Vacation Request',
}];

function renderItem(data: TileData): JSX.Element {
  return (
    <div className="tile-container">
      <div className="tile-emoji">{data.emoji}</div>
      <div className="tile-text">{data.text}</div>
    </div>
  );
}

function renderEmptyView(data: ChatTypes.EmptyViewTemplateData): JSX.Element {
  return (
    <React.Fragment>
      <div className="empty-view-titlebox">
        <div className="empty-view-title">How can HR Assistant help you today?</div>
        <div className="empty-view-subtitle">{data.texts.message}</div>
      </div>
      <TileView
        id="tile-view-container"
        dataSource={tiles}
        width={728}
        height={124}
        baseItemWidth={226}
        baseItemHeight={96}
        itemMargin={12}
        activeStateEnabled={false}
        itemRender={renderItem}
      />
    </React.Fragment>
  );
}

function App(): JSX.Element {
  const [messages, setMessages] = useState<ChatTypes.Message[]>([]);

  const onMessageEntered = useCallback((e: ChatTypes.MessageEnteredEvent) => {
    setMessages((prevMessages) => [...prevMessages, e.message]);
  }, []);

  return (
    <div className="demo-viewport">
      <Chat
        id="chat"
        width={780}
        height={480}
        items={messages}
        onMessageEntered={onMessageEntered}
        emptyViewRender={renderEmptyView}
      />
    </div>
  );
}

export default App;
