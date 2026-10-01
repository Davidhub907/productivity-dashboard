import Dashboard from './components/dashboard/Dashboard';
import Header from './components/layout/Header';
import AssignmentAddForm from './components/assignments/AssignmentAddForm';

function App() {
  return (
    <>
      <AssignmentAddForm />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
