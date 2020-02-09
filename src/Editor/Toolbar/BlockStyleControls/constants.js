import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faListOl } from "@fortawesome/free-solid-svg-icons";

export const BLOCK_TYPES = [
  {
    label: "Unordered List",
    style: "unordered-list-item",
    icon: <FontAwesomeIcon icon={faListUl} />
  },
  {
    label: "Ordered List",
    style: "ordered-list-item",
    icon: <FontAwesomeIcon icon={faListOl} />
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
  { label: "Heading 6", style: "header-six" },
  {
    label: "Code Block",
    style: "code-block"
  },
  {
    label: "Block Quote",
    style: "blockquote"
  }
];
