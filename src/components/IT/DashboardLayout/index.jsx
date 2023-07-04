import React from "react";
import Sidebar from "../SidebarIT";
import "./style.scss";

function DashboardLayout({children}){
    return(
        <div className={`flex`}>
            <Sidebar content={<main>
                <div style={{paddingTop: '48px'}}>{children}</div>
            </main>}/>
            
        </div>
    )
}
export default DashboardLayout;