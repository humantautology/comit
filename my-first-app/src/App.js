import React from 'react';
import Welcome from './Welcome';
import List from './List';

const students = ['Abdiweli, Ubeydullah', 'Ali, Jwan',
  'Bansal, Shriya', 'Bhatt, Vruttik', 'Cardenas, Brenda',
  'Dantes, Danica', 'Daramola, Oladipo', 'Enikanolaye, Samuel',
  'Gerards, Roel', 'Gu, Shusheng', 'Hoque, Sanyat',
  'Ibrahim, Maryan', 'Liu, Zhipeng',
  'Ngayaan, Diana', 'Patel, Foramben',
  'Raventos, Gloria', 'Singh, Gagandeep', 'Tran, Neil',
  'Varchuk, Yuriy', 'Elisa Chen', 'Hugo Prado',
];

const family = ['Xime', 'Simon', 'Ciro', 'Amelia'];

const App = () => {
  return <div>
    <Welcome message="Hello my friends" color="green" />
    <Welcome message="Welcome to React.js <3" color="red" />
    <List items={students} type="number" />
    <List items={family} decoration />
  </div>;
};

export default App;
