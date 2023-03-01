export type StandardInputProps = {
    label: string
}

const StandardInput = (props : StandardInputProps) => {
return(
<div>
      <label htmlFor="">{props.label}</label>
      <input
        type="text"
        className="border border-gray-400 block w-full rounded-lg py-2 px-4 focus:border-t-neutral-600"
        placeholder="Write someting"
      />
    </div>
)
}
export default StandardInput