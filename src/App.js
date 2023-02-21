import './App.css';
import UserCard from './UserCard';
import Header from './Header';

function App() {
  const users = [
    {
      id: 1,
      firstName: 'Alex',
      lastName: 'Parker',
      position: 'FE'
    },
    {
      id: 2,
      firstName: 'Anton',
      //lastName: 'Anton',
      position: 'BE'
    },
    {
      id: 3,
      firstName: 'Max',
      lastName: 'Maks',
      position: 'QA'
    },
  ];

  const content = {
    //title: "Lorem",
    description: "Text description",
  }
  const menu = [
    {
      id: 0,
      link: "/cat",
      title: "Category"
    },
    {
      id: 1,
      link: "/blog",
      title: "Blog"
    }
  ]
  return (
    <div className="App">
      <Header menu={menu} content={content} />
      <UserCard user={users[0]} editUser={() => console.log('edit')} deleteUser={() => console.log('delete')} />
      <UserCard user={users[1]} editUser={() => console.log('edit')} deleteUser={() => console.log('delete')} />
      <UserCard user={users[2]} deleteUser={() => console.log('delete')} />
    </div>
  );
}

export default App;
