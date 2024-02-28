import { Code } from "@/app/types";

const Callbacks = {
  newTab: (tabs: Code[], onChange: (result: Code[]) => void) => {
    const result = tabs.map((item) => {
      item.isActive = false;
      return item;
    });

    // Add new
    result.push({
      isActive: true,
      name: "Untitled",
      language: "plaintext",
      content: "Type your code here.\n",
    });

    onChange(result);
  },
  removeTab: (
    tabs: Code[],
    target: Code,
    onChange: (result: Code[]) => void,
  ) => {
    const result = tabs
      .map((i, index) => {
        i.isActive = false;

        if (index === tabs.length - 1) {
          i.isActive = true;
        }

        return i;
      })
      .filter((tab) => tab !== target);

    onChange(result);
  },
  renameTab: (
    tabs: Code[],
    target: Code,
    newName: string,
    onChange: (result: Code[], active: Code) => void,
  ) => {
    const temp = tabs.map((i) => {
      if (i === target) {
        i.name = newName;
      }

      return i;
    });

    onChange(temp, target);
  },
  switchTab: (
    tabs: Code[],
    target: Code,
    onChange: (result: Code[]) => void,
  ) => {
    // Deactivate all tabs
    const temp = tabs.map((i) => {
      if (i === target) {
        i.isActive = true;
      } else {
        i.isActive = false;
      }

      return i;
    });

    onChange(temp);
  },
};

export default Callbacks;
