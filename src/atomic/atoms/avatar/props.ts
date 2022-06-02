export interface AvatarProps {
  withHoverPopover?: boolean;
  url?: string;
  optionsPopover?: [{
    label: string;
    path: string;
  }];
}