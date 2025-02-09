import { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if the user is logged in and retrieve the username from localStorage or props
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser); // Parse the string into a JSON object
      if (parsedUser.role === 'admin') {
        setUsername('admin'); // If role is admin, set username to "admin"
      } else if (parsedUser.data && parsedUser.data.firstName) {
        setUsername(parsedUser.data.firstName); // If it's an employee, set firstName
      }
    } else {
      setUsername('Admin'); // Default username when no user is logged in
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', ''); // Clear the stored username
    setUsername(''); // Clear the username in the state
    props.changeUser(''); // Update the parent component with an empty user
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello,  <br /> <span className='text-3xl font-semibold'>{username}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  );
}

export default Header;
