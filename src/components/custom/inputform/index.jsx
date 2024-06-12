import { Input } from "@/components/ui/input"

const InputForm = (({ id, title, containerClassName = "", children, ...props }) => {
    return (
        <div className={`${containerClassName} space-y-1 [&_*]:w-full`}>
            <label className="select-none flex gap-1" htmlFor={id}>
                {title}
            </label>
            {children ? children : <Input id={id} {...props} />}
        </div>
    )
})

export { InputForm }
