import * as React from 'react';
import Svg, { Path, Circle, Color } from 'react-native-svg';

export interface SvgProps {
  color?: Color;
  size?: number | undefined;
}

export const CirclePlus = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={12} cy={12} r={9} />
      <Path d="M9 12h6M12 9v6" />
    </Svg>
  );
};

export const Plus = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );
};

export const DarkMode = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M12 3h.393a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z" />
    </Svg>
  );
};

export const Check = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={12} cy={12} r={9} />
      <Path d="M9 12l2 2 4-4" />
    </Svg>
  );
};

export const UnCheck = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={12} cy={12} r={9} />
    </Svg>
  );
};

export const Submit = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M5 12l5 5L20 7" />
    </Svg>
  );
};

export const Delete = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
    </Svg>
  );
};

export const Close = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={12} cy={12} r={9} />
      <Path d="M10 10l4 4m0-4l-4 4" />
    </Svg>
  );
};

export const Subitem = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M6 6v6a3 3 0 003 3h10l-4-4m0 8l4-4" />
    </Svg>
  );
};

export const DueDate = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M11.795 21H5a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v4M18 14v4h4" />
      <Circle cx={18} cy={18} r={4} />
      <Path d="M15 3v4M7 3v4M3 11h16" />
    </Svg>
  );
};

export const TaskCommentary = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 20l1.3-3.9A9 8 0 117.7 19L3 20M12 12v.01M8 12v.01M16 12v.01" />
    </Svg>
  );
};

export const Description = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M4 6h16M4 12h16M4 18h12" />
    </Svg>
  );
};

export const Repeat = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M4 12V9a3 3 0 013-3h13m-3-3l3 3-3 3M20 12v3a3 3 0 01-3 3H4m3 3l-3-3 3-3" />
    </Svg>
  );
};

export const Search = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={10} cy={10} r={7} />
      <Path d="M21 21l-6-6" />
    </Svg>
  );
};

export const Dots = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={12} cy={19} r={1} />
      <Circle cx={12} cy={5} r={1} />
    </Svg>
  );
};

export const Sort = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 9l4-4 4 4M7 5v14M21 15l-4 4-4-4m4 4V5" />
    </Svg>
  );
};

export const Tag = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M11 3l9 9a1.5 1.5 0 010 2l-6 6a1.5 1.5 0 01-2 0l-9-9V7a4 4 0 014-4h4" />
      <Circle cx={9} cy={9} r={2} />
    </Svg>
  );
};

export const AddUp = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M6 15l6-6 6 6" />
    </Svg>
  );
};

export const AddDown = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M6 9l6 6 6-6" />
    </Svg>
  );
};

export const MenuSheet = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color || 'white'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M4 6h16M4 12h16M4 18h16" />
    </Svg>
  );
};
