import init from './init';
import ADblock from './ADblock';
import speedControl from './speedControl';

const App = () => {
  const data = init();
  ADblock();
  speedControl(data);
};

export default App;
