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
    label: "Bold",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />
  },
  {
    label: "Italic",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <FontAwesomeIcon icon={faUnderline} />
  },
  {
    label: "Strike through",
    style: "STRIKETHROUGH",
    icon: <FontAwesomeIcon icon={faStrikethrough} />
  },
  {
    label: "Code",
    style: "CODE",
    icon: <FontAwesomeIcon icon={faCode} />
  }
];
