import React, { useState } from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav, { StyledOverlay } from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { BottomNavProps } from "./types";

const BottomNav: React.FC<BottomNavProps> = ({ items = [], activeItem = "", activeSubItem = "", ...props }) => {
  const [menuOpenByIndex, setMenuOpenByIndex] = useState({});
  const isBottomMenuOpen = Object.values(menuOpenByIndex).reduce((acc, value) => acc || value, false);
  return (
    <>
      {isBottomMenuOpen && <StyledOverlay />}
      <StyledBottomNav justifyContent="space-around" {...props}>
        {items.map(({ label, items: menuItems, href, icon, showOnMobile = true, showItemsOnMobile = true }, index) => {
          return (
            showOnMobile && (
              <DropdownMenu
                key={label}
                items={menuItems}
                isBottomNav
                activeItem={activeSubItem}
                showItemsOnMobile={showItemsOnMobile}
                setMenuOpenByIndex={setMenuOpenByIndex}
                index={index}
              >
                <Box>
                  <BottomNavItem
                    href={href}
                    isActive={href === activeItem}
                    label={label}
                    iconName={icon}
                    showItemsOnMobile={showItemsOnMobile}
                  />
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
