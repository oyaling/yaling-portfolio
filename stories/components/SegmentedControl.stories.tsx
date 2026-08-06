import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SegmentedControl } from "@/components/ui/SegmentedControl";

const meta = {
  title: "Components/SegmentedControl",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguageSwitcher: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState("en");
      return (
        <SegmentedControl
          value={value}
          onChange={setValue}
          options={[
            { value: "en", label: "EN" },
            { value: "zh-Hant", label: "繁中" },
          ]}
        />
      );
    }
    return <Demo />;
  },
};
