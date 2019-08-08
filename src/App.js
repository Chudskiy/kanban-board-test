import React, {Fragment} from 'react';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Board from "./screens/Board/Board";

function App() {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path="/boards"
                        // component={Home}
                    />

                    <Route
                        path="/boards/:id"
                        component={Board}
                    />

                    <Route
                        exact
                        path="/boards/{id}/tasks/{id}"
                        // component={TaskDetail}
                    />
                </Switch>
            </Layout>
        </Fragment>
    );
}

export default App;
