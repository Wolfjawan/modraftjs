import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignCenter,
  faAlignRight
} from "@fortawesome/free-solid-svg-icons";

export const ALIGN_TYPES = [
  {
    style: "align-left",
    icon: <FontAwesomeIcon icon={faAlignLeft} />
  },
  {
    style: "align-center",
    icon: <FontAwesomeIcon icon={faAlignCenter} />
  },
  {
    style: "align-right",
    icon: <FontAwesomeIcon icon={faAlignRight} />
  }
];
