import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import './App.css';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Pin from './Components/Pin';
import Data from './Components/Data';

function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll('.iconContainer');

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    allIcon.forEach((n) => n.addEventListener('click', setMenuActive));
  }, []);
  return (
    <div className="App">
      <div className='menuContainer'>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxI6YgmgUoo2Gj3yYwaupQQmFV9kDB1jE3KiVrLwRSQ&s" 
          alt="Pinterest Logo" 
          className='logo'
        />

        <div className='subMenu'>
          <div>
            <MenuContainer icon={<Person/>} />
            <MenuContainer icon={<Notifications/>} />
            <MenuContainer icon={<Chat/>} />
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded/>} />
          </div>

          <div>
            <MenuContainer icon={<QuestionMark/>} />
            <MenuContainer icon={<Add/>} />
          </div>

        </div>
      </div>

      <main>
        <div className='searchBox'>
          <input type="text" placeholder="Search"/>
          <div className='search'>
            <SearchIcon className='SearchIcon'/>
          </div>
        </div>
        <div className='mainContainer'>
          {Data && Data.map((data) => 
            <Pin 
              key={data.id} 
              pinSize={data.size} 
              img={data.img} 
              name={data.name} 
              link={data.link}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
