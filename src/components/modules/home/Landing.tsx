import { Input } from "@nextui-org/input";

import { SearchIcon } from "../../icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function Landing() {
  const { register, handleSubmit,  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  };
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
            }
            type="text"
          />
          </div>
        </form>
      </div>
    </div>
  );
}
