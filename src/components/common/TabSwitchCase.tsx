/**
 * [탭 switch 컴포넌트]
 */

type TabSwitchCasePropsType = {
  value: string | number;
  caseBy: { [key: string]: React.ReactNode };
  defaultComponent?: React.ReactNode;
};

export default function SwitchCase({
  value,
  caseBy,
  defaultComponent = null,
}: TabSwitchCasePropsType) {
  return caseBy[value] || defaultComponent;
}
