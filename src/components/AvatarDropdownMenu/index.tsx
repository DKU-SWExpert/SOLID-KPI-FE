import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import Avatar from "@components/Avatar";
import { avatarMenuItems } from "@/config/avatarMenuItems";

const AvatarDropdownMenu = () => {
  return (
    <CDropdown>
      <CDropdownToggle className="p-0" caret={false} color="transparent">
        <Avatar />
      </CDropdownToggle>
      <CDropdownMenu className="bg-dawn-light">
        {avatarMenuItems.map((item, index) => (
          <CDropdownItem
            key={index}
            href={item.href}
            className={`${item.className} text-white selectable`}
          >
            {item.label}
          </CDropdownItem>
        ))}
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AvatarDropdownMenu;
