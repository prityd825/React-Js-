import './App.css';
import { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nInfo: ${info}`);
    };

    return (
        <div className='form-container'>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Enter your name:</label>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='John Doe'
                    required
                />

                <label htmlFor='info'>Additional Information:</label>
                <textarea
                    id='info'
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                    placeholder='Write something about yourself...'
                    rows='4'
                    required
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default App;
