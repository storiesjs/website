import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

export default function Sandbox(): JSX.Element {
    return (<Sandpack template="vanilla" />);
}