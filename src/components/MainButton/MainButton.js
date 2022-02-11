import { Button } from "@mui/material";
import React from "react";

export default function MainButton(props) {
  return <button className="btn btn-warning">{props.title}</button>;
}
