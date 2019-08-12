import React, {Fragment} from 'react';
import Layout from "./hoc/Layout/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import Board from "./screens/Board/Board";
import TaskDetail from "./screens/TaskDetail/TaskDetail";
import Boards from "./screens/Boards/Boards";

function App() {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path="/boards"
                        component={Boards}
                    />

                    <Route
                        exact
                        path="/boards/:id"
                        component={Board}
                    />

                    <Route
                        exact
                        path="/boards/:boardId/tasks/:taskId"
                        component={TaskDetail}
                    />

                    <Redirect to="/boards"/>
                </Switch>
            </Layout>
        </Fragment>
    );
}

export default App;
