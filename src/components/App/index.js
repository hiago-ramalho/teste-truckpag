import { Header } from './styles';

import GlobalStyles from "../../styles/GlobalStyles";
import Content from '../Content';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header className="App-header">
          <h1>Chuck Norris Jokes</h1>
        </Header>

        <Content />
      </div>
    </>
  );
}
