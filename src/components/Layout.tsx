import React, { useState } from "react";
import "./Layout.css";
const Layout = (props: any) => {
    const [selectionId, setSelection]= useState(null)

    const LayoutCell = (props: any) => {
        return (
            <div className="Layout-Cell" onClick={(e)=> { props.onSelect(props.index)}}>
                { props.index === props.selectionId ? (<div className="Selection"/>) : null}
                <div className="Content"/>
            </div>
        )
    };

    const LayoutRow = (props: any) => (
        <div className="Layout-Row">
            {props.children}
        </div>
    );


    const generateCells = () => {
        return [1,2,3,4].map((r,i) => {
            return(
                <LayoutRow key={i}>
                    {
                        [1,2,3,4].map((c,j) => {
                            return (<LayoutCell selectionId={selectionId} key={j} onSelect={(e:any)=> setSelection(e)} index={"".concat(i.toString(), j.toString())}/>)
                        })
                    }
                </LayoutRow>
            )
        })
    };
    const cells = generateCells();
    return (
        <div className="Layout-Grid">
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>

            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>

            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>

            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
            <div className={"Layout-Item"}></div>
        </div>
    )
};

export default Layout;
