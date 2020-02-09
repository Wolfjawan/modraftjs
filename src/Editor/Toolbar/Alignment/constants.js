import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignCenter,
  faAlignRight
} from "@fortawesome/free-solid-svg-icons";

export const ALIGN_TYPES = [
  {
    label:'Align Left',
    style: "align-left",
    icon: <FontAwesomeIcon icon={faAlignLeft} />
  },
  {
    label:'Align Center',
    style: "align-center",
    icon: <FontAwesomeIcon icon={faAlignCenter} />
  },
  {
    label:'Align Right',
    style: "align-right",
    icon: <FontAwesomeIcon icon={faAlignRight} />
  }
];
