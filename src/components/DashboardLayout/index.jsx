import React from "react";
import Sidebar from "../Sidebar";
import "./style.scss";

function DashboardLayout({children}){
    return(
        <div className={`flex`}>
            <Sidebar/>
            <main>
                <div>{children}</div>
            </main>
        </div>
    )
}
export default DashboardLayout;