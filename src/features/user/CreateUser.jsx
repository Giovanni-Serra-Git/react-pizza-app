import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateName } from './userSlice';
import Button from '../../components/Button';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return
    dispatch(updateName(username))
    navigate("/menu")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='my-[1rem]'>Insert your name for ordering food:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="border-1 rounded-2xl px-2 py-1"
        onChange={(e) => setUsername(e.target.value)

        }
      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
