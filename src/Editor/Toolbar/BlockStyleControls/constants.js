import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faLaptopCode,
  faListUl,
  faListOl
} from "@fortawesome/free-solid-svg-icons";

export const BLOCK_TYPES = [
  {
    label: "Blockquote",
    style: "blockquote",
    icon: <FontAwesomeIcon icon={faQuoteLeft} />
  },
  {
    label: "UL",
    style: "unordered-list-item",
    icon: <FontAwesomeIcon icon={faListUl} />
  },
  {
    label: "OL",
    style: "ordered-list-item",
    icon: <FontAwesomeIcon icon={faListOl} />
  },
  {
    label: "Code Block",
    style: "code-block",
    icon: <FontAwesomeIcon icon={faLaptopCode} />
  }
];
export const BLOCK_TYPES_HEADERS = [
  { label: "Heading 1", style: "header-one" },
  { label: "Heading 2", style: "header-two" },
  {
    label: "Heading 3",
    style: "header-three"
  },
  {
    label: "Heading 4",
    style: "header-four"
  },
  {
    label: "Heading 5",
    style: "header-five"
  },
  { label: "Heading 6", style: "header-six" }
];