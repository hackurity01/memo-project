import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1641225302265,
      updatedAt: 1641225302265,
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1641225309267,
      updatedAt: 1641225309267,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();

    setMemos([
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);

    setMemos(newMemos);
    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
