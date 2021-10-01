import "./App.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import BookList from "./components/bookList/BookList";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AUTH from './api/AUTH';
import {ACCESS_TOKEN} from './api/constants'
import BookPage from "./pages/bookPage/BookPage";

function App() {
  useEffect(() => {
    AUTH.get(`?key=${ACCESS_TOKEN}`).then((response) => {
      console.log(response);
    });
  }, [])
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <div className="App">
        <Header dispatch={dispatch}/>
        <Switch>
          <Route exact path="/">
            <BookList dispatch ={dispatch}/>
          </Route>
          <Route exact path="/book/:id" component={BookPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
