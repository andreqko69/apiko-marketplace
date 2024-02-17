import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import iconMoonConfig from '../../selection.json';

const IconComponent = createIconSetFromIcoMoon(iconMoonConfig);

export enum IconName {
  Edit = 'edit',
  Power = 'power',
  StopCircle = 'stop-circle',
  Trash = 'trash',
  Layers = 'layers',
  Calendar = 'calendar',
  Camera = 'camera',
  Send = 'send',
  DoneAllOutline = 'done-all-outline',
  Check = 'check',
  TrashBold = 'trash-bold',
  Image = 'image',
  StarBold = 'star-bold',
  Star = 'star',
  BxFilter = 'bx-filter',
  X = 'x',
  Search = 'search',
  IcAccessTime = 'ic-access-time',
  Filtring = 'filtring',
  Filter = 'filter',
  PlusCircle = 'plus-circle',
  MessageSquare = 'message-square',
  Menu = 'menu',
  HeartBold = 'heart-bold',
  HomeBold = 'home-bold',
  HeartLight = 'heart-light',
  ArrowLeft = 'arrow-left',
  MapPin = 'map-pin',
  EyeOff = 'eye-off',
  Eye = 'eye',
  ChevronDown = 'chevron-down',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  ChevronUp = 'chevron-up',
  HelpCircle = 'help-circle',
  LogOut = 'log-out',
  FileText = 'file-text',
  Shield = 'shield',
  Key = 'key',
  ShoppingBag = 'shopping-bag',
  User = 'user',
}

const Icon = ({
  name,
  size,
  color,
  onPress,
}: {
  name: IconName;
  size: number;
  color: string;
  onPress?: () => void;
}) => <IconComponent name={name} size={size} color={color} onPress={onPress} />;

export default Icon;
