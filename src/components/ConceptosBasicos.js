import { BrowserRouter as Router, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRouters";

const ConceptosBasicos = () => {
    return ( 
        <div>
            <h2>Hash Router</h2>
            <HashRouter>
                <MenuConceptos />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/acerca" component={Acerca} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route exact path="/usuario/:username" component={Usuario} />
                    <Route exact path="/productos" component={Productos} />
                    <Route exact path="/about">
                        <Redirect to="/acerca" />
                    </Route>
                    <Route exact path="/contact">
                        <Redirect to="/contacto" />
                    </Route>
                    <Route path="/react" component={ReactTopics} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Route path="*" component={Error404} />
                </Switch>
            </HashRouter>

            
            <h2>Conceptos basicos</h2>
            <Router>
            <MenuConceptos/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/acerca" component={Acerca}/>
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route exact path="/usuario/:username" component={Usuario} />
                    <Route exact path="/productos" component={Productos} />
                    <Route exact path="/about">
                        <Redirect to="/acerca" />
                    </Route>
                    <Route exact path="/contact">
                        <Redirect to="/contacto" />
                    </Route>
                    <Route path="/react" component={ReactTopics} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Route  path="*" component={Error404}/>
                    
                </Switch>

            </Router>
        </div>
     );
}

{/*const ConceptosBasicos = () => {
    return ( 
        <div>
            <h2>Conceptos basicos</h2>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h3>Home</h3>
                        <p>Bienvenido al tema de las rutas </p>
                    </Route>
                    <Route exact path="/acerca">
                        <Acerca/>
                        <p>
                            loremdsafsdf
                        </p>
                    </Route>
                    <Route path="/contacto" component={Contacto} />
                    { /*<Route exact path="/contacto" children={<> <Contacto/><P>ESTO ES UNA PRUEBA</P> </>} /> 
                        
                </Switch>
                
            </Router>
        </div>
     );
}*/}
 
export default ConceptosBasicos;