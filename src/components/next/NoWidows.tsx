"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ORPHAN_PATTERN = /(^|[\s([{"'„«])([aiouwzAIUOWZ])\s+/g;
const SKIPPED_TAGS = new Set(["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "CODE", "PRE"]);

function fixTextNode(node: Text) {
  const value = node.nodeValue;

  if (!value || !/[ aiouwzAIUOWZ]\s/.test(value)) {
    return;
  }

  const fixed = value.replace(ORPHAN_PATTERN, "$1$2\u00a0");

  if (fixed !== value) {
    node.nodeValue = fixed;
  }
}

function fixOrphans(root: ParentNode = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!parent || SKIPPED_TAGS.has(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let current = walker.nextNode();

  while (current) {
    fixTextNode(current as Text);
    current = walker.nextNode();
  }
}

export function NoWidows() {
  const pathname = usePathname();

  useEffect(() => {
    fixOrphans();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            fixTextNode(node as Text);
          }

          if (node.nodeType === Node.ELEMENT_NODE) {
            fixOrphans(node as Element);
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
