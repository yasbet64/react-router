import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

const Topic=()=>{
    let {topic}=useParams();

    return(
        <div>
            <h4>{topic}</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium alias excepturi eos assumenda doloribus aperiam aliquid
                minima maiores, aut labore. Enim, nulla. Amet incidunt fugiat,
                blanditiis fugit maxime ullam officia!
            </p>
        </div>
    );
};

const ReactTopics = () => {
    
    //'path' nos permite construir rutas relativas<Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>.

    let {path,url}=useRouteMatch();
    return (
        <div>
            <h2>Temas de React</h2>
            <ul>
                <li>
                <Link to={`${url}/jsx`}>JSX</Link>
                </li>
                <li>
                <Link to={`${url}/props`}>Props</Link>
                </li>
                <li>
                <Link to={`${url}/estado`}>Estado</Link>
                </li>
                <li>
                <Link to={`${url}/componentes`}>Components</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Elige un tema de React</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium alias excepturi eos assumenda doloribus aperiam aliquid
                        minima maiores, aut labore. Enim, nulla. Amet incidunt fugiat,
                        blanditiis fugit maxime ullam officia!
                    </p>
                </Route>
                <Route path={`${path}/:topic`} component={Topic} />
            </Switch>
        </div>
      );
}
 
export default ReactTopics;