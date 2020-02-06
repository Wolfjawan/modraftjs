import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faUnderline,
  faItalic,
  faCode,
  faStrikethrough
} from "@fortawesome/free-solid-svg-icons";

export const INLINE_STYLES = [
  {
    label: "B",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />
  },
  {
    label: "I",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />
  },
  {
    label: "U",
    style: "UNDERLINE",
    icon: <FontAwesomeIcon icon={faUnderline} />
  },
  {
    label: "s",
    style: "STRIKETHROUGH",
    icon: <FontAwesomeIcon icon={faStrikethrough} />
  },
  {
    label: "C",
    style: "CODE",
    icon: <FontAwesomeIcon icon={faCode} />
  }
];
