interface TabButtonProp {
  children: string;
}

const TabButton: React.FC<TabButtonProp> = ({ children }) => {
  return (
    <li>
      <button type="button">{children}</button>
    </li>
  );
};

export default TabButton;
