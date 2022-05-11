import React, { useState } from "react";
import { MoreIcon } from "@pancakeswap/uikit";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { BottomNavProps } from "./types";
import { NotificationDot } from "../NotificationDot";

const BottomNav: React.FC<BottomNavProps> = ({ items = [], activeItem = "", ...props }) => {
  const [menuOpenByIndex, setMenuOpenByIndex] = useState({});
  const isBottomMenuOpen = Object.values(menuOpenByIndex).reduce((acc, value) => acc || value, false);
  return (
    <>
      {isBottomMenuOpen}
      <StyledBottomNav justifyContent="space-around" {...props}>
        {items.map(({ label, items: menuItems, href, icon, showOnMobile = true, showItemsOnMobile = true }, index) => {
          const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
          return (
            showOnMobile && (
              <DropdownMenu
                key={href}
                label={label}
                items={menuItems}
                isBottomNav
                activeItem={activeItem}
                showItemsOnMobile={showItemsOnMobile}
                setMenuOpenByIndex={setMenuOpenByIndex}
                index={index}
              >
                <Box>
                  <BottomNavItem href={href} label={label} icon={icon} />
                </Box>
              </DropdownMenu>
            )
          );
        })}
      </StyledBottomNav>
    </>
  );
};

export default BottomNav;
