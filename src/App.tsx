import React from 'react';
import {Outlet, RouterProvider} from "react-router-dom";
import routes from "./router/Router";

const App = () => {
    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
};

export default App;