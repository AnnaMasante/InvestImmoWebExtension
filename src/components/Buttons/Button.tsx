export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
  label: string;
}

const Button = (props: ButtonProps) => {
  const { specialProp, ...rest } = props;
  return (
    <>
      <br />
      <button
        {...rest}
        type="button"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      >
        {props.label}
      </button>
    </>
  );
};
export default Button;
