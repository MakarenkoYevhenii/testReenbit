import './App.css';
import ChatScreen from './ChatsScreen/ChatsScreen';
import ChatWindowScreen from './ChatWindowScreen/ChatWindowScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';

function App() {
  return (
    <div className="App">
      <div>
      <ProfileScreen></ProfileScreen>
      <ChatScreen></ChatScreen></div>
      <ChatWindowScreen></ChatWindowScreen>
    </div>
  );
}

export default App;
