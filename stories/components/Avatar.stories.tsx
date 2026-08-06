import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, AvatarGroup } from "@/components/ui/Avatar";

const IMG = "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311";
const RECOMMENDATION_AVATAR = `${IMG}/6655cd0f57bd4caa0225f8fa_gin.jpeg`;
const TEAM_AVATARS = [
  `${IMG}/6655cd0f57bd4caa0225f8fa_gin.jpeg`,
  `${IMG}/6655cd0f53afb0a89a48ef3c_yaling.jpeg`,
  `${IMG}/6655cd0fdc0760515e3fc2eb_drew.jpeg`,
  `${IMG}/6655cd0f177e5e46999f77a4_dilasha.jpeg`,
  `${IMG}/6655cd10059721292ac9288e_david.jpeg`,
];

const meta = {
  title: "Components/Avatar",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => <Avatar src={RECOMMENDATION_AVATAR} alt="Gin Atkins" size={48} />,
};

export const Group: Story = {
  render: () => (
    <div className="bg-cream p-6">
      <AvatarGroup avatars={TEAM_AVATARS} />
    </div>
  ),
};
