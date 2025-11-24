function LayoutSwitcher({ isSwitch, setIsSwitch }) {
  return <button onClick={() => setIsSwitch(!isSwitch)}>Layout Switcher</button>;
}

export default LayoutSwitcher;
