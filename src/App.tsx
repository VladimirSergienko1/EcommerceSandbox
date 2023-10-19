import React from 'react';
import {Outlet, RouterProvider} from "react-router-dom";
import routes from "./router/Router";

const App = () => {
    return (
        <div className="p-1 text-2xl flex-col-reverse">
            <RouterProvider router={routes} />
        </div>
    );
};

export default App;