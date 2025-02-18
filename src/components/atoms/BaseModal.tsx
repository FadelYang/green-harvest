import { BaseModalProps } from "../../types/types";

const BaseModal = (props: BaseModalProps) => {
  const { children } = props;
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center xl:m-0 m-4">
        <div className={`bg-white rounded-lg shadow`}>{children}</div>
      </div>
    </>
  );
};

export default BaseModal;
