import { List } from './components/List/List';

import './App.css';

const App = () => {
  const data = ['Kharkiv', 'Mykolaiv', 'Lviv', 'Poltava'];
  const color = 'lightblue';

  return (
    <div className="App">
      <List cityList={data} cityColor={color} />
    </div>
  );
};

export default App;
