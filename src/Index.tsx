
import ReactDOM from 'react-dom/client'; // Import correto para React 18+
import App from './views/App'
import './Index.css'
const rootElement = document.getElementById('root');

if (rootElement) { // Check if the element exists
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>   
        <App />
    </>
  );
} else {
  console.error("No element with ID 'root' found in the HTML.");
}