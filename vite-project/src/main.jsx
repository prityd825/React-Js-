import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/header/header.jsx';
import Form from './components/form/form.jsx';

createRoot(document.getElementById('root')).render(
    <>
        <StrictMode>
            <Header />
            <Form />
        </StrictMode>
        {/* <BrowserRouter>
            <App />
        </BrowserRouter> */}
    </>
);
