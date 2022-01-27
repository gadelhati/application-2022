import React from 'react';
import { styled } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';

export const Toolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  padding: 10,
  width: '100%',
  minWidth: 'max-content',
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  all: 'unset',
  flex: '0 0 auto',
  color: mauve.mauve11,
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: violet.violet3, color: violet.violet11 },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${violet.violet7}` },
};

export const Button = styled(
  ToolbarPrimitive.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    backgroundColor: violet.violet9,
  },
  { '&:hover': { color: 'white', backgroundColor: violet.violet10 } }
);

export const Link = styled(
  ToolbarPrimitive.Link,
  {
    ...itemStyles,
    backgroundColor: 'transparent',
    color: mauve.mauve11,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } }
);

export const Separator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  backgroundColor: mauve.mauve6,
  margin: '0 10px',
});

export const ToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: 'inline-flex',
  borderRadius: 4,
});

export const ToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...itemStyles,
  boxShadow: 0,
  backgroundColor: 'white',
  marginLeft: 2,
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': { backgroundColor: violet.violet5, color: violet.violet11 },
});

const ToolbarDemo = () => (
  <Toolbar aria-label="Formatting options">
    <ToggleGroup type="multiple" aria-label="Text formatting">
      <ToggleItem value="bold" aria-label="Bold">
        <FontBoldIcon />
      </ToggleItem>
      <ToggleItem value="italic" aria-label="Italic">
        <FontItalicIcon />
      </ToggleItem>
      <ToggleItem value="strikethrough" aria-label="Strike through">
        <StrikethroughIcon />
      </ToggleItem>
    </ToggleGroup>
    <Separator />
    <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
      <ToggleItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToggleItem>
      <ToggleItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToggleItem>
      <ToggleItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToggleItem>
    </ToggleGroup>
    <Separator />
    <Link href="#" target="_blank" css={{ marginRight: 10 }}>Edited 2 hours ago</Link>
    <Button css={{ marginLeft: 'auto' }}>Share</Button>
  </Toolbar>
);

export default ToolbarDemo;